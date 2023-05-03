/* import { useState } from "react";
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

export default ContactForm; */

//-----------------------THIS IS THE DEFAULT CODE WHICH I DIDN'T WANNA DELETE JUST IN CASE IT IS NEED LATER----------------

import Head from "next/head";
import styles from "./Home.module.css";
import { useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://tpysfrkiwckoydwsbleo.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRweXNmcmtpd2Nrb3lkd3NibGVvIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY4MjU4MzQxNCwiZXhwIjoxOTk4MTU5NDE0fQ.H5j86z9-UnYgRdUX1jifGjuq1zqchKFdNE1aiMFEbxA"
);

export default function Home() {
  const [price, setPrice] = useState("");
  const [size, setSize] = useState("");
  const [message, setMessage] = useState("");
  const [zipcode, setZipcode] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase
      .from("properties")
      .insert({ price, size, zipcode, message });

    if (error) {
      console.error(error);
    } else {
      console.log("Data inserted successfully:", data);
    }

    Router.push({
      pathname:
        "http://localhost:3000/contact?selectedBuyers=f0118597%2Ca2a94863",
      query: { data: JSON.stringify(data) },
    });
  };

  console.log("Size: ", size);
  console.log("Price: ", price);
  console.log("Zipcode: ", zipcode);
  console.log("Message: ", message);

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
              name="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
            <label htmlFor="size">Size in Square Meters</label>
            <input
              id="size"
              type="text"
              name="size"
              value={size}
              onChange={(e) => setSize(e.target.value)}
              required
            />
            <label htmlFor="zipcode">Zip Code</label>
            <input
              id="zipcode"
              type="text"
              name="zipcode"
              value={zipcode}
              onChange={(e) => setZipcode(e.target.value)}
              required
            />
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              value={message}
              name="message"
              onChange={(e) => setMessage(e.target.value)}
              required
            />
            <label htmlFor="propertyType">Property Type:</label>
            <select id="estateType" name="estateType" required>
              <option value="">Choose a property type</option>
              <option id="villa" name="villa" value="villa">
                Villa
              </option>
              <option id="lejlighed" name="lejlighed" value="lejlighed">
                Lejlighed
              </option>
              <option id="rækkehus" name="rækkehus" value="rækkehus">
                Rækkehus
              </option>
            </select>
            <button className={styles.button}>Find Potential Buyers</button>
          </form>
        </div>
      </div>
    </>
  );
}

/* Import Head from "next/head";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Find buyer | EDC</title>
      </Head>
      <div className="wrapper">
        <h1 className={styles.headline}>Find A buyer for your property</h1>
        <div className={styles.content}>
          <p>
            To get started, edit <code>pages/index.js</code> and save to reload.
          </p>
        </div>
        <div className={styles.content}>
          <h2>Let's Have a meeting soon</h2>
          <p>
            This is simple example of how you could submit a form to another
            page in Next.js, without using a custom <code>submit</code> function
            (e.g. without JavaScript). It is unstyled and unfinished. You can
            use this as base, or implement your own solution.
          </p>
          <p>
            Make sure to read the guide on{" "}
            <a
              href="https://nextjs.org/docs/guides/building-forms"
              target="_blank"
            >
              building forms in Next.js
            </a>
          </p>
          <form action="/buyers" method="GET" className={styles.form}>
            <label>
              <span className={styles.label}>Zip Code</span>
              <input name="zipCode" required />
            </label>
            <button className={styles.button}>Submit</button>
          </form>
        </div>
      </div>
    </>
  );
} */
