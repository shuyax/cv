import { useState } from "react";

export default function PracticalExp() {
  const [pracExpCount, setPracExpCount] = useState(1);
  const [saveStatus, setSaveStatus] = useState(false);

  function addExp() {
    setPracExpCount(pracExpCount + 1);
  }
  function renderPracExp() {
    const pracExpArray = [];
    for (let i = 0; i < pracExpCount; i++) {
      pracExpArray.push(
        <div key={i}>
          <h3>Practical Experience {i + 1}</h3>
          <SinglePracticalExp status={saveStatus} />
        </div>,
      );
    }
    return pracExpArray;
  }

  function saveModuleStatus() {
    setSaveStatus(!saveStatus);
  }
  function displayButton() {
    if (saveStatus) {
      return <button onClick={saveModuleStatus}>Edit</button>;
    }
    return (
      <>
        <button onClick={addExp}>Add more practical experience</button>
        <button onClick={saveModuleStatus}>Save</button>
      </>
    );
  }

  return (
    <div className="content">
      {renderPracExp()}
      {displayButton()}
    </div>
  );
}

function SinglePracticalExp({ status }) {
  const [practice, setPractice] = useState({
    company: "",
    jobTitle: "",
    responsibility: "",
    startDate: "",
    endDate: "",
  });

  function handleChange(e, field) {
    setPractice({ ...practice, [field]: e.target.value });
  }
  if (status) {
    return (
      <>
        <p>
          <b>Company Name: </b>
          {practice.company}
        </p>
        <p>
          <b>Job Title: </b>
          {practice.jobTitle}
        </p>
        <p>
          <b>Responsibilities: </b>
          <br />
          {practice.responsibility}
        </p>
        <p>
          <b>Start Date: </b>
          {practice.startDate}
        </p>
        <p>
          <b>End Date: </b>
          {practice.endDate}
        </p>
      </>
    );
  }

  return (
    <>
      <Input
        label="Company Name:"
        onChange={(e) => handleChange(e, "company")}
        value={practice.company}
      />
      <Input
        label="Job Title:"
        onChange={(e) => handleChange(e, "jobTitle")}
        value={practice.jobTitle}
      />
      <Textarea
        label="Responsibilities:"
        onChange={(e) => handleChange(e, "responsibility")}
        value={practice.responsibility}
      />
      <Input
        label="Start Date:"
        onChange={(e) => handleChange(e, "startDate")}
        value={practice.startDate}
      />
      <Input
        label="End Date:"
        onChange={(e) => handleChange(e, "endDate")}
        value={practice.endDate}
      />
    </>
  );
}

function Input({ label, onChange, value }) {
  return (
    <label>
      {label}
      {"    "}
      <input onChange={onChange} value={value} />
    </label>
  );
}

function Textarea({ label, onChange, value }) {
  return (
    <label>
      {label}
      {"    "}
      <textarea
        style={{ resize: "both", width: "300px", height: "100px" }}
        onChange={onChange}
        value={value}
      />
    </label>
  );
}
