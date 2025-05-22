'use server'

export async function addComment(prevComments, formData) {
  const comment = formData.get('comment');

  // Simulate a delay for async server-side action
  await new Promise((res) => setTimeout(res, 1000));

  return [...prevComments, { id: Date.now(), text: comment }];
}
