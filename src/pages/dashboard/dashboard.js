import { useState, useEffect } from "react";
import styles from "./dashboard.module.css";
import Head from "next/head";
import { createClient } from "@supabase/supabase-js";
//write this and not other things, as the other ones are usually linking to components with the code in!

const supabaseUrl = "https://tpysfrkiwckoydwsbleo.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRweXNmcmtpd2Nrb3lkd3NibGVvIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY4MjU4MzQxNCwiZXhwIjoxOTk4MTU5NDE0fQ.H5j86z9-UnYgRdUX1jifGjuq1zqchKFdNE1aiMFEbxA";
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
      await supabase.from("sellerinfo").delete().eq("id", sellerId);
      setSellerInfo(sellerId.filter((seller) => seller.id != sellerId));
    } catch (error) {
      console.log("error", error);
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
            <div className={styles.ul}>
              {/* for some reason it's the ul that needs to be styled with grid, lol */}
              {sellerinfo.map((seller) => (
                <div className={styles.content} key={seller.id}>
                  <p>
                    <strong>Date: </strong>
                    {seller.created_at}
                  </p>
                  <p>
                    <strong>Name:</strong> {seller.name}
                  </p>
                  <p>
                    <strong>E-mail:</strong>{" "}
                    <a href="emailto:">{seller.email}</a>
                  </p>
                  <p>
                    <strong>Phone:</strong> <a href="phone:">{seller.phone}</a>
                  </p>
                  <p>
                    <strong>Buyers:</strong> {seller.buyers}
                  </p>
                  <p>
                    <strong>Zipcode:</strong> {seller.zipcode}
                  </p>
                  <p>
                    <strong>Estate type:</strong> {seller.estateType}
                  </p>
                  <p>
                    <strong>Size:</strong> {seller.size} m²
                  </p>
                  <p className={styles.messagebox}>
                    <strong>Message from client:</strong>{" "}
                    <i>
                      &ldquo;{seller.message.replace(/"/g, "&quot;")}&rdquo;
                    </i>
                  </p>
                  <button
                    className={styles.xButton}
                    title="Delete seller"
                    onClick={() => deleteSeller(seller.id)}
                  >
                    x
                  </button>
                </div>

                //seller is a variable we create in here, not linked to names in the database really
                //name and id is fromt he database tho!
              ))}
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </>
  );
}

export default AdminDashboard;
