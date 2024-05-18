import { useDispatch } from "react-redux";
import { useState } from "react";
import classes from "../OnboardingQuestions.module.scss";
import {
  nextPage,
  updatePreliminaryAssessment,
} from "../../../store/formSlice";
import CheckMark from "../ui-components/CheckMark";

export default function StressFrequencyQuestion() {
  const [selectedOption, setSelectedOption] = useState("");
  const dispatch = useDispatch();

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleSubmitClick = () => {
    dispatch(updatePreliminaryAssessment({ stressFrequency: selectedOption }));
    dispatch(nextPage());
  };

  const question =
    "Many people experience periods of feeling down or stressed. Over the last 2 weeks, how often have you experienced significant stress, anxiety or low mood?";
  const questionNo = "3. ";
  const options = [
    "Never",
    "Rarely",
    "Sometimes",
    "Often",
    "Almost Daily",
  ].reverse();

  return (
    <div className={classes.container}>
      <div className={classes.questionContainer}>
        <span>{questionNo}</span>
        <p className={classes.question}>{question}</p>
      </div>
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
