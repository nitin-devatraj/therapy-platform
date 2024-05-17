import { useDispatch } from "react-redux";
import { useState } from "react";
import classes from "../OnboardingQuestions.module.scss";
import {
  nextPage,
  updatePreliminaryAssessment,
} from "../../../store/formSlice";

export default function ChallengesQuestion() {
  const [selectedOption, setSelectedOption] = useState("");
  const dispatch = useDispatch();

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleSubmitClick = () => {
    dispatch(updatePreliminaryAssessment({ challenges: selectedOption }));
    dispatch(nextPage());
  };

  const question =
    "2. To understand your experiences more fully, we have a few other questions. In your own words, what's been on your mind or challenging for you recently?";

  return (
    <div className={classes.container}>
      <p className={classes.question}>{question}</p>
      <textarea
        onChange={handleOptionChange}
        className={classes.multiLineTextBox}
      ></textarea>
      <button className={classes.submitBtn} onClick={handleSubmitClick}>
        Submit
      </button>
    </div>
  );
}
