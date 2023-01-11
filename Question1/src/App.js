import { useState } from "react";
import "./App.css";

function App() {
  const [posts, setPosts] = useState();
  const [page, setPage] = useState(0);

  const fetchPosts = async (page) => {
    console.log("page: ", page);
    const response = await fetch( `https://dummyjson.com/posts?limit=10&skip=${page}0`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const json = await response.json();
    console.log(json);
    setPosts(json.posts);
  };

  const onClick = async () => {
    setPage(page + 1);
    fetchPosts(page);
  };

  return (
    <div className="container">
      {posts &&
        posts.map((post) => {
          return (
            <>
              <ul>
               <li> {post.id}</li>
               <br />
               <li> {post.title}</li>
                <br />
                <li> {post.reactions}</li>
                <br />
                <li>  {post.userId}</li>
              </ul>
          
            </>
          );
        })}
      <button className="btn btn-success" onClick={onClick}>
        Next !!
      </button>
    </div>
  );
}
export default App;