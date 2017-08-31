import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from '../components/search';
import VideoList from '../components/video_list';
import YoutubeSearch from 'youtube-api-search';
import '../css/utility.css';
import '../css/app.css';

const API_KEY = "AIzaSyBYppPfIjsnlMVIrYOcCTZ1FuD7lJ4rX6Y";

class Main extends React.Component {
  constructor (props) {
    super(props);
    this.state = { videos:[] };
    YoutubeSearch({key:API_KEY,term:'surfboards'},(videos)=>{
      this.setState({videos});
      console.log(this.state);
    });
  }

  render() {
    return  (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 marginLarge">
              <SearchBar />
              <VideoList videos = {this.state.videos}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<Main />,document.getElementById('mount'));
