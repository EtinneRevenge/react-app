import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Video from './Video/Video'
import './App.css'
import { VIDEOS } from './videos'

function App() {
  return (
    <>
      <div className='video-container'>
        {/*<Video title="Видео 2" channelName="Medvedev" img={reactLogo} />*/}
        {
          VIDEOS.map((video) =>
            (<Video key={video.id} title={video.title} channelName={video.channelName} img={video.img} />))
        }
      </div>


    </>
  )
}

export default App
