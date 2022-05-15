import React, { useEffect, useState } from 'react'
import ListItem from './ListItem'

const PostList = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts');
            const posts = await res.json();
            setPosts(posts);
        }
        fetchPosts()
    },[])

    return (
        <>
            <h1>List of Posts</h1>
            {posts.map(post => <ListItem key={post.id} post={post} />)}
        </>
    )
}

export default PostList