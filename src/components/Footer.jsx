import React from 'react'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <div style={{ height: '300px',width:'100%',backgroundColor:'rgba(146, 27, 27, 0.41)' }} className=' mt-5 bg-slate-300 shadow'>
      <div className='d-flex justify-content-around '>
        <div style={{ width: '400px' }} className='size-1/4'>
          <h5 className="fs-3 font-bolder" style={{color:'rgb(146, 27, 27)',fontSize:'30px'}} >MixPerk</h5>
          <p>Designed and built with all the love in the world by the Luminar team with the help of our contribution.</p>
          <p>Code licensed Luminar, docs CC BY 3.0</p>
          <p>Currently v5.3.2.</p>
        </div>
        <div className='d-flex flex-column'>
          <h5 className="fs-3 font-bolder">Links</h5>
          <Link to={'/'} style={{ textDecoration: 'none', color: 'rgb(146, 27, 27)' }}>Home</Link>
          <Link to={'/view'} style={{ textDecoration: 'none', color: 'rgb(146, 27, 27)' }}>View Recipes</Link>
        </div>
        <div className='d-flex flex-column'>
        <h5 className="fs-3 font-bolder">Guides</h5>
          <a href="https://react.dev/" style={{ textDecoration: 'none', color: 'rgb(146, 27, 27)' }} target='_blank'>React</a>
          <a href="https://react-bootstrap.github.io/" style={{ textDecoration: 'none', color: 'rgb(146, 27, 27)' }} target='_blank'>React Bootstrap</a>
          <a href="https://reactrouter.com/en/main" style={{ textDecoration: 'none', color: 'rgb(146, 27, 27)' }} target='_blank'>React Router</a>

        </div>
        <div className='d-flex flex-column justify-content-between mt-3'>
          <h5 className="fs-3 font-bolder">Contact Us</h5>
          <div className='d-flex'>
          <input placeholder='Enter your email here' type="text" className='form-control' />
          <button style={{color:'rgb(146, 27, 27)',borderColor:'rgb(146, 27, 27)'}} className='btn ms-2'><i className='fa-solid fa-arrow-right'></i></button>
          </div>
          <div className='icons d-flex justify-content-between mt-3'>
            <a href="" style={{ textDecoration: 'none', color: 'rgb(146, 27, 27)' }} target='_blank'><i className='fa-brands fa-twitter'></i></a>
            <a href="" style={{ textDecoration: 'none', color: 'rgb(146, 27, 27)' }} target='_blank'><i className='fa-brands fa-instagram'></i></a>
            <a href="" style={{ textDecoration: 'none', color: 'rgb(146, 27, 27)' }} target='_blank'><i className='fa-brands fa-facebook'></i></a>
            <a href="" style={{ textDecoration: 'none', color: 'rgb(146, 27, 27)' }} target='_blank'><i className='fa-brands fa-twitter'></i></a>
            <a href="" style={{ textDecoration: 'none', color: 'rgb(146, 27, 27)' }} target='_blank'><i className='fa-brands fa-github'></i></a>
            <a href="" style={{ textDecoration: 'none', color: 'rgb(146, 27, 27)' }} target='_blank'><i className='fa-brands fa-instagram'></i></a>
          </div>
        </div>
      </div>
      <p className='text-center mt-3'> Copyright &copy; June 2024 Batch, MixPerk. Built with React.</p>
    </div>
  )
}

export default Footer