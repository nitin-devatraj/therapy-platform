import { useDispatch, useSelector } from "react-redux";
import classes from "../OnboardingQuestions.module.scss";
import {
  nextPage,
  updatePreliminaryAssessment,
} from "../../../store/formSlice";
import CheckMark from "../ui-components/CheckMark";

export default function MotivationQuestion() {
  const dispatch = useDispatch();
  const motivation = useSelector(
    (state) => state.form.preliminaryAssessment.motivation
  );

  const handleOptionClick = (option) => {
    dispatch(updatePreliminaryAssessment({ motivation: option }));
  };

  const handleSubmitClick = () => {
    dispatch(nextPage());
  };

  const question =
    "On a scale of 0 to 10, how motivated are you to start making positive changes to improve your overall well-being at this time?";
  const questionNo = "7. ";
  const options = [
    "Not motivated at all",
    "Slightly motivated",
    "Moderately motivated",
    "Very motivated",
    "Extremely motivated",
  ].reverse();

  return (
    <div className={classes.container}>
      <div className={classes.questionContainer}>
        <span>{questionNo}</span>
        <p className={classes.question}>{question}</p>
      </div>
      {options.map((option) => {
        const combinedClasses = `${classes.optionBtn} ${
          motivation === option ? classes.optionBtnSelected : ""
        }`;

        return (
          <button
            key={option}
            className={combinedClasses}
            onClick={() => handleOptionClick(option)}
          >
            {option}
            {motivation === option && <CheckMark />}
          </button>
        );
      })}
      <button className={classes.submitBtn} onClick={handleSubmitClick}>
        Submit
      </button>
    </div>
  );
}
