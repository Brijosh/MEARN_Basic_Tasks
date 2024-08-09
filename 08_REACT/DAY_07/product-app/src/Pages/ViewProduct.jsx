import React from 'react'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn
} from 'mdb-react-ui-kit';

function ViewProduct({data}) {
    console.log(data);

    return (
        <div>
            <div className='row'>
                { data.map(item => (
                        <div className='col m-3'>
                            <MDBCard style={{ width: '26rem' }}>
                                <MDBCardImage src={item.images} position='top' alt='...' />
                                <MDBCardBody>
                                    <MDBCardTitle>{item.title}</MDBCardTitle>
                                    <MDBCardText className='fs-4 fw-semibold'>
                                        Price : $ {item.price}
                                    </MDBCardText>
                                    <MDBBtn href='#'>Button</MDBBtn>
                                </MDBCardBody>
                            </MDBCard>
                        </div>
                    ))}
            </div>
        </div>
    )
}

export default ViewProduct