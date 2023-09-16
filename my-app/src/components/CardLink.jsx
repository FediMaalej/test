import React from 'react'

export default function CardLink() {
  return (
    <div className="card">
    <div className="link_remove">
      <p> Link #1</p>
      <span className="remove">Remove</span>
    </div>
    <div className="platform">
      <label> Platform </label>
      <select
        class="form-select form-select-md mb-3"
        aria-label="Large select example"
      >
        <option selected>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>
    <div className="Link">
      <div class="input-group mb-3">
       
        <i class="bi bi-link-45deg input-group-text"  id="basic-addon1"></i>
        <input
          type="text"
          class="form-control"
          placeholder="Link"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </div>
    </div>
  </div>
  )
}
