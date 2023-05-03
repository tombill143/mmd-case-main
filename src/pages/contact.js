import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "./buyers/Buyers.module.css";
import { createClient } from "@supabase/supabase-js";
import { estateTypes } from "@/data/estateTypes";

const supabase = createClient(
  "https://tpysfrkiwckoydwsbleo.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRweXNmcmtpd2Nrb3lkd3NibGVvIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY4MjU4MzQxNCwiZXhwIjoxOTk4MTU5NDE0fQ.H5j86z9-UnYgRdUX1jifGjuq1zqchKFdNE1aiMFEbxA"
);

/* export async function getServerSideProps(context) {
  const { price, size, message, zipcode } = context.query;
  return {
    props: { price, size, message, zipcode },
  };
} */
export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedBuyers, setSelectedBuyers] = useState([]);

  const router = useRouter();
  const { query } = useRouter();
  const { selectedBuyers: selectedBuyersQuery } = router.query;
  console.log("Here is my query:", router, name, email, phone);

  // Parse the query parameter and update the selectedBuyers state
  useEffect(() => {
    if (selectedBuyersQuery) {
      const selectedBuyersArray = selectedBuyersQuery.split(",");
      setSelectedBuyers(selectedBuyersArray);
    }
  }, [selectedBuyersQuery]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase.from("sellerinfo").insert([
      {
        price: query.price,
        size: query.size,
        zipcode: query.zipcode,
        message: query.message,
        buyers: selectedBuyers,
        name: name, // Update here
        email: email, // Update here
        phone: phone, // Update here
        estateType: query.estateType,
      },
    ]);
    if (error) {
      console.log("Error inserting data: ", error.message);
    } else {
      console.log("Data inserted successfully: ", data);
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          price: query.price,
          size: query.size,
          zipcode: query.zipcode,
          message: query.message,
          buyers: selectedBuyersQuery,
          estateType: query.estateType,
          name,
          email,
          phone,
        }),
      });
      console.log("query.price is here", query.price);
      console.log("Response status:", response.status);

      if (response.ok) {
        console.log("Navigating to success page...");
      } else {
        console.log("Error submitting form data");
      }
    }
    router.push("/thank-you");
    console.log("e is: ", e);
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
            <input name="price" value={query.price} />
            <input name="size" value={query.size} />
            <input name="zipcode" value={query.zipcode} />
            <input name="message" value={query.message} />
            <input name="estateType" value={router.query.estateType} />
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
