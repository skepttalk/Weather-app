import React from 'react';

const SurveyForm = () => {
  const formhandler = (e) => {
    e.preventDefault();
    alert("Form submitted!");
  };

  return (
    <>
      <form id="myForm" onSubmit={formhandler}>
        <div className="form-group">
          <label htmlFor="name">Full Name <span className="required">*</span></label>
          <input type="text" id="name" name="name" />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email <span className="required">*</span></label>
          <input type="email" id="email" name="email" />
        </div>

        <div className="form-group">
          <label>Gender <span className="required">*</span></label>
          <div>
            <input type="radio" id="male" name="gender" value="Male" />
            <label htmlFor="male">Male</label>
          </div>
          <div>
            <input type="radio" id="female" name="gender" value="Female" />
            <label htmlFor="female">Female</label>
          </div>
          <div>
            <input type="radio" id="other" name="gender" value="Other" />
            <label htmlFor="other">Other</label>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="dob">Date of Birth <span className="required">*</span></label>
          <input type="date" id="dob" name="dob" />
        </div>

        <div className="form-group">
          <label htmlFor="country">Country <span className="required">*</span></label>
          <select id="country" name="country">
            <option value="">Select your country</option>
            <option value="USA">United States</option>
            <option value="Canada">Canada</option>
            <option value="UK">United Kingdom</option>
            <option value="Australia">Australia</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="address">Address Information</label>
          <textarea id="address" name="address" placeholder="Enter your address"></textarea>
        </div>

        <button type="submit">Submit Form</button>
      </form>
    </>
  );
};

export default SurveyForm;
