import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import StarRatings from 'react-star-ratings';
// import StarRatings from '../../src';

class App extends Component {
  constructor(props) {
    super(props);
  
    this.changeRating = this.changeRating.bind(this);
    this.state = { 
      rating: 0 
    };
  }

  changeRating(rating) {
    this.setState({
      rating: rating
    })
  }

  render() {
    return (
      <div className="page-wrap">
        <div>
          <StarRatings
            rating={this.state.rating}
            isSelectable={true}
            starRatedColor={'blue'}
            isAggregateRating={false}
            changeRating={this.changeRating}
            numOfStars={6}
          />
        </div>
        <div>
          <StarRatings
            rating={3.903}
            isSelectable={false}
            isAggregateRating={true}
            starWidthAndHeight={'40px'}
            starSpacing={'15px'}
          />
        </div>
      </div>
    )
  }

};

export default App;
