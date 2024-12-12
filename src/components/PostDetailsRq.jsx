import { useQuery } from "@tanstack/react-query"
import axios from "axios";
import { useParams } from "react-router-dom";

const fetchPostDetails = (id) => {
    return axios.get(`http://localhost:4000/posts/${id}`)
}

function PostDetailsRq() {
    const { id } = useParams();
    const { data, isError, isLoading, error, isFetching, refetch } = useQuery({
        queryKey: ['posts', id],
        queryFn: () =>  fetchPostDetails(id)
        });
    if (isLoading) {
        return <h1>Loading ....</h1>
    }
    if (isError) {
        return <h1>{error.message}</h1>
    }
    const { title, body } = data?.data || {}

    return (
        <div className="post-details-container" >
            <div className="post-details-title" >{title}</div>
            <div className="post-details-body" >{body}</div>
        </div>
    )
}
export default PostDetailsRq