const API_BASE_URL = 'http://localhost:5000/api';

export const getAllBlogs = async () => {
  const response = await fetch(`${API_BASE_URL}/blogs`);
  if (!response.ok) throw new Error('Failed to fetch blogs');
  return response.json();
};

export const getBlogById = async (id: string) => {
  const response = await fetch(`${API_BASE_URL}/blogs/${id}`);
  if (!response.ok) throw new Error('Blog not found');
  const data = await response.json();
  return {
    ...data,
    createdAt: data.createdAt ? new Date(data.createdAt).toUTCString() : new Date().toUTCString(),
    comments: data.comments.map(comment => ({
      ...comment,
      createdAt: comment.createdAt ? new Date(comment.createdAt).toUTCString() : new Date().toUTCString()
    }))
  };
};