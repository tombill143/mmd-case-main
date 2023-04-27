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
        <title>ContactForm</title>
      </Head>
      <div className="formWrapper">
        <h1 className={styles.headline}>Find A buyer for your property</h1>
        <div className={styles.content}>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Price</label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="email">Size in Square Meters</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="zipcode">Zip Code</label>
            <input
              id="zipcode"
              type="text"
              value={zipcode}
              onChange={(e) => setZipcode(e.target.value)}
            />
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <label htmlFor="property-type">Property Type:</label>
            <select id="property-type" name="property-type">
              <option value="">Choose a property type</option>
              <option value="house">Villa</option>
              <option value="apartment">Lejlighed</option>
              <option value="condo">Rækkehus</option>
            </select>
            <button type="submit">Find Potential Buyers</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default ContactForm;
