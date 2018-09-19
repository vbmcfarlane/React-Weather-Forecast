import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import WeatherList from '../containers/weather_list';

export default class App extends Component {
  render() {
    return (
      <div> 
      <center><h1> Your 5-Day Weather Forecast by City </h1></center>
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
}
