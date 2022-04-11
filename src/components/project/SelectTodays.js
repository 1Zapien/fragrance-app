import classes from "./SelectTodays.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import icon from "../../images/calendar.png";
import counter from "../../images/counter.png";

function SelectTodays(props) {
  const navigate = useNavigate();

  let data = localStorage.getItem("userID");
  const [isSelected, setIsSelected] = useState(0);
  const [selectedCounter, setSelectedCounter] = useState(0);

  const removeTime = date => {
    return date
      .split(" ")
      .slice(0, 4)
      .join(" ");
  };

  function SubmitHandler(event) {
    event.preventDefault();
    var today = new Date();
    var str = today.toGMTString();
    var newCount = selectedCounter + 1;

    const fragranceData = {
      timesUsed: newCount,
      lastUsed: str
    };

    fetch(
      `https://fragrance-app-b56fd-default-rtdb.firebaseio.com/user/${data}/fragrances/${isSelected}.json`,
      {
        method: "PATCH",
        body: JSON.stringify(fragranceData),
        headers: {
          "Content-Type": "application/json"
        }
      }
    ).then(() => {
      navigate("/home");
    });
  }

  return (
    <div className={classes.main}>
      <h2>Select your Fragrance of the day</h2>
      <form onSubmit={SubmitHandler} id="todays-form">
        {props.frags.map(frag => (
          <div
            key={frag.id}
            className={
              isSelected === frag.id ? classes.active_card : classes.card
            }
            onClick={() => {
              setIsSelected(frag.id);
              setSelectedCounter(frag.timesUsed);
            }}
          >
            <div className={classes.frag_card}>
              <div className={classes.frag_data}>
                <h3>{frag.name}</h3>
                <p>{frag.brand}</p>

                <div className={classes.frag_cardInfo}>
                  <p>
                    <img src={counter} alt="counter icon"></img>
                    {frag.timesUsed} times used
                  </p>

                  <p>
                    <img src={icon} alt="hero"></img>
                    {removeTime(frag.lastUsed)}
                  </p>
                </div>
              </div>
              {frag.imgUrl ? <img src={frag.imgUrl} alt="frag"></img> : <></>}
            </div>
          </div>
        ))}
      </form>
      <button
        className={classes.project_submit}
        form="todays-form"
        type="submit"
      >
        Submit SOTD
      </button>
    </div>
  );
}

export default SelectTodays;
