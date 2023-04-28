import { useState } from "react";
import styles from "./Home.module.css";
import Head from "next/head";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [zipcode, setZipcode] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/contact", {
      body: JSON.stringify({ name, email, zipcode, message }),
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
        <title>Contact Potential Buyers</title>
      </Head>
      <div className="formWrapper">
        <h1 className={styles.headline}>Contact Potential Buyers</h1>

        <div className="ref-customer">
          <p className="ref">Ref: Customer 1</p>
          <p className="ref">Ref: Customer 2</p>
        </div>

        <form action="./thank-you" method="GET" className={styles.form}>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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

          <button className={styles.button}>Find Potential Buyers</button>
        </form>
      </div>
    </>
  );
}

export default ContactForm;
