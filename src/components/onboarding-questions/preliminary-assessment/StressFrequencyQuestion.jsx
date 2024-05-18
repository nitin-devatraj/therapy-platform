import { useDispatch, useSelector } from "react-redux";
import classes from "../OnboardingQuestions.module.scss";
import {
  nextPage,
  updatePreliminaryAssessment,
} from "../../../store/formSlice";
import CheckMark from "../ui-components/CheckMark";

export default function StressFrequencyQuestion() {
  const dispatch = useDispatch();
  const stressFrequency = useSelector(
    (state) => state.form.preliminaryAssessment.stressFrequency
  );

  const handleOptionClick = (option) => {
    dispatch(updatePreliminaryAssessment({ stressFrequency: option }));
  };

  const handleSubmitClick = () => {
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
          stressFrequency === option ? classes.optionBtnSelected : ""
        }`;

        return (
          <button
            key={option}
            className={combinedClasses}
            onClick={() => handleOptionClick(option)}
          >
            {option}
            {stressFrequency === option && <CheckMark />}
          </button>
        );
      })}
      <button className={classes.submitBtn} onClick={handleSubmitClick}>
        Submit
      </button>
    </div>
  );
}
