import SumbitFragrance from "../components/project/SubmitFragranceForm";

function AddFragrance() {
  function SubmitFragranceHandler(projectData) {
    fetch(
      "https://fragrance-app-b56fd-default-rtdb.firebaseio.com/fragrances.json",
      {
        method: "post",
        body: JSON.stringify(projectData),
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  }

  return (
    <main>
      <SumbitFragrance
        onSubmitFragrance={SubmitFragranceHandler}
      ></SumbitFragrance>
    </main>
  );
}

export default AddFragrance;
