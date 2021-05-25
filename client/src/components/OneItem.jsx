import React, { useState, useEffect } from 'react';
import { navigate, Link } from '@reach/router';
import axios from 'axios';
import moment from 'moment';


const OneItem = (props) => {

    const [itemInfo, setItemInfo] = useState({})
    
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/things/${props.itemId}`)
        .then(res => {
            console.log('************')
            console.log(res)
            console.log('************')
            setItemInfo(res.data.results)
        })
        .catch(err=> console.log (err))
    }, []);

    const deleteProd = (e, id) =>{
        console.log('delete item number = ', id)
        axios.delete(`http://localhost:8000/api/things/delete/${props.studentID}`)
            .then(res => {
                console.log('*******DELETED*****')
                console.log(res)
                navigate("/")
            
            })
            .catch(err=> console.log (err))
    }


    return (
        <div>
            <br/>
            <div class="col text-center">
            <Link to="/">Back to Home Page</Link>
            </div>
            <div className="container">
            <h1 className="text-light">Read more about: {itemInfo.title} </h1>
            <div className="card-body">
                                <h2 className="card-title text-light">Title: {itemInfo.title}</h2>
                                <h5 className="text-light">({itemInfo.type})</h5>

                                {itemInfo.pic?<img className="car-img-top" src={itemInfo.pic} alt={`${itemInfo.title} image`}/> : ""}
                                <br/>
                                <br/>
                                <p className="text-light">Release Date: {moment(itemInfo.release_date).format("LL")}</p>
                                <p className="text-light">Description: {itemInfo.desc}</p>
                                <p className="text-light">Reccomended By: {itemInfo.rec_by}</p>
                                { itemInfo.link? <a target="_blank" href={`${itemInfo.link}`}>Trailer Link</a> : ""}
                            </div>
                            <button className="btn btn-dark"><Link to={`/edit/${itemInfo._id}`}>Edit {itemInfo.type} </Link></button>
                            <br/>
                            <br/>
                            <button className="btn btn-danger" onClick={(e)=>deleteProd(e, itemInfo._id)} >Delete {itemInfo.type}</button>
            </div>
            <br/>
            <br/>
            
        </div>
    );
};

export default OneItem;