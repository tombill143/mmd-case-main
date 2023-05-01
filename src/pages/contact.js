import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
<<<<<<< HEAD
import styles from "./buyers/Buyers.module.css";
=======
>>>>>>> 3e6301cfdb308435f9670a89207e946ffe38bd16

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
<<<<<<< HEAD
  const [phone, setPhone] = useState("");
=======
  const [message, setMessage] = useState("");
  const [zipcode, setZipcode] = useState("");
>>>>>>> 3e6301cfdb308435f9670a89207e946ffe38bd16
  const [selectedBuyers, setSelectedBuyers] = useState([]);

  const router = useRouter();
  const { selectedBuyers: selectedBuyersQuery } = router.query;

  // Parse the query parameter and update the selectedBuyers state
  useEffect(() => {
    if (selectedBuyersQuery) {
      const selectedBuyersArray = selectedBuyersQuery.split(",");
      setSelectedBuyers(selectedBuyersArray);
    }
  }, [selectedBuyersQuery]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Do something with the form data and the selectedBuyers data
<<<<<<< HEAD
    console.log({ name, email, phone, selectedBuyers });
=======
    console.log({ name, email, message, zipcode, selectedBuyers });
>>>>>>> 3e6301cfdb308435f9670a89207e946ffe38bd16
  };

  return (
    <>
<<<<<<< HEAD
      <h1 className={styles.headline}>Contact Potential Buyers</h1>
      {selectedBuyers.length > 0 && (
        <>
          <h2 id="selectedBuyers" className={styles.headline}>
            Selected buyers:
          </h2>
=======
      <h1>Contact Potential Buyers</h1>
      {selectedBuyers.length > 0 && (
        <>
          <h2>Selected buyers:</h2>
>>>>>>> 3e6301cfdb308435f9670a89207e946ffe38bd16
          <ul>
            {selectedBuyers.map((buyer) => (
              <li key={buyer}>Buyer Id: {buyer}</li>
            ))}
          </ul>
        </>
      )}
<<<<<<< HEAD
      <div id="contactform" className="wrapper">
        <div className={styles.content}>
          <form onSubmit={handleSubmit}>
            <label>
              Name:
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>
            <label>
              Phone:
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                maxLength={8}
                required
              />
            </label>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
=======
      <form onSubmit={handleSubmit}>
        {/* Form fields */}
        <button type="submit">Submit</button>
      </form>
>>>>>>> 3e6301cfdb308435f9670a89207e946ffe38bd16
    </>
  );
}
