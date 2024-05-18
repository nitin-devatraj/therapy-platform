import { useDispatch, useSelector } from "react-redux";
import classes from "../OnboardingQuestions.module.scss";
import { nextPage, updateBasicDetails } from "../../../store/formSlice";
import CheckMark from "../ui-components/CheckMark";

export default function RelationshipStatusQuestion() {
  const dispatch = useDispatch();
  const relationshipStatus = useSelector(
    (state) => state.form.basicDetails.relationshipStatus
  );

  const handleOptionClick = (option) => {
    dispatch(updateBasicDetails({ relationshipStatus: option }));
  };

  const handleSubmitClick = () => {
    dispatch(nextPage());
  };

  const question =
    "How would you describe your current romantic relationship situation?";
  const questionNo = "6. ";
  const options = [
    "In a committed long-term relationship/married",
    "In a relationship, but long-distance",
    "In a newer/casual relationship",
    "Single and not actively dating",
    "Prefer not to answer",
  ];

  return (
    <div className={classes.container}>
      <div className={classes.questionContainer}>
        <span>{questionNo}</span>
        <p className={classes.question}>{question}</p>
      </div>
      {options.map((option) => {
        const combinedClasses = `${classes.optionBtn} ${
          relationshipStatus === option ? classes.optionBtnSelected : ""
        }`;

        return (
          <button
            key={option}
            className={combinedClasses}
            onClick={() => handleOptionClick(option)}
          >
            {option}
            {relationshipStatus === option && <CheckMark />}
          </button>
        );
      })}
      <button className={classes.submitBtn} onClick={handleSubmitClick}>
        Submit
      </button>
    </div>
  );
}
