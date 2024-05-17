import { useDispatch } from "react-redux";
import { useState } from "react";
import classes from "../OnboardingQuestions.module.scss";
import { nextPage, updateBasicDetails } from "../../../store/formSlice";
import CheckMark from "../CheckMark";

export default function WorkSituationQuestion() {
  const [selectedOption, setSelectedOption] = useState("");
  const dispatch = useDispatch();

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleSubmitClick = () => {
    dispatch(updateBasicDetails({ workSituation: selectedOption }));
    dispatch(nextPage());
  };

  const question = "5. What best describes your current work situation?";
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
