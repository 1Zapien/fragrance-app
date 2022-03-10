import SubmitFragranceForm from "../components/project/SubmitFragranceForm";
import { useNavigate } from "react-router-dom";

function AddFragrance() {
  const navigate = useNavigate();
  function SubmitFragranceHandler(fragranceData) {
    fetch(
      "https://fragrance-app-b56fd-default-rtdb.firebaseio.com/fragrances.json",
      {
        method: "post",
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
    <main>
      <SubmitFragranceForm
        onSubmitFragrance={SubmitFragranceHandler}
      ></SubmitFragranceForm>
    </main>
  );
}

export default AddFragrance;
