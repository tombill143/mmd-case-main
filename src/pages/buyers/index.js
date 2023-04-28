import Head from "next/head";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import styles from "./Buyers.module.css";
import Link from "next/link";

export default function Buyers() {
  const [buyerProfiles, setBuyerProfiles] = useState([]);
  const [selectedBuyers, setSelectedBuyers] = useState([]);
  //the checkboxes, to change the state when selected

  useEffect(() => {
    const fetchBuyerProfiles = async () => {
      const res = await fetch("/api/find-buyers");
      const data = await res.json();
      setBuyerProfiles(data);
    };
    fetchBuyerProfiles();
  }, []);

  const router = useRouter();

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

  //function to send user to contact page!
  const contactClick = () => {
    router.push("/contact");
  };

  //   const [checked, setChecked] = React.useState(true);
  //  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  // setChecked(event.target.checked);

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
          buyers.
        </p>
        <div className={styles.content_container}>
          {buyerProfiles.map((buyer) => (
            // copying and posting new mapped array
            //shoyld we use stringify like in Jonas' live coding example?
            //Not gonna change it now, as i want to see what need to be done to hook this site up to contact/first site
            <div className={styles.content} key={buyer.id}>
              <h2>Buyer Id: {buyer.id}:</h2>

              {/* /////////////////////// */}

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
              <svg
                className="family"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.533 4a3.479 3.479 0 0 0-3.466 3.467c0 1.08.501 2.054 1.283 2.691-1.398.759-2.35 2.216-2.35 3.9V19.2a.8.8 0 0 0 .8.8h22.4a.8.8 0 0 0 .8-.8v-5.142c0-1.684-.952-3.141-2.35-3.9a3.475 3.475 0 0 0 1.283-2.691A3.479 3.479 0 0 0 19.467 4a3.479 3.479 0 0 0-3.45 3.8 2.9 2.9 0 0 0-1.35-.333A2.94 2.94 0 0 0 12 9.192a2.94 2.94 0 0 0-2.667-1.725 2.9 2.9 0 0 0-1.35.333A3.479 3.479 0 0 0 4.533 4zm0 1.6c1.04 0 1.867.826 1.867 1.867 0 1.04-.826 1.866-1.867 1.866a1.855 1.855 0 0 1-1.866-1.866c0-1.04.826-1.867 1.866-1.867zm14.934 0c1.04 0 1.866.826 1.866 1.867 0 1.04-.826 1.866-1.866 1.866A1.855 1.855 0 0 1 17.6 7.467c0-1.04.826-1.867 1.867-1.867zM9.333 9.067c.746 0 1.334.587 1.334 1.333s-.588 1.333-1.334 1.333A1.321 1.321 0 0 1 8 10.4c0-.746.587-1.333 1.333-1.333zm5.334 0c.746 0 1.333.587 1.333 1.333s-.587 1.333-1.333 1.333a1.321 1.321 0 0 1-1.334-1.333c0-.746.588-1.333 1.334-1.333zM4.533 11.2c1.166 0 2.141.65 2.617 1.583a3.478 3.478 0 0 0-1.283 2.692V18.4H1.6v-4.342c0-1.589 1.285-2.858 2.933-2.858zm14.934 0c1.648 0 2.933 1.27 2.933 2.858V18.4h-4.267v-2.925c0-1.068-.515-1.993-1.283-2.633a2.893 2.893 0 0 1 2.617-1.642zM12 11.608c.173.379.425.71.733.984a3.493 3.493 0 0 0-.725.666 3.436 3.436 0 0 0-.741-.666 2.95 2.95 0 0 0 .733-.984zM9.333 13.6c1.003 0 1.742.699 1.85 1.642a.801.801 0 0 0 .025.108c-.001.042-.008.083-.008.125V18.4H7.467v-2.925c0-1.063.785-1.875 1.866-1.875zm5.334 0c1.081 0 1.866.812 1.866 1.875V18.4H12.8v-2.925c0-1.063.785-1.875 1.867-1.875z"
                  fill="currentColor"
                />
              </svg>

              <div className="checkbox-container">
                <label>
                  choose buyer
                  <input
                    type="checkbox"
                    checked={selectedBuyers.includes(buyer.id)}
                    onChange={() => handleBuyerSelect(buyer.id)}
                  />
                </label>
              </div>
            </div>
          ))}
          ;
          <Link href="/contact">
            <button className={styles.button} onClick={contactClick}>
              Contact Potential Buyers
            </button>
          </Link>
        </div>
      </div>

      {/* href className={styles.button} onClick={contactClick}>Contact Potential Buyers</button> */}
      {/* <button className={styles.button} onClick={contactClick}>Contact Potential Buyers</button> */}
    </>
  );
}
