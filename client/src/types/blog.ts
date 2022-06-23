
export interface Post {
  id: string;
  title: string;
  content: string;
}

export interface User {
  name: string;
  lastname: string;
  role: string;
  email: string;
  password: string;
}

export interface CommentType {
  id: string;
  content: string;
  author: string;
  datetime: string;
  parent: string | null;
}
