import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beers: [],
      searchedBeer: ''
    }
  }

  componentDidMount() {
    $.ajax({
      url: '/beers',
      success: (data) => {
        this.setState({
          beers: data
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  searchForBeer(beer){
    let context = this;
    $.ajax({
      type:'POST',
      url: '/beers',
      data: {beer: beer},
      success: (data) => {
        context.setState({
          searchedBeer: data.name + ' ' + data.description
        })
      },
      error: (err) => {
        console.log(err, 'errrrrr')
      }
    });
  }

  render () {
    return (<div>
      <h1>Beer Buddy!</h1>
      <List beer={this.state.beers} search = {this.searchForBeer.bind(this)} searchedBeer={this.state.searchedBeer}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));