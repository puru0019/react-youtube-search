import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from '../components/search';
import VideoList from '../components/video_list';
import VideoDetails from '../components/video_details';
import YoutubeSearch from 'youtube-api-search';
import '../css/utility.css';
import '../css/app.css';
import _ from 'lodash';

const API_KEY = "AIzaSyBYppPfIjsnlMVIrYOcCTZ1FuD7lJ4rX6Y";

class Main extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      videos:[],
      selectedVideo:null
    };
    this.videoSearch("surfboards");
  }
  videoSearch(term) {
    YoutubeSearch({key:API_KEY,term:term},(videos)=>{
      this.setState({videos:videos,selectedVideo:videos[0]});
      console.log(this.state);
    });
  }

  render() {
    const videoSearch = _.debounce((term)=>{this.videoSearch(term)},400)
    return  (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 marginLarge">
              <SearchBar onSearchTermChange = {videoSearch}/>
              <VideoDetails video = {this.state.selectedVideo} />
              <VideoList videos = {this.state.videos} onVideoSelect = {selectedVideo=>this.setState({selectedVideo})}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<Main />,document.getElementById('mount'));
