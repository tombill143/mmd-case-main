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
    console.log("im here");
    router.push("/contact");
  };

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
          ones that are interesting by clicking the + icon in the corner of each
          buyer.
        </p>
        <div className={styles.content_container}>
          {/* Render a div for each buyer profile */}
          {buyerProfiles.map((buyer) => (
            <div className={styles.content} key={buyer.id}>
              <div className={styles.id_checkbox}>
                <h2>Buyer Id: {buyer.id}</h2>

                {/* /////////////////////// */}
                <input
                  type="checkbox"
                  checked={selectedBuyers.includes(buyer.id)}
                  onChange={() => handleBuyerSelect(buyer.id)}
                />
                {/* this transfers the selected buyers iID to state, so we just need to find a way to get it to the next side also! */}
                {/* /////////////////////// */}
              </div>
              <pre>
                {/* "pre respects line breaks" */}
                {/* note to self: could have a BUYER NO X instead of ID at the top, looks nicer */}
                <div className={styles.icontext}>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.724 1v4.966l-3.311-.001V7.62h3.311v1.864a6.62 6.62 0 1 1-4.08 9.722H2.483l-.001-3.31H0v-4.965h2.482V9.275H0V4.31h2.482V1h13.242zm1.655 9.931a4.966 4.966 0 1 0 0 9.931 4.966 4.966 0 0 0 0-9.931zm-6.62 4.966H4.138v1.655h6.83a6.633 6.633 0 0 1-.21-1.655zm0-3.31H1.655v1.654h9.104v-1.655zm3.31-3.311H4.138v1.655H13a6.64 6.64 0 0 1 1.068-.769l.001-.886zm-3.31-3.31H1.655V7.62h9.104V5.966zm3.31-3.31H4.138V4.31h9.931V2.655z"
                      fill="currentColor"
                    />
                  </svg>
                  <p>Max price: {buyer.maxPrice} DKK</p>
                </div>

                <div className={styles.icontext}>
                  <svg
                    width="24"
                    height="24"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M397.2 128v362c0 5.6-4.5 10.2-10.2 10.2H25c-5.6 0-10.2-4.6-10.2-10.2V128c0-5.7 4.6-10.2 10.2-10.2h223.9c5.7 0 10.2 4.6 10.2 10.2s-4.6 10.2-10.2 10.2h-32.6V331c-.2 5.5-4.7 9.8-10.2 9.8-5.5 0-10-4.4-10.2-9.8v-54.8H162c-5.6 0-10.2-4.6-10.2-10.2s4.6-10.2 10.2-10.2h33.8V138.2H35.2v117.6h31.6c5.7 0 10.2 4.6 10.2 10.2s-4.6 10.2-10.2 10.2H35.2v203.6h160.5V431c0-5.7 4.6-10.2 10.2-10.2 5.7 0 10.2 4.6 10.2 10.2v48.8h160.5V276.2H285c-5.6 0-10.2-4.6-10.2-10.2s4.6-10.2 10.2-10.2h91.8V138.2h-33.6c-5.6 0-10.2-4.6-10.2-10.2s4.6-10.2 10.2-10.2H387c5.7 0 10.2 4.5 10.2 10.2zM195.8 331v-.4.4zm20.4 0v-.4.4zM396.7 22.5c0-5.7-4.6-10.2-10.2-10.2s-10.2 4.6-10.2 10.2c0 .4 0 .8.1 1.1v10.6H35.7V22.5c0-5.7-4.6-10.2-10.2-10.2s-10.2 4.6-10.2 10.2c0 .4 0 .8.1 1.1v41.6c0 .4-.1.7-.1 1.1 0 5.6 4.6 10.2 10.2 10.2s10.2-4.6 10.2-10.2V54.7h340.6v10.6c0 .4-.1.7-.1 1.1 0 5.6 4.6 10.2 10.2 10.2 5.7 0 10.2-4.6 10.2-10.2l.1-43.9zm90.9 456.8h-11.7V138.7h10.6c.4 0 .7.1 1.1.1 5.6 0 10.2-4.6 10.2-10.2 0-5.7-4.6-10.2-10.2-10.2h-43.8c-5.7 0-10.2 4.6-10.2 10.2s4.6 10.2 10.2 10.2c.4 0 .8 0 1.1-.1h10.6v340.6h-11.7c-5.7 0-10.2 4.6-10.2 10.2s4.6 10.2 10.2 10.2c.4 0 .8 0 1.1-.1h41.6c.4 0 .7.1 1.1.1 5.6 0 10.2-4.6 10.2-10.2s-4.6-10.2-10.2-10.2z"
                    />
                  </svg>
                  <p>Minimum size: {buyer.minSize} m2</p>
                </div>

                <div className={styles.icontext}>
                  <svg
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
                  <p>
                    People in household: {buyer.adults} adults and{" "}
                    {buyer.children} children
                  </p>
                </div>

                {/* <div className={styles.icontext}> 
                <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.533 4a3.479 3.479 0 0 0-3.466 3.467c0 1.08.501 2.054 1.283 2.691-1.398.759-2.35 2.216-2.35 3.9V19.2a.8.8 0 0 0 .8.8h22.4a.8.8 0 0 0 .8-.8v-5.142c0-1.684-.952-3.141-2.35-3.9a3.475 3.475 0 0 0 1.283-2.691A3.479 3.479 0 0 0 19.467 4a3.479 3.479 0 0 0-3.45 3.8 2.9 2.9 0 0 0-1.35-.333A2.94 2.94 0 0 0 12 9.192a2.94 2.94 0 0 0-2.667-1.725 2.9 2.9 0 0 0-1.35.333A3.479 3.479 0 0 0 4.533 4zm0 1.6c1.04 0 1.867.826 1.867 1.867 0 1.04-.826 1.866-1.867 1.866a1.855 1.855 0 0 1-1.866-1.866c0-1.04.826-1.867 1.866-1.867zm14.934 0c1.04 0 1.866.826 1.866 1.867 0 1.04-.826 1.866-1.866 1.866A1.855 1.855 0 0 1 17.6 7.467c0-1.04.826-1.867 1.867-1.867zM9.333 9.067c.746 0 1.334.587 1.334 1.333s-.588 1.333-1.334 1.333A1.321 1.321 0 0 1 8 10.4c0-.746.587-1.333 1.333-1.333zm5.334 0c.746 0 1.333.587 1.333 1.333s-.587 1.333-1.333 1.333a1.321 1.321 0 0 1-1.334-1.333c0-.746.588-1.333 1.334-1.333zM4.533 11.2c1.166 0 2.141.65 2.617 1.583a3.478 3.478 0 0 0-1.283 2.692V18.4H1.6v-4.342c0-1.589 1.285-2.858 2.933-2.858zm14.934 0c1.648 0 2.933 1.27 2.933 2.858V18.4h-4.267v-2.925c0-1.068-.515-1.993-1.283-2.633a2.893 2.893 0 0 1 2.617-1.642zM12 11.608c.173.379.425.71.733.984a3.493 3.493 0 0 0-.725.666 3.436 3.436 0 0 0-.741-.666 2.95 2.95 0 0 0 .733-.984zM9.333 13.6c1.003 0 1.742.699 1.85 1.642a.801.801 0 0 0 .025.108c-.001.042-.008.083-.008.125V18.4H7.467v-2.925c0-1.063.785-1.875 1.866-1.875zm5.334 0c1.081 0 1.866.812 1.866 1.875V18.4H12.8v-2.925c0-1.063.785-1.875 1.867-1.875z" fill="currentColor" />
                </svg>
                <p>Adults in household: {buyer.adults}</p>
                </div> */}

                {/* <div className={styles.icontext}> 
                <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.533 4a3.479 3.479 0 0 0-3.466 3.467c0 1.08.501 2.054 1.283 2.691-1.398.759-2.35 2.216-2.35 3.9V19.2a.8.8 0 0 0 .8.8h22.4a.8.8 0 0 0 .8-.8v-5.142c0-1.684-.952-3.141-2.35-3.9a3.475 3.475 0 0 0 1.283-2.691A3.479 3.479 0 0 0 19.467 4a3.479 3.479 0 0 0-3.45 3.8 2.9 2.9 0 0 0-1.35-.333A2.94 2.94 0 0 0 12 9.192a2.94 2.94 0 0 0-2.667-1.725 2.9 2.9 0 0 0-1.35.333A3.479 3.479 0 0 0 4.533 4zm0 1.6c1.04 0 1.867.826 1.867 1.867 0 1.04-.826 1.866-1.867 1.866a1.855 1.855 0 0 1-1.866-1.866c0-1.04.826-1.867 1.866-1.867zm14.934 0c1.04 0 1.866.826 1.866 1.867 0 1.04-.826 1.866-1.866 1.866A1.855 1.855 0 0 1 17.6 7.467c0-1.04.826-1.867 1.867-1.867zM9.333 9.067c.746 0 1.334.587 1.334 1.333s-.588 1.333-1.334 1.333A1.321 1.321 0 0 1 8 10.4c0-.746.587-1.333 1.333-1.333zm5.334 0c.746 0 1.333.587 1.333 1.333s-.587 1.333-1.333 1.333a1.321 1.321 0 0 1-1.334-1.333c0-.746.588-1.333 1.334-1.333zM4.533 11.2c1.166 0 2.141.65 2.617 1.583a3.478 3.478 0 0 0-1.283 2.692V18.4H1.6v-4.342c0-1.589 1.285-2.858 2.933-2.858zm14.934 0c1.648 0 2.933 1.27 2.933 2.858V18.4h-4.267v-2.925c0-1.068-.515-1.993-1.283-2.633a2.893 2.893 0 0 1 2.617-1.642zM12 11.608c.173.379.425.71.733.984a3.493 3.493 0 0 0-.725.666 3.436 3.436 0 0 0-.741-.666 2.95 2.95 0 0 0 .733-.984zM9.333 13.6c1.003 0 1.742.699 1.85 1.642a.801.801 0 0 0 .025.108c-.001.042-.008.083-.008.125V18.4H7.467v-2.925c0-1.063.785-1.875 1.866-1.875zm5.334 0c1.081 0 1.866.812 1.866 1.875V18.4H12.8v-2.925c0-1.063.785-1.875 1.867-1.875z" fill="currentColor" />
                </svg>
                 <p>Children in household: {buyer.children}</p>
                </div> */}

                <div className={styles.icontext}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-heart-fill"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                    />
                  </svg>
                  {/* the svg works, but there's something fishy about this 'description' thing 
                  also cant style the overflow!*/}
                  <p>About: {buyer.description}</p>
                </div>

                <div className={styles.icontext}>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.778 11.105v8.246h12.444v-8.246L12 5.332l-6.222 5.773zM4 10.422 12 3l8 7.422V21H4V10.422z"
                      fill="currentColor"
                    />
                  </svg>
                  <p>Estate type: {buyer.estateType}</p>
                </div>

                <div className={styles.icontext}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-calendar-check-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zm-5.146-5.146l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
                  </svg>

                  <p>Possible take-over-date: {buyer.takeoverDate}</p>
                </div>
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
              query: {
                selectedBuyers: selectedBuyers.join(","),
                price: router.query.price,
                phone: router.query.phone,
                email: router.query.email,
                size: router.query.size,
                zipcode: router.query.zipcode,
                estateType: router.query.estateType,
                message: router.query.message,
              },
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

      {/* href className={styles.button} onClick={contactClick}>Contact Potential Buyers</button> */}
      {/* <button className={styles.button} onClick={contactClick}>Contact Potential Buyers</button> */}
    </>
  );
}
