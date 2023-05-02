import Head from "next/head";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import styles from "./Buyers.module.css";
import Link from "next/link";

export default function Buyers() {
  const [buyerProfiles, setBuyerProfiles] = useState([]);
  const [selectedBuyers, setSelectedBuyers] = useState([]);
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

  useEffect(() => {
    const fetchBuyerProfiles = async () => {
      const res = await fetch("/api/find-buyers");
      const data = await res.json();
      setBuyerProfiles(data);
    };
    fetchBuyerProfiles();
  }, []);

  const router = useRouter();

  // Buyer checkbox
  const handleBuyerSelect = (buyerId) => {
    // If buyer is already selected, remove it from the selected buyers list
    if (selectedBuyers.includes(buyerId)) {
      setSelectedBuyers(selectedBuyers.filter((id) => id !== buyerId));
    } else {
      // Otherwise, add it to the selected buyers list
      setSelectedBuyers([...selectedBuyers, buyerId]);
    }
  };

  // Checkbox change handler
  const handleCheckboxChange = () => {
    setIsCheckboxChecked(!isCheckboxChecked);
  };

  // Function to send user to contact page
  const contactClick = () => {
    router.push("/contact");
  };

  return (
    <>
      <Head>
        <title>Potential buyers | EDC</title>
      </Head>

      <div className="wrapper">
        <h1 className={styles.headline}>Potential buyers</h1>
        <p>
          Thank you for submitting your info on your property. On this page we
          have listed suitable buyers. Please read through the list and add the
          ones that are interesting by clicking the + icon in the corner of each
          buyer.
        </p>
        <div className={styles.content_container}>
          {/* Render a div for each buyer profile */}
          {buyerProfiles.map((buyer) => (
            <div className={styles.content} key={buyer.id}>
              <h2>Buyer Id: {buyer.id}:</h2>

              {/* Display buyer information */}
              <pre>
                <p>Max price: {buyer.maxPrice} DKK</p>
                <p>Minimum size: {buyer.minSize} m2</p>
                <p>Adults in household: {buyer.adults}</p>
                <p>Children in household: {buyer.children}</p>
                <p>About the buyer: {buyer.description}</p>
                <p>Estate type: {buyer.estateType}</p>
                <p>Possible take-over-date: {buyer.takeoverDate}</p>
              </pre>

              {/* Render a checkbox for selecting the buyer */}
              <div className="checkbox-container">
                <label>
                  Choose buyer
                  <input
                    type="checkbox"
                    checked={selectedBuyers.includes(buyer.id)}
                    onChange={() => handleBuyerSelect(buyer.id)}
                  />
                </label>
              </div>
            </div>
          ))}

          {/* Render a button for navigating to the contact page */}
          <Link
            href={{
              pathname: "/contact",
              query: { selectedBuyers: selectedBuyers.join(",") },
            }}
          >
            <button
              className={styles.button}
              onClick={contactClick}
              disabled={!selectedBuyers.length}
              style={{
                backgroundColor:
                  selectedBuyers.length === 0 ? "grey" : "#164573",
              }}
            >
              Contact Potential Buyers
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
