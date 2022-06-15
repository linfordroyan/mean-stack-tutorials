export interface Post {
  id:string;
  title: string;
  content: string;
}

export interface APIPostModel{
  message:string;
  posts:any[]
}
