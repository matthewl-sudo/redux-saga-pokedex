import React,{useState, useEffect} from "react";

const Pagination = ({movesPerPage, totalMoves, paginate}) =>{
    const pageNumbers = [];
    for(let i=1; i<=Math.ceil(totalMoves/movesPerPage); i++){
        pageNumbers.push(i)
    }
    const [index, setIndex] = useState(1);
    const increment = (index) =>{
        paginate(index)
        index <= pageNumbers.length ?
        setIndex(index+1)
        : setIndex(index)
    }
    const decrement = (index) =>{
        paginate(index)
        index >= 1 ?
        setIndex(index-1)
        : setIndex(index)
    }
    useEffect(()=>{
        setIndex(1);
    }, [totalMoves]);
    return(
        <div>
            <span className="pagination">
                <button className="page-item" onClick={()=> decrement(index)}> Back</button>
                {index}
                <button className="page-item" onClick={()=> increment(index)}> Forward</button>
            </span>
        </div>
            // <ul className="pagination">
            //     {pageNumbers.map(number =>{
            //         return(
            //         <li className="page-item">
            //             <a onClick={()=> paginate(number)} href="!#" className="page-link">
            //                 {number}
            //             </a>
            //         </li>
            //         )
            //     })}
            // </ul>
    )
}

export default Pagination;
