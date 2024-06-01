import React from "react";
import { Link } from "react-router-dom";

const RepoItem = (props) => {
    const { name, description, deployments_url } = props.repo;

    return (
        <div className="card repo-center">
            <p>Name : {name}</p>
            <p>Description : {description}</p>
            <Link to={deployments_url} target="_blank" rel="noreferrer">
                <button className="btn btn-dark">View on Github</button>
            </Link>
        </div>
    );
};

export default RepoItem;
