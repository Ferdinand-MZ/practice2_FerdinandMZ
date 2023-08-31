import React, { useState } from "react";
import "./Tugas.css"; // Ubah sesuai dengan nama file CSS Anda

type InputProps = {
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = (props: InputProps) => {
  return <input type="text" value={props.value} onChange={props.handleChange} />;
};

const Tugas = () => {
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState("Success"); // Set initial status to "Success"
  const [showStatus, setShowStatus] = useState(false); // State to control when to show status

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setInputValue(newValue);
  };

  const handleSubmit = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setShowStatus(true); // Show status after form submission

      if (inputValue.length < 8) {
        setStatus("Error (input must be more than 8 characters)");
      } else {
        setStatus("Success!");
      }
    }, 1500);
  };

  return (
    <div>
      <table className="input-table">
        <tbody>
          <tr>
            <td colSpan={2} className="input-label">
              Input Form
            </td>
          </tr>
          <tr>
            <td>
              <Input value={inputValue} handleChange={handleInputChange} />
            </td>
          </tr>
        </tbody>
      </table>
      <button
        className={`submit-button${isLoading ? " loading" : ""}`}
        onClick={handleSubmit}
        disabled={isLoading}
      >
        {isLoading ? <span className="loading-icon"></span> : null}
        Submit
      </button>
      {/* Show status only after submitting the form */}
      {showStatus && !isLoading ? (
        <p className={`status-${status.toLowerCase()}`}>Status: {status}</p>
      ) : null}
    </div>
  );
};

export default Tugas;
