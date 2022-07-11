import React from 'react'
import { Link } from "react-router-dom";
import { useState, useEffect} from "react";
import axios from "axios";

function User() {
   const [users, setuser]= useState([]);
   useEffect(()=>{
    fetchdata()
   },[])

   let fetchdata = async()=>{
    let userdata= await axios.get("https://624e6fc053326d0cfe5b242a.mockapi.io/user");
    setuser(userdata.data)
  }

   let handleDelete = async (id) => {
    let ask = window.confirm("Do you want Delete?");
    if(ask){
        await axios.delete(`https://624e6fc053326d0cfe5b242a.mockapi.io/user/${id}`);
        fetchdata();
    }
    
}
    return (
        <>
            <h1 class="h3 mb-2 text-gray-800">Tables</h1>
            <p class="mb-4">DataTables is a third party plugin that is used to generate the demo table below.
                For more information about DataTables, please visit the <a target="_blank"
                    href="https://datatables.net">official DataTables documentation</a>.</p>
            <Link class="btn btn-primary" to="/user/createuser" role="button">create user</Link>

            <div class="card shadow mb-4">
                <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Position</th>
                                    <th>Office</th>

                                    <th>Start date</th>
                                    <th>Salary</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tfoot>
                                <tr>
                                    <th>Name</th>
                                    <th>Position</th>
                                    <th>Office</th>

                                    <th>Start date</th>
                                    <th>Salary</th>
                                    <th>Action</th>
                                </tr>
                            </tfoot>
                            <tbody>
                                {
                                    users.map((data) => {
                                        return (
                                            <tr>
                                                <td>{data.Name}</td>
                                                <td>{data.Position}</td>
                                                <td>{data.Office}</td>

                                                <td>{data.Startdate}</td>
                                                <td>${data.Salary}</td>
                                                <td className="gap-2">
                                                    <Link to={`/user/view/${data.id}`} className="btn btn-primary btn-sm m-1">View</Link>
                                                    <Link to={`/user/edit/${data.id}`} className="btn btn-success btn-sm m-1">Edit</Link>
                                                    <button className="btn btn-danger btn-sm m-1" onClick={() => handleDelete(data.id)}>Delete</button>
                                                </td>
                                            </tr>
                                        )

                                    })
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>



        </>
    )
}

export default User;