import Head from "next/head"
import styles from "../styles/Home.module.css"
import Link from "next/link"
import Image from "next/image"
import shuffleArray from "../lib/shuffleArray"
import Router from "next/router"
import image from "next/image"

export const getStaticProps = async () => {
  const res = await fetch("https://api.thedogapi.com/v1/breeds", {
    headers: {
      "x-api-key": process.env.API_KEY,
    },
  })
  const data = await res.json()
  const randomDogs = shuffleArray(data)

  return {
    props: {
      randomDogs: randomDogs[0],
    },
  }
}

export default function Home({ randomDogs }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Meet Fluffos</title>
        <meta name="description" content="The cutest fluffos online" />
        <link rel="icon" href="/dog-icon.png" />
      </Head>
      <main>
        <Image src="/dog.svg" width={100} height={100} alt="Dogo Logo"></Image>
        <div>
          <Link href="/dogs">
            <a>Get Started</a>
          </Link>
        </div>
        <img src={randomDogs.image.url}></img>
        <p>{randomDogs.name}</p>
        <p>{randomDogs.breed_group}</p>
        <p>{randomDogs.bred_for}</p>
        <p>{randomDogs.temperament}</p>
        <button type="button" onClick={() => Router.push("/")}>
          Reload me
        </button>
      </main>
    </div>
  )
}
