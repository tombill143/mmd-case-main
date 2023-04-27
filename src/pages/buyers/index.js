
import Head from "next/head";
import { useRouter } from "next/router";
import { useState, useEffect} from "react";
import styles from "./Buyers.module.css";

//the checkbox button

// import * as React from 'react';
// import Checkbox from '@mui/material/Checkbox';


//https://mui.com/material-ui/react-checkbox/

export default function Buyers() {
  const [buyerProfiles, setBuyerProfiles] = useState([]);

  useEffect(() => {
    const fetchBuyerProfiles = async () => {
      const res = await fetch("/api/find-buyers");
      const data = await res.json();
      setBuyerProfiles(data);
    };
    fetchBuyerProfiles();
  }, []);

  const { query } = useRouter();


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
          ones that are interesting by clicking the '+' icon in the corner of
          each buyers.
        </p>
        <div className={styles.content_container}>
          {buyerProfiles.map((buyer) => (
            // copying and posting new mapped array
            //shoyld we use stringify like in Jonas' live coding example? 
            //Not gonna change it now, as i want to see what need to be done to hook this site up to contact/first site
            <div className={styles.content} key={buyer.id}>
              <h2>Buyer Id: {buyer.id}:</h2>
              {/* <Checkbox
                checked={checked}
                onChange={handleChange}
               inputProps={{ 'aria-label': 'controlled' }}
                /> */}
              <pre>
                {/* "respects line breaks" */}
                {/* <p>Buyer Id: {buyer.id}</p> */}
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


// import Head from "next/head";
// import { useRouter } from "next/router";
// import { useState, useEffect} from "react";
// import styles from "./Buyers.module.css";

// // import { generateBuyerProfiles } from "@/data/buyerProfiles";




// export default function Buyers() {
//   const zipCode = parseInt(req.query.zipCode || "2100");
//   const profilesForZipCode = generateBuyerProfiles({
//     zipCode, 
//   });
  
//   res.setHeader("Cache-Control", "s-maxage=86400, stale-while-revalidate");
  
//   return res.status(200).json(profilesForZipCode);


//   const { query } = useRouter();
//   return (
//     <>
//       <Head>
//         <title>Potential buyers | EDC</title>
//       </Head>
//       <div className="wrapper">
//         <h1 className={styles.headline}>Potential buyersss</h1>
        
//         <p>
//           Thank you for submitting your info on your property. On this page we have listed suitable buyers. Please read through the list and add the ones that are interesting by clicking the '+' icon in the corner of each buyers. 

//           {/* Make sure to read the docs on how to fetch data on a page - There are
//           multiple ways of doing it, and you should choose the one that fits
//           your solution best. */}
//         </p>
//         {/* <ul>
//           <li>
//             <a
//               href="https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props"
//               target="_blank"
//             >
//               next.js - Data fetching
//             </a>
//           </li>
//           <li>
//             <a
//               href="https://react.dev/learn/synchronizing-with-effects#fetching-data"
//               target="_blank"
//             >
//               react.dev - Fetching data
//             </a>
//           </li>
//         </ul> */}

//         <div className={styles.content_container}>
//            <div className={styles.content}>
          
//              {/* <h2>Query params:</h2> */}
//              <h2>Buyer X:</h2>
//              <pre>
//              <code>{JSON.stringify(query, null, 2)}</code>
//               </pre>
              
//            </div>

//            <div className={styles.content}>
//              <h2>Buyer X:</h2>
//              <pre>
//              <code>{JSON.stringify(query, null, 2)}</code>
//              </pre>
//            </div>
//         </div>
//         <div className={styles.content_container}>
//            <div className={styles.content}>
//              {/* <h2>Query params:</h2> */}
//              <h2>Buyer X:</h2>
//              <pre>
//              <code>{JSON.stringify(query, null, 2)}</code>
//               </pre>
//            </div>

//            <div className={styles.content}>
//              <h2>Buyer X:</h2>
//              <pre>
//              <code>{JSON.stringify(query, null, 2)}</code>
//              </pre>
//            </div>
//         </div>
        

//       </div>
//     </>
//   );
// }
