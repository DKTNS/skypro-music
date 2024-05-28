import styles from "./track.module.css";
import classNames from "classnames";
import Image from "next/image";

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
              <a className={styles.trackTitleLink} href="http://">
                Guilt <span className={styles.trackTitleSpan} />
              </a>
            </div>
          </div>
          <div className={styles.trackAuthor}>
            <a className={styles.trackAuthorLink} href="http://">
              Nero
            </a>
          </div>
          <div className={styles.trackAlbum}>
            <a className={styles.trackAlbumLink} href="http://">
              Welcome Reality
            </a>
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