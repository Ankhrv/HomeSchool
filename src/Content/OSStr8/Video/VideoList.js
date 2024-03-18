import React, { useState } from "react";
import Video from "./VideoO";
import l from '../../OSStr5/Kabped/Kabped.module.css';

const VideoList = ({ videos }) => {

  return (
      <div
        style={{
          width:"100%",
          display:"grid",
          gridTemplateColumns:"1fr 1fr",
          gridColumnGap:"2%" 
        }}
      >
        {videos.map((video) => (
          <Video    key={video.id} {...video} />
        ))}
      </div>
  );
};

export default VideoList;