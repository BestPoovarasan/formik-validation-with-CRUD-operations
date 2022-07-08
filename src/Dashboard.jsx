import React from 'react'
import Card from './Card'

function Dashboard() {
  const card = [
    {
      title: "Earnings (Monthly)",
      price: '$40000',
      color: "primary",
    },
    {
      title: "Earnings (Annual)",
      price: '$80000',
      color: "success",
    },
    {
      title: "Pending Requests",
      price: '$20000',
      color: "warning",
    },
    {
      title: "Earnings Overview",
      price: '$200000',
      color: "danger",
    }
  ]
  return (
    <>
    
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
          <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
            className="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
        </div>
      
      <div className="container-fluid">
        <div className="row">
          {

            card.map((card) => {
              return <Card data={card}></Card>
            })
          }
        </div>
        </div>
      </>
      )
}

      export default Dashboard;