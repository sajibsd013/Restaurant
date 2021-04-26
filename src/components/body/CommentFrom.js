import React, { Component } from 'react';
import { Form, Button, Input } from 'reactstrap'

class CommentFrom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            author: '',
            rating: '',
            comment: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        this.props.addComment(this.props.dishID, this.state.rating, this.state.author, this.state.comment);
        this.setState({
            author: '',
            rating: '',
            comment: ''
        })
        event.preventDefault();

    }

    render() {
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <Input
                        type='text'
                        name="author"
                        value={this.state.author}
                        palceholder="Your Name"
                        required
                        onChange={this.handleInputChange}
                    />
                    <br />
                    <Input
                        type='select'
                        name='rating'
                        value={this.state.rating}
                        onChange={this.handleInputChange}
                    >
                        <option>Select</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Input>
                    <br />
                    <Input
                        type="textarea"
                        name='comment'
                        value={this.state.comment}
                        onChange={this.handleInputChange}
                        required
                    />
                    <br />
                    <Button type="submit">Submit Comment</Button>
                </Form>
            </div>
        );
    }

}

export default CommentFrom;