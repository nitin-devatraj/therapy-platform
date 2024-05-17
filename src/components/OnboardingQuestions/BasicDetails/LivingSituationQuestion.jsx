import { useDispatch } from "react-redux";
import { useState } from "react";
import classes from "../OnboardingQuestions.module.scss";
import { nextPage, updateBasicDetails } from "../../../store/formSlice";
import CheckMark from "../CheckMark";

export default function LivingSituationQuestion() {
  const [selectedOption, setSelectedOption] = useState("");
  const dispatch = useDispatch();

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleSubmitClick = () => {
    dispatch(updateBasicDetails({ livingSituation: selectedOption }));
    dispatch(nextPage());
  };

  const question = "3. What best describes your current living situation?";
  const options = [
    "Living alone",
    "Living with partner/spouse",
    "Living with roommates (Friends)",
    "Living with roommates (Acquaintances)",
    "Living with family members",
  ];

  return (
    <div className={classes.container}>
      <p className={classes.question}>{question}</p>
      {options.map((option) => {
        const combinedClasses = `${classes.optionBtn} ${
          selectedOption === option ? classes.optionBtnSelected : ""
        }`;

        return (
          <button
            key={option}
            className={combinedClasses}
            onClick={() => handleOptionClick(option)}
          >
            {option}
            {selectedOption === option && <CheckMark />}
          </button>
        );
      })}
      <button className={classes.submitBtn} onClick={handleSubmitClick}>
        Submit
      </button>
    </div>
  );
}
