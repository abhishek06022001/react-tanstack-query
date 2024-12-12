import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'
function PostsRQ() {
    const { data, isError, isLoading, error, isFetching, refetch } = useQuery({
        queryKey: ['posts'],
        queryFn: () => {
            return axios.get("http://localhost:4000/posts")
        },
        // enabled: false
    })
    if (isLoading) {
        return <h1>Loading ....</h1>
    }
    if (isError) {
        return <h1>{error.message}</h1>
    }
    console.log("Loading is", isLoading); console.log("Fetching is", isFetching);
    return (
        <>
            <button onClick={refetch} >Fetch posts</button>
            <div className='post-list'>
                {data?.data.map((post) => {
                    return <Link to={`/rq-posts/${post.id}`} >
                        <div className='post-item' key={post.id} >
                            <h1 className='post-title' >{post.title}</h1>
                            <h5 className='post-body'>{post.body}</h5>
                        </div>
                    </Link>
                })}
            </div>
        </>
    )
}

export default PostsRQ