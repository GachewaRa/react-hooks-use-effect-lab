// Users.js
import React from "react";

function Users({ users, onDelete }) {
  return (
    <div className="user-table">
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Login Name</th>
            <th>Node ID</th>
            <th>Gravatar ID</th>
            <th>Type</th>
            <th>Site Admin</th>
            <th>Score</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.login}</td>
              <td>{user.node_id}</td>
              <td>{user.gravatar_id}</td>
              <td>{user.type}</td>
              <td>{user.site_admin?.toString()}</td>
              <td>{user.score}</td>
              <td>
                <button onClick={() => onDelete(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Users;
