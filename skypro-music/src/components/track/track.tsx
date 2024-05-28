import styles from "./track.module.css";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";

export default function Track(){
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
                Guilt <span className={styles.trackTitleSpan} />
              </Link>
            </div>
          </div>
          <div className={styles.trackAuthor}>
            <Link className={styles.trackAuthorLink} href="http://">
              Nero
            </Link>
          </div>
          <div className={styles.trackAlbum}>
            <Link className={styles.trackAlbumLink} href="http://">
              Welcome Reality
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