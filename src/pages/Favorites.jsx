import React from 'react'
import Header from '../components/Header'

const Favorites = () => {
  return (
    <>
    <Header/>
     <div style={{paddingTop:'30px'}} className="container mx-auto">
        <div className="d-flex justify-content-around align-items-center fw-bolder fs-2 font-bolder text-danger">My Favourites</div>
        <div className='row align-items-start'>
          <div  style={{height:'330px'}} className='col-lg-3 rounded border p-2 shadow'>
            <img width={'100%'} height={'250px'} src='https://www.wellplated.com/wp-content/uploads/2019/03/Slow-Cooker-Honey-Garlic-Chicken-and-Veggies.jpg' alt="no img" />
            <div className='text-center d-flex justify-content-around align-items-center'>
              <h3 className='text-xl font-bolder mt-2'>Title</h3>
            <p style={{ color: 'rgb(146, 27, 27)'}} className='btn mt-3 fs-3 text-xl'><i className='fa-solid fa-heart-circle-xmark '></i></p>
            </div>
          </div>
        </div>
        </div>
    </>
  )
}

export default Favorites