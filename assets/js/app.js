'use strict';

/**
 * did element has class name
 *
 * @param element
 * @param className
 * @returns {boolean}
 */
function hasClass (element, className) {
  return element.classList
    ? element.classList.contains(className)
    : new RegExp(`\\b${className}\\b`).test(element.className);
}

/**
 * add class to the element
 *
 * @param element
 * @param className
 */
function addClass (element, className) {
  if (element.classList) {
    element.classList.add(className);
  } else if (!this.hasClass(element, className)) {
    element.className += `${className}`;
  }
}

/**
 * remove class from the element
 *
 * @param element
 * @param className
 */
function removeClass (element, className) {
  if (element.classList) {
    element.classList.remove(className);
  } else {
    element.className = element.className.replace(
      new RegExp(`\\b${className}\\b`, 'g'),
      ''
    );
  }
}

/**
 * create element by passing options
 *
 * @param {string} tagName
 * @param {object} options
 *
 * @return {HTMLElement}
 */
function createElement (tagName, options = {}) {
  const element = document.createElement(tagName);

  for (let key in options) {
    element[key] = options[key];
  }

  return element;
}

/**
 * Render items as HTML DOM elements
 *
 * @param {object} item
 * @param {int} index
 * @param {HTMLElement} container
 *
 * @constructor
 */
function CreateListItemAndAppendToContainer (item, index, container) {
  const listElement = createElement('li', {
    className: 'list-projects__item',
    id: `list-projects__item-${index}`
  });

  const linkElement = createElement('a', {
    href: item.html_url,
    target: '_blank',
    text: item.name
  });

  listElement.appendChild(linkElement);

  if (item.description) {
    const descriptionElement = createElement('span', {
      className: 'list-projects__item--desc',
      textContent: ` - ${item.description}`
    });

    listElement.appendChild(descriptionElement);
  }

  container.appendChild(listElement);
}

function Components () {
  const { ownedProjects, recentProjects } = window.app;

  return {

    /**
     * Initialize mobile menu component
     *
     * @return {Element}
     */
    mobileNavigation: () => {
      const activeClass = 'navigation--open';
      const container = document.querySelector('*[data-component="top-navigation"]');

      if (container) {
        const handler = container.querySelector('.navigation--button');

        if (handler) {
          handler.addEventListener('click', () => {
            if (hasClass(container, activeClass)) {
              removeClass(container, activeClass);
            } else {
              addClass(container, activeClass);
            }
          });
        }

        return container;
      }
    },

    /**
     * Render Open Source Github projects to the HTML list
     *
     * @return {Element}
     */
    openSource: () => {
      const container = document.querySelector('*[data-component="fetch-open-source"]');

      if (container) {
        ownedProjects.map((item, index) => new CreateListItemAndAppendToContainer(item, index, container));

        return container;
      }
    },

    /**
     * Render Recent Starred Github projects to the HTML list
     *
     * @return {Element}
     */
    recentProjects: () => {
      const container = document.querySelector('*[data-component="fetch-recent-projects"]');

      if (container) {
        recentProjects.map((item, index) => new CreateListItemAndAppendToContainer(item, index, container));

        return container;
      }
    }
  };
}

/**
 * polyfill of localStorage
 *
 * @return {{_data: {}, removeItem: (function(*): boolean), clear: (function(): {}), getItem: (function(*): *), setItem: (function(*, *): *)}}
 * @constructor
 */
function LocalStorage () {
  return {
    _data: {},

    setItem: function (id, val) {
      return this._data[id] = val;
    },

    getItem: function (id) {
      return this._data[id];
    },

    removeItem: function (id) {
      return delete this._data[id];
    },

    clear: function () {
      return this._data = {};
    }
  };
}

async function fetchGithubAPI (endpoint) {
  const response = await fetch(`https://api.github.com/${endpoint}`);

  return await response.json();
}

async function RecentProjects (session) {
  const cachedRecentProjects = session.getItem('stars');

  if (cachedRecentProjects) {
    return JSON.parse(cachedRecentProjects);
  }

  const result = await fetchGithubAPI('users/doniz/starred');
  const list = [];

  for (let i = 0; i < result.length; i++) {
    const {name,description,html_url} = result[i];

    list.push({name,description,html_url});
  }

  session.setItem('stars', JSON.stringify(list));

  return list;
}

async function OwnedProjects (session) {
  const cachedRecentProjects = session.getItem('open-source');

  if (cachedRecentProjects) {
    return JSON.parse(cachedRecentProjects);
  }

  const navidonskisAccRepos = await fetchGithubAPI('users/navidonskis/repos');
  const qenvAccRepos = await fetchGithubAPI('users/qenv/repos');
  const filteredRepos = [...navidonskisAccRepos, ...qenvAccRepos].filter(function (item) {
    return false === item['fork'];
  });
  const list = [];

  for (let i = 0; i < filteredRepos.length; i++) {
    const {name,description,html_url} = filteredRepos[i];

    list.push({name,description,html_url});
  }

  session.setItem('open-source', JSON.stringify(list));

  return list;
}

(async function () {
  // polyfill of localStorage
  const session = typeof window.sessionStorage ? window.sessionStorage : new LocalStorage();
  // define an app object
  window.app = {};
  window.app.recentProjects = await RecentProjects(session);
  window.app.ownedProjects = await OwnedProjects(session);
  window.app.components = [
    new Components().mobileNavigation(),
    new Components().openSource(),
    new Components().recentProjects(),
  ];
})();
