import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia'
import { usePage } from '@inertiajs/inertia-react'
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchExchangeRate from "./SearchExchangeRate.jsx";
import { Link } from '@inertiajs/inertia-react';


export default function ExchangeRateIndex({ exchange_rates }) {

    const currentPage = exchange_rates.pageNum;
    const totalPages = exchange_rates.totalPage;


    return (
        <>
            <SearchExchangeRate exchange_rates={exchange_rates} /> {/* Render the ChildComponent here */}

            <hr/>
            <div className="row">
                <div className="table-responsive">
                <table className="table table-striped-columns">
                    <thead>
                    <tr>
                        <th>Date/Time</th>
                        <th>Partner Id</th>
                        <th>Partner Name</th>
                        <th>Exchange Rate</th>
                        <th>Subsidized Rate</th>
                        <th>Updated By</th>
                        <th>Note</th>
                    </tr>
                    </thead>
                    <tbody>

                        {exchange_rates.usdExchangeRateList.map((item) => (
                            <tr key={item.id}>
                                <td>{item.checkedAt}</td>
                                <td>{item.partnerId}</td>
                                <td>{item.partnerName}</td>
                                <td>{item.exchangeRate}</td>
                                <td>{item.subsidizedAmount}</td>
                                <td>{item.updatedBy}</td>
                                <td>{item.note}</td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
            </div>

            <nav aria-label="Page navigation">
                <ul className="pagination">
                    {Array.from({ length: totalPages }, (_, i) => (
                        <li
                            key={i}
                            className={i + 1 === currentPage ? 'active' : ''}
                        >
                            <Link className="page-link" href={`/exchange-rate?page=${i + 1}`}>{i + 1}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    );
}
