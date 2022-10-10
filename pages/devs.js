import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "./Header";
import Footer from "./Footer";
import { MdCode, MdDownload, MdPerson } from "react-icons/md";
const yash = {
  position: "absolute",
  right: "0",
  marginTop: "100vh",
  left: "0",
  padding: "1rem",
  textAlign: "center",
};
export default function About() {
  return (
    <div className={"container"}>
      <Head>
        <title>About Shastra</title>
        <meta name="description" content="Generated by create next app" />
        <meta
          name="keywords"
          content="Shastra, ShastraOS, Shastra linux, shastraos, Shastra OS, ShastraOS websites, Linux, Linux OS, OS, Gnome, Web3 OS, Web3 based OS, Web3 based Operating System, Vivek Pal, Arch Linux "
        />
        <meta name="theme-color" content="#317EFB" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon-192x192.png" />
      </Head>
      <Header />
      <div className={styles.buttonGap}>
        <button
          className={styles.blueBtn}
          onClick={() => {
            window.open("https://vivekpal.in");
          }}
        >
          <MdPerson className={styles.icon} />
          Vivek Pal
        </button>
      </div>

      <br />

      <div className={styles.box}>
        <div className={styles.card}>
          <img
            className={styles.cardimg}
            src="http://portfolio.newschool.edu/guptm392/files/2014/08/DSC_1004-2-1a1yqd6.jpg"
            width="100%"
            height="50%"
          ></img>
          <div className={styles.cardcontent}>
            <h3>Vivek Pal</h3>
            <p>
              Web designer and developer<br></br> Senior designer
            </p>
          </div>
          <div className={styles.cardfooter}>
            <h3>Read More</h3>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
