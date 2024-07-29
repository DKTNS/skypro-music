import classNames from "classnames";
import Track from "../track/track";
import styles from "./playlist.module.css";
import { TrackType, TrackTypeObj } from "@/types";
import { useEffect, useState } from "react";
import { getTracks } from "@/app/tracks";

type PlayListProp = {
  trackData: TrackType[];
  setTrack: (param: TrackType[]) => void;
};

export  function PlayList({ setTrack }: PlayListProp) {
  //const [tracks, setTracks] = useState<TrackType[]>([]);
  const [tracks, setTracks] = useState<TrackType>({} as TrackType); //изменил тип переменной tracks на TrackType 
  useEffect(() => {
    getTracks()
      .then((data: TrackType[]) => setTracks(data)) // Обернуть data в массив перед передачей в setTracks
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
      {/* Проверка Array.isArray(tracks) перед вызовом метода map, 
      чтобы убедиться, что tracks является массивом перед его использованием. */}
      {Array.isArray(tracks) && tracks.map((trackData) => (
          <Track
            onClick={() => setTrack(trackData)}
            key={tracks.id}
            name={tracks.name}
            author={tracks.author}
            album={tracks.album}
          />
        ))}
      </div>
    </div>
  );
}
