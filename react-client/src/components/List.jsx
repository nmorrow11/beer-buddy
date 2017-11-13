import React from 'react';
import BeerList from './BeerList.jsx';
import Search from './Search.jsx';

class List extends React.Component {
  constructor(props){
  	super(props);
  	this.state = {
  	showButton : false,
  	}
  }

  drinkClick(){
  	this.props.addBeer(this.props.searchedBeer)
  }

  render(){
    let mySearch;
    if (this.props.searchedBeer.name){
      mySearch = 'Is this the beer you drank? ' + this.props.searchedBeer.name + ' ' + this.props.searchedBeer.desc
    } else {
      mySearch = ''
    }
  return(
    <div>
        <div><Search searchForBeer = {this.props.search}/></div>
        <div>Your Beer List</div>
        You have drank {this.props.beer.length} beers.
        <div>{mySearch}</div>
        <div><button onClick= {this.drinkClick.bind(this)} className ='drinkButton'>Drank DAT!!!</button></div>
        {this.props.beer.map(beer => <BeerList beer={beer}/>)}
    </div>
  )}
}
export default List;