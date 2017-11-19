import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class LatestPosts extends Component {

    render() {
        return (
            <section className="content-block latest-posts-block mdc-layout-grid" id="latest-posts">
                <div className="mdc-layout-grid__inner">
                    <h2 className="latest-posts-block--title heading-line heading-line--secondary">{'Latest posts'}</h2>


                </div>
            </section>
        );
    }
}

export default LatestPosts;