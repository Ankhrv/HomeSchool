import React from 'react';


const Video = ({ title, url }) => (
  <div>
    <h3 style={{
           display:"flex",
           justifyContent:"center"}}
            >
              {title}</h3>
    <iframe style={{
            width:"100%",
            display:"grid",
            gridTemplateColumns:"1fr 1fr",
            }} 

      title={title}
      width="560"
      height="315"
      src={url}
      frameBorder="0"
      allowFullScreen
    ></iframe>
  </div>
);

export default Video;