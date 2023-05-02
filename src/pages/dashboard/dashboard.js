import Head from "next/head";
import { useState, useEffect } from "react";
import styles from "./dashboard.module.css"; //
//import supabase

function AdminDashBoard() {
  return (
    <>
      <Head>
        <title>Admin Dashboard | EDC</title>
      </Head>
      <h1 className={styles.headline}>Latest Contacts</h1>
      <div className="wrapper">
        <h2 className={styles.content}>
          Hi Admin, see latest sellers contacts:
        </h2>
        <div className={styles.content_container}>
          <div className={styles.content}>
            <p>Date</p>
            <button className={styles.xButton}>x</button>
            <p>Name</p>
            <p>Price</p>
            <a href="emailto:">Email</a>
            <p>Zipcode</p>
            <a href="tel:">Phone</a>
            <p>Estate size</p>
            <p>Contact</p>
            <p>Estate type</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default AdminDashBoard;
