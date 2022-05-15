import React, { Component } from 'react'

class RefsDemo extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef()
        this.ageRef = React.createRef()
    }

    componentDidMount(){
        this.inputRef.current.focus()
    }

    handleSubmit = e => {
        e.preventDefault()
        console.log(this.inputRef.current.value)
        console.log(this.ageRef.current.value)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" ref={this.inputRef} />
                <input type="number" ref={this.ageRef} />
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default RefsDemo
