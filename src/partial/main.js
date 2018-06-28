import React, {Component} from 'react';

class Main extends Component {

    render() {
        return (
            <main className="main">
                <div className="main__layout">
                    <div className="main__container">{this.props.children}</div>
                </div>
            </main>
        );
    }
}

export default Main;
