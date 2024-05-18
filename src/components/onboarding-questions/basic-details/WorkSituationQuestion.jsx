import { useDispatch, useSelector } from "react-redux";
import classes from "../OnboardingQuestions.module.scss";
import { nextPage, updateBasicDetails } from "../../../store/formSlice";
import CheckMark from "../ui-components/CheckMark";

export default function WorkSituationQuestion() {
  const dispatch = useDispatch();
  const workSituation = useSelector(
    (state) => state.form.basicDetails.workSituation
  );

  const handleOptionClick = (option) => {
    dispatch(updateBasicDetails({ workSituation: option }));
  };

  const handleSubmitClick = () => {
    dispatch(nextPage());
  };

  const question = "What best describes your current work situation?";
  const questionNo = "5. ";
  const options = [
    "Employed in a multinational company (MNC)",
    "Employed in the private sector (non-MNC)",
    "Employed in the government/public sector",
    "Self-employed/Running a business",
    "Freelancer/Consultant",
    "Unemployed and looking for work",
    "Student",
  ];

  return (
    <div className={classes.container}>
      <div className={classes.questionContainer}>
        <span>{questionNo}</span>
        <p className={classes.question}>{question}</p>
      </div>
      {options.map((option) => {
        const combinedClasses = `${classes.optionBtn} ${
          workSituation === option ? classes.optionBtnSelected : ""
        }`;

        return (
          <button
            key={option}
            className={combinedClasses}
            onClick={() => handleOptionClick(option)}
          >
            {option}
            {workSituation === option && <CheckMark />}
          </button>
        );
      })}
      <button className={classes.submitBtn} onClick={handleSubmitClick}>
        Submit
      </button>
    </div>
  );
}
