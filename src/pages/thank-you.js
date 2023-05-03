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
        <title>Thanks</title>
      </Head>

      <div className="formWrapper">
        <h1 className={styles.headline}>Thanks</h1>
        <div className={styles.content}>
          <p className="thanks">You will hear from us within 1-2 days</p>
          <svg
            className="heart"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill-rule="nonzero"
              stroke="currentColor"
              stroke-width="2"
              d="M12 18.573l6.894-7.015a3.898 3.898 0 0 0 0-5.44 3.698 3.698 0 0 0-5.298 0L12 7.742l-1.596-1.624a3.698 3.698 0 0 0-5.298 0 3.898 3.898 0 0 0 0 5.44L12 18.573z"
            />
          </svg>

          <button
            id="return"
            className={styles.button}
            onClick={() => (window.location.href = "http://localhost:3000/")}
          >
            Return to Home Page
          </button>
        </div>
      </div>
    </>
  );
}

export default ContactForm;
