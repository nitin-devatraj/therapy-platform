import { useDispatch, useSelector } from "react-redux";
import classes from "../OnboardingQuestions.module.scss";
import { nextPage, updateBasicDetails } from "../../../store/formSlice";
import CheckMark from "../ui-components/CheckMark";

export default function LivingSituationQuestion() {
  const dispatch = useDispatch();
  const livingSituation = useSelector(
    (state) => state.form.basicDetails.livingSituation
  );

  const handleOptionClick = (option) => {
    dispatch(updateBasicDetails({ livingSituation: option }));
  };

  const handleSubmitClick = () => {
    dispatch(nextPage());
  };

  const question = "What best describes your current living situation?";
  const questionNo = "3. ";
  const options = [
    "Living alone",
    "Living with partner/spouse",
    "Living with roommates (Friends)",
    "Living with roommates (Acquaintances)",
    "Living with family members",
  ];

  return (
    <div className={classes.container}>
      <div className={classes.questionContainer}>
        <span>{questionNo}</span>
        <p className={classes.question}>{question}</p>
      </div>
      {options.map((option) => {
        const combinedClasses = `${classes.optionBtn} ${
          livingSituation === option ? classes.optionBtnSelected : ""
        }`;

        return (
          <button
            key={option}
            className={combinedClasses}
            onClick={() => handleOptionClick(option)}
          >
            {option}
            {livingSituation === option && <CheckMark />}
          </button>
        );
      })}
      <button className={classes.submitBtn} onClick={handleSubmitClick}>
        Submit
      </button>
    </div>
  );
}
