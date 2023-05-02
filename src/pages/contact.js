import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "./buyers/Buyers.module.css";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://tpysfrkiwckoydwsbleo.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRweXNmcmtpd2Nrb3lkd3NibGVvIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY4MjU4MzQxNCwiZXhwIjoxOTk4MTU5NDE0fQ.H5j86z9-UnYgRdUX1jifGjuq1zqchKFdNE1aiMFEbxA"
);

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase
      .from("seller-info")
      .insert([{ name, email, phone }]);
    if (error) {
      console.log("Error inserting data: ", error.message);
    } else {
      console.log("Data inserted successfully: ", data);
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, phone }),
      });
      console.log("Response status:", response.status);
      if (response.ok) {
        console.log("Navigating to success page...");
      } else {
        console.log("Error submitting form data");
      }
    }
    router.push("/thank-you");
  };
  return (
    <>
      <h1 className={styles.headline}>Contact Potential Buyers</h1>
      {selectedBuyers.length > 0 && (
        <>
          <h2 id="selectedBuyers" className={styles.headline}>
            Selected buyers:
          </h2>
          <ul>
            {selectedBuyers.map((buyer) => (
              <li key={buyer}>Buyer Id: {buyer}</li>
            ))}
          </ul>
        </>
      )}
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
    </>
  );
}
