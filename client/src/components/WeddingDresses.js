import React,{useEffect} from 'react'
import '../styles/WeddingDresses.scss'
import Filter from './Filter'
import {useDispatch} from 'react-redux'
import {fetchProducts} from '../actions'
import ProductList from './ProductList'

const WeddingDresses = () => {

    const dispatch = useDispatch()

    useEffect(() =>{
        dispatch(fetchProducts())
    })

    return (
        <div className="wedding-dresses">
            <Filter/>
            <ProductList/>
        </div>
    )
}

export default WeddingDresses
