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
  	this.props.searchForBeer(this.state.searchText)
    this.setState({
      searchText: ''
    })
  }

  render() {
  	return (
  	  <div>
		    <input className='searchBar' type ='text' placeholder= "Search" value={this.state.searchText} onChange={this.handleChange.bind(this)} />
        <button className='searchButton' onClick={this.search.bind(this)}>Find a Beer!</button>
  	  </div>
  	);
  }


}

export default Search;