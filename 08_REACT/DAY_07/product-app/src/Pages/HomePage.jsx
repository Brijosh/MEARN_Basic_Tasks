import React from 'react'
import { Row,Col } from 'react-bootstrap'
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';


function HomePage() {
  return (
    <div className='p-5 m-5'>
        
        <Row>
            <Col lg={5}>
                <img src="https://cdn.prod.website-files.com/6364b6fd26e298b11fb9391f/6364b6fd26e2983671b93d4b_drawkit-32%20(1).png"  height={'400px'} alt="" />
            </Col>
            <Col lg={6} >
            <h1 className='fw-bold my-3'>Thrift N Shop</h1>
            <h6 style={{textAlign:'justify'}} className='my-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt laborum doloribus consectetur, excepturi quos cupiditate et aliquid cum ut! Delectus a fugit sequi? Accusamus sapiente, ut itaque odit consequuntur officia?
            Culpa explicabo alias cumque enim ipsum neque, accusamus suscipit voluptatibus ut ab ipsam perferendis. Aspernatur ad eius quasi facere rem doloremque dolor, commodi inventore obcaecati quas aliquam cupiditate dolores temporibus?
            Ipsa sunt aspernatur minus animi natus commodi voluptates, ipsum qui, officia molestias perspiciatis. Autem ipsum illum cupiditate nemo, natus earum. Culpa ipsa exercitationem expedita et odio rem voluptatibus commodi id!
            Voluptatibus fugit optio error vel consectetur tenetur voluptatum ullam expedita odio et voluptas, illum, suscipit, cupiditate sunt animi. Consequatur ipsum cumque a, provident velit dolores expedita possimus reiciendis quam quisquam!</h6>
            <Link to={'/products'}>
            <Button variant="contained" className='fw-bold fs-5 my-3 px-4 py-2'>Get Started</Button>
            </Link>
            
            </Col>
        </Row>
    </div>
  )
}

export default HomePage