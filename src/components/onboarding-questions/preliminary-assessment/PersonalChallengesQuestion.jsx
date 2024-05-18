import { useDispatch } from "react-redux";
import { useState } from "react";
import classes from "../OnboardingQuestions.module.scss";
import {
  nextPage,
  updatePreliminaryAssessment,
} from "../../../store/formSlice";
import CheckMark from "../ui-components/CheckMark";

export default function PersonalChallengesQuestion() {
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
      updatePreliminaryAssessment({ personalChallenges: selectedOptions })
    );
    dispatch(nextPage());
  };

  const question =
    "Sometimes we develop habits or behaviours that no longer serve us well. We'll ask about that next, but there's no need to share anything you're not comfortable with. Do any of the following apply to challenges you may be facing currently?";
  const questionNo = "6. ";
  const options = [
    "Alcohol or substance use",
    "Issues related to eating habits",
    "Compulsive sexual behaviours",
    "Other",
    "Prefer not to answer",
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
