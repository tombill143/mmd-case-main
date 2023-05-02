

import { useState, useEffect } from "react";
import styles from "./dashboard.module.css";
import Head from "next/head";
import { createClient } from '@supabase/supabase-js';
//write this and not other things, as the other ones are usually linking to components with the code in!

const supabaseUrl = 'https://tpysfrkiwckoydwsbleo.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRweXNmcmtpd2Nrb3lkd3NibGVvIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY4MjU4MzQxNCwiZXhwIjoxOTk4MTU5NDE0fQ.H5j86z9-UnYgRdUX1jifGjuq1zqchKFdNE1aiMFEbxA';
const supabase = createClient(supabaseUrl, supabaseKey);

function AdminDashboard() {
  const [sellerinfo, setSellerInfo] = useState([]);

  useEffect(() => {
    getInfo();
  }, [sellerinfo]);
  //putting sellerinfo in here makes the state reload immediately on screen 
  //by leaving it empty we have to manually reload the page to see the change

  async function getInfo() {
    const { data } = await supabase.from("sellerinfo").select();
    setSellerInfo(data);
  }


  //delete function!
  const deleteSeller = async (sellerId) => {
    try {
      await supabase.from('sellerinfo').delete().eq('id', sellerId);
      setSellerInfo(sellerId.filter((seller) => seller.id != sellerId));
    } catch (error) {
      console.log('error', error);
    }
    //https://dev.to/dailydevtips1/deleting-records-from-a-supabase-database-obp
};
 

  return (

    <>
     <Head>
       <title>Admin Dashboard | EDC</title>
     </Head>

     <h1 className={styles.headline}>Latest Contacts</h1>
      <div className="wrapper">
        <h2 className={styles.adminhello}>
          Hi Admin, see latest sellers contacts:
        </h2>
        <div className={styles.content_container}>
          
             {sellerinfo?.length > 0 ? (
        //if nothing is loaded, it will write loading... as in the p-tag, instead of error
        //dont think the ? and stuff is nessesary but i trie troubleshooting along the way
        //and now im too scared to remove it lmao 
            <ul>
             {sellerinfo.map((seller) => (
              <div className={styles.content} key={seller.id}>
                <p>Date: {seller.created_at}</p>
                <p>Name: {seller.name}</p>
                <p>E-mail: <a href="emailto:">{seller.email}</a></p>
                <p>Phone: <a href="phone:">{seller.phone}</a></p>
                <p>Buyers: {seller.buyers}</p>
                <p>Zipcode: {seller.zipcode}</p>
                <p>Estate type: {seller.estateType}</p>
                <p>Size: {seller.size} m2</p>
                <p className={styles.messagebox}>Message from client: {seller.message}</p>
                <button className={styles.xButton}onClick={() => deleteSeller(seller.id)}>x</button>
              </div>
             
            //seller is a variable we create in here, not linked to names in the database really
            //name and id is fromt he database tho!
              ))}
              </ul>
              ) : (
            <p>Loading...</p>
      )}
        </div>
      </div>
  </>
  );
}

export default AdminDashboard;



// const supabaseUrl = 'https://tpysfrkiwckoydwsbleo.supabase.co'
// const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRweXNmcmtpd2Nrb3lkd3NibGVvIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY4MjU4MzQxNCwiZXhwIjoxOTk4MTU5NDE0fQ.H5j86z9-UnYgRdUX1jifGjuq1zqchKFdNE1aiMFEbxA"
// // const supabase = createClient(supabaseUrl, supabaseKey)

// export const supabase = createClient(supabaseUrl, supabaseKey);
// //should it be here?? and with export? The videoguide uses components here so looks a bit different


// const AdminDashboard = () => {
//   const [fetchError, setFetchError] = useState(null)
//   const [info, setInfo] = useState(null)

//   useEffect(() =>  {
//     const fetchSellerInfo = async () =>{
//       const {data, error} = await supabase
//       //either we get data successfully OR error

//       .from('sellerinfo')
//       .select()
//       //this should fetch all the data iinside the table for us. the select() blank = all data. 

//       if(error){
//         setFetchError('error fetching info')
//         setInfo(null)
//         console.log(error)
//       } if (data){
//         setInfo(data)
//         setFetchError(null)
//       }
//     }
//     fetchSellerInfo()

//   }, [])

//   return(
//     <div className="homedashboard">
//       {fetchError && (<p>{fetchError}</p>)}
//       {info && (
//         <div className="info">
//           {info.map(info => (
//             <p>{info.name}</p>
//           ))}
//         </div>
//       )}
//     </div>
//   )
// }
    




// function AdminDashboard(){
// // export default function AdminDashboard(){

//   const [name, setName] = useState ("");
//   const [phone, setPhone] = useState("");
//   const [info, setInfo] = useState([]);

//   console.log(name);

//   useEffect(() => {
//     getInfo();

//   },
//   [])

//   async function getInfo(){
//     try {
//       const {data, error} = await supabase
//       .from("sellerinfo")
//       .select("*")
//       .limit(10)
//       //or whatever idk
//       if (error) throw error;
//       if(data!= null) {
//         setInfo(data);
//       }

//     } catch (error){
//       alert(error.message);
//     }
//   }
//   //to run it once

  

//   // async function getSellerInfo(){
//     //to give an error if something is fucked - not doing that now tho
//   // }
   

// console.log(sellerinfo);
// 
  // <>
  //  <Head>
  //       <title>Admin Dashboard | EDC</title>
  //     </Head>
  //     <h1 className={styles.headline}>Latest Contacts</h1>
  //     <div className="wrapper">
  //       <h2 className={styles.content}>
  //         Hi Admin, see latest sellers contacts:
  //       </h2>
  //       <div className={styles.content_container}>
  //         <div className={styles.content}>
  //           {/* there will be 5 containers each one of them has 5 (first row second coumn is an x button) rows and 2 columns */}
  //           <p>Date</p>
  //           {/* Instead of names like date, price etc it will display the dynamic data fetched from supabase */}
  //           {/* <button className={styles.xButton}>x</button>
  //           {sellerinfo.map((name) => (
              
  //           ))}; */}


  //           {/* <p>Name</p> */}
  //           <p>Price</p>
  //           <a href="emailto:">Email</a>
  //           <p>Zipcode</p>
  //           <a href="tel:">Phone</a>
  //           <p>Estate size</p>
  //           <p>Contact</p>
  //           <p>Estate type</p>
  //         </div>
  //       </div>
  //     </div>

   
  // </>
//  )
// }




// export default AdminDashboard;

