import classes from "./SubmitFragranceForm.module.css";
import { useRef } from "react";

function SubmitFragranceForm(props) {
  const inputNameRef = useRef();
  const inputBrandRef = useRef();
  const inputImgRef = useRef();

  function submitHandler(event) {
    console.log("you submitted");
    event.preventDefault();

    const fragranceName = inputNameRef.current.value;
    const brandName = inputBrandRef.current.value;
    const fragranceImg = inputImgRef.current.value;

    // image: fragranceImg
    var today = new Date();
    var str = today.toGMTString();

    const fragranceData = {
      name: fragranceName,
      brand: brandName,
      timesUsed: 0,
      lastUsed: str,
      imgUrl: fragranceImg
    };

    props.onSubmitFragrance(fragranceData);
  }

  return (
    <div className={classes.form__card}>
      <h2> Add Fragrance to Collection</h2>
      <form
        onSubmit={submitHandler}
        className={classes.form__content}
        id="my-form"
      >
        <div className={classes.form__section}>
          <label htmlFor="fragrance-name">Fragrance Name</label>
          <input
            type="text"
            required
            id="fragrance-name"
            ref={inputNameRef}
            placeholder="Enter fragrance name"
          />
        </div>
        <div className={classes.form__section}>
          <label htmlFor="project-name">Fragrance Brand</label>
          <input
            type="text"
            required
            id="project-name"
            ref={inputBrandRef}
            placeholder="Enter fragrance brand"
          />
        </div>
        <div className={classes.form__section}>
          <label htmlFor="fragrance-img">Fragrance Image</label>
          <input
            type="text"
            id="fragrance-img"
            ref={inputImgRef}
            placeholder="Enter WebImage URL"
          />
        </div>
      </form>
      <div className={classes.form__submit}>
        <button
          className={classes.project__submit}
          form="my-form"
          type="submit"
        >
          Add Fragrance
        </button>
      </div>
    </div>
  );
}

export default SubmitFragranceForm;
