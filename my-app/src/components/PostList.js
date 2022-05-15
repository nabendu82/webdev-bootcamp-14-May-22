import React, { Component } from 'react'
import ListItem from './ListItem';

class PostList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: []
        }
    }

    async componentDidMount() {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        const posts = await res.json();
        this.setState({
            posts
        })
    }

    render() {
        const { posts } = this.state;
        
        return (
            <>
                <h1>List of Posts</h1>
                {posts.map(post => <ListItem key={post.id} post={post} />)}
            </>
        )
    }
}

export default PostList
