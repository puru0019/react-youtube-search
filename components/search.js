import React,{Component} from 'react';
import ReactDOM from 'react-dom';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {term:''};
    this.hadnleInputChange = this.hadnleInputChange.bind(this);
  }
  hadnleInputChange(e) {
    this.setState({
      term:e.target.value
    });
    this.props.onSearchTermChange(this.state.term);
  }
  render () {
    return (
      <input className="form-control" value={this.state.term} onChange={this.hadnleInputChange}/>
    )
  }

}

export default Search;
