import classNames from "classnames";
import styles from "./centerblock.module.css";
import Filters from "../filters/filters";
import PlayList from "../playList/playList";
import { TrackTypeObj } from "@/types";
import { getTracks } from "@/app/tracks";


export default async function CenterBlock() {
  const tracksData: TrackTypeObj[] = await getTracks();
  const [ setTrack] = useState<TrackTypeObj | null>(null);
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
      <Filters tracksData={tracksData}/>
      <div
        className={classNames(
          styles.centerblockContent,
          styles.playlistContent
        )}
      >
        <PlayList setTrack={setTrack} />
      </div>
    </div>
  );
}
