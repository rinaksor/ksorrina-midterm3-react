import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const RepoItem = (props) => {
    const { name, full_name, owner } = props.repo;

    return (
        <div className="card repo-center">
            <p>{name}</p>
            <p>{full_name}</p>
            <p>{owner.login}</p> 
        </div>
    );
};

export default RepoItem;
