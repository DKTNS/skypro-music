//import Image from "next/image";
//import styles from "./globals.css";
//import Track from "@/components/track/track";
//import Link from "next/link";
import Nav from "@/components/nav/nav";
import SideBar from "@/components/sidebar/sidebar";
import CenterBlock from "@/components/centerblock/centerblock";
import BarPlayer from "@/components/barplayer/barplayer";
//import VolumeBar from "@/components/volumebar/volumebar";
import styles from "./page.module.css";
//import classNames from "classnames";

export default function Home() {
  return (
  <div className={styles.wrapper}>
    <div className={styles.container}>
      <main className={styles.main}>
        <Nav />
        <CenterBlock />
        <SideBar />
      </main>
        <BarPlayer />
      <footer className={styles.footer} />
    </div>
  </div>
  );
}
