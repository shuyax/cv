
import GeneralInfo from "./GeneralInfo";
import EducationalExp from "./EducationalExp";
import PracticalExp from "./PracticalExp";
import "./App.css";

export default function App() {
  return (
    <>
      <h1>Resume</h1>
      <h2>General Information</h2>
      <GeneralInfo />
      <hr />
      <h2>Educational Experience</h2>
      <EducationalExp />
      <hr />
      <h2>Practical Experience</h2>
      <PracticalExp />
      <br></br>
    </>
  );
}
