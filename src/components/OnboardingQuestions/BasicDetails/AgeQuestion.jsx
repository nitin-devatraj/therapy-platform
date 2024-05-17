import { useDispatch } from "react-redux";
import { useState } from "react";
import classes from "../OnboardingQuestions.module.scss";
import { nextPage, updateBasicDetails } from "../../../store/formSlice";
import CheckMark from "../CheckMark";

export default function AgeQuestion() {
  const [selectedOption, setSelectedOption] = useState("");
  const dispatch = useDispatch();

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleSubmitClick = () => {
    dispatch(updateBasicDetails({ age: selectedOption }));
    dispatch(nextPage());
  };

  const question = "1. How old are you? please select a range.";
  const options = ["15-19", "20-24", "25-29", "30-39", "40-49", "50+"];

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
