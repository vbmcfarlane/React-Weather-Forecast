import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';


class WeatherList extends Component {

    renderWeather(cityData) {
    console.log(cityData);
     const name = cityData.city.name;
     const id = cityData.city.id;
    // const {name, id} = cityData.city;
    const temps = _.map(cityData.list.map(weather => weather.main.temp), (temp) => ((9/5) * (temp - 273 )) + 32);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);
    // const {temps, pressures, humidities} = cityData.list.map(weather => weather.main);
    const {lon, lat }  = cityData.city.coord;
     

     

        return (
            <tr key={id}> 
                <td><GoogleMap lon={lon} lat={lat}/>  </td>
                <td><Chart data={temps} color="red" units="F (avg)" /></td>
                <td><Chart data={pressures} color="green" units="hPa (avg)" /></td>
                <td><Chart data={humidities} color="blue" units="% (avg)"/></td>
            </tr>
        );

    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr> 
                        <th>City</th>
                        <th>Temperature (F)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                    <tbody>
                        {this.props.weather.map(this.renderWeather)}
                    </tbody>
            </table>
        );
    }
}

function mapStateToProps({weather}) {
    return { weather };
}
export default connect (mapStateToProps)(WeatherList);