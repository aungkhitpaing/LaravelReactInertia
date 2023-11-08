import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia'
import { usePage } from '@inertiajs/inertia-react'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function SearchExchangeRate({exchange_rates}) {

    const { errors } = usePage().props;
    const [searchValues, setSearchValue] = useState({
        partner_name: '',
        date_and_time: '',
        updated_by: '',
    });

    const dropDowns = (columnName) => {
        return exchange_rates.usdExchangeRateList.map((item) => {

            return (<option key={item.id} value={item[columnName]}>{item[columnName]}</option>)
        });
    };



    let selectedOptionId = 0;

    const handleChange = (e) => {

        const key = e.target.id;
        const value = e.target.value

        setSearchValue({
            ...searchValues,
            [key]: value
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        Inertia.post('/exchange-rate', values);
    }

    return (
        <>
            <h1>Exchange Rate</h1>
            <hr/>

            <form onSubmit={handleSubmit}>

                    <div className="row">
                        <div className="col-md-3">
                            <div className="form-group">
                                <select className="form-control" id="All partner name">
                                    <option value="#" disabled selected>All partner name</option>
                                    {dropDowns('partnerName')}
                                </select>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="form-group">
                                <input type="datetime-local" className="form-control"/>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="form-group">
                                <select className="form-control" id="Updated By">
                                    <option value="" disabled selected>Updated By</option>
                                    {dropDowns('updatedBy')}
                                </select>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <button className="btn btn-primary" type="submit">Search</button>
                        </div>
                    </div>
            </form>

        </>
    )
}
