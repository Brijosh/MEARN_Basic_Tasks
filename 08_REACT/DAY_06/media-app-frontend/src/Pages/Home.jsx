import React from 'react'
import AddVideo from '../Components/AddVideo'
import { Link } from 'react-router-dom'
import { GrHistory } from "react-icons/gr";
import AddCategory from '../Components/AddCategory'
import ViewVideo from '../Components/ViewVideo'

function Home() {
    return (
        <div className='px-5 my-5'>

            <div className='d-flex justify-content-between my-5'>
                <div className='d-flex justify-content-between'>
                    <h3>Upload New video</h3>
                    <AddVideo />
                </div>

                <div>
                    <Link to={'/watchhistory'} style={{ textDecoration: 'none' }}>
                        <h3>Watch History <GrHistory /></h3>
                    </Link>
                </div>
            </div>
            <div className='d-flex justify-content-between my-5'>
                <div className='col-9'>
                <h3>All video</h3>
                <ViewVideo />
                </div>
                <div className='col-3'>
                <h3>Catagory</h3>
                <AddCategory /> 
                </div>
            </div>
        </div>
    )
}

export default Home
