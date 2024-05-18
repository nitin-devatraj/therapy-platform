import { useDispatch } from "react-redux";
import { useState } from "react";
import classes from "../OnboardingQuestions.module.scss";
import {
  nextPage,
  updatePreliminaryAssessment,
} from "../../../store/formSlice";
import CheckMark from "../ui-components/CheckMark";

export default function SourcesOfConcernQuestion() {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const dispatch = useDispatch();

  const handleOptionClick = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions((selectedOptions) =>
        selectedOptions.filter((item) => item !== option)
      );
    } else {
      setSelectedOptions((selectedOptions) => [...selectedOptions, option]);
    }
  };

  const handleSubmitClick = () => {
    dispatch(
      updatePreliminaryAssessment({ sourcesOfConcern: selectedOptions })
    );
    dispatch(nextPage());
  };

  const question =
    "People's well-being can be impacted by various areas of life. Which of the following, if any, are sources of concern for you currently?";
  const questionNo = "5. ";
  const options = [
    "Work/Career",
    "Finances",
    "Personal relationships",
    "Physical health",
    "Coping with a major life stress/event",
    "Other",
  ];

  return (
    <div className={classes.container}>
      <div className={classes.questionContainer}>
        <span>{questionNo}</span>
        <p className={classes.question}>{question}</p>
      </div>
      {options.map((option) => {
        const combinedClasses = `${classes.optionBtn} ${
          selectedOptions.includes(option) ? classes.optionBtnSelected : ""
        }`;

        return (
          <button
            key={option}
            className={combinedClasses}
            onClick={() => handleOptionClick(option)}
          >
            {option}
            {selectedOptions.includes(option) && <CheckMark />}
          </button>
        );
      })}
      <button className={classes.submitBtn} onClick={handleSubmitClick}>
        Submit
      </button>
    </div>
  );
}
