import { useDispatch, useSelector } from "react-redux";
import classes from "../OnboardingQuestions.module.scss";
import {
  nextPage,
  updatePreliminaryAssessment,
} from "../../../store/formSlice";
import CheckMark from "../ui-components/CheckMark";

export default function SourcesOfConcernQuestion() {
  const dispatch = useDispatch();
  const sourcesOfConcern = useSelector(
    (state) => state.form.preliminaryAssessment.sourcesOfConcern
  );

  const handleOptionClick = (option) => {
    if (sourcesOfConcern.includes(option)) {
      const newSourcesOfConcern = sourcesOfConcern.filter(
        (item) => item !== option
      );
      dispatch(
        updatePreliminaryAssessment({ sourcesOfConcern: newSourcesOfConcern })
      );
    } else {
      dispatch(
        updatePreliminaryAssessment({
          sourcesOfConcern: [...sourcesOfConcern, option],
        })
      );
    }
  };

  const handleSubmitClick = () => {
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
          sourcesOfConcern.includes(option) ? classes.optionBtnSelected : ""
        }`;

        return (
          <button
            key={option}
            className={combinedClasses}
            onClick={() => handleOptionClick(option)}
          >
            {option}
            {sourcesOfConcern.includes(option) && <CheckMark />}
          </button>
        );
      })}
      <button className={classes.submitBtn} onClick={handleSubmitClick}>
        Submit
      </button>
    </div>
  );
}
