"use client"
import { useRouter } from "next/navigation";
import React, { useState } from "react"

export default function Home() {

  const [name, setName] = useState("");
  const router = useRouter();

  const predictionFunc = () => {
    router.push(`/${name}`);
  }


  return (
    <>
      <div className="Card">
        <div>
          <h1>NAME PREDICTION</h1>
        </div>
        <div>
          <input type="text" value={name} placeholder="Write your name..." style={{ outline: "none" }} onChange={(e) => setName(e.target.value)} ></input>
          <button style={{ textDecoration: "none", color: "black" }} onClick={predictionFunc} >PREDICT</button>
        </div>
      </div>
    </>
  )
}
