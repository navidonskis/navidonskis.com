import React, {Component} from 'react';
import {withScriptjs, withGoogleMap, GoogleMap} from "react-google-maps"
import mapsStyles from './maps.styles.json';

class CurrentPlace extends Component {

    constructor(props) {
        super(props);

        this.state = {
            link: this.props.link || null,
            city: this.props.city || 'Vilnius',
            country: this.props.country || 'Lithuania',
            googleMapKey: 'AIzaSyDxxj3YKFpifdlYP1ImXZTm9rCwwHoqcnU',
            zoomLevel: this.props.zoomLevel || 13,
            coordinates: this.props.coordinates || {lat: 54.6903488, lng: 25.2550229},
            height: this.props.height || 200
        };
    }

    render() {
        const CurrentLocated = () => {
            if (null === this.state.link) {
                return (
                    <p>Currently located in <span>{this.state.city}</span> {this.state.country}</p>
                );
            }

            return (
                <p>Currently located in
                    <a href={this.state.link} target="_blank">
                        <span>{this.state.city}</span>
                    </a>
                    {this.state.country}
                </p>
            );
        };
        const MAP = withScriptjs(withGoogleMap((props) => {
            return (
                <GoogleMap
                    defaultZoom={this.state.zoomLevel}
                    defaultCenter={this.state.coordinates}
                    defaultOptions={{styles: mapsStyles}}
                />
            );
        }));

        return (
            <section className="content-block current-place" id={this.props.id}>
                <div className="current-place__container">
                    <div className="mdc-layout-grid">
                        <div className="mdc-layout-grid__inner">
                            <div className="mdc-layout-grid__cell mdc-layout-grid__cell--span-2"></div>
                            <div className="mdc-layout-grid__cell mdc-layout-grid__cell--span-8">
                                {CurrentLocated()}
                            </div>
                        </div>
                    </div>
                </div>

                <MAP
                    googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${this.state.googleMapKey}&v=3.exp`}
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `${this.state.height}px` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                />
            </section>
        );
    }
}

export default CurrentPlace;