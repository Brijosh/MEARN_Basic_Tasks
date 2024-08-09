import React from 'react'
import { FaHome } from "react-icons/fa";
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { MdDelete } from "react-icons/md";


function WatchHistory() {
  return (
    <div className='m-5'>
      <div className='d-flex justify-content-between'>
      <h1>WatchHistory</h1>
      <Link to={'/home'}> <h4><FaHome /> Back To Home</h4></Link>
      </div>

      <Table striped bordered hover className='my-5 w-50 mx-auto'>
      <thead>
        <tr>
          <th>S.No.</th>
          <th>Caption</th>
          <th>URL</th>
          <th>TimeStamp</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className='fs-5 fw-semibold'>1</td>
          <td className='fs-5 fw-semibold'>Mark</td>
          <td className='fs-5 fw-semibold'>Otto</td>
          <td className='fs-5 fw-semibold'>@mdo</td>
          <td className='text-center'><Button variant="danger" className='fs-4 px-2 py-1 fw-bold'><MdDelete />
          </Button>{' '}
          </td>
        </tr>
       
      </tbody>
    </Table>
    </div>
  )
}

export default WatchHistory
