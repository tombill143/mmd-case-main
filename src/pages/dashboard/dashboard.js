import { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import styles from "./dashboard.module.css";

function AdminDashBoard () {
<>
  <Head>
        <title>Admin Dashboard | EDC</title>
  </Head>
<article>
<p>Date</p>
<p>Name</p>
<p>Email</p>
<p>Phone</p>
<p>Contact</p>
<p>Price</p>
<p>Zipcode</p>
<p>Size</p>
<p>Estate type</p>
<button>Delete</button>
</article>
</>
    return(

    );
}
export default AdminDashBoard;