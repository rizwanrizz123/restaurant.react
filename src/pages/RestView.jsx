import React from 'react'
import { Col, Row } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import { useState } from 'react';

import Modal from 'react-bootstrap/Modal';
import ResrReviews from '../components/ResrReviews ';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

function RestView() {
  const [show, setShow] = useState(false);
  const {id} = useParams()
  console.log(id);

  const allRestaurant = useSelector(state=>state.restaurantSlice.allRestaurant)
  console.log(allRestaurant);
  const selectedRestaurant = allRestaurant.find(item=>item.id == id)
  console.log(selectedRestaurant);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Row className='mt-5 mb-5'>
      <Col md={1}></Col>
      <Col md={3}>
        <img width={'100%'} height={'450px'} className='rounded' src={selectedRestaurant.photograph} alt="no image" />
      </Col>
      <Col md={7} className='px-5'>
        <hr />
        <h4 className='text-center'><span className='text-warning'>RESTAURANT</span> DETAILS</h4>
        <hr />
        <ListGroup>
          <ListGroup.Item><h4 className='text-center p-3'>{selectedRestaurant.name}</h4></ListGroup.Item>
          <ListGroup.Item><p>Neighbourhood : {selectedRestaurant.neighborhood}</p></ListGroup.Item>
          <ListGroup.Item><p>Cuisine Type : {selectedRestaurant.cuisine_type}</p></ListGroup.Item>
          <ListGroup.Item><p>Address : {selectedRestaurant.address}</p></ListGroup.Item>
          <ListGroup.Item className='text-center p-3 mb-2'>
            
              <button onClick={handleShow} className='btn btn-warning me-4'>Operating Hours</button>
              <Modal
               show={show}
               onHide={handleClose}
               backdrop="static"
               keyboard={false}
             >
             <Modal.Header closeButton>
            <Modal.Title className='text-warning'>Operating Hours</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <ListGroup>
              <ListGroup.Item>MOnday : </ListGroup.Item>
              <ListGroup.Item>Tuesday : </ListGroup.Item>
              <ListGroup.Item>Wednesday : </ListGroup.Item>
              <ListGroup.Item>Thursday : </ListGroup.Item>
              <ListGroup.Item>Friday : </ListGroup.Item>
              <ListGroup.Item>Saturday : </ListGroup.Item>
              <ListGroup.Item>Sunday : </ListGroup.Item>
            </ListGroup>
            </Modal.Body>
            </Modal>
            <ResrReviews/>
            
          
          </ListGroup.Item>
        </ListGroup>
        <hr />
      </Col>
      <Col md={1}></Col>
      
    </Row>
  )
}

export default RestView