import React from "react";

const Pagination = ({movesPerPage, totalMoves, paginate}) =>{
    const pageNumbers = [];
    for(let i=1; i<=Math.ceil(totalMoves/movesPerPage); i++){
        pageNumbers.push(i)
    }
    return(
        <div>
            <ul className="pagination">
                {pageNumbers.map(number =>{
                    return(
                    <li className="page-item">
                        <a onClick={()=> paginate(number)} href="!#" className="page-link">
                            {number}
                        </a>
                    </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Pagination;