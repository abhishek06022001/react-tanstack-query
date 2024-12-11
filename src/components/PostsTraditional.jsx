import axios from 'axios';
import React, { useEffect, useState } from 'react'

function PostsTraditional() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const fetchPosts = async () => {
        try {
            const response = await axios.get('http://localhost:4000/posts');
            setPosts(response.data);
        } catch (error) {
            setIsError(true);
        } finally {
            setLoading(false);
        }
    }
    useEffect(() => {
        fetchPosts();
    },[]);
    return (
        <div className='post-list'>
            {posts.map((post) => {
                return <div className='post-item' key={post.id} >
                    <h1 className='post-title' >{post.title}</h1>
                    <h5 className='post-body'>{post.body}</h5>
                </div>
            })}
        </div>
    )
}

export default PostsTraditional