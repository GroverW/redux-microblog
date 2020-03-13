import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addPost, putPost } from './actions';
import './AddEditPostForm.css';

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

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    if(post) {
      dispatch(putPost(post.id, formData));
      toggleForm();
    } else {
      dispatch(addPost(formData));
      history.push("/")
    }
  }

  const handleCancel = () => {
    post ? toggleForm() : history.push("/");
  }

  return (
    <div className="AddEditPostForm">
      <h1>{post ? "Edit" : "New"} Post</h1>
      <form>
        <label htmlFor="title">Title</label>
        <input className="AddEditForm-input" type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
        <label htmlFor="description">Description</label>
        <input className="AddEditForm-input" type="text"
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
        <label htmlFor="body">Body</label>
        <textarea className="AddEditForm-input" type="text"
          id="body"
          name="body"
          value={formData.body}
          onChange={handleChange}
        />
        <button className="AddEditForm-btn-save" onClick={handleSubmit}>Save</button>
        <button className="AddEditForm-btn-cancel" onClick={handleCancel}>Cancel</button>
      </form>
    </div>
  )
}

export default AddEditPostForm;