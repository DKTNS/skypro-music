//import Image from "next/image";
//import styles from "./globals.css";
//import Track from "@/components/track/track";
//import Link from "next/link";
import Nav from "@/components/nav/nav";
import SideBar from "@/components/sidebar/sidebar";
import CenterBlock from "@/components/centerblock/centerblock";
import BarPlayer from "@/components/barplayer/barplayer";
//import VolumeBar from "@/components/volumebar/volumebar";

export default function Home() {
  return (
<div className="wrapper">
    <div className="container">
      <main className="main">
        <Nav />
        <SideBar />
        <CenterBlock />
        
      </main>
        <BarPlayer />
      <footer className="footer" />
    </div>
  </div>
  );
}
