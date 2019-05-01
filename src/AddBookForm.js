import React, { Component } from 'react';

class AddBookForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      author: ''
    };
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.add(this.state);
    this.setState({
      name: '',
      author: ''
    });
  }

  handleChange = evt => {
    this.setState({ [evt.target.name]: evt.target.value });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">Author</label>
        <input
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <label htmlFor="author">Author</label>
        <input
          name="author"
          value={this.state.author}
          onChange={this.handleChange}
        />
      </form>
    );
  }
}

export default AddBookForm;
