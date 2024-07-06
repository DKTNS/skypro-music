'use client';
//import Image from "next/image";
//import styles from "./globals.css";
//import Track from "@/components/track/track";
//import Link from "next/link";
//import classNames from "classnames";
//import VolumeBar from "@/components/volumebar/volumebar";
import Nav from "@/components/nav/nav";
import SideBar from "@/components/sidebar/sidebar";
import CenterBlock from "@/components/centerblock/centerblock";
import BarPlayer from "@/components/barplayer/barplayer";
import styles from "./page.module.css";
import { useState } from "react";
import { TrackTypeObj } from "@/types";


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
      {track && <BarPlayer track={tracks} />}
      <footer className={styles.footer} />
    </div>
  </div>
  );
}
