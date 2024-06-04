import classNames from "classnames";
import styles from "./playList.module.css";
import Track from "../track/track";
import { getAllTracks } from "@/app/api/track";
import { trackType } from "@/types/types";

export default async function PlayList() {
  let tracksData: trackType[];
  try {
    tracksData = await getAllTracks();
  } catch (error) {
    throw new Error(error.message);
  }
  return (
    <div
      className={classNames(styles.centerblockContent, styles.playlistContent)}
    >
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
            <use xlinkHref="./img/icon/sprite.svg#icon-watch" />
          </svg>
        </div>
      </div>
      <div className={classNames(styles.contentPlaylist, styles.playlist)}>
        {tracksData.map((trackData) => (
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
