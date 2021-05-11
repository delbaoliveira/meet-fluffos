import Head from "next/head"
import Image from "next/image"
import styles from "../styles/Home.module.css"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Meet Fluffos</title>
        <link rel="icon" href="/dog-logo.png" />
      </Head>

      <main className={styles.main}>
        <Image
          src="/dog-logo.png"
          alt="Dog Icon"
          height={100}
          width={100}
        ></Image>
        <div>Get Started</div>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  )
}
