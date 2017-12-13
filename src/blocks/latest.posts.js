import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class LatestPosts extends Component {

    render() {
        return (
            <section className="content-block latest-posts mdc-layout-grid" id="latest-posts">
                <div className="latest-posts__container">
                    <div className="mdc-layout-grid__inner">
                        <h2 className="latest-posts--title heading-line heading-line--secondary">{'Latest posts'}</h2>


                    </div>
                </div>
            </section>
        );
    }
}

export default LatestPosts;