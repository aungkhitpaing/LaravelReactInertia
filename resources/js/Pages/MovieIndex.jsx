import React, { useEffect, useState } from 'react';
import { Inertia } from '@inertiajs/inertia'
import { usePage } from '@inertiajs/inertia-react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from '@inertiajs/inertia-react';


export default function MovieIndex({ movies }) {

    const totalPages = 4;

    const [limit, setLimit] = useState(10);
    const [currentPage, setCurrentPage] = useState();

    // const dropDowns = (columnName, element_id) => {
    //     return limit.map((value) => {
    //         return (<option key={value} id={element_id} value={value}>{value}</option>)
    //     });
    // };

    const handleLimitChange = (newLimit) => {
        setLimit(newLimit);
        setCurrentPage(1);
        fetchData(newLimit, 1);
    }

    const handlePageChange = (newPage) => {
        console.log(newPage);
        setCurrentPage(newPage);
        fetchData(limit, newPage);
    };

    const fetchData = async (limit, page) => {
        try {
          const response = await Inertia.get(`/movies?limit=${limit}&page=${page}`);
          // Handle the response data as needed
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

    return (
        <>
            <hr/>

            <div className="row">
                <div className="table-responsive">
                <table className="table table-striped-columns">
                    <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title Text</th>
                        <th>Original Text</th>
                        <th>Release Year</th>
                    </tr>
                    </thead>
                    <tbody>
                        {movies.results.map((item) => (
                            <tr key={item.id}>
                                <td>
                                    {item.id}
                                </td>
                                <td>
                                    {item.titleText.text}
                                </td>
                                <td>
                                   {item.originalTitleText.text}
                                </td>
                                <td>
                                    {item.releaseYear.year}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            </div>

            <div>
                <div className="row">
                    <div className="col-md-2" style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <label> Row :</label>
                        <div className="form-group">
                            {/* <select className="form-control" id='limit' onChange={handleLimitChange}>
                            <option value="#" disabled selected>Size</option>
                                {dropDowns('limit' , 'limit_no')}
                            </select> */}

                            <select className='form-control' id='limit' value={limit} onChange={(e) => handleLimitChange(e.target.value)}>
                            <option value="#" disabled selected>select</option>

                                <option value={10}>10</option>
                                <option value={5}>5</option>
                                <option value={3}>3</option>
                            </select>
                        </div>
                    </div>

                    <div className="col-md-10">
                        <nav aria-label="Page navigation">
                            <ul className="pagination">

                            {/* <button onClick={() => handlePageChange(currentPage - 1)}>&lt; Prev</button>
                            <span>{currentPage}</span>
                            <button onClick={() => handlePageChange(currentPage + 1)}>Next &gt;</button> */}

                                {Array.from({ length: totalPages }, (_, i) => (

                                    <li
                                        key={i}
                                        className={i + 1 == movies.page ? 'active' : ''}
                                    >
                                        <Link className='page-link' id="page" onClick={(e) => handlePageChange(e.target.value)} value={i+1} >{i + 1}</Link>
                                        {/* <Link className="page-link" href={`/movies?page=${i + 1}`}>{i + 1}</Link> */}
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
}
