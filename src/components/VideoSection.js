import React, { useState } from 'react'

function VideoSection({video, toggleComments, showComments}) {
  const [likes, setLikes] = useState(video.upvotes)
  const [dislikes, setDislikes] = useState(video.downvotes)


  function handleLikes(){
    setLikes(prevLikes => prevLikes + 1)
  }
  
  function handleDislikes(){
    setDislikes(prevDislikes => prevDislikes + 1)
  }


  return (
    <main>
        <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <h1>{video.title}</h1>
      <p>{video.views} Views | Uploaded {video.createdAt}</p>
      <button onClick={handleLikes}>{likes} ⬆️</button>
      <button onClick={handleDislikes}>{dislikes} ⬇️</button>
      <br />
      <button onClick={toggleComments}>
      {showComments ? 'Hide Comments' : 'Show Comments'}
      </button>
    </main>
  )
}

export default VideoSection