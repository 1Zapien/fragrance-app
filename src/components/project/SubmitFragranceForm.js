import classes from "./SubmitFragranceForm.module.css";
import { useRef } from "react";

function SubmitFragranceForm(props) {
  // const [selectedFile, setSelectedFile] = useState("");

  const inputNameRef = useRef();
  const inputBrandRef = useRef();
  const inputImgRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const fragranceName = inputNameRef.current.value;
    const brandName = inputBrandRef.current.value;
    const fragranceImg = inputImgRef.current.value;
    console.log(fragranceImg);

    const fragranceData = {
      name: fragranceName,
      brand: brandName,
      image: fragranceImg
    };

    props.onSubmitFragrance(fragranceData);
  }

  return (
    <div>
      <div className={classes.form__card}>
        <form onSubmit={submitHandler} className={classes.form_content}>
          <div className={classes.form__section}>
            <label htmlFor="project-name">Fragrance Name</label>
            <input
              type="text"
              required
              id="project-name"
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
              type="file"
              required
              id="fragrance-img"
              ref={inputImgRef}
              placeholder="Enter fragrance image"
            />
          </div>
        </form>
        <div className={classes.form__submit}>
          <button className={classes.project__submit}>Add Fragrance</button>
        </div>
      </div>
    </div>
  );
}

export default SubmitFragranceForm;
