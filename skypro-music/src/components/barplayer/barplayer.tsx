"use client";
import VolumeBar from "../volumebar/volumebar";
import Link from "next/link";
import styles from "./barplayer.module.css";
import classNames from "classnames";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { TrackType, TrackTypeObj } from "@/types";
import ProgressBar from "../progressBar/progressBar";
type PlayerType = {
  track: TrackTypeObj;
};

export default function BarPlayer({ track }: PlayerType) {
  const audioRef = useRef<null | HTMLAudioElement>(null);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isLooping, setIsLooping] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(0.5); // Начальная громкость установлена на 50%
  //const [currentTrackIndex, setCurrentTrackIndex] = useState<number>(0);

  const duration = audioRef.current?.duration || 0;

  // const handleNextTrackClick = () => {
  //   dispatch(setNextTrack());
  // };
  // const handlePrevTrackClick = () => {
  //   dispatch(setPrevTrack());
  // };

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleLoop = () => {
    if (audioRef.current) {
      if (isLooping) {
        audioRef.current.loop = false;
      } else {
        audioRef.current.loop = true;
      }
    }
    setIsLooping((repeat) => !repeat);
  };
  // useEffect(() => {
  //   if(isPlaying) {
  //     console.log(audioRef.current);
  //     audioRef.current?.play();
  //   } else {
  //     audioRef.current?.pause();
  //   }
  // }, [isPlaying, currentTrack]);

  // useEffect(() => {
  //   const ref = audioRef.current;
  //   ref?.addEventListener("timeupdate", () =>
  //     setCurrentTime(audioRef.current!.currentTime)
  //   );
  // }, [currentTrack]);
useEffect (() => {
  audioRef.current?.addEventListener("timepdate", () =>
    setCurrentTime(audioRef.current!.currentTime))
}, [])

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const handleSeek = (event: ChangeEvent<HTMLInputElement>) => {
    if (audioRef.current) {
      setCurrentTime(Number(event.target.value));
      audioRef.current.currentTime = Number(event.target.value); // Преобразовали строку в число
    }
  };
  const handleVolumeChange = (event: ChangeEvent<HTMLInputElement>) => {
    let newVolume = Number(event.target.value);
    if (audioRef.current) {
      audioRef.current.volume = newVolume; // тут меняешь громость. audioRef это реф на тег audio твоего трека
      setVolume(newVolume); // если нужно в стейт положить
    }
  };
  return (
    <>
      <div className={styles.bar}>
        <div className={styles.barContent}>
          <audio ref={audioRef} src={track.track_file}></audio>
          <ProgressBar
            max={duration}
            value={currentTime}
            step={0.01}
            onChange={handleSeek}
          />
          <div className={styles.barPlayerProgress} />
          <div className={styles.barPlayerBlock}>
            <div className={classNames(styles.barPlayer, styles.player)}>
              <div className={styles.playerControls}>
                <div className={styles.playerBtnPrev}>
                  <svg className={styles.playerBtnPrevSvg}>
                    <use xlinkHref="img/icon/sprite.svg#icon-prev" />
                  </svg>
                </div>
                <div
                  onClick={togglePlay}
                  className={classNames(styles.playerBtnPlay, styles.btn)}
                >
                  <svg className={styles.playerBtnPlaySvg}>
                    <use xlinkHref="img/icon/sprite.svg#icon-play" />
                  </svg>
                </div>
                <div className={styles.playerBtnNext}>
                  <svg className={styles.playerBtnNextSvg}>
                    <use
                      xlinkHref={`img/icon/sprite.svg#${
                        isPlaying ? "icon-pause" : "icon-play"
                      }`}
                    />
                  </svg>
                </div>
                <div
                  onClick={toggleLoop}
                  className={classNames(styles.playerBtnPepeat, styles.btnIcon)}
                >
                  <svg className={styles.playerBtnRepeatSvg}>
                    <use
                      xlinkHref={`img/icon/sprite.svg#{
                       isLooping ? "icon-repeat"  : "icon-repeat-toggled"
                      }`}
                    />
                  </svg>
                </div>
                <div
                  className={classNames(
                    styles.playerBtnPhuffle,
                    styles.btnIcon
                  )}
                >
                  <svg className={styles.playerBtnShuffleSvg}>
                    <use xlinkHref="img/icon/sprite.svg#icon-shuffle" />
                  </svg>
                </div>
              </div>
              <div
                className={classNames(styles.playerTrackPlay, styles.trackPlay)}
              >
                <div className={styles.trackPlayContain}>
                  <div className={styles.trackPlayImage}>
                    <svg className={styles.trackPlaySvg}>
                      <use xlinkHref="./img/icon/sprite.svg#icon-note" />
                    </svg>
                  </div>
                  <div className={styles.trackPlayAuthor}>
                    <span className={styles.trackPlayAuthorLink}>Ты та...</span>
                  </div>
                  <div className={styles.trackPlayAlbum}>
                    <span className={styles.trackPlayAlbumLink}>Баста</span>
                  </div>
                </div>
                <div className={styles.trackPlayLikeDis}>
                  <div
                    className={classNames(styles.trackPlayLike, styles.btnIcon)}
                  >
                    <svg className={styles.trackPlayLikeSvg}>
                      <use xlinkHref="./img/icon/sprite.svg#icon-like" />
                    </svg>
                  </div>
                  <div
                    className={classNames(
                      styles.trackPlayDislike,
                      styles.btnIcon
                    )}
                  >
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
    </>
  );
}
