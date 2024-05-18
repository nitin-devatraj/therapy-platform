import { useDispatch, useSelector } from "react-redux";
import classes from "../OnboardingQuestions.module.scss";
import { nextPage, updateBasicDetails } from "../../../store/formSlice";
import CheckMark from "../ui-components/CheckMark";

export default function GenderQuestion() {
  const dispatch = useDispatch();
  const gender = useSelector((state) => state.form.basicDetails.gender);

  const handleOptionClick = (option) => {
    dispatch(updateBasicDetails({ gender: option }));
  };

  const handleSubmitClick = () => {
    dispatch(nextPage());
  };

  const question = "How would you describe your gender identity?";
  const questionNo = "2. ";
  const options = ["Man", "Woman", "Non-binary", "Prefer not to say"];

  return (
    <div className={classes.container}>
      <div className={classes.questionContainer}>
        <span>{questionNo}</span>
        <p className={classes.question}>{question}</p>
      </div>

      {options.map((option) => {
        const combinedClasses = `${classes.optionBtn} ${
          gender === option ? classes.optionBtnSelected : ""
        }`;

        return (
          <button
            key={option}
            className={combinedClasses}
            onClick={() => handleOptionClick(option)}
          >
            {option}
            {gender === option && <CheckMark />}
          </button>
        );
      })}
      <button className={classes.submitBtn} onClick={handleSubmitClick}>
        Submit
      </button>
    </div>
  );
}
