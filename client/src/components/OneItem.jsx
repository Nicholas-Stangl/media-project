import React, { useState, useEffect } from 'react';
import { navigate, Link } from '@reach/router';
import axios from 'axios'


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
            <h1>Read more about:</h1>
            <div className="card-body">
                                <h2 className="card-title">{itemInfo.title}</h2>
                                <h5>({itemInfo.type})</h5>
                                <img className="car-img-top" src={itemInfo.pic} alt={`${itemInfo.title} image`}/>
                                <br/>
                                <br/>
                                <p>Release Date: {itemInfo.release_date}</p>
                                <p>Description: {itemInfo.desc}</p>
                                <p>Reccomended By: {itemInfo.rec_by}</p>
                                <a target="_blank" href={`${itemInfo.link}`}>Trailer Link</a>
                            </div>
                            <button><Link to={`/edit/${itemInfo._id}`}>Edit {itemInfo.type} </Link></button>
                            <br/>
                            <br/>
                            <button onClick={(e)=>deleteProd(e, itemInfo._id)} >Delete {itemInfo.type}</button>
            </div>
            <br/>
            <br/>
            
        </div>
    );
};

export default OneItem;