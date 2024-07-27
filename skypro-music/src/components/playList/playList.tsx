import classNames from "classnames";
import Track from "../track/track";
import styles from "./playlist.module.css";
import { TrackTypeObj } from "@/types";
import { useEffect, useState } from "react";
import { getTracks } from "@/app/tracks";
import { error } from "console";

type PlayListProp = { 
  tracksData: TrackTypeObj[],
  setTrack: (param:TrackTypeObj) => void,
 }


export default  function PlayList({ tracksData }: PlayListProp) {
  const [tracks, setTrack] = useState<TrackTypeObj[]>([]);
 useEffect(() => {
  getTracks().then((tracksData:TrackTypeObj[]) => setTrack(tracksData))
  .catch((error:Error) =>{
    throw Error(error.message);
  })
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
            onClick={()  => setTrack(tracksData)}
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
