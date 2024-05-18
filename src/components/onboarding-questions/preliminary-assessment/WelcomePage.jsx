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
        Nice! next, we&apos;ll ask you a few more questions to understand your
        situation better and how we can provide the right support.
      </p>

      <button className={classes.startBtn} onClick={handleClick}>
        start
      </button>
    </div>
  );
}
