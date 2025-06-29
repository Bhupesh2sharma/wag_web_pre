const API_BASE_URL = 'https://wag-server.onrender.com/api';

export const getAllBlogs = async () => {
  const response = await fetch(`${API_BASE_URL}/blogs`);
  if (!response.ok) throw new Error('Failed to fetch blogs');
  return response.json();
};

export const getBlogById = async (id: string) => {
  const response = await fetch(`${API_BASE_URL}/blogs/${id}`);
  if (!response.ok) throw new Error('Blog not found');
  const data = await response.json();
  interface Comment {
    id: string;
    author: string;
    content: string;
    createdAt?: string;
    [key: string]: any;
  }

  interface Blog {
    id: string;
    title: string;
    content: string;
    createdAt?: string;
    comments: Comment[];
    [key: string]: any;
  }

  const blogData: Blog = data;

  return {
    ...blogData,
    createdAt: blogData.createdAt ? new Date(blogData.createdAt).toUTCString() : new Date().toUTCString(),
    comments: blogData.comments.map((comment: Comment) => ({
      ...comment,
      createdAt: comment.createdAt ? new Date(comment.createdAt).toUTCString() : new Date().toUTCString()
    }))
  };
};

const el = document.getElementById('some-id');
if (el) {
  el.addEventListener('click', handler);
}

function handler(this: HTMLElement, ev: MouseEvent) {
  throw new Error("Function not implemented.");
}
