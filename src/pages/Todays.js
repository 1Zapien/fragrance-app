import { useEffect, useState } from "react";
import TodaysFrags from "../components/project/SelectTodays";

function Todays(props) {
  const [loadedFrags, setLoadedFrags] = useState([]);
  let data = localStorage.getItem("userID");

  useEffect(() => {
    fetch(
      `https://fragrance-app-b56fd-default-rtdb.firebaseio.com/user/${data}/fragrances.json`
    )
      .then(response => response.json())
      .then(data => {
        const fragrances = [];
        for (const key in data) {
          const fragrance = {
            id: key,
            ...data[key]
          };
          fragrances.push(fragrance);
        }
        setLoadedFrags(fragrances);
      });
  }, [data]);

  return (
    <main>
      <TodaysFrags frags={loadedFrags} />
    </main>
  );
}

export default Todays;
