import { useState } from "react";
import Head from "next/head";
import Link from "next/link";

//import supabase

function AdminDashBoard() {
  //const [date, setDate] = import from Supabase (sort by create at)
  //const [name, setName] =  import data from Supabase (id?)
  //const [email, setEmail] = useState("");
  //prize fetch data from api
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
        <Link to>
          {" "}
          <p>Email</p>{" "}
        </Link>
        <Link to>
          <p>Phone</p>{" "}
        </Link>
        <p>Contact</p>
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
