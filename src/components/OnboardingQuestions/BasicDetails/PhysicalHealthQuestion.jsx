import { useDispatch } from "react-redux";
import { useState } from "react";
import classes from "../OnboardingQuestions.module.scss";
import { nextPage, updateBasicDetails } from "../../../store/formSlice";
import CheckMark from "../CheckMark";

export default function PhysicalHealthQuestion() {
  const [selectedOption, setSelectedOption] = useState("");
  const dispatch = useDispatch();

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleSubmitClick = () => {
    dispatch(updateBasicDetails({ physicalHealth: selectedOption }));
    dispatch(nextPage());
  };

  const question =
    "4. How would you rate your overall physical health currently?";
  const options = ["Excellent", "Good", "Fair", "Poor"];

  return (
    <div className={classes.container}>
      <p className={classes.question}>{question}</p>
      {options.map((option) => {
        const combinedClasses = `${classes.optionBtn} ${
          selectedOption === option ? classes.optionBtnSelected : ""
        }`;

        return (
          <button
            key={option}
            className={combinedClasses}
            onClick={() => handleOptionClick(option)}
          >
            {option}
            {selectedOption === option && <CheckMark />}
          </button>
        );
      })}
      <button className={classes.submitBtn} onClick={handleSubmitClick}>
        Submit
      </button>
    </div>
  );
}
