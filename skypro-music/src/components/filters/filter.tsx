"use client";
import styles from "./filter.module.css";
import classNames from "classnames";
import FilterItem from "./filterItem/filterItem";
import { useState } from "react";
import { filters } from "./data";



export default function Filters() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  function handleFilterClic(newFilter: string) {
    setActiveFilter((prev) => (prev === newFilter ? null : newFilter));
  }
  return (
    <div className={classNames(styles.centerblockFilter, styles.filter)}>
      <div className={styles.filterTitle}>Искать по:</div>
      {filters.map((filter) => (
        <FilterItem
          key={filter.title}
          isOpened={activeFilter === filter.title}
          handleFilterClick={handleFilterClic}
          title={filter.title}
          list={filter.list}
        />
      ))}
{/*       <FilterItem
        isOpened={activeFilter === "Исполнителю"}
        handleFilterClick={handleFilterClic}
        title={"Автор"}
        list={["BuzzFuzz", "WaxWazle", "Neophyte"]}
      />
      <FilterItem
        isOpened={activeFilter === "Году выпуска"}
        handleFilterClick={handleFilterClic}
        title={"Год выпуска"}
        list={["1997", "2001", "2007"]}
      />
      <FilterItem
        isOpened={activeFilter === "Жанру"}
        handleFilterClick={handleFilterClic}
        title={"Жанру"}
        list={["Gabber", "HappyHC", "Speed"]}
      /> */}
    </div>
  );
}
