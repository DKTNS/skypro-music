import classNames from "classnames";
import Track from "../track/track";
import styles from "./playlist.module.css";
import { getTracks } from "@/app/tracks";
import { TrackTypeObj } from "@/types";

export default async function PlayList() {
  const trackData: TrackTypeObj[] = await getTracks();
  return (
    <div className={classNames(styles.contentTitle, styles.playlistTitle)}>
      <div className={classNames(styles.playlistTitleCol, styles.col01)}>
        Трек
      </div>
      <div className={classNames(styles.playlistTitleCol, styles.col01)}>
        Исполнитель
      </div>
      <div className={classNames(styles.playlistTitleCol, styles.col01)}>
        Альбом
      </div>
      <div className={classNames(styles.playlistTitleCol, styles.col01)}>
        <svg className={styles.playlistTitleSvg}>
          <use xlinkHref="/img/icon/sprite.svg#icon-watch" />
        </svg>
      </div>
      <div className={classNames(styles.contentPlaylist, styles.playlist)}>
        {trackData.map((trackData) => (
          <Track
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
