import React, { useState } from 'react';
import { navigate, Link } from '@reach/router';
import axios from 'axios';

const CreateItem = () => {
    const [formInfo, setFormInfo] = useState({
        title: "",
        type: "",
        desc: "",
        release_date: "",
        rec_by: "",
        pic: "",
        link: ""
    })

    const [errors, setErrors] = useState({})

    const changeHandler = (e) => {
        console.log("********CHANGING********")
        setFormInfo({
            ...formInfo,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = (e) => {
        e.preventDefault()
        console.log("getting ready to submit", formInfo)
        axios.post('http://localhost:8000/api/things/create', formInfo)
            .then(res => {
                console.log('***********')
                console.log(res)
                if (res.data.results) {
                    navigate("/")
                }
                else {
                    setErrors(res.data.errors)
                }

            })
            .catch(err => console.log(err))
    }


    return (
        <div className="container">
            <br/>
            <br/>
            <div class="col text-center">
            <Link to="/">Back to Home Page</Link>
            </div>
            <h1 className="text-center">Add a Reccomendation</h1>
            <form className="col-4 mx-auto" onSubmit={submitHandler}>
                <div className="form-group">
                    <label htmlFor="">Title:</label>
                    <input type="text" name="title" className="form-control" onChange={changeHandler} />
                </div>
                <p style={{ color: "red" }}>{errors.title ? errors.title.message : ""}</p>

                <div class="form-group">
                    <label htmlFor="">Type</label>
                    <select class="form-control" id="" name="type" onChange={changeHandler}>
                        <option value=""></option>
                        <option value="Movie">Movie</option>
                        <option value="TV Show">TV Show</option>
                        <option value="Book">Book</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <p style={{ color: "red" }}>{errors.type ? errors.type.message : ""}</p>

                <div class="form-group">
                    <label htmlFor="">Description:</label>
                    <textarea className="form-control" id="" rows="3" name="desc" onChange={changeHandler}></textarea>
                </div>
                <p style={{ color: "red" }}>{errors.desc ? errors.desc.message : ""}</p>
                <br/>

                <h4>(Optional)</h4>

                <div className="form-group">
                <label htmlFor="">Release Date Date:</label>
                <input type="date" name="release_date" className="form-control" onChange={changeHandler}/>
                </div>
                
                <div className="form-group">
                    <label htmlFor="">Reccomended By:</label>
                    <input type="text" name="rec_by" className="form-control" onChange={changeHandler} />
                </div>

                <div className="form-group">
                    <label htmlFor="">Picture:</label>
                    <input type="text" name="pic" className="form-control" onChange={changeHandler} />
                </div>

                <div className="form-group">
                    <label htmlFor="">Trailer Link:</label>
                    <input type="text" name="link" className="form-control" onChange={changeHandler} />
                </div>

                <button type="submit" className="btn btn-success">Submit</button>
            </form>
            <br/>
            <br/>

        </div>
    );
};

export default CreateItem;