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
 */
function CreateListItemAndAppendToContainer (item, index, container) {
  const listElement = createElement('li', {
    className: 'list-projects__item',
    id: 'list-projects__item-' + index
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
      textContent: ' - ' + item.description
    });

    listElement.appendChild(descriptionElement);
  }

  container.appendChild(listElement);
}

function Components () {
  const { repositories, favorites } = window.app;

  return {

    /**
     * Initialize mobile menu component
     *
     * @return {Element}
     */
    mobileNavigation: function () {
      const activeClass = 'navigation--open';
      const container = document.querySelector('*[data-component="top-navigation"]');

      if (container) {
        const handler = container.querySelector('.navigation--button');

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
    repositories: function () {
      const container = document.querySelector('*[data-component="repositories"]');

      if (container) {
        repositories.map(function (item, index) {
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
    favorites: function () {
      const container = document.querySelector('*[data-component="favorites"]');

      if (container) {
        favorites.map(function (item, index) {
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
 * @constructor
 */
function LocalStorage () {
  return {
    _data: {},
    setItem: (id, val) => this._data[id] = val,
    getItem: (id) => this._data[id],
    removeItem: (id) => delete this._data[id],
    clear: () => this._data = {}
  };
}

/**
 * Request an API for third-party services
 *
 * @param {String} endpoint
 * @param {Object} storage
 * @return {Promise<*>}
 *
 * @constructor
 */
async function API (endpoint, storage) {
  const url = 'https://api.navidonskis.com';
  const cachedEndpointRequest = storage.getItem(endpoint);
  const requestApi = async (endpoint) => {
    const response = await fetch(`${url}/${endpoint}`);
    const contentJson = await response.json();

    if (contentJson.status === 200) {
      return contentJson.body;
    }

    return {};
  };

  if (cachedEndpointRequest) {
    return JSON.parse(cachedEndpointRequest);
  }

  const response = await requestApi(endpoint);

  storage.setItem(endpoint, JSON.stringify(response));

  return response;
}

(async function () {
  // polyfill of localStorage
  const storage = typeof window.sessionStorage ? window.sessionStorage : new LocalStorage();
  // define an app object
  window.app = {};
  window.app.repositories = await API('github/repositories', storage);
  window.app.favorites = await API('github/favorites', storage);
  window.app.activities = await API('strava/activities', storage);
  window.app.components = [
    new Components().mobileNavigation(),
    new Components().repositories(),
    new Components().favorites(),
  ];
})();
