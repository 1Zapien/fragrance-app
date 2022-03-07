import classes from "./SubmitFragranceForm.module.css";
import { useRef } from "react";

function SubmitFragranceForm(props) {
  const inputNameRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const fragranceName = inputNameRef.current.value;

    const fragranceData = {
      name: fragranceName
      // url: projectUrl,
      // sourceUrl: projectSourceUrl,
      // description: projectDescription
      // // questions: projectQuestion
    };

    props.onSubmitFragrance(fragranceData);
  }
  return (
    <div>
      <div className={classes.form__card}>
        <form onSubmit={submitHandler} className={classes.form_content}>
          <h2>Form</h2>
          <div className={classes.form__section}>
            <label htmlFor="project-name">Project Name</label>
            <input
              type="text"
              required
              id="project-name"
              ref={inputNameRef}
              placeholder="Enter project name"
            />
          </div>
        </form>
        <div className={classes.form__submit}>
          <button className={classes.project__submit}>Add Project</button>
        </div>
      </div>
    </div>
  );
}

export default SubmitFragranceForm;
