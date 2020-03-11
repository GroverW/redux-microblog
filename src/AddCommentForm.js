import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

const INITIAL_STATE = {
  text: ""
}

function AddCommentForm({ addComment }) {
  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleChange = evt => {
    const { name, value } = evt.target;
    setFormData(oldData => ({
      ...oldData,
      [name]: value
    }));
  }

  const handleSubmit = evt => {
    evt.preventDefault();
    addComment({
      ...formData,
      id: uuid(),
    });

    setFormData(INITIAL_STATE);
  }

  return (
    <div className="AddCommentForm">
      <form>
        <label htmlFor="text" hidden={true}>Comment</label>
        <input type="text"
          id="text"
          name="text"
          placeholder="New Comment"
          value={formData.text}
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Add</button>

      </form>
    </div>
  )
}

export default AddCommentForm;