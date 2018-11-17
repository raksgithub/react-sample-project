import React from 'react';

class CurrentTime extends React.Component {
    state = { time: new Date().toLocaleTimeString() }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                time: new Date().toLocaleTimeString()
            });
        }, 1000)
    }

    render() {
        return (
            <div>Current time: { this.state.time }</div>
        );
    }
}

export default CurrentTime;