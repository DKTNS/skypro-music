import classNames from "classnames";
import Track from "../track/track";
import styles from "./centerblock.module.css";
import Filters from "../filters/filters";

export default function CenterBlock() {
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
      <Filters />
      <div className={classNames(styles.centerblockContent, styles.playlistContent)}>
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
        </div>
        <div className={classNames(styles.contentPlaylist, styles.playlist)}>
          <Track />
          <Track />
          <Track />
          <Track />
        </div>
      </div>
    </div> 
  );
}
    