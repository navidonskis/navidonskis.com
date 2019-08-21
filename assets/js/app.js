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

function Components () {
  const { ownedProjects, recentProjects } = window.app;

  return {
    /**
     * Initialize mobile menu component
     */
    mobileNavigation: function() {
      const activeClass = 'navigation--open';
      const container = document.querySelector('*[data-component="top-navigation"]');

      if (container) {
        const handler = container.querySelector('.navigation--button');

        if (handler) {
          handler.addEventListener('click', function () {
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
    openSource: function () {
      const container = document.querySelector('*[data-component="fetch-open-source"]');

      if (container) {
        // list-projects__item
        ownedProjects.map(function (item, index) {
          const listElement = document.createElement('li');
          const linkElement = document.createElement('a');

          listElement.className = 'list-projects__item';
          listElement.id = `list-projects__item-${index}`;

          linkElement.href = item.html_url;
          linkElement.target = "_blank";
          linkElement.text = item.name;

          listElement.appendChild(linkElement);

          if (item.description) {
            const descriptionElement = document.createElement('span');
            descriptionElement.className = 'list-projects__item--desc';
            descriptionElement.textContent = ` - ${item.description}`;

            listElement.appendChild(descriptionElement);
          }

          container.appendChild(listElement);
        });

        return container;
      }
    },
    recentProjects: function () {
      const container = document.querySelector('*[data-component="fetch-recent-projects"]');

      if (container) {
        // list-projects__item
        recentProjects.map(function (item, index) {
          const listElement = document.createElement('li');
          const linkElement = document.createElement('a');

          listElement.className = 'list-projects__item';
          listElement.id = `list-projects__item-${index}`;

          linkElement.href = item.html_url;
          linkElement.target = "_blank";
          linkElement.text = item.name;

          listElement.appendChild(linkElement);

          if (item.description) {
            const descriptionElement = document.createElement('span');
            descriptionElement.className = 'list-projects__item--desc';
            descriptionElement.textContent = ` - ${item.description}`;

            listElement.appendChild(descriptionElement);
          }

          container.appendChild(listElement);
        });

        return container;
      }
    }
  };
}

// getMapGithubProjects (title = '', list = []) {
//   return (
//     <section className="list-projects">
//     <h2>{title}</h2>
//
//     <ul className="list-projects__container">
//     {list.map((repo, index) => (
//         <li className="list-projects__item" key={index}>
//       <a href={repo.html_url} target="_blank">{repo.name}</a>
//   {repo.description && (<span className="list-projects__item--desc"> - {repo.description}</span>)}
//     </li>
//   ))}
// </ul>
//   </section>
// );
// }

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

async function RecentProjects () {
  const session = window.sessionStorage;
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

async function OwnedProjects () {
  const session = window.sessionStorage;
  const cachedRecentProjects = session.getItem('open-source');

  if (cachedRecentProjects) {
    return JSON.parse(cachedRecentProjects);
  }

  const navidonskisAccRepos = await fetchGithubAPI('users/navidonskis/repos');
  const qenvAccRepos = await fetchGithubAPI('users/qenv/repos');
  const filteredRepos = [...navidonskisAccRepos, ...qenvAccRepos].filter(function (item) {
    return false === item.fork && item;
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
  window.sessionStorage = typeof window.sessionStorage ? window.sessionStorage : new LocalStorage();
  // define an app object
  window.app = {};
  window.app.recentProjects = await RecentProjects();
  window.app.ownedProjects = await OwnedProjects();
  window.app.components = [
    new Components().mobileNavigation(),
    new Components().openSource(),
    new Components().recentProjects(),
  ];
})();
