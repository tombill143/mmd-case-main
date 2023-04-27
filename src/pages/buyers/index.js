import Head from "next/head";
import { useRouter } from "next/router";
import styles from "./Buyers.module.css";


export default function Buyers() {
  const { query } = useRouter();
  return (
    <>
      <Head>
        <title>Potential buyers | EDC</title>
      </Head>
      <div className="wrapper">
        <h1 className={styles.headline}>Potential buyersss</h1>
        
        <p>
          Thank you for submitting your info on your property. On this page we have listed suitable buyers. Please read through the list and add the ones that are interesting by clicking the '+' icon in the corner of each buyers. 

          {/* Make sure to read the docs on how to fetch data on a page - There are
          multiple ways of doing it, and you should choose the one that fits
          your solution best. */}
        </p>
        {/* <ul>
          <li>
            <a
              href="https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props"
              target="_blank"
            >
              next.js - Data fetching
            </a>
          </li>
          <li>
            <a
              href="https://react.dev/learn/synchronizing-with-effects#fetching-data"
              target="_blank"
            >
              react.dev - Fetching data
            </a>
          </li>
        </ul> */}

        <div className={styles.content_container}>
           <div className={styles.content}>
             {/* <h2>Query params:</h2> */}
             <h2>Buyer X:</h2>
             <pre>
             <code>{JSON.stringify(query, null, 2)}</code>
              </pre>
           </div>

           <div className={styles.content}>
             <h2>Buyer X:</h2>
             <pre>
             <code>{JSON.stringify(query, null, 2)}</code>
             </pre>
           </div>
        </div>
        <div className={styles.content_container}>
           <div className={styles.content}>
             {/* <h2>Query params:</h2> */}
             <h2>Buyer X:</h2>
             <pre>
             <code>{JSON.stringify(query, null, 2)}</code>
              </pre>
           </div>

           <div className={styles.content}>
             <h2>Buyer X:</h2>
             <pre>
             <code>{JSON.stringify(query, null, 2)}</code>
             </pre>
           </div>
        </div>

      </div>
    </>
  );
}
