import React, {useState, useEffect} from 'react';

const Blog = props => {
    var id = props.match.params.id

    const [error, setError] = useState (null);
    const [isLoaded, setIsloaded] = useState(false);
    const [blog, setBlog] = useState([]);

    useEffect (() => {
        fetch("https://jsonplaceholder.typicode.com/posts/" + id)
            .then(res => res.json())
            .then(
                (data) => {
                    console.log(data);
                    setBlog(data);
                    setIsloaded(true);
                },
                (error) => {
                    setIsloaded(true);
                    setError(error);
                }
            )
    }, [])


    if (error) {
        return <div>Error: {error.message}</div>;
    }
    if (!isLoaded) {
        return <div>Loading ...</div>;
    }
    if (blog) {
        return (
            <div>
                <h1>{blog.title}</h1>
                <div>
                    <h3>Content:</h3> {blog.body}
                </div>

               
            </div>

        );
    }
    
}

export default Blog;