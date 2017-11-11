import React from  'react';


class Search extends React.Component {
  constructor(props) {
  	super(props);
  	this.state = {
  	  searchText: ''
  	}
  }

  handleChange(e) {
  	this.setState({
  		searchText: e.target.value
  	})
  }

  search(){
  	console.log(this.state.searchText)
  	this.props.searchForBeer(this.state.searchText)
  }

  render() {
  	console.log('rendering search')
  	return (
  	  <div>
		<input type ='text' placeholder= "Search" onChange={this.handleChange.bind(this)} /> <button onClick={this.search.bind(this)}>Search</button>
  	  </div>
  	);
  }


}

export default Search;