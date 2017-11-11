import React from 'react';

const BeerList = (props) => (
  <div>
  	BeerList
  	<div>
      { `Beer Name: ${props.beer.name} Description: ${props.beer.description} `}
    </div>
  </div>
)

export default BeerList;