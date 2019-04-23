import React, { Component } from 'react';
import axios from 'axios';
import { findFlag } from './helpers';

const API_KEY =`${process.env.REACT_APP_NEWS_API_KEY}`
console.log("API", API_KEY);

class PostHeader extends Component {

  constructor(props) {
    // Pass props to parent class
    super(props);
    // Set initial state
    this.state = {
      data: [],
    };
  }





  // Lifecycle method
  componentWillMount() {
    // Make HTTP reques with Axios
    this.getSources();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps !== this.props) {
      this.setState({ value: nextProps.default });
      this.getSources();
    }
  }



  getSources() {
    // Make HTTP reques with Axios
    axios
      .get(
        `https://newsapi.org/v2/sources?language=en&apiKey=${API_KEY}`
      )
      .then(res => {
        // Set state with result
        this.setState({ data: res.data.sources });
      });
  }


  render() {
    var countries = require('country-list')();

    return (
      <div  >
        {this.state.data.map((item, y) => {
          if (item.id === this.state.value) {
            return (
              <div key={y} className="singleNew">

                <div className="generalInfo text-left" >
                  <p className="d-inline-block mb-2 text-success">{countries.getName(item.country).toUpperCase()}</p>
                  <img
                    className="flagCode"
                    src={findFlag(item.country)}
                    alt="flag"
                  />
                </div>
              </div>
            );
          } else {
            return false;
          }
        })}
      </div>
    );
  }
}

export default PostHeader;
