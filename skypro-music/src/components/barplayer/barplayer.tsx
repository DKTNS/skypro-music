import VolumeBar from "../volumebar/volumebar";
import Link from "next/link";
import styles from "./barplayer.module.css"
import classNames from "classnames";

export default function BarPlayer(){
    return(
        <div className={styles.bar}>
        <div className={styles.barContent}>
          <div className={styles.barPlayerProgress} />
          <div className={styles.barPlayerBlock}>
            <div className={classNames(styles.barPlayer, styles.player)}>
              <div className={styles.playerControls}>
                <div className={styles.playerBtnPrev}>
                  <svg className={styles.playerBtnPrevSvg}>
                    <use xlinkHref="img/icon/sprite.svg#icon-prev" />
                  </svg>
                </div>
                <div className={classNames(styles.playerBtnPlay, styles.btn)}>
                  <svg className={styles.playerBtnPlaySvg}>
                    <use xlinkHref="img/icon/sprite.svg#icon-play" />
                  </svg>
                </div>
                <div className={styles.playerBtnNext}>
                  <svg className={styles.playerBtnNextSvg}>
                    <use xlinkHref="img/icon/sprite.svg#icon-next" />
                  </svg>
                </div>
                <div className={classNames(styles.playerBtnPepeat, styles.btnIcon)}>
                  <svg className={styles.playerBtnRepeatSvg}>
                    <use xlinkHref="img/icon/sprite.svg#icon-repeat" />
                  </svg>
                </div>
                <div className={classNames(styles.playerBtnPhuffle, styles.btnIcon)}>
                  <svg className={styles.playerBtnShuffleSvg}>
                    <use xlinkHref="img/icon/sprite.svg#icon-shuffle" />
                  </svg>
                </div>
              </div>
              <div className={classNames(styles.playerTrackPlay, styles.trackPlay)}>
                <div className={styles.trackPlayContain}>
                  <div className={styles.trackPlayImage}>
                    <svg className={styles.trackPlaySvg}>
                      <use xlinkHref="./img/icon/sprite.svg#icon-note" />
                    </svg>
                  </div>
                  <div className={styles.trackPlayAuthor}>
                    <Link className={styles.trackPlayAuthorLink} href="http://">
                      Ты та...
                    </Link>
                  </div>
                  <div className={styles.trackPlayAlbum}>
                    <Link className={styles.trackPlayAlbumLink} href="http://">
                      Баста
                    </Link>
                  </div>
                </div>
                <div className={styles.trackPlayLikeDis}>
                  <div className={classNames(styles.trackPlayLike, styles.btnIcon)}>
                    <svg className={styles.trackPlayLikeSvg}>
                      <use xlinkHref="./img/icon/sprite.svg#icon-like" />
                    </svg>
                  </div>
                  <div className={classNames(styles.trackPlayDislike, styles.btnIcon)}>
                    <svg className={styles.trackPlayDislikeSvg}>
                      <use xlinkHref="./img/icon/sprite.svg#icon-dislike" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <VolumeBar />
          </div>
        </div>
      </div>
    );
}