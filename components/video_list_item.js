import React from 'react';

const VideoListItem = ({video,onVideoSelect}) => {
  const imgUrl = video.snippet.thumbnails.default.url;
  const title = video.snippet.title;
  return (
    <li className="list-group-item" onClick={()=>onVideoSelect(video)}>
      <div className="media">
        <div className="media-left">
          <img src ={imgUrl}/>
        </div>
        <div className="media-right">
          {title}
        </div>
      </div>
    </li>
  )
}

export default VideoListItem;
