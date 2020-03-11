import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

const INITIAL_STATE = {
  title: "",
  description: "",
  body: ""
}

function AddPostForm({ addPost }) {
  const [formData, setFormData] = useState(INITIAL_STATE);
  const history = useHistory();


  const handleChange = evt => {
    const { name, value } = evt.target;
    setFormData(oldData => ({
      ...oldData,
      [name]: value
    }));
  }

  const handleSubmit = evt => {
    evt.preventDefault();
    addPost({
      ...formData,
      id: uuid()
    });
    history.push('/');
  }

  const handleCancel = () => {
    history.push('/');
  }

  return (
    <div className="AddPostForm">
      <form>
        <label htmlFor="title">Title</label>
        <input type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
        <label htmlFor="body">Body</label>
        <input type="text"
          id="body"
          name="body"
          value={formData.body}
          onChange={handleChange}
        />
        <label htmlFor="description">Description</label>
        <input type="text"
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Save</button>
        <button onClick={handleCancel}>Cancel</button>
      </form>
    </div>
  )
}

export default AddPostForm;