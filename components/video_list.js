import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
  console.log("hello",props.onVideoSelect)
  const videoItem = props.videos.map((video)=>{
    return <VideoListItem key={video.etag} video = {video} onVideoSelect={props.onVideoSelect} />
  });
  return (
    <ul className="col-xs-4 list-group floatRight mtm prn">
      {videoItem}
    </ul>
  )
}

export default VideoList;
