import React from 'react'
import { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';

function ResrReviews () {
    const [open, setOpen] = useState(false);
  return (
    <>
    
        <button onClick={() => setOpen(!open)} className='btn btn-warning'>Click here to view the Review</button>
    
        <Collapse in={open}>
            <div className='my-2'>
                <hr />
                <div className='mt-5'>
                    <h6>Name and Date</h6>
                    <h6>Rating</h6>
                    <p>Description</p>
                </div>
                
            </div>
        </Collapse>
    
    </>
  )
}

export default ResrReviews 