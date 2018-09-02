import React, { Component } from 'react'
import { withRouteData } from 'react-static'
import convert from 'htmr'
import Layout from './Layout';
import bgImage from '../assets/bg-02.jpg';

class About extends Component {
  constructor (props) {
    super(props);

    this.state = {
      stars: [],
      openSource: []
    };
  }

  githubFetch (endpoint = '') {
    const uri = 'https://api.github.com';

    return fetch(`${uri}/${endpoint}`).then(res => res.json());
  }

  fetchStarredProjects () {
    const starsCached = localStorage.getItem('stars');

    if (starsCached) {
      this.setState({ stars: JSON.parse(starsCached) });
      return;
    }

    this.githubFetch('users/doniz/starred').then((result) => {
      localStorage.setItem('stars', JSON.stringify(list));
      this.setState({ stars: result })
    });
  }

  fetchOSProjects () {
    const osCached = localStorage.getItem('open-source');

    if (osCached) {
      this.setState({ stars: JSON.parse(osCached) });
      return;
    }

    this.githubFetch('users/navidonskis/repos').then((result) => {
      let list = result.filter((item) => false === item.fork && item);
      // fetch from other groups
      this.githubFetch('users/qenv/repos').then((result) => {
        list = [...list, ...result.filter((item) => false === item.fork && item)];

        localStorage.setItem('open-source', JSON.stringify(list));
        this.setState({ openSource: list });
      });
    });
  }

  componentDidMount () {
    this.fetchStarredProjects();
    this.fetchOSProjects();
  }

  getMapGithubProjects (title = '', list = []) {
    return (
      <section className="list-projects">
        <h2>{title}</h2>

        <ul className="list-projects__container">
          {list.map((repo, index) => (
            <li className="list-projects__item" key={index}>
              <a href={repo.html_url} target="_blank">{repo.name}</a>
              {repo.description && (<span className="list-projects__item--desc"> - {repo.description}</span>)}
            </li>
          ))}
        </ul>
      </section>
    );
  }

  render () {
    const { title, description, contents } = this.props.about;

    return (
      <Layout head={{ title, description }} bg={bgImage} className="layout about">
        {convert(contents)}

        {this.getMapGithubProjects('Open Source Projects', this.state.openSource)}
        {this.getMapGithubProjects('Recent Starred Projects', this.state.stars)}
      </Layout>
    );
  }
}

export default withRouteData(About);
