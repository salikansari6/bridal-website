import React,{useState} from 'react'
import '../styles/ProductList.scss'
import {useSelector,useDispatch} from 'react-redux'
import Product from './/Product'
import {Link} from 'react-router-dom'
import {addToHistory} from '../actions'
import {PRODUCTS_PER_PAGE} from '../utils/constants'
import Pagination from './Pagination'



const ProductList = () => {
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(0)
    const filteredItems = useSelector(state=>state.filteredItems)
    const dispatch = useDispatch()
    const startIndex = (page - 1) * PRODUCTS_PER_PAGE;
    const productsOnPage = filteredItems.slice(startIndex,startIndex + PRODUCTS_PER_PAGE);
    
    React.useEffect(() =>{
        setTotalPages(Math.ceil(filteredItems.length / PRODUCTS_PER_PAGE));
    },[])
    
    const renderFilteredItems = productsOnPage.map((item) => {
        return <Link to={`/product/${item.id}`}
                    onClick={() => dispatch(addToHistory(item))}><Product key={item.id}
        productDescription={item} 
        imageURL={item.imageURL[0]}
        /></Link>
    })
    return (
        <div className="product-list">
            {renderFilteredItems}
            <Pagination totalPages={totalPages} page={page} setPage={setPage}/>
            
        </div>
    )
}

export default ProductList
