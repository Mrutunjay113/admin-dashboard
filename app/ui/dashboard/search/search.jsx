import React from "react";
import styles from "./search.module.css";
import { MdSearch } from "react-icons/md";

const Search = ({ placeholder }) => {
  return (
    <div className={styles.container}>
      <MdSearch />
      <input type="search" placeholder={placeholder} className={styles.input} />
    </div>
  );
};

export default Search;
