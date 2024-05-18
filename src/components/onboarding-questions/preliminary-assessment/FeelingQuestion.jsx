import { useDispatch, useSelector } from "react-redux";
import classes from "../OnboardingQuestions.module.scss";
import {
  nextPage,
  updatePreliminaryAssessment,
} from "../../../store/formSlice";
import CheckMark from "../ui-components/CheckMark";

export default function FeelingQuestion() {
  const dispatch = useDispatch();
  const feelings = useSelector(
    (state) => state.form.preliminaryAssessment.feelings
  );

  const handleOptionClick = (option) => {
    dispatch(updatePreliminaryAssessment({ feelings: option }));
  };

  const handleSubmitClick = () => {
    dispatch(nextPage());
  };

  const question = "How have you been feeling lately?";
  const questionNo = "1. ";
  const options = [
    "Struggling",
    "Could be Better",
    "Neutral",
    "Doing Okay",
    "Doing Well",
  ].reverse();

  return (
    <div className={classes.container}>
      <div className={classes.questionContainer}>
        <span>{questionNo}</span>
        <p className={classes.question}>{question}</p>
      </div>
      {options.map((option) => {
        const combinedClasses = `${classes.optionBtn} ${
          feelings === option ? classes.optionBtnSelected : ""
        }`;

        return (
          <button
            key={option}
            className={combinedClasses}
            onClick={() => handleOptionClick(option)}
          >
            {option}
            {feelings === option && <CheckMark />}
          </button>
        );
      })}
      <button className={classes.submitBtn} onClick={handleSubmitClick}>
        Submit
      </button>
    </div>
  );
}
