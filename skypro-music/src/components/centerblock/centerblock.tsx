'use client'
import classNames from "classnames";
import styles from "./centerblock.module.css";
import Filters from "../filters/filters";
import { TrackTypeObj } from "@/types";
import { useState } from "react";
import { PlayList } from "../playList/playList";

export default  function CenterBlock() {
  //const tracksData: TrackTypeObj[] = await getTracks();
  const [ tracks, setTrack] = useState<TrackTypeObj[] | null>(null);
  const tracksData: TrackTypeObj[] = []; 
  return (
    <div className={classNames(styles.mainCenterblock, styles.centerblock)}>
      <div className={classNames(styles.centerblockSearch, styles.search)}>
        <svg className={styles.searchSvg}>
          <use xlinkHref="/img/icon/sprite.svg#icon-search" />
        </svg>
        <input
          className={styles.searchText}
          type="search"
          placeholder="Поиск"
          name="search"
        />
      </div>
      <h2 className={styles.centerblockH2}>Треки</h2>
      <Filters tracksData={ tracksData }/>
      <div
        className={classNames(
          styles.centerblockContent,
          styles.playlistContent
        )}
      >
        <PlayList setTrack={setTrack}/>
      </div>
    </div>
  );
}
