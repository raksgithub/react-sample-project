import React from 'react';
import ReactDOM from 'react-dom';


import SeasonDisplay from './season-display';
import Loader from './loading';

class App extends React.Component {
    constructor(props) {
        // Must invoke super() function
        super(props);
        // This is state of AppComponent
        this.state = { latitude: null, longitude: null, timestamp: null, errorMsg: null };
    }

    // Lifecycle hooks or methods 
    componentDidMount() {
        console.log("App Component has been rendered in the screen!");
        window.navigator.geolocation.getCurrentPosition(
            position => {
                // state can only be updated by setState() function
                this.setState({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    timestamp: position.timestamp
                })
            },
            err => {
                this.setState({
                    errorMsg: err.message
                });
            }
        );
    }


    componentDidUpdate() {
        console.log("App Component rerendered on the screen!");
    }

    // componentWillUnmount() {
    //     console.log('Component has been unmounted');
    // }

    renderContent() {
        if(this.state.latitude) {
            return(
                <div>
                    <SeasonDisplay lat={ this.state.latitude } long={ this.state.longitude } time={ this.state.timestamp } />
                </div>
            );
        }
        if(this.state.errorMsg) {
            return (
                <h4>Error: { this.state.errorMsg }</h4>
            );
        }
        return (
            <Loader message="Please allow your location sharing"/>
        );
    }

    render() {
        return (
            <div className="container-fluid">
                { this.renderContent() }
            </div>
        );
    };
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
//serviceWorker.unregister();
