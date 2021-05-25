import React, { useState, useEffect } from 'react';
import { Link } from '@reach/router';
import axios from 'axios'

const AllMedia = () => {
    const [allItems, setAllItems] = useState([])

    const [deleteClicked, setDeleteClicked] = useState(false)

    useEffect(() => {
        axios.get("http://localhost:8000/api/things")
            .then(res => {
                console.log('*************')
                console.log(res)
                console.log('*************')
                setAllItems(res.data.results)
            })
            .catch(err => console.log(err))

    }, [deleteClicked]);


    const deleteProd = (e, id) => {
        console.log('delete item number = ', id)
        axios.delete(`http://localhost:8000/api/things/delete/${id}`)
            .then(res => {
                console.log('*******DELETED*****')
                console.log(res)
                setDeleteClicked(!deleteClicked)

            })
            .catch(err => console.log(err))
    }



    return (
        <div className="container">
            <br/>
            <br/>
            <h1 className="text-center">Our Media Reccomendations</h1>
            <br/>
            <div class="col text-center">
            <button><Link to="/create">Add a Reccomendation</Link></button>
            </div>
            <br/>
            <div className="row">


                <div className="col">
                    <h3>Movies</h3>
                    {allItems.filter(item => item.type === "Movie").map((item, i) => {
                        return <div key={i} className="card">
                            <div className="card-body">
                                <h4 className="card-title">{item.title}</h4>
                                <p>Released: {item.release_date}</p>
                                <p>Reccomended by: {item.rec_by}</p>
                                <button><Link to={`/detail/${item._id}`}>Read More</Link></button>
                                <button onClick={(e) => deleteProd(e, item._id)} >Delete</button>
                            </div>
                        </div>
                    })}
                </div>

                <div className="col">
                    <h3>TV Shows</h3>
                    {allItems.filter(item => item.type === "TV Show").map((item, i) => {
                        return <div key={i} className="card">
                            <div className="card-body">
                                <h4 className="card-title">{item.title}</h4>
                                <p>Released: {item.release_date}</p>
                                <p>Reccomended by: {item.rec_by}</p>
                                <button><Link to={`/detail/${item._id}`}>Read More</Link></button>
                                <button onClick={(e) => deleteProd(e, item._id)} >Delete</button>
                            </div>
                        </div>
                    })}
                </div>

                <div className="col">
                    <h3>Books</h3>
                    {allItems.filter(item => item.type === "Book").map((item, i) => {
                        return <div key={i} className="card">
                            <div className="card-body">
                                <h4 className="card-title">{item.title}</h4>
                                <p>Released: {item.release_date}</p>
                                <p>Reccomended by: {item.rec_by}</p>
                                <button><Link to={`/detail/${item._id}`}>Read More</Link></button>
                                <button onClick={(e) => deleteProd(e, item._id)} >Delete</button>
                            </div>
                        </div>
                    })}
                </div>

                <div className="col">
                    <h3>Other</h3>
                    {allItems.filter(item => item.type === "Other").map((item, i) => {
                        return <div key={i} className="card">
                            <div className="card-body">
                                <h4 className="card-title">{item.title}</h4>
                                <p>Released: {item.release_date}</p>
                                <p>Reccomended by: {item.rec_by}</p>
                                <button><Link to={`/detail/${item._id}`}>Read More</Link></button>
                                <button onClick={(e) => deleteProd(e, item._id)} >Delete</button>
                            </div>
                        </div>
                    })}
                </div>

            </div>
        </div>
    );
};

export default AllMedia;