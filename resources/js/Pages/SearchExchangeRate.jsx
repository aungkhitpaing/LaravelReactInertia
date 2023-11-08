import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia'
import { usePage } from '@inertiajs/inertia-react'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function SearchExchangeRate({exchange_rates}) {

    const { errors } = usePage().props;
    const [searchValues, setSearchValues] = useState({
        partner_name: '',
        checked_at: '',
        updated_by: '',
    });

    const dropDowns = (columnName, element_id) => {
        return exchange_rates.usdExchangeRateList.map((item) => {
            return (<option key={item.id} id={element_id} value={item[columnName]}>{item[columnName]}</option>)
        });
    };

    const handleChange = (e) => {

        const key = e.target.id;
        const value = e.target.value

        setSearchValues({
            ...searchValues,
            [key]: value
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        Inertia.get('/exchange-rate', searchValues);
    }

    return (
        <>
            <h1>Exchange Rate</h1>
            <hr/>

            <form onSubmit={handleSubmit}>

                    <div className="row">
                        <div className="col-md-3">
                            <div className="form-group">
                                <select className="form-control" id='partner_name' onChange={handleChange} >
                                    <option value="#" disabled selected>All partner name</option>
                                    {dropDowns('partnerName' , 'partner_name')}
                                </select>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="form-group">
                                <input type="datetime-local" id="checked_at" onChange={handleChange} className="form-control"/>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="form-group">
                                <select className="form-control" id="updated_by" onChange={handleChange}>
                                    <option value="" disabled selected>Updated By</option>
                                    {dropDowns('updatedBy' , 'updated_by')}
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
