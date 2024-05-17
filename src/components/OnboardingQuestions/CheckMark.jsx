import classes from "./OnboardingQuestions.module.scss";

export default function CheckMark() {
  return (
    <span className={classes.checkmark}>
      <svg height="13" width="16">
        <path d="M14.293.293l1.414 1.414L5 12.414.293 7.707l1.414-1.414L5 9.586z"></path>
      </svg>
    </span>
  );
}
