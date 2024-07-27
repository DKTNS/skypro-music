import classNames from "classnames";
import Track from "../track/track";
import styles from "./playlist.module.css";
import { TrackTypeObj } from "@/types";
import { useEffect, useState } from "react";
import { getTracks } from "@/app/tracks";
import { error } from "console";

type PlayListProp = {
  tracksData: TrackTypeObj[];
  setTrack: (param: TrackTypeObj[]) => void;
};

export default function PlayList({ tracksData, setTrack }: PlayListProp) {
  const [tracks, setTracks] = useState<TrackTypeObj[]>([]);

  useEffect(() => {
    getTracks()
      .then((data: TrackTypeObj[]) => setTracks(data)) // Обернуть data в массив перед передачей в setTracks
      .catch((error: Error) => {
        throw new Error(error.message);
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
      {tracksData.map((trackData) => (
          <Track
            onClick={() => setTrack([trackData])}
            key={trackData.id}
            name={trackData.name}
            author={trackData.author}
            album={trackData.album}
          />
        ))}
      </div>
    </div>
  );
}
