import React, { useState, useReducer } from 'react';
import logo from './signup_1.png'
import './App.css';
import Modal from './Modal';

const formReducer = (state, event) => {
  if (event.reset) {
    return {
      FirstName: '',
      LastName: '',
      Email: '',
      Gender: '',
      Address: '',
      Bio: '',
    }
  }
  return {
    ...state,
    [event.name]: event.value
  }
}

function App() {
  const [formData, setFormData] = useReducer(formReducer, {});
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      name: e.target.name,
      value: e.target.value,
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitting(true);

  }
  return (
    <div className="App">
      {submitting &&
        <Modal formData={formData} setFormData={setFormData} setSubmitting={setSubmitting} />
      }
      <h1 className="signup">Create Your Profile</h1>
      <div className='forms'>
        <section className='img-section'>
          <div className="form-logo">
            <img src={logo} alt="" />
          </div>
        </section>
        <section className='form-section'>
          <div className="form-signup">

            <form onSubmit={handleSubmit}>
              <div className="input-text">
                <div className="name">
                  <label>First Name</label> <br />
                  <input type="text" name='FirstName' value={formData.FirstName} onChange={handleChange} />
                </div>
                <div className="name">
                  <label>Last Name</label> <br />
                  <input type="text" name='LastName' value={formData.LastName} onChange={handleChange} />
                </div>
              </div>
              <div className="input-text">
                <div className="name">
                  <label>Email</label> <br />
                  <input type="email" name='Email' value={formData.Email} onChange={handleChange} />
                </div>
                <div className="checked">
                  <div className="check-radio">
                    <input type="radio" name="Gender" value="Male" onChange={handleChange} />
                    <label>Male</label>
                  </div>
                  <div className="check-radio">
                    <input type="radio" name="Gender" value="Female" onChange={handleChange} />
                    <label>Female</label>
                  </div>
                  <div className="check-radio" >
                    <input type="radio" name="Gender" value="Other" onChange={handleChange} />
                    <label>Other</label>
                  </div>
                </div>
              </div>
              <div className="input-text">
                <div className="name">
                  <label>Address</label> <br />
                  <input type="text" name='Address' value={formData.Address} onChange={handleChange} />
                </div>
                <div className="name">
                  <label>Bio</label> <br />
                  <textarea name="Bio" value={formData.Bio} onChange={handleChange} />
                </div>
              </div>
              <div className="button-section">
                <button onClick={handleSubmit}>Create Profile</button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
