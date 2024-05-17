import { useSelector, useDispatch } from "react-redux";
import { nextPage, previousPage } from "./store/formSlice";
import classes from "./App.module.scss";
import BasicWelcomePage from "./components/OnboardingQuestions/BasicDetails/WelcomePage";
import AgeQuestion from "./components/OnboardingQuestions/BasicDetails/AgeQuestion";
import GenderQuestion from "./components/OnboardingQuestions/BasicDetails/GenderQuestion";
import LivingSituationQuestion from "./components/OnboardingQuestions/BasicDetails/LivingSituationQuestion";
import PhysicalHealthQuestion from "./components/OnboardingQuestions/BasicDetails/PhysicalHealthQuestion";
import WorkSituationQuestion from "./components/OnboardingQuestions/BasicDetails/WorkSituationQuestion";
import RelationshipStatusQuestion from "./components/OnboardingQuestions/BasicDetails/RelationshipStatusQuestion";
import PreliminaryWelcomePage from "./components/OnboardingQuestions/PreliminaryAssessment/WelcomePage";
import FeelingQuestion from "./components/OnboardingQuestions/PreliminaryAssessment/FeelingQuestion";
import ChallengesQuestion from "./components/OnboardingQuestions/PreliminaryAssessment/ChallengesQuestion";
import StressFrequencyQuestion from "./components/OnboardingQuestions/PreliminaryAssessment/StressFrequencyQuestion";
import SocialSupportQuestion from "./components/OnboardingQuestions/PreliminaryAssessment/SocialSupportQuestion";
import SourcesOfConcernQuestion from "./components/OnboardingQuestions/PreliminaryAssessment/SourcesOfConcernQuestion";
import PersonalChallengesQuestion from "./components/OnboardingQuestions/PreliminaryAssessment/PersonalChallengesQuestion";
import MotivationQuestion from "./components/OnboardingQuestions/PreliminaryAssessment/MotivationQuestion";
import AreasForChangeQuestion from "./components/OnboardingQuestions/PreliminaryAssessment/AreasForChangeQuestion";

export default function App() {
  const currentPage = useSelector((state) => state.form.currentPage);

  const renderStep = () => {
    switch (currentPage) {
      case 0:
        return <BasicWelcomePage />;
      case 1:
        return <AgeQuestion />;
      case 2:
        return <GenderQuestion />;
      case 3:
        return <LivingSituationQuestion />;
      case 4:
        return <PhysicalHealthQuestion />;
      case 5:
        return <WorkSituationQuestion />;
      case 6:
        return <RelationshipStatusQuestion />;
      case 7:
        return <PreliminaryWelcomePage />;
      case 8:
        return <FeelingQuestion />;
      case 9:
        return <ChallengesQuestion />;
      case 10:
        return <StressFrequencyQuestion />;
      case 11:
        return <SocialSupportQuestion />;
      case 12:
        return <SourcesOfConcernQuestion />;
      case 13:
        return <PersonalChallengesQuestion />;
      case 14:
        return <MotivationQuestion />;
      case 15:
        return <AreasForChangeQuestion />;
    }
  };

  return (
    <div>
      <div className={classes.container}>{renderStep()}</div>
      <NavBtns />
    </div>
  );
}

function NavBtns() {
  const currentPage = useSelector((state) => state.form.currentPage);
  const totalNoPages = useSelector((state) => state.form.totalNoPages);
  const dispatch = useDispatch();

  const handleNext = () => {
    if (currentPage < totalNoPages) {
      dispatch(nextPage());
    }
  };

  const handlePrevious = () => {
    if (currentPage > 0) {
      dispatch(previousPage());
    }
  };

  return (
    <div className={classes.navBtns}>
      <button
        onClick={handlePrevious}
        disabled={currentPage === 0}
        className={classes.prevBtn}
      >
        &#8592;
      </button>
      <button
        onClick={handleNext}
        disabled={currentPage === totalNoPages}
        className={classes.nextBtn}
      >
        &#8594;
      </button>
    </div>
  );
}
