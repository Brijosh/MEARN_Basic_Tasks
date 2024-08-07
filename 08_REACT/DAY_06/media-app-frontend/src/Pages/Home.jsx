import React from 'react'
import AddVideo from '../Components/AddVideo'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div className='px-5'>

            <div className='d-flex justify-content-between'>
                <div className='d-flex justify-content-between'>
                    <h3>Upload New video</h3>
                    <AddVideo />
                </div>

                <div>
                    <Link to={'/watch-history'} style={{textDecoration:'none'}}>
                    <h3>Watch History </h3>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Home
