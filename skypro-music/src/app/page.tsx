'use client';
import Nav from "@/components/nav/nav";
import SideBar from "@/components/sidebar/sidebar";
import CenterBlock from "@/components/centerblock/centerblock";
import BarPlayer from "@/components/barplayer/barplayer";
//import VolumeBar from "@/components/volumebar/volumebar";
import styles from "./page.module.css";

import { TrackTypeObj } from "@/types";
import { useState } from "react";
import { PlayList } from "@/components/playList/playList";
//import { PlayList } from "@/components/playList/playList";


export default function Home() {
  const [track] = useState<TrackTypeObj | null>(null);
  return (
  <div className={styles.wrapper}>
    <div className={styles.container}>
      <main className={styles.main}>
        <Nav />
        <CenterBlock />
        <SideBar />
      </main>
        {track && (<BarPlayer track={track}/>)}
      <footer className={styles.footer} />
    </div>
  </div>
  );
}
