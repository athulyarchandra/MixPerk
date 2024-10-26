import React from 'react'
import { useDispatch } from 'react-redux'
import { searchRecipe } from '../redux/slices/recipeSlice'


const Header = ({ insideHome }) => {
    const dispatch = useDispatch()
    return (
        <>
            <nav className="navbar bg-body-tertiary p-2">
                <div className="container-fluid d-flex justify-content-around align-items-center" >
                    <a className="navbar-brand fw-bolder " style={{ color: 'rgb(146, 27, 27)', fontSize: 'xx-large' }}>MixPerk</a>
                    <p id='navhead'>Pinch<span id='spanhead'>of</span>yum</p>
                    <div>
                        <div className="d-flex align-items-center" role="search">
                            {insideHome &&
                                <input onChange={e => dispatch(searchRecipe(e.target.value.toLowerCase()))} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            }
                            {insideHome &&
                                <button style={{ color: 'rgb(146, 27, 27)' }} className="btn btn-outline" type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>

                            }
                            
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header