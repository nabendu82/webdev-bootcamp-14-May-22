import React from 'react'
import './ListItem.css'

const headerStyle = {
    backgroundColor: '#333',
    color: '#fff',
    padding: '10px'
}

const ListItem = ({ post }) => {
    return (
        <div className='container'>
            <h1 style={headerStyle}>ID: {post.id}</h1>
            <h3 style={{ color: 'darkred', fontWeight: 'bold' }}>Title: {post.title}</h3>
            <p>{post.body}</p>
        </div>
    )
}

export default ListItem