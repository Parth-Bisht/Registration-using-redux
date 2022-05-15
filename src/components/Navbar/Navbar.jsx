
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { forceGetData } from "../../redux/action";
import styles from "./Navbar.module.css";

const Navbar = () => {
    const user = useSelector((state)=>state.user)
    const userData = useSelector((state) => state.userData);
    const dispatch = useDispatch();
    const handleChange = (e)=>{
        if(e.code === "Enter"){
            dispatch(forceGetData(e.target.value))
        }
    }
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <a href="/">
          <img
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.C0It0Y9-HXIu_ieBD9beNwAAAA%26pid%3DApi&f=1"
            alt=""
          />
        </a>
      </div>
      <div className={styles.search}>
        <input
          className={styles.searchInput}
          type="text"
          placeholder="Search Github"
            onKeyDown={handleChange}
        />
      </div>

      <div className={styles.options}>
        <ul className={styles.list}>
          <li>Pull Requests</li>
          <li>Issues</li>
          <li>Marketplace</li>
          <li>
            <a href="explore.html"> Explore</a>
          </li>
        </ul>
      </div>

      <div className={styles.profile}>
        <img
        //   className={styles.profile-img}
        //   src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.fRjYMjw7_Ymj8eNXiP5JNAHaEK%26pid%3DApi&f=1"
        src={user?userData.avatar_url:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.fRjYMjw7_Ymj8eNXiP5JNAHaEK%26pid%3DApi&f=1"}
          alt=""
        />
      </div>
    </div>
  );
};

export default Navbar;
