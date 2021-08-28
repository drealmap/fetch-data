import {Link} from 'react-router-dom';
import React, { useState, useEffect }  from 'react';
const Home = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [blogs, setBlogs] = useState([]);
    const [q, setQ] = useState("");
    const [searchParam] = useState(["title"]);
    const [filterParam, setFilterParam] = useState(["All"]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
            .then(
                (data) => {
                    setIsLoaded(true);
                    setBlogs(data);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
      }, []);

      function search(items) {
        return items.filter((item) => {
    
            if (item.title == filterParam) {
                return searchParam.some((newItem) => {
                    return (
                        item[newItem]
                            .toString()
                            .toLowerCase()
                            .indexOf(q.toLowerCase()) > -1
                    );
                });
            } else if (filterParam == "All") {
                return searchParam.some((newItem) => {
                    return (
                        item[newItem]
                            .toString()
                            .toLowerCase()
                            .indexOf(q.toLowerCase()) > -1
                    );
                });
            }
        });
    }

if (error) {
    
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <div>
                <div className="search_wrapper">
                    <label htmlFor="search-form">
                        <input 
                            type="search"
                            name="search-form"
                            id="search-form"
                            className="search-input"
                            placeholder="search for ..."
                            value={q}
                            onChange={(e) => setQ(e.target.value)}
                        />
                        <span className="sr-only">Search Posts Here</span>
                    </label>
                    
                    <div className="select">
                        <select
                 
                            onChange={(e) => {
                                setFilterParam(e.target.value);
                            }}
                            className="custom-select"
                            aria-label="Filter Countries By Countries"
                        >
                            <option value="All">Filter By Title</option>
                            
                        </select>
                        <span className="focus"></span>
                    </div>
                </div>
                
                <ul>
                    {blogs.map(blog => (
                    <li key={blog.id}>
                        <Link to={`blog/${blog.id}`} >{blog.title}</Link>
                    </li>
                    ))}
                </ul>
                
            </div>
        );
    }
}
export default Home;

