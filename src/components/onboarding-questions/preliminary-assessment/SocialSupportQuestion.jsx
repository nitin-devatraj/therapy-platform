import { useDispatch, useSelector } from "react-redux";
import classes from "../OnboardingQuestions.module.scss";
import {
  nextPage,
  updatePreliminaryAssessment,
} from "../../../store/formSlice";
import CheckMark from "../ui-components/CheckMark";

export default function SocialSupportQuestion() {
  const dispatch = useDispatch();
  const socialSupport = useSelector(
    (state) => state.form.preliminaryAssessment.socialSupport
  );

  const handleOptionClick = (option) => {
    dispatch(updatePreliminaryAssessment({ socialSupport: option }));
  };

  const handleSubmitClick = () => {
    dispatch(nextPage());
  };

  const question =
    "It's common to have ups and downs in relationships. How satisfied are you with your current social support and connections?";
  const questionNo = "4. ";
  const options = [
    "Very Dissatisfied",
    "Dissatisfied",
    "Neutral",
    "Satisfied",
    "Very Satisfied",
  ].reverse();

  return (
    <div className={classes.container}>
      <div className={classes.questionContainer}>
        <span>{questionNo}</span>
        <p className={classes.question}>{question}</p>
      </div>
      {options.map((option) => {
        const combinedClasses = `${classes.optionBtn} ${
          socialSupport === option ? classes.optionBtnSelected : ""
        }`;

        return (
          <button
            key={option}
            className={combinedClasses}
            onClick={() => handleOptionClick(option)}
          >
            {option}
            {socialSupport === option && <CheckMark />}
          </button>
        );
      })}
      <button className={classes.submitBtn} onClick={handleSubmitClick}>
        Submit
      </button>
    </div>
  );
}
