import { useState } from "react";
import Head from "next/head";
import "@/styles/globals.css";
import Link from "next/link";

function AdminDashBoard() {
  <>
    <Head>
      <title>Admin Dashboard | EDC</title>
    </Head>
    <article>
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
      <button>Delete</button>
    </article>
  </>;
  return {};
}
export default AdminDashBoard;
