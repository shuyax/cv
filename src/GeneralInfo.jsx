import { useState } from "react";

export default function GeneralInfo() {
  const [info, setInfo] = useState({ name: "", email: "", phone: "" });
  const [saveStatus, setSaveStatus] = useState(false);

  function handleChange(e, field) {
    setInfo({ ...info, [field]: e.target.value });
  }

  function saveModuleStatus() {
    setSaveStatus(!saveStatus);
  }
  function displayButton() {
    if (saveStatus) {
      return <button onClick={saveModuleStatus}>Edit</button>;
    }
    return <button onClick={saveModuleStatus}>Save</button>;
  }

  if (saveStatus) {
    return (
      <div className="content">
        <p>
          <b>Name: </b>
          {info.name}
        </p>
        <p>
          <b>Email: </b>
          {info.email}
        </p>
        <p>
          <b>Phone Number: </b>
          {info.phone}
        </p>
        {displayButton()}
      </div>
    );
  }
  return (
    <div className="content">
      <Input
        label="Name:"
        onChange={(e) => handleChange(e, "name")}
        value={info.name}
      ></Input>
      <Input
        label="Email:"
        onChange={(e) => handleChange(e, "email")}
        value={info.email}
      ></Input>
      <Input
        label="Phone Number:"
        onChange={(e) => handleChange(e, "phone")}
        value={info.phone}
      ></Input>
      {displayButton()}
    </div>
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
