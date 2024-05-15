import { useState } from "react";

export default function EducationalExp() {
  const [eduExpCount, setEduExpCount] = useState(1);
  const [saveStatus, setSaveStatus] = useState(false);

  function addExp() {
    setEduExpCount(eduExpCount + 1);
  }


  function renderEduExp() {
    const eduExpArray = [];
    for (let i = 0; i < eduExpCount; i++) {
      eduExpArray.push(
        <div key={i}>
          <h3>Educational Experience {i + 1}</h3>
          <SingleEducationalExp
            status={saveStatus}
          />
        </div>,
      );
    }
    return eduExpArray;
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
        <button onClick={addExp}>Add more educational experience</button>
        <button onClick={saveModuleStatus}>Save</button>
      </>
    );
  }

  return (
    <div className="content">
      {renderEduExp()}
      {displayButton()}
    </div>
  );
}

function SingleEducationalExp({ status }) {
  const [education, setEducation] = useState({
    school: "",
    major: "",
    startDate: "",
    endDate: "",
  });
  function handleChange(e, field) {
    setEducation({ ...education, [field]: e.target.value });
  }
  if (status) {
    return (
      <>
        <p>
          <b>School Name: </b>
          {education.school}
        </p>
        <p>
          <b>Major: </b>
          {education.major}
        </p>
        <p>
          <b>Start Date: </b>
          {education.startDate}
        </p>
        <p>
          <b>End Date: </b>
          {education.endDate}
        </p>
      </>
    );
  }
  return (
    <>
      <Input
        label="School Name:"
        onChange={(e) => handleChange(e, "school")}
        value={education.school}
      />
      <Input
        label="Major:"
        onChange={(e) => handleChange(e, "major")}
        value={education.major}
      />
      <Input
        label="Start Date:"
        onChange={(e) => handleChange(e, "startDate")}
        value={education.startDate}
      />
      <Input
        label="End Date:"
        onChange={(e) => handleChange(e, "endDate")}
        value={education.endDate}
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
