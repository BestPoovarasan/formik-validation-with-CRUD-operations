import React from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const validate = values => {
    const errors = {};
    if (!values.Name) {
        errors.Name = 'please enter name';
    } else if (values.Name.length < 4) {
        errors.Name = 'Must be 15 characters or greater';
    } else if (values.Name.length > 14) {
        errors.Name = 'Must be 14 characters or lessthan';
    }

    if (!values.Position) {
        errors.Position = 'please enter Position name';
    } else if (values.Position.length > 14) {
        errors.Position = 'Must be 14 characters or less';
    }
    if (!values.Office) {
        errors.Office = 'please enter office name';
    } else if (values.Office.length > 14) {
        errors.Office = 'Must be 18 characters or less';
    }

    if (!values.Email) {
        errors.Email = '';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.Email)) {
        errors.Email = 'Invalid Email address';
    }


    return errors;
};
function Createuser() {
    let navigation = useNavigate();

    const formik = useFormik({
        initialValues: {
            Name: "",
            Position: "",
            Office: "",
            Startdate: "",
            Salary: "",
            Email:"",
        },

        validate,

        onSubmit: async (values) => {
            try {
               await axios.post("https://624e6fc053326d0cfe5b242a.mockapi.io/user", values);
                
    // (JSON.stringify(values, null, 2));
                navigation("/users");
            } catch (error) {
                
            }
            
           
        },
        
    });
    return (
        <div classNameName="container">
            <h3>create user</h3>
            <form onSubmit={formik.handleSubmit}>
                <div className="row">
                    <div className="col-lg-6">
                        <label className="form-label">Name</label>
                        <input
                            id="form-label"
                            name="Name"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.Name}
                            className="form-control"
                        /> {formik.errors.Name ? <div style={{ color: "red" }}>{formik.errors.Name}</div> : null}
                    </div>
                    <div className="col-lg-6">
                        <label className="form-label">Position</label>
                        <input
                            id="Position"
                            name="Position"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.Position}
                            className="form-control"
                        />{formik.errors.Position ? <div style={{ color: "red" }}>{formik.errors.Position}</div> : null}
                    </div>
                    <div className="col-lg-6">
                        <label className="form-label">Office</label>
                        <input
                            id="Office"
                            name="Office"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.Office}
                            className="form-control"
                        />{formik.errors.Office ? <div style={{ color: "red" }}>{formik.errors.Office}</div> : null}
                    </div>
                    <div className="col-lg-6">
                        <label className="form-label">Email</label>
                        <input
                            id="Email"
                            name="Email"
                            type="email"
                            onChange={formik.handleChange}
                            value={formik.values.Email}
                            className="form-control"
                        />{formik.errors.Email ? <div style={{ color: "red" }}>{formik.errors.Email}</div> : null}
                    </div>
                    <div className="col-lg-6">
                        <label className="form-label">Startdate</label>
                        <input
                            id="Startdate"
                            name="Startdate"
                            type="date"
                            onChange={formik.handleChange}
                            value={formik.values.Startdate}
                            className="form-control"
                        />{formik.errors.Startdate ? <div style={{ color: "red" }}>{formik.errors.Startdate}</div> : null}
                    </div>
                    <div className="col-lg-6">
                        <label className="form-label">Salary</label>
                        <input
                            id="Salary"
                            name="Salary"
                            type="number"
                            onChange={formik.handleChange}
                            value={formik.values.Salary}
                            className="form-control"
                        />{formik.errors.Salary ? <div style={{ color: "red" }}>{formik.errors.Salary}</div> : null}
                    </div>
                </div>
                <input className="btn btn-primary m-3" type={"submit"} value="Submit" disabled={!formik.isValid} />
            </form>
        </div>
    );
}

export default Createuser;
