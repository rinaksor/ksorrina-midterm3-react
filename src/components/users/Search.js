import React, { useState } from "react";
import Users from "./Users";
import { searchUsers } from "../../apis/api";
import { useStore, actions } from "../store";

const Search = () => {
  const [state, dispatch] = useStore();
  const [text, setText] = useState(state.text);
  const [users, setUsers] = useState(state.users);


  const clearUsers = () => {
    setText("");
    setUsers([]);
    dispatch(actions.setKey(""));
    dispatch(actions.setUsers([]));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
    if (text === "") {
      alert("Please enter something");
    } else {
      searchUsers(text).then((data) => {
        console.log(data);
        setUsers(data);
        dispatch(actions.setUsers(data));
      });
      dispatch(actions.setKey(text));
    }
  };

  const onChange = (e) => setText(e.target.value);

  return (
    <div>
      <form onSubmit={onSubmit} className="form">
        <input
          type="text"
          name="text"
          placeholder="Search User"
          value={text}
          onChange={onChange}
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-success btn-block"
        />
      </form>
      {users.length > 0 && (
        <button className="btn btn-danger btn-block" onClick={clearUsers}>
          Clear
        </button>
      )}
      <Users users={users} />
    </div>
  );
};

export default Search;
