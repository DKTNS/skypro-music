
import styles from "./track.module.css";
//import classNames from "classnames";


type TrackType = {
name:string;
author:string;
album:string;
onClick: () => void;
};


export default function Track({ name, author, album, onClick}: TrackType){
  //const {currentTrack, isPlaying} = useAppSelector((state) => state.playlist);
 


  return (

    <div onClick={onClick} className={styles.playlistTrack}>
      <div className={styles.trackTitle}>
        <div className={styles.trackTitleImage}>
        </div>

        <div className={styles.trackTitleText}>
          <span className={styles.trackTitleLink}>
            {name} <span className={styles.trackTitleSpan} />
          </span>
        </div>
      </div>
      <div className={styles.trackAuthor}>
        <span className={styles.trackAuthorLink}>{author}</span>
      </div>
      <div className={styles.trackAlbum}>
        <span className={styles.trackAlbumLink}>{album}</span>
      </div>
      <div className={styles.trackTime}>
        <svg className={styles.trackTimeSvg}>
          <use xlinkHref="/img/icon/sprite.svg#icon-like" />
        </svg>
        <span className={styles.trackTimeText}>4:44</span>
      </div>
    </div>
  );
}