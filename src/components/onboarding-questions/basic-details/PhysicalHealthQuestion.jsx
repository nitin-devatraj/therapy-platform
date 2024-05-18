import { useDispatch, useSelector } from "react-redux";
import classes from "../OnboardingQuestions.module.scss";
import { nextPage, updateBasicDetails } from "../../../store/formSlice";
import CheckMark from "../ui-components/CheckMark";

export default function PhysicalHealthQuestion() {
  const dispatch = useDispatch();
  const physicalHealth = useSelector(
    (state) => state.form.basicDetails.physicalHealth
  );

  const handleOptionClick = (option) => {
    dispatch(updateBasicDetails({ physicalHealth: option }));
  };

  const handleSubmitClick = () => {
    dispatch(nextPage());
  };

  const question = "How would you rate your overall physical health currently?";
  const questionNo = "4. ";
  const options = ["Excellent", "Good", "Fair", "Poor"];

  return (
    <div className={classes.container}>
      <div className={classes.questionContainer}>
        <span>{questionNo}</span>
        <p className={classes.question}>{question}</p>
      </div>
      {options.map((option) => {
        const combinedClasses = `${classes.optionBtn} ${
          physicalHealth === option ? classes.optionBtnSelected : ""
        }`;

        return (
          <button
            key={option}
            className={combinedClasses}
            onClick={() => handleOptionClick(option)}
          >
            {option}
            {physicalHealth === option && <CheckMark />}
          </button>
        );
      })}
      <button className={classes.submitBtn} onClick={handleSubmitClick}>
        Submit
      </button>
    </div>
  );
}
