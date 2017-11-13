import React from 'react';

class BeerList extends React.Component{
  constructor(props) {
  	super(props);
  	this.state = {

  	}
  }
  render() {
	return (
	  <div className='beerDisplay'>
	      <span className='beerName'>{ `Beer Name: ${this.props.beer.name}`}</span>
	      <span className='beerDesc'>{ ` Description: ${this.props.beer.description} `}</span>
	  </div>)
  }
}
export default BeerList;