const names = ["Mattismyname", "Fyrefly"];

function Post() {
  const chosenName = Math.random() > 0.5 ? names[0] : names[1];

  return (
    <div>
      {/* <p>Mattismyname</p>
      <p>React.js is awesome!</p> */}
      <p>{chosenName}</p>
      <p>React.js is awesome!</p>
    </div>
  );
}

export default Post;
