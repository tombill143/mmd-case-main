import { useEffect, useState } from "react";

function PotentialBuyers() {
  const [buyers, setBuyers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/find-buyers");
      const data = await res.json();
      setBuyers(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Potential Buyers</h1>
      <div className="grid">
        {buyers.map((buyer) => (
          <div key={buyer.id} className="buyer">
            <h2>{buyer.name}</h2>
            <p>{buyer.description}</p>
            <p>{buyer.priceRange}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PotentialBuyers;
