//--------------------------------THIS IS AN ATTEMPT TO MERGE ALL CODE TOGETHER STARTING WITH TOMS CODE ----------

import Head from "next/head";
import styles from "./Home.module.css";
import { useState } from "react";

export default function Home() {
  const [price, setPrice] = useState("");
  const [size, setSize] = useState("");
  const [message, setMessage] = useState("");
  const [zipcode, setZipcode] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/contact", {
      body: JSON.stringify({ price, size, zipcode, message }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });
    const result = await res.json();
    console.log(result);
  };

  return (
    <>
      <Head>
        <title>Find buyer | EDC</title>
      </Head>
      <div className="wrapper">
        <h1 className={styles.headline}>Find A buyer for your property</h1>
        <div className={styles.content}>
          <form action="/buyers" method="GET" className={styles.form}>
            <label htmlFor="price">Price</label>
            <input
              id="price"
              type="text"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
            <label htmlFor="size">Size in Square Meters</label>
            <input
              id="size"
              type="text"
              value={size}
              onChange={(e) => setSize(e.target.value)}
              required
            />
            <label htmlFor="zipcode">Zip Code</label>
            <input
              id="zipcode"
              type="text"
              value={zipcode}
              onChange={(e) => setZipcode(e.target.value)}
              required
            />
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
            <label htmlFor="property-type">Property Type:</label>
            <select id="property-type" name="property-type" required>
              <option value="">Choose a property type</option>
              <option value="house">Villa</option>
              <option value="apartment">Lejlighed</option>
              <option value="condo">Rækkehus</option>
            </select>
            <button className={styles.button}>Find Potential Buyers</button>
          </form>
        </div>
      </div>
    </>
  );
}
