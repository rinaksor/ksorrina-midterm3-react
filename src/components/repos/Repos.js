import React from "react";
import RepoItem from "./Repoltem";

const Repos = (props) => {
    const { repos } = props;

    return (
        <div>
            {repos.map((repo) => (
                <RepoItem key={repo.id} repo={repo} />
            ))}
        </div>
    );
};

export default Repos;
