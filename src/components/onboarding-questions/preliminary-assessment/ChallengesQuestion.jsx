import { useDispatch, useSelector } from "react-redux";
import classes from "../OnboardingQuestions.module.scss";
import {
  nextPage,
  updatePreliminaryAssessment,
} from "../../../store/formSlice";

export default function ChallengesQuestion() {
  const dispatch = useDispatch();
  const challenges = useSelector(
    (state) => state.form.preliminaryAssessment.challenges
  );

  const handleOptionChange = (e) => {
    dispatch(updatePreliminaryAssessment({ challenges: e.target.value }));
  };

  const handleSubmitClick = () => {
    dispatch(nextPage());
  };

  const question =
    "To understand your experiences more fully, we have a few other questions. In your own words, what's been on your mind or challenging for you recently?";
  const questionNo = "2. ";

  return (
    <div className={classes.container}>
      <div className={classes.questionContainer}>
        <span>{questionNo}</span>
        <p className={classes.question}>{question}</p>
      </div>
      <textarea
        onChange={handleOptionChange}
        className={classes.multiLineTextBox}
        value={challenges}
      ></textarea>
      <button className={classes.submitBtn} onClick={handleSubmitClick}>
        Submit
      </button>
    </div>
  );
}
