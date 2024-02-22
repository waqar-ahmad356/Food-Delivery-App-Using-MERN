import React from 'react'
import imgage1 from '../images/img1.jpg';

const Card = () => {
  return (
    <div>
      <div className="card mt-3" style={{"width": "18rem","maxheight":"350px"}}>
  <img src={imgage1} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <div className='container w-100' >
        <select className='m-2 h-100 bg-success rounded'>
        {
            Array.from(Array(6),(e,i)=>{
                return (
                    <option key={i+1} value={i+1}>{i+1}</option>
                )
            })
        }

        </select>
        <select className='m-2 h-100 bg-success rounded'>
            <option>Full</option>
            <option>Half</option>
        </select>
        <div className='d-inline h-100 fs-6'>Total Price: </div>
    </div>
    
  </div>
</div>
    </div>
  )
}

export default Card
