import { useDispatch } from "react-redux";
import classes from "../OnboardingQuestions.module.scss";
import { nextPage } from "../../../store/formSlice.js";

export default function WelcomePage() {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(nextPage());
  };

  return (
    <div className={classes.container}>
      <p className={classes.welcomeText}>
        Welcome! Before we get started, we have a few initial questions to
        understand your situation better.
      </p>

      <button className={classes.startBtn} onClick={handleClick}>
        start
      </button>
    </div>
  );
}
