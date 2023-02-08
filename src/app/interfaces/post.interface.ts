// export interface IPost {
//   image: string;
//   title: string;
//   likes: string;
//   creator: ICreator;
//   id?: number;
//   content?: string;
//   createdAt?: string;
// }
// export interface ICreator {
//   name: string;
//   followers: string;
//   isOnline: boolean;
//   isFollowing: boolean;
//   id?: number;
// }

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
