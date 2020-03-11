import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import { useDispatch } from 'react-redux';
import { addUpdatePost} from './actions';

const INITIAL_STATE = {
  title: "",
  description: "",
  body: ""
}

function AddEditPostForm({ post = null, toggleForm }) {
  const [formData, setFormData] = useState(post || INITIAL_STATE);
  const history = useHistory();
  const dispatch = useDispatch();

  const handleChange = evt => {
    const { name, value } = evt.target;
    setFormData(oldData => ({
      ...oldData,
      [name]: value
    }));
  }

  const handleSubmit = evt => {
    evt.preventDefault();
    const id = post ? post.id : uuid();
    const comments = post ? post.comments : [];

    dispatch(addUpdatePost({
      ...formData,
      id,
      comments
    }, id));

    post ? toggleForm() : history.push("/");
  }

  const handleCancel = () => {
    post ? toggleForm() : history.push("/");
  }

  return (
    <div className="AddEditPostForm">
      <h1>{post ? "Edit" : "New"} Post</h1>
      <form>
        <label htmlFor="title">Title</label>
        <input type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
        <label htmlFor="description">Description</label>
        <input type="text"
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
        <label htmlFor="body">Body</label>
        <input type="text"
          id="body"
          name="body"
          value={formData.body}
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Save</button>
        <button onClick={handleCancel}>Cancel</button>
      </form>
    </div>
  )
}

export default AddEditPostForm;