import React, { useState } from "react";
import o from './Os.module.css';
// import logo from './y.png';
import { Helmet } from 'react-helmet';
import VideoList from './VideoList';
import SearchInput from './SearchInput';



const Obrs = () => {

  const [searchTerm, setSearchTerm] = useState("");
  

  const videos = [
    { id: 1, title: 'Video 1', url: 'https://www.youtube.com/embed/phFlgKBmq0I' },
    // Add more videos as needed
    { id: 2, title: 'Video 2', url: 'https://www.youtube.com/embed/VIDEO_ID2' },
    { id: 3, title: 'Video 3', url: 'https://www.youtube.com/embed/phFlgKBmq0I' },
    { id: 4, title: 'Video 4', url: 'https://www.youtube.com/embed/phFlgKBmq0I' },
    { id: 5, title: 'Video 5', url: 'https://www.youtube.com/embed/phFlgKBmq0I' },
    { id: 6, title: 'Video 6', url: 'https://www.youtube.com/embed/phFlgKBmq0I' },
    { id: 7, title: 'Video 7', url: 'https://www.youtube.com/embed/phFlgKBmq0I' },
    { id: 8, title: 'Video 8', url: 'https://www.youtube.com/embed/phFlgKBmq0I' },
    { id: 9, title: 'Video 9', url: 'https://www.youtube.com/embed/phFlgKBmq0I' },
    { id: 10, title: 'Video 10', url: 'https://www.youtube.com/embed/phFlgKBmq0I' }, // Add more videos as needed
  ];

  const filteredVideos = videos
.filter((video) => video.title.toLowerCase()
.includes(searchTerm.toLowerCase()));


    return (
     
<div className={o.A14}>
<Helmet>
        <title>Домашняя школа</title>
        <meta name="description" content="Актуальные видео-уроки от опытного педагога" />
       
      </Helmet>
<div className={o.A4}>
        <div className={o.a4}>
      
        <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1>Поиск по названию</h1>
      <SearchInput 
        searchTerm={searchTerm} 
        setSearchTerm={setSearchTerm} />
      <VideoList videos={filteredVideos} />
    </div>


        </div>  
        </div>
        </div>
        

        );
}

export default Obrs;