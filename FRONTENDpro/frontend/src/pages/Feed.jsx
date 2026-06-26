import React, { useState, useEffect } from 'react';
import axios from "axios"

const Feed = () => {
//   const [posts, setPosts] = useState([
//     {
//       _id: "1",
//       image: "https://tse1.mm.bing.net/th/id/OIP._vFhp4PlmDjOzFomMKxSwgHaE8?pid=Api&P=0&h=180",
//       caption: "Hi",
//     },
//   ]);

    const [posts, setPosts] = useState([])

//   useEffect(()=>{

//     axios.get("http://localhost:3000/posts")
//         .then((res)=>{
//             console.log(res.data)
//         })

//   },[])

    const [loading, setLoading] = useState(true);

    useEffect(() => {
    axios.get("http://localhost:3000/posts")
        .then((res) => {
        // console.log(res.data.posts);

        setPosts(res.data.posts);
        setLoading(false)
        })
        .catch((err) => {
        console.log(err);
        setLoading(false)
        });

    }, []);



    const deletePost = async (id) => {

        try {

        await axios.delete(`http://localhost:3000/posts/${id}`);

        // remove deleted post from UI
        setPosts(posts.filter((post) => post._id !== id));

        } catch(err) {
        console.log(err);
        }

    };


  return (
    <div>
      <section className="feed-section">

        {loading ? (
            <h1>Loading...</h1>
        ) : posts.length > 0 ? (

            posts.map((post) => (
            <div key={post._id} className="post-card">
                <img src={post.image} alt={post.caption} />
                <p>{post.caption}</p>

                <button onClick={() => deletePost(post._id)}>
                Delete
                </button>
            </div>
            ))

        ) : (
            <p>No posts available</p>
        )}

        </section>
    </div>
  );
};

export default Feed;