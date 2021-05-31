import axios from "axios"
import Head from "next/head"
import React from "react"
import useSWR from "swr"
import styles from "../styles/Home.module.css"

const fetcher = async (url) => {
  const res = await axios({ method: "get", url })
  return res.data
}

export default function Home() {
  const { data, error, mutate } = useSWR("/api/pet", fetcher)

  if (error) {
    return <div>Error...</div>
  }
  if (!data) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <Head>
        <title>Meet Fluffos</title>
        <meta name="description" content="The cutest fluffos online" />
        <link rel="icon" href="/dog-icon.png" />
      </Head>
      <main className={styles.container}>
        <div>
          <button
            onClick={() => {
              mutate()
            }}
          >
            Swipe
          </button>
        </div>

        <div>
          <p>
            {data.species}, {data.name}
          </p>
        </div>
      </main>
    </div>
  )
}
