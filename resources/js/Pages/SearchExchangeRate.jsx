import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia'
import { usePage } from '@inertiajs/inertia-react'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function SearchExchangeRate() {

    const { errors } = usePage().props;
    const [searchValues, setSearchValue] = useState({
        partner_name: '',
        date_and_time: '',
        updated_by: '',
    });

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
                                    <option value="" disabled selected>All partner name</option>
                                    <option value="option1">Option 1</option>
                                    <option value="option2">Option 2</option>
                                    <option value="option3">Option 3</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="form-group">
                                <select className="form-control" id="Date and Time">
                                    <option value="" disabled selected>Date and Time</option>

                                    <option value="option1">Option 1</option>
                                    <option value="option2">Option 2</option>
                                    <option value="option3">Option 3</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="form-group">
                                <select className="form-control" id="Updated By">
                                    <option value="" disabled selected>Updated By</option>

                                    <option value="option1">Option 1</option>
                                    <option value="option2">Option 2</option>
                                    <option value="option3">Option 3</option>
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
