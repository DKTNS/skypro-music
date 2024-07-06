'use client';
import classNames from "classnames";
import Track from "../track/track";
import styles from "./playlist.module.css";
import { TrackTypeObj } from "@/types";
import { useEffect, useState } from "react";
import { getTracks } from "@/app/tracks";


export type ErrorType = {
  error: Error;
  reset: () => void;
}

type PlayListProp = { 
  tracksData: TrackTypeObj[];
  setTrack: (param:TrackTypeObj) => void;
 };
//если функцию делаем ассинхронной "sync", то не вписываем 'use client', 
export default  function PlayList({ tracksData }: PlayListProp) {
  const [playListData, setTracksData] = useState<TrackTypeObj[]>([]);
  useEffect(() => {
    getTracks().then((data:TrackTypeObj[]) => setTracksData(data))
    .catch((error:any) => {
      throw new Error(error.massage);
    });
  }, []);
  return (
    <div
      className={classNames(styles.centerblockContent, styles.contentPlaylist)}
    >
      <div className={classNames(styles.contentTitle, styles.playlistTitle)}>
        <div className={classNames(styles.playlistTitleCol, styles.col01)}>
          Трек
        </div>
        <div className={classNames(styles.playlistTitleCol, styles.col02)}>
          Исполнитель
        </div>
        <div className={classNames(styles.playlistTitleCol, styles.col03)}>
          Альбом
        </div>
        <div className={classNames(styles.playlistTitleCol, styles.col04)}>
          <svg className={styles.playlistTitleSvg}>
            <use xlinkHref="/img/icon/sprite.svg#icon-watch" />
          </svg>
        </div>
      </div>
      <div className={classNames(styles.contentPlaylist, styles.playlist)}>
        {tracksData.map((tracksData) => (
          <Track
            onClick={()=>setTrack(tracksData)}
            key={tracksData.id}
            name={tracksData.name}
            author={tracksData.author}
            album={tracksData.album}
          />
        ))}
      </div>
    </div>
  );
}
