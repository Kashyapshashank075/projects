import { useState } from "react";

const Navbar = (props) => {
  const [newTheme, setnewTheme] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    props.changeTheme(newTheme);
    setnewTheme("");
  };
  return (
    <div>
      <form onSubmit={(e) => {submitHandler}}>
        <input
          type="text"
          placeholder="Enter Theme"
          value={newTheme}
          onChange={(e) => {
            setnewTheme(e.target.value);
          }}
        />
        <button onClick={submitHandler}>Submit</button>
      </form>
    </div>
  );
};

export default Navbar;
