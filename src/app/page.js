"use client"
import { useRouter } from "next/navigation";
import React, { useState } from "react"
import styles from "./Home.module.css"

export default function Home() {

  const [name, setName] = useState("");
  const router = useRouter();

  const predictionFunc = () => {
    router.push(`/${name}`);
  }


  return (
    <div className={styles.body}>
      <div className={styles.Card}>
        <div>
          <h1 style={{ marginBottom: "40px" }}>NAME PREDICTION</h1>
        </div>
        <div style={{ display: "flex", gap: "20px" }}>
          <input type="text" value={name} placeholder="Write your name..." style={{ outline: "none", padding: "10px" }} onChange={(e) => setName(e.target.value)} ></input>
          <button style={{ textDecoration: "none", color: "black", padding: "10px", backgroundColor: "white", border: "none", cursor: "pointer", borderRadius: "2px", fontWeight: "bold" }} onClick={predictionFunc} >PREDICT</button>
        </div>
      </div>
    </div>
  )
}
