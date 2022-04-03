// import RecentFrags from "./RecentFrags";
import { useEffect, useState, useCallback } from "react";
import RecentFrags from "./FragList";
import classes from "./Fragrances.module.css";
import { Link } from "react-router-dom";

function Fragrances() {
  const [loadedFragrance, setLoadedFragrances] = useState([]);
  const [topLeast, setTopLeast] = useState([]);
  const [lastUsed, setLastUsed] = useState([]);
  const [fragNumber, setFragNumber] = useState(0);
  let data = localStorage.getItem("userID");
  let userName = localStorage.getItem("userName");

  //   function that takes in a array of fragrances
  //   and finds the most and least used;

  const topLeastFrag = useCallback(allFrags => {
    let topFrag;
    let leastFrag;
    if (allFrags) {
      allFrags.forEach(element => {
        if (!topFrag && !leastFrag) {
          topFrag = element;
          leastFrag = element;
        }
        if (leastFrag.timesUsed >= element.timesUsed) {
          leastFrag = element;
        }
        if (topFrag.timesUsed < element.timesUsed && element.timesUsed) {
          topFrag = element;
        }
      });
      if (topFrag === leastFrag) {
        return [topFrag];
      }

      return [topFrag, leastFrag];
    }
  }, []);

  const compareDate = useCallback(allFrags => {
    let lastFrag;
    let secondLastFrag;
    if (allFrags) {
      allFrags.forEach(element => {
        if (!lastFrag && !secondLastFrag) {
          lastFrag = element;
          secondLastFrag = element;
        }
        if (lastFrag.lastUsed <= element.lastUsed) {
          secondLastFrag = lastFrag;
          lastFrag = element;
        }
      });

      return [lastFrag, secondLastFrag];
    }
  }, []);

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
        setFragNumber(fragrances.length);
        setLoadedFragrances(fragrances);
        setTopLeast(topLeastFrag(fragrances));
        setLastUsed(compareDate(fragrances));
      });
  }, [topLeastFrag, compareDate, data]);

  if (loadedFragrance.length === 0) {
    return <p className={classes.empty__note}>Please Add Fragrances</p>;
  } else if (loadedFragrance.length === 1) {
    return (
      <div className={classes.frag_card}>
        <h2>Add more Fragrances for more data </h2>
        <RecentFrags frags={loadedFragrance} />
      </div>
    );
  }

  return (
    <div>
      <div className={classes.banner}>
        <h1 className={classes.app__text}>
          Hello {userName}, you currently have {fragNumber} Fragrances. You
          currently have ___/none.
        </h1>
        <nav>
          <Link to="/todays" className={classes.banner_action}>
            Scent of the day?
          </Link>
        </nav>
      </div>
      <div className={classes.frag_layout}>
        {window.location.pathname === "/home" ? (
          <>
            <div className={classes.frag_card}>
              <h2>Recent Fragrances</h2>
              <RecentFrags frags={lastUsed} />
            </div>

            <div className={classes.frag_card}>
              <h2>Most & Least Used</h2>
              <RecentFrags frags={topLeast} />
            </div>
          </>
        ) : (
          <div className={classes.frag_card}>
            <h2>All Fragrances</h2>
            <RecentFrags frags={loadedFragrance} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Fragrances;
