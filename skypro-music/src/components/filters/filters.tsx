"use client";
import classNames from "classnames";
import styles from "./filters.module.css";
import { useState } from "react";
import FilterItem from "./filterItem/filterItem";
import { TrackTypeObj } from "@/types";
import { getUniqueValues } from "@/utils/getUniqueValues";

const SORT_OPTIONS = ["По умолчанию", "Сначала новые", "Сначала старые"];

type FiltersProp = { tracksData: TrackTypeObj[] };

export default function Filters({ tracksData }: FiltersProp) {
  const [activeFilter, setActiveFilter] = useState<string | null>(null); //храним состояние фильтра (открыт\закрыт)
  const uniqueAuthors = getUniqueValues(tracksData, "author");
const uniqueGenre = getUniqueValues(tracksData, "genre");
  const filters = [
    {
      title: "Исполнителю",
      list: uniqueAuthors,
    },
    {
      title: "году выпуска",
      list: SORT_OPTIONS,
    },
    {
      title: "жанру",
      list: uniqueGenre,
    },
  ];

  //функция обработчик клика. название фильтра newFilter
  function handleFilterClick(newFilter: string) {
    //если надо закрыть фильтр, то надо null
    //если открыт новый фильтр, то null скрывает предыдущий, иначе открыт.
    setActiveFilter((prev) => (prev === newFilter ? null : newFilter));
  }
  return (
    <div className={classNames(styles.centerblockFilter, styles.filter)}>
      <div className={styles.filterTitle}>Искать по:</div>
      {filters.map((filter) => (
        <FilterItem
          key={filter.title}
          isOpened={activeFilter === filter.title}
          handleFilterClick={handleFilterClick}
          title={filter.title}
          list={filter.list}
        />
      ))}
    </div>
  );
}
