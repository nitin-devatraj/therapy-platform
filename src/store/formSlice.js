import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentPage: 0,
  totalNoPages: 16,
  basicDetails: {
    age: "",
    gender: "",
    livingSituation: "",
    physicalHealth: "",
    workSituation: "",
    relationshipStatus: "",
  },
  preliminaryAssessment: {
    feelings: "",
    challenges: "",
    stressFrequency: "",
    socialSupport: "",
    sourcesOfConcern: [],
    personalChallenges: [],
    motivation: "",
    areasForChange: [],
  },
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    nextPage(state) {
      state.currentPage += 1;
    },
    previousPage(state) {
      state.currentPage -= 1;
    },
    updateBasicDetails(state, action) {
      state.basicDetails = { ...state.basicDetails, ...action.payload };
    },
    updatePreliminaryAssessment(state, action) {
      state.preliminaryAssessment = {
        ...state.preliminaryAssessment,
        ...action.payload,
      };
    },
  },
});

export const {
  updateBasicDetails,
  updatePreliminaryAssessment,
  nextPage,
  previousPage,
} = formSlice.actions;
export default formSlice.reducer;
