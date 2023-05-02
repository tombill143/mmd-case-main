import { useState, useEffect } from "react";
import styles from "./dashboard.module.css";
import Head from "next/head";
import { createClient } from '@supabase/supabase-js';

import { getFileInfo } from "prettier";

// import {supabase} from './supabaseClient'
//SE HVAD HOMIE KSRIVER I SINN SUPABASECLIENT COMPONENT


// import { table } from "console";

const supabaseUrl = 'https://tpysfrkiwckoydwsbleo.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRweXNmcmtpd2Nrb3lkd3NibGVvIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY4MjU4MzQxNCwiZXhwIjoxOTk4MTU5NDE0fQ.H5j86z9-UnYgRdUX1jifGjuq1zqchKFdNE1aiMFEbxA"
// const supabase = createClient(supabaseUrl, supabaseKey)

export default function AdminDashboard(){
  const supabase = createClient(supabaseUrl, supabaseKey);

  const [name, setName] = useState ("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    getInfo();

  },
  [])

  async function getInfo(){
    try {
      const {data, error} = await supabase
      .from("seller-info")
      .select("*")
      .limit(10)
      //or whatever idk

    } catch (error){
      alert(error.message);
    }
  }
  //to run it once

  

  // async function getSellerInfo(){
    //to give an error if something is fucked - not doing that now tho
  // }
   


 return(
  <>
   <Head>
     <title>Admin Dashboard | EDC</title>
   </Head>

    <div className="wrapper">
        <h1 className={styles.headline}>Admin Dashboard | Seller Info</h1>
    </div>
{/* 
    {name.map((seller) => (




   ))} */}
    

   
  </>
 );
}





