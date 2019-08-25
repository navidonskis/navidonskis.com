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
    : new RegExp('\\b' + className + '\\b').test(element.className);
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
    element.className += ' ' + className;
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
      new RegExp('\\b' + className + '\\b', 'g'),
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
function createElement (tagName, options) {
  var element = document.createElement(tagName);

  for (var key in options) {
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
 */
function CreateListItemAndAppendToContainer (item, index, container) {
  var listElement = createElement('li', {
    className: 'list-projects__item',
    id: 'list-projects__item-' + index
  });

  var linkElement = createElement('a', {
    href: item.html_url,
    target: '_blank',
    text: item.name
  });

  listElement.appendChild(linkElement);

  if (item.description) {
    var descriptionElement = createElement('span', {
      className: 'list-projects__item--desc',
      textContent: ' - ' + item.description
    });

    listElement.appendChild(descriptionElement);
  }

  container.appendChild(listElement);
}

function Components () {
  var ownedProjects = window.app.ownedProjects;
  var recentProjects = window.app.recentProjects;

  return {

    /**
     * Initialize mobile menu component
     *
     * @return {Element}
     */
    mobileNavigation: function () {
      var activeClass = 'navigation--open';
      var container = document.querySelector('*[data-component="top-navigation"]');

      if (container) {
        var handler = container.querySelector('.navigation--button');

        if (handler) {
          handler.addEventListener('click', function() {
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
    openSource: function () {
      var container = document.querySelector('*[data-component="fetch-open-source"]');

      if (container) {
        ownedProjects.map(function (item, index) {
          return new CreateListItemAndAppendToContainer(item, index, container);
        });

        return container;
      }
    },

    /**
     * Render Recent Starred Github projects to the HTML list
     *
     * @return {Element}
     */
    recentProjects: function () {
      var container = document.querySelector('*[data-component="fetch-recent-projects"]');

      if (container) {
        recentProjects.map(function (item, index) {
          return new CreateListItemAndAppendToContainer(item, index, container);
        });

        return container;
      }
    }
  };
}

/**
 * polyfill of localStorage
 *
 * @return {{_data: {}, removeItem: (function(*): boolean), clear: (function(): {}), getItem: (function(*): *), setItem: (function(*, *): *)}}
 * @varructor
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
  var response = await fetch('https://api.github.com/' + endpoint);

  return await response.json();
}

async function RecentProjects (session) {
  var cachedRecentProjects = session.getItem('stars');

  if (cachedRecentProjects) {
    return JSON.parse(cachedRecentProjects);
  }

  var result = await fetchGithubAPI('users/doniz/starred');
  var list = [];

  for (var i = 0; i < result.length; i++) {
    var {name,description,html_url} = result[i];

    list.push({name,description,html_url});
  }

  session.setItem('stars', JSON.stringify(list));

  return list;
}

async function OwnedProjects (session) {
  var cachedRecentProjects = session.getItem('open-source');

  if (cachedRecentProjects) {
    return JSON.parse(cachedRecentProjects);
  }

  var navidonskisAccRepos = await fetchGithubAPI('users/navidonskis/repos');
  var qenvAccRepos = await fetchGithubAPI('users/qenv/repos');
  var filteredRepos = [...navidonskisAccRepos, ...qenvAccRepos].filter(function (item) {
    return false === item['fork'];
  });
  var list = [];

  for (var i = 0; i < filteredRepos.length; i++) {
    var {name,description,html_url} = filteredRepos[i];

    list.push({name,description,html_url});
  }

  session.setItem('open-source', JSON.stringify(list));

  return list;
}

(async function () {
  // polyfill of localStorage
  var session = typeof window.sessionStorage ? window.sessionStorage : new LocalStorage();
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
