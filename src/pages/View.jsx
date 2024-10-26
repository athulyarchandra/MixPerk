import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllRecipes } from '../redux/slices/recipeSlice'
import Header from '../components/Header'



const View = () => {
  const { id } = useParams()
  console.log(id);
  const [recipes, setrecipes] = useState({})


useEffect(() => {
 if(sessionStorage.getItem("allRecipes")){
  const allRecipes = JSON.parse(sessionStorage.getItem("allRecipes"))
  setrecipes(allRecipes?.find(item=>item.id==id))

 }
},[])
console.log(recipes);


return (
  <>
    <Header />
    <div style={{ paddingTop: '70px' }} className=' mx-5'>
      <div className="row align-items-start">
        <div className="col">
          <img width={'100%'} height={'450'} src={recipes?.image} alt="no img" />
        </div>
        <div className="col">
          <p>PID : {recipes?.id} </p>
          <h1 className='fs-2 fw-bolder font-bolder'>{recipes?.name} </h1>
          <h4> cuisine : {recipes?.cuisine}</h4>
          <p>
            <span className='font-bolder'>Ingredients</span> :  {recipes?.ingredients}
          </p>
          <p>
            <span className='font-bolder'>Instructions</span> :  {recipes?.instructions}
          </p>
          <div className='mt-5'>
            <button className=' btn text-success border-success bg-blue-500 rounded p-2'>ADD TO Favorites</button>
          </div>
          <h3 className='font-bolder my-3'>   
             <span className='font-bolder'>Preparation Time : </span> {recipes?.prepTimeMinutes} min
          </h3>
          <div className='shadow rounded p-2 mb-2'>
            <h5>
              <span className='font-bolder'>Review Count : </span> {recipes?.reviewCount}
            </h5>
            <p>Rating : {recipes?.rating} <i className='fa-solid fa-star text-warning'></i> </p>
          </div>

        </div>
      </div>
    </div>
  </>
)
}

export default View