type PostProps = {
  user: string;
  post: string;
  tags: string;
  image: string;
  imageDescription: string;
  likes: number;
};

export default function PostId({
  user,
  post,
  tags,
  image,
  imageDescription,
  likes,
}: PostProps) {
  return (
    <div>
      <h4>{user}</h4>
      <p>{post}</p>
      <span>{tags}</span>
      <img src={image} alt={imageDescription} />
      <span>{likes}</span>
    </div>
  );
}
