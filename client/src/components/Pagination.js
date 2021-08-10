import { PagesSharp } from '@material-ui/icons';
import React from 'react'
import '../styles/Pagination.scss'

const Pagination = ({totalPages,setPage,page}) => {
    const pages = [...Array(totalPages).keys()].map(num => num+1);
    return (
        <div className="pagination">
            <div className="pagination__buttons">
            {pages.map(num =>{
                return <button className={`${page === num ? 'active':""}`}
                onClick={() => setPage(num)}>{num}</button>
            })}
            </div>
        </div>
    )
}

export default Pagination
