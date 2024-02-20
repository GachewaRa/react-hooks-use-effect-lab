import React, { useState } from 'react';

const AddUserForm = ({ onAddUser }) => {
  const [formData, setFormData] = useState({
    id: '',
    login: '',
    node_id: '',
    gravatar_id: '',
    type: '',
    site_admin: false, // Default value
    score: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData({ ...formData, [name]: checked });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ensure id is a number (assuming id is a number in your data)
    formData.id = parseInt(formData.id, 10);
    onAddUser(formData);
    // Clear the form after submission
    setFormData({
      id: '',
      login: '',
      node_id: '',
      gravatar_id: '',
      type: '',
      site_admin: false,
      score: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        ID:
        <input type="text" name="id" value={formData.id} onChange={handleInputChange} />
      </label>
      <label>
        Login:
        <input type="text" name="login" value={formData.login} onChange={handleInputChange} />
      </label>
      <label>
        Node ID:
        <input type="text" name="node_id" value={formData.node_id} onChange={handleInputChange} />
      </label>
      <label>
        Gravatar ID:
        <input type="text" name="gravatar_id" value={formData.gravatar_id} onChange={handleInputChange} />
      </label>
      <label>
        Type:
        <input type="text" name="type" value={formData.type} onChange={handleInputChange} />
      </label>
      <label>
        Site Admin:
        <select name="site_admin" value={formData.site_admin} onChange={handleCheckboxChange}>
          <option value={false}>No</option>
          <option value={true}>Yes</option>
        </select>
      </label>
      <label>
        Score:
        <input type="text" name="score" value={formData.score} onChange={handleInputChange} />
      </label>
      <button type="submit">Add User</button>
    </form>
  );
};

export default AddUserForm;
