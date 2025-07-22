'use client';

import { useOptimistic, useState } from 'react';
import { addComment } from './actions';

export default function CommentPage() {
  const [comments, setComments] = useState([]);
  const [optimisticComments, addOptimisticComment] = useOptimistic(
    comments,
    (state, newComment) => [...state, newComment]
  );

  async function handleSubmit(formData) {
    const comment = formData.get('comment');
    const newComment = { id: Date.now(), text: comment };

    // Optimistically update UI
    addOptimisticComment(newComment);

    // this try block handle an error incase the server fails to responded or give unexpected error/response
    try {
      // Actually call server action
      const updatedComments = await addComment(comments, formData);

      // this condition checks if it undefined 
      if (Array.isArray(updatedComments)) {
        // this will update the comments then the useOptimistic will sense automatically that the data has changed
        setComments(updatedComments);
      } else {
        console.warn("Unexpected response from server:", updatedComments);

        // this will update the comments then the useOptimistic will sense automatically that the data has n't changed
        setComments([...comments]); // Reset to original state
      }

      // setComments(updatedComments); // This will sync the state
    } catch (error) {
      console.error('Failed to add comment:', error);
      // Rollback UI by re-syncing with server data or removing the optimistic one
      alert('Failed to add comment. Please try again.');
        // this will update the comments then the useOptimistic will sense automatically that the data hasn't changed
      setComments([...comments]); // This resets to the original list, removing the optimistic one
    }
  }

  return (
    <form action={handleSubmit}>
      <h1 style={{ color: 'red' }}>
        explaining and understanding the use of <strong>useOptimistic</strong>
      </h1>
      <input name="comment" placeholder="Add a comment..." style={{ color: 'black' }} required />
      <button type="submit">Post</button>

      <ul>
        {optimisticComments.map((c) => (
          <li key={c.id}>{c.text}</li>
        ))}
      </ul>
    </form>
  );
}
