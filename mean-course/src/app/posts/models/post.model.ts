export interface Post {
  id: string;
  title: string;
  content: string;
  imagePath: string;
}

export interface APIPostModel {
  message: string;
  posts: any[];
}
