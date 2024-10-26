import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllRecipes } from '../redux/slices/recipeSlice'


const Home = () => {
  const dispatch = useDispatch()
  const { allRecipes, loading, error } = useSelector(state => state.recipeReducer)
  const [currentPage, setCurrentPage] = useState(1)
  const recipePerPage = 6
  const totalPage = Math.ceil(allRecipes?.length / recipePerPage)
  const currentPageLastRecipeIndex = currentPage * recipePerPage
  const currentPageFirstRecipeIndex = currentPageLastRecipeIndex - recipePerPage
  const visibleRecipeCard = allRecipes?.slice(currentPageFirstRecipeIndex, currentPageLastRecipeIndex)

  useEffect(() => {
    dispatch(fetchAllRecipes())
  }, [])

  const navigateToNextPage = () => {
    if (currentPage != totalPage) {
      setCurrentPage(currentPage + 1)
    }
  }
  const navigateToPreviousPage = () => {
    if (currentPage != 1) {
      setCurrentPage(currentPage - 1)
    }
  }
  return (
    <>
      <Header insideHome={true} />
      <div style={{ paddingTop: '30px' }} className="container mx-auto">
        {
          loading ?
            <div className="d-flex justify-content-center align-items-center my-5 fs-4">
              <img width={'500px'} height={'500px'} className='me-2' src="https://hackernoon.com/images/0*4Gzjgh9Y7Gu8KEtZ.gif" alt="loading" />Loading...
            </div>
            :
            <>
              <div className='row align-items-start'>
                {
                  allRecipes?.length > 0 ?
                    visibleRecipeCard?.map(recipe => (
                      <div key={recipe?.id} style={{ height: '400px' }} className='col-lg-4 rounded border p-2 mb-5 shadow'>
                        <img width={'100%'} height={'250px'} src={recipe?.image} alt="no img" />
                        <div className='text-center  mt-4'>
                          <h3 className='fs-5 font-bolder mt-2'>{recipe?.name}</h3>
                          <div className='d-flex justify-content-around align-items-center mt-1'>
                            <Link style={{ backgroundColor: 'rgb(146, 27, 27)' }} className='btn rounded p-2 mt-1 text-light inline-block' to={`${recipe?.id}/view`}>View More</Link>
                            <i style={{ backgroundColor: 'rgb(146, 27, 27)' }} className="fa-solid fa-heart btn rounded p-2 mt-1 text-light inline-block"></i>
                          </div>
                        </div>
                      </div>
                    ))
                    :
                    <div className='d-flex justify-content-center align-items-center my-5 fs-4 text-danger font-bolder'>
                      No Products Found!!!
                    </div>
                }
              </div>
              <div className="text-center mt-2 fs-5 fw-bolder">
                <span onClick={navigateToPreviousPage} style={{ cursor: 'pointer' }}> <i className="fa-solid fa-backward me-5"></i></span>
                <span> {currentPage} of {totalPage} </span>
                <span onClick={navigateToNextPage} style={{ cursor: 'pointer' }}> <i className="fa-solid fa-forward ms-5"></i></span>

              </div>
            </>
        }
      </div>
    </>
  )
}

export default Home