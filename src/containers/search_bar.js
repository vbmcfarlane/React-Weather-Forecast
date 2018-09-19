import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {fetchWeather} from '../actions/index';


class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: ''};

        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }
// display the type words into the search bar area
    onInputChange(event) {
        
        this.setState({term: event.target.value});
     }
// prevent the form from getting submitted prematurely
    onFormSubmit(event) {
        event.preventDefault();

        this.props.fetchWeather(this.state.term);
        this.setState({ term: ''});
    }
// search bar and submit button rendering
   render() {
        return(
            <form onSubmit={this.onFormSubmit} 
                className="input-group"
            >
                <input 
                    placeholder="Enter City Name "
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange}
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary"> Submit </button> 
                </span>
            </form>

        );
   } 
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchWeather }, dispatch) ;
}
export default connect(null, mapDispatchToProps)(SearchBar);