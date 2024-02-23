"use client";
import React from "react";
import styles from "./search.module.css";
import { MdSearch } from "react-icons/md";
import {
  useParams,
  useSearchParams,
  useRouter,
  usePathname,
} from "next/navigation";

const Search = ({ placeholder }) => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const handleSearch = (e) => {
    const search = e.target.value;
    const params = new URLSearchParams(searchParams);
    if (search) {
      search.length > 2 && params.set("q", search);
      replace(`${pathname}?${params.toString()}`);
    } else {
      params.delete("q");
    }
    replace(`${pathname}?${params.toString()}`);
  };
  return (
    <div className={styles.container}>
      <MdSearch />
      <input
        type="search"
        placeholder={placeholder}
        className={styles.input}
        onChange={handleSearch}
      />
    </div>
  );
};

export default Search;
