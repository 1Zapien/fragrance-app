// import RecentFrags from "./RecentFrags";
import { useEffect, useState, useCallback } from "react";
import RecentFrags from "./FragList";
import classes from "./Fragrances.module.css";
import { Link } from "react-router-dom";
import HomeBanner from "../layout/HomeBanner";

function Fragrances() {
  const [loadedFragrance, setLoadedFragrances] = useState([]);
  const [topLeast, setTopLeast] = useState([]);
  const [lastUsed, setLastUsed] = useState([]);
  const [fragNumber, setFragNumber] = useState(0);
  const [fragsOTD, setFragsOTD] = useState([]);
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

  const fragranceOTD = useCallback(allFrags => {
    const fragsOfToday = [];
    let todayDate = new Date();

    if (allFrags) {
      allFrags.forEach(element => {
        let otherDate = new Date(element.lastUsed);

        if (
          otherDate.getDate() === todayDate.getDate() &&
          otherDate.getMonth() === todayDate.getMonth() &&
          otherDate.getYear() === todayDate.getYear()
        ) {
          fragsOfToday.push(element.name);
        }
      });
    }
    return fragsOfToday;
  }, []);

  const compareDate = useCallback(allFrags => {
    let lastFrag;
    let secondLastFrag;
    if (allFrags) {
      allFrags = allFrags.sort((a, b) => {
        return new Date(b.lastUsed) - new Date(a.lastUsed);
      });
      console.log(allFrags);
      lastFrag = allFrags[0];
      secondLastFrag = allFrags[1];

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
        setFragsOTD(fragranceOTD(fragrances));
      });
  }, [topLeastFrag, compareDate, data, fragranceOTD]);

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

  const todays = (
    <>
      Your fragrance of the day is <strong>{fragsOTD.join(", ")}</strong>
    </>
  );

  // ` You fragrance of the day is ${fragsOTD.join(", ")} `

  return (
    <div>
      {window.location.pathname === "/home" ? (
        <HomeBanner>
          <div className={classes.banner}>
            <p className={classes.intro}>Hello there,</p>
            <h1 className={classes.app__text}>
              {" "}
              {userName}. Welcome to Art Of Fragrances
            </h1>
            <p className={classes.intro}>
              you currently have {fragNumber} Fragrances in your collection
              {fragsOTD.length <= 0
                ? `. You
              aren't wearing a scent today please add your scent the day.`
                : todays}
            </p>
            <nav>
              <Link
                to="/todays"
                className={classes.banner_action}
                frags={loadedFragrance}
              >
                Add SOTD
              </Link>
            </nav>
          </div>
        </HomeBanner>
      ) : (
        <></>
      )}
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
