import React, { useState } from 'react';
import video from "../data/video.js";
import VideoSection from "./VideoSection.js"
import CommentSection from "./CommentSection.js"

function App() {
  const [showComments, setShowComments] = useState(true)

  function toggleComments() {
    setShowComments(prevShowComments => !prevShowComments)
  }

  return (
    <div className="App">
      <VideoSection video={video} toggleComments={toggleComments} showComments={showComments}/>
      <CommentSection video={video} showComments={showComments}/>
    </div>
  );
}
export default App;