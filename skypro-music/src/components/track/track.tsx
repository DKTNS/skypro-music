import { TrackType } from "@/types";
import styles from "./track.module.css";
import classNames from "classnames";
import Link from "next/link";

export default function Track({name, author, album}:TrackType){
    return(
        <div className={styles.playlistItem}>
        <div className={classNames(styles.playlistTrack, styles.track)}>
          <div className={styles.trackTitle}>
            <div className={styles.trackTitleImage}>
              <svg className={styles.trackTitleSvg}>
                <use xlinkHref="img/icon/sprite.svg#icon-note" />
              </svg>
            </div>
            <div className={styles.trackTitleText}>
              <Link className={styles.trackTitleLink} href="http://">
              {name} <span className={styles.trackTitleSpan} />
              </Link>
            </div>
          </div>
          <div className={styles.trackAuthor}>
            <Link className={styles.trackAuthorLink} href="http://">
            { author}
            </Link>
          </div>
          <div className={styles.trackAlbum}>
            <Link className={styles.trackAlbumLink} href="http://">
            {album}
            </Link>
          </div>
          <div className={styles.trackTime}>
            <svg className={styles.trackTimeSvg}>
              <use xlinkHref="img/icon/sprite.svg#icon-like" />
            </svg>
            <span className={styles.trackTimeText}>4:44</span>
          </div>
        </div>
      </div>
    );
}