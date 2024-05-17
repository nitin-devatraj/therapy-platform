import { useDispatch } from "react-redux";
import { useState } from "react";
import classes from "../OnboardingQuestions.module.scss";
import {
  nextPage,
  updatePreliminaryAssessment,
} from "../../../store/formSlice";
import CheckMark from "../CheckMark";

export default function AreasForChangeQuestion() {
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
    dispatch(updatePreliminaryAssessment({ areasForChange: selectedOptions }));
    // dispatch(nextPage());
  };

  const question =
    "8. What areas of your life do you hope to experience positive changes in?";
  const options = [
    "Work/Career",
    "Relationships",
    "Physical health",
    "Emotional/mental health",
    "Developing new skills/habits",
    "Other",
  ];

  return (
    <div className={classes.container}>
      <p className={classes.question}>{question}</p>
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
