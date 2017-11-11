import React from 'react';
import BeerList from './BeerList.jsx';
import Search from './Search.jsx';

const List = (props) => (
  <div>
    <div> <Search searchForBeer = {props.search}/></div>
      <div> {props.searchedBeer} <button>Drank DAT!!!</button></div>
      You have drank { props.beer.length } beers.
      {props.beer.map(beer => <BeerList beer={beer}/>)}
  </div>
)

export default List;