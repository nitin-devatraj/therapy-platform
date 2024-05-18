import { useDispatch, useSelector } from "react-redux";
import classes from "../OnboardingQuestions.module.scss";
import { updatePreliminaryAssessment } from "../../../store/formSlice";
import CheckMark from "../ui-components/CheckMark";

export default function AreasForChangeQuestion() {
  const dispatch = useDispatch();
  const areasForChange = useSelector(
    (state) => state.form.preliminaryAssessment.areasForChange
  );

  const handleOptionClick = (option) => {
    if (areasForChange.includes(option)) {
      const newAreasForChange = areasForChange.filter(
        (item) => item !== option
      );
      dispatch(
        updatePreliminaryAssessment({ areasForChange: newAreasForChange })
      );
    } else {
      dispatch(
        updatePreliminaryAssessment({
          areasForChange: [...areasForChange, option],
        })
      );
    }
  };

  const handleSubmitClick = () => {
    // dispatch(nextPage());
  };

  const question =
    "What areas of your life do you hope to experience positive changes in?";
  const questionNo = "8. ";
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
      <div className={classes.questionContainer}>
        <span>{questionNo}</span>
        <p className={classes.question}>{question}</p>
      </div>
      {options.map((option) => {
        const combinedClasses = `${classes.optionBtn} ${
          areasForChange.includes(option) ? classes.optionBtnSelected : ""
        }`;

        return (
          <button
            key={option}
            className={combinedClasses}
            onClick={() => handleOptionClick(option)}
          >
            {option}
            {areasForChange.includes(option) && <CheckMark />}
          </button>
        );
      })}
      <button className={classes.submitBtn} onClick={handleSubmitClick}>
        Submit
      </button>
    </div>
  );
}
