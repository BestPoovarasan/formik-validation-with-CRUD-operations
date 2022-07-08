import React from 'react'

function Createuser() {
  return (
    <div className="container">
<div className="row">
<div className="offset-lg-2 col-lg-8 col-sm-8 col-8 border rounded main-section">
<h3 className="text-center text-inverse">Create User</h3>
<hr/>
<form className="container" id="needs-validation" novalidate>
<div className="row">
<div className="col-lg-6 col-sm-6 col-12">
<div className="form-group">
<label className="text-inverse" for="validationCustom01">First Name</label>
<input type="text" className="form-control" id="validationCustom01" placeholder="First name" value="First Name" required/>
</div>
</div>
<div className="col-lg-6 col-sm-6 col-12">
<div className="form-group">
<label className="text-inverse" for="validationCustom02">Last Name</label>
<input type="text" className="form-control" id="validationCustom02" placeholder="Last name" value="Last Name" required/>
</div>
</div>
</div>
<div className="row">
<div className="col-md-6 col-sm-12 col-12">
<div className="form-group">
<label className="text-inverse" for="inputEmail4">Email</label>
<input type="email" className="form-control" id="inputEmail4" placeholder="Email" required/>
<div className="invalid-feedback">
Please provide a valid Email.
</div>
</div>
</div>
<div className="col-lg-6 col-sm-6 col-12">
<div className="form-group">
<label className="text-inverse" for="inputpassword">Password</label>
<input type="password" className="form-control" id="inputpassword" placeholder="password" required/>
<div className="invalid-feedback">
Please provide a valid password.
</div>
</div>
</div>
</div>
<div className="row">
<div className="col-lg-6 col-sm-6 col-12">
<div className="form-group">
<label className="text-inverse" for="validationCustom03">City</label>
<input type="text" className="form-control" id="validationCustom03" placeholder="City" required/>
<div className="invalid-feedback">
Please provide a valid city.
</div>
</div>
</div>

<div className="col-lg-6 col-sm-6 col-12">
<div className="form-group">

<label className="text-inverse" for="select-menu">Select any value</label>
<select className="custom-select d-block form-control" id="image" required>
<option value="">Open this select menu</option>
<option value="1">One</option>
<option value="2">Two</option>
<option value="3">Three</option>
</select>
<div className="invalid-feedback">
Please selected any option.
</div>
</div>
</div>
</div>
<div className="row">
<div className="col-lg-6 col-sm-6 col-12">
<div className="form-group">
<label className="custom-file">
<input type="file" id="file" className="form-control custom-file-input" required/>
<span className="custom-file-control"></span>
<div className="invalid-feedback">
Please selected any File.
</div>
</label>
</div>
</div>
</div>



<hr/>
<div className="row">
<div className="col-lg-12 col-sm-12 col-12 text-center">
<button className="btn btn-info" type="submit">Submit form</button>
</div>
</div>
</form>
</div>
</div>
</div>
  )
}

export default Createuser;