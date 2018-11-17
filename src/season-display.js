import React from 'react';
import './season-display.css';

import CurrentTime from './current-time';

class SeasonDisplay extends React.Component {

    getSeason(lat, month) {
        if(month > 2 && month < 9) {
            return lat > 0 ? 'Summer' : 'Winter';
        } else {
            return lat > 0 ? 'Winter' : 'Summer';
        }
    }
    seasonConfig = {
        Winter: {
            message: "Oh It's very chilly!",
            iconName: "snowflake"
        },
        Summer: {
            message: "We've gotta go to the beach!",
            iconName: "sun"
        }
    }
    render() {
        const season = this.getSeason(this.props.lat, new Date().getMonth());
        const { message, iconName } = this.seasonConfig[season];
        //console.log(season);
        return (
            <div className={ `season-display ${season}` }>
                {/* <div>
                    <h4>User Position</h4>
                    <p>Latitude: { this.props.lat }, Longitude: { this.props.long }</p>
                </div>
                <div>
                    <h4>Time Taken</h4>
                    <p>Timestamp: { this.props.time }</p>
                </div> */}
                <i className={`icon-left massive ${iconName} icon`}></i>
                <h1>{ message }</h1>
                <div>
                    <strong><CurrentTime /></strong>
                </div>
                <i className={`icon-right massive ${iconName} icon`}></i>
            </div>
        );
    }
}
export default SeasonDisplay;