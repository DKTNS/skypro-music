"use client";
import styles from "./filter.module.css";
import classNames from "classnames";
import FilterItem from "./filterItem/filterItem";
import { useState } from "react";
import { filters } from "./data";
import { trackType } from "@/types/types";

export default function Filters({ tracksData }: { tracksData: trackType[] }) {
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
          handleFilterClic={handleFilterClic}
          title={filter.title}
          list={filter.list}
        />
      ))}
    </div>

  );
}
