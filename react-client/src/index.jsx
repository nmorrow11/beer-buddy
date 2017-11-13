import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';
//require('./index.css');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beers: [],
      searchedBeer: {}
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
        let obj = {name: data.name, desc: data.description}
        context.setState({
            searchedBeer: obj
        })
      },
      error: (err) => {
        console.log(err, 'errrrrr')
      }
    });
  }

  addBeerToDb (beer) {
    beer.flag = true;
    this.setState({
      searchedBeer: beer
    }, function(){
      $.ajax({
        type:'POST',
        url: '/beers',
        data: {beer: this.state.searchedBeer},
        success: (data) => {
          console.log(data, 'this is my data')
        },
        error: (err) => {
          console.log(err)
        }
      })
    })
  }

  render () {
    return (<div><div className='title'><img src='https://i.pinimg.com/originals/b8/93/01/b893018794aca499d678e9dfa7cfd0ce.jpg' display='inline-block' height='150' width ='150'/>
       <h1>Beer Buddy!</h1><img src='https://i.pinimg.com/originals/b8/93/01/b893018794aca499d678e9dfa7cfd0ce.jpg' display='inline-block' height='150' width ='150'/></div>
      <List beer={this.state.beers} search = {this.searchForBeer.bind(this)} searchedBeer={this.state.searchedBeer} addBeer={this.addBeerToDb.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));