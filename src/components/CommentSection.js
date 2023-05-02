import React from 'react'
import Comment from './Comment.js'

function CommentSection({video, showComments }) {
    const comments = video.comments.map((comment) => {
        return <Comment key={comment.id} user={comment.user} comment={comment.comment}/>
    })
  return (
    
    <article>
    <h2>{comments.length} Comments</h2>
    {showComments && (
        <div>
            {comments}
        </div>
    )}
    </article>
  )
}

export default CommentSection