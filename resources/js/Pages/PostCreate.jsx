import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia'
import { usePage } from '@inertiajs/inertia-react'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function PostCreate() {

    const { errors } = usePage().props;
    const [values, setValues] = useState({
        title: '',
        body: '',
    });

    const handleChange = (e) => {
        const key = e.target.id;
        const value = e.target.value

        setValues({
            ...values,
            [key]: value
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        Inertia.post('/post', values);
    }

    return (
        <>
            <h1>Create Post</h1>

            <hr/>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label" htmlFor="title">Title:</label>
                    <input className="form-control" id="title" value={values.title} onChange={handleChange} />
                    {errors && <div><p className="text-danger">{errors.title}</p></div>}
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="body">Body:</label>
                    <textarea className="form-control" id="body" value={values.body} onChange={handleChange}></textarea>
                    {errors && <div><p className="text-danger">{errors.body}</p></div>}
                </div>
                <button className="btn btn-primary" type="submit">Create</button>
            </form>
        </>
    )
}

