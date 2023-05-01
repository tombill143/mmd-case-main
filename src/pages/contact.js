import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [zipcode, setZipcode] = useState("");
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
    console.log({ name, email, message, zipcode, selectedBuyers });
  };

  return (
    <>
      <h1>Contact Potential Buyers</h1>
      {selectedBuyers.length > 0 && (
        <>
          <h2>Selected buyers:</h2>
          <ul>
            {selectedBuyers.map((buyer) => (
              <li key={buyer}>Buyer Id: {buyer}</li>
            ))}
          </ul>
        </>
      )}
      <form onSubmit={handleSubmit}>
        {/* Form fields */}
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
