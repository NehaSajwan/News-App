import React from "react";
import { Link } from "react-router-dom";
export default function NewsItem({ item }) {
    return (
        <div className="col-sm-3 mt-2" >
            <div className="card" >
                <img src={item.urlToImage} className="card-img-top" alt={item.title} />
                <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.content}</p>
                    <Link to={item.url} className="btn btn-primary">Read More</Link>
                </div>
            </div>
        </div>
    )
}