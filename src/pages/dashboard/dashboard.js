import { useState } from "react";
import styles from "./Home.module.css";
import Head from "next/head";
//import supabase

function AdminDashBoard() {
  //const [date, setDate] = import from Supabase (sort by create at)
  //const [name, setName] =  import data from Supabase (id?)
  //const [email, setEmail] = useState("");
  //price fetch data from api
  //const [zipcode, setZipcode] = useState(""); fetch data from api
  //size from api
  //estate type fetch data from api

  return (
    <>
      <Head>
        <title>Admin Dashboard | EDC</title>
      </Head>
      <div className="AdDashWrapper">
        <h1 className={styles.headline}>Latest Contacts</h1>
        <p>Date</p>
        <p>Name</p>
        <a href="mailto:">Email</a>
        <a>Phone</a>
        <input type="checkbox">Contact</input>
        <p>Price</p>
        <p>Zipcode</p>
        <p>Size</p>
        <p>Estate type</p>
        <button className={styles.button}>X</button>
      </div>
    </>
  );
}
export default AdminDashBoard;
