import React from 'react'
import Header from '../Components/Header/Header.jsx'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
function LandingPage() {
    return (
        <div className='px-5 py-5' style={{ backgroundColor: '#f6f1fb' }}>

            <section className='my-5 d-flex justify-content-around' >
                <div className=' col-7'>
                    <h1 className='fw-bold'>Welcome CinePro Media Player</h1>
                    <h4 className='mt-5' style={{ textAlign: 'justify' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia reiciendis inventore assumenda libero? Veniam rerum, aliquid a voluptatum deleniti dolor quibusdam doloremque ipsa corporis architecto, eos facere assumenda repudiandae nostrum?
                        Nihil amet at dolorum porro expedita consequuntur nisi. Velit culpa nihil, optio mollitia veritatis, necessitatibus quam corrupti voluptate asperiores, officiis nemo. Molestiae quos quam reprehenderit dignissimos consectetur. Necessitatibus, accusamus similique.
                        Doloribus, facilis nulla tenetur impedit in cum assumenda ut provident nostrum similique enim beatae quos consequatur suscipit consequuntur voluptatem libero commodi facere eaque unde perspiciatis architecto explicabo modi eum. Optio!
                    </h4>
                    <Link to={'/home'}>
                        <Button variant="info" className='px-4 fs-5 fw-semibold mt-5'>Get Started</Button>{' '}
                    </Link>
                </div>
                <div className=''>
                    <img src="https://i.pinimg.com/originals/08/f5/dc/08f5dc4ba6cd8793aec766b425af931f.jpg" height={500} alt="" className='rounded-5 shadow-lg' />
                </div>

            </section>
            <section className='my-5'>
                <h1 className='fw-bold text-center p-3'>Features</h1>

                <div className='d-flex justify-content-evenly  mt-5 p-5'>
                    <Card style={{ width: '26rem' }} className='shadow-lg'>
                        <Card.Img variant="top" src="https://static.vecteezy.com/system/resources/previews/020/333/746/non_2x/music-audio-spectrum-free-vector.jpg" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '26rem' }} className='shadow-lg'>
                        <Card.Img variant="top" src="https://wallpapers.com/images/featured/dolby-atmos-3fd3blvyyyuler08.jpg" height={416} width={416} style={{ objectFit: 'cover' }} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '26rem' }} className='shadow-lg'>
                        <Card.Img variant="top" src="https://www.trustedreviews.com/wp-content/uploads/sites/54/2017/11/Dolby-Vision-Logo.jpg" height={416} width={416} style={{ objectFit: 'cover' }} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </div>
            </section>

            <section className='my-5   d-flex justify-content-center' >
                <div className='shadow-lg p-5 rounded-5' style={{ width: '90rem' }}>
                    <h1 className='fw-bold  p-3 text-center'>Simple Fast and Powerful</h1>
                    <div className='d-flex p-4'>
                        <div>
                            <div className='my-4 p-2'>
                                <h2>Play Everything</h2>
                                <h6 style={{ textAlign: 'justify' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint cupiditate suscipit ducimus, eos a itaque minus quidem consequatur nemo quaerat dolore aliquid ipsam, vel accusamus eveniet ullam ex ipsa nam!
                                </h6>
                            </div><div className='my-4 p-2'>
                                <h2>Play Everything</h2>
                                <h6 style={{ textAlign: 'justify' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint cupiditate suscipit ducimus, eos a itaque minus quidem consequatur nemo quaerat dolore aliquid ipsam, vel accusamus eveniet ullam ex ipsa nam!
                                </h6>
                            </div><div className='my-4 p-2'>
                                <h2>Play Everything</h2>
                                <h6 style={{ textAlign: 'justify' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint cupiditate suscipit ducimus, eos a itaque minus quidem consequatur nemo quaerat dolore aliquid ipsam, vel accusamus eveniet ullam ex ipsa nam!
                                </h6>
                            </div>
                        </div>
                        <div>
                            <iframe src="https://youtu.be/LnCFD09xHOM?si=BTwgB36HBBEIgo4W&t=15" height={500} width={700} frameborder="0"></iframe>
                        </div>
                    </div>
                </div>

            </section>

        </div>
    )
}

export default LandingPage
