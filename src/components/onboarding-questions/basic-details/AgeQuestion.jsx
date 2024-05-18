import { useDispatch, useSelector } from "react-redux";
import classes from "../OnboardingQuestions.module.scss";
import { nextPage, updateBasicDetails } from "../../../store/formSlice";
import CheckMark from "../ui-components/CheckMark";

export default function AgeQuestion() {
  const dispatch = useDispatch();
  const age = useSelector((state) => state.form.basicDetails.age);

  const handleOptionClick = (option) => {
    dispatch(updateBasicDetails({ age: option }));
  };

  const handleSubmitClick = () => {
    dispatch(nextPage());
  };

  const question = "How old are you? please select a range.";
  const questionNo = "1. ";
  const options = ["15-19", "20-24", "25-29", "30-39", "40-49", "50+"];

  return (
    <div className={classes.container}>
      <div className={classes.questionContainer}>
        <span>{questionNo}</span>
        <p className={classes.question}>{question}</p>
      </div>
      {options.map((option) => {
        const combinedClasses = `${classes.optionBtn} ${
          age === option ? classes.optionBtnSelected : ""
        }`;

        return (
          <button
            key={option}
            className={combinedClasses}
            onClick={() => handleOptionClick(option)}
          >
            {option}
            {age === option && <CheckMark />}
          </button>
        );
      })}

      <button className={classes.submitBtn} onClick={handleSubmitClick}>
        Submit
      </button>
    </div>
  );
}
