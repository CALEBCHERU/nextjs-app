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

    // Actually call server action
    const updatedComments = await addComment(comments, formData);
    // this will update the comments then the useOptimistic will sense automatically thaat the data has chaged
    setComments(updatedComments);
  }

  return (
    <form action={handleSubmit}>
      <h1 style={{color:'red'}}>explaining and understanding the use of <strong>useOptimistic</strong>  </h1>
      <input name="comment" placeholder="Add a comment..." required />
      <button type="submit">Post</button>

      <ul>
        {optimisticComments.map((c) => (
          <li key={c.id}>{c.text}</li>
        ))}
      </ul>
    </form>
  );
}
