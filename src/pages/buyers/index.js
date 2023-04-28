
import Head from "next/head";
import { useRouter } from "next/router";
import { useState, useEffect} from "react";
import styles from "./Buyers.module.css";

export default function Buyers() {
  const [buyerProfiles, setBuyerProfiles] = useState([]);
  const [selectedBuyers, setSelectedBuyers] = useState ([]);
  //the checkboxes, to change the state when selected

  useEffect(() => {
    const fetchBuyerProfiles = async () => {
      const res = await fetch("/api/find-buyers");
      const data = await res.json();
      setBuyerProfiles(data);
    };
    fetchBuyerProfiles();
  }, []);

  const { query } = useRouter();

////////////////////////
 //buyer checkbox
  const handleBuyerSelect = (buyerId) => {
    // If buyer is already selected, remove it from the selected buyers list
    if (selectedBuyers.includes(buyerId)) {
      setSelectedBuyers(selectedBuyers.filter((id) => id !== buyerId));
    } else {
      // Otherwise, add it to the selected buyers list
      setSelectedBuyers([...selectedBuyers, buyerId]);
    }
  };
  ////////////////////////



//   const [checked, setChecked] = React.useState(true);

//  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
// setChecked(event.target.checked);
  return (
    <>
      <Head>
        <title>Potential buyers | EDC</title>
      </Head>
      <div className="wrapper">
        <h1 className={styles.headline}>Potential buyersss</h1>
        <p>
          Thank you for submitting your info on your property. On this page we
          have listed suitable buyers. Please read through the list and add the
          ones that are interesting by clicking the + icon in the corner of
          each buyers.
        </p>
        <div className={styles.content_container}>
          {buyerProfiles.map((buyer) => (
            // copying and posting new mapped array
            //shoyld we use stringify like in Jonas' live coding example? 
            //Not gonna change it now, as i want to see what need to be done to hook this site up to contact/first site
            <div className={styles.content} key={buyer.id}>
              <h2>Buyer Id: {buyer.id}:</h2>

             {/* /////////////////////// */}
              <input
              type="checkbox"
              checked={selectedBuyers.includes(buyer.id)}
              onChange={() => handleBuyerSelect(buyer.id)}
              />
              {/* this transfers the selected buyers iID to state, so we just need to find a way to get it to the next side also! */}
              {/* /////////////////////// */}

              <pre>
                {/* "pre respects line breaks" */}
                {/* note to self: could have a BUYER NO X instead of ID at the top, looks nicer */}
                <p>Max price: {buyer.maxPrice} DKK</p>
                <p>Minimum size: {buyer.minSize} m2</p>
                <p>Adults in household: {buyer.adults}</p>
                <p>Children in household: {buyer.children}</p>
                <p>About the buyer: {buyer.description}</p>
                {/* need this shit to not overflow, cant make it line break??? */}
                <p>Estate type: {buyer.estateType}</p>
                <p>Possible take-over-date: {buyer.takeoverDate}</p>
                {/* <code>{JSON.stringify(buyer, null, 2)}</code> */}
              </pre>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
