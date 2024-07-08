import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostsList.module.css";

function PostsList() {
  return (
    <>
      <NewPost />
      <ul className={classes.posts}>
        <Post author="Mattismyname" body="React.js is awesome!" />
        <Post author="Fyrefly" body="Check out on my instagram!" />
      </ul>
    </>
  );
}

export default PostsList;
