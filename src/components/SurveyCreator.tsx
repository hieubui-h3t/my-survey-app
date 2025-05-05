"use client";

import { SurveyCreatorComponent, SurveyCreator } from "survey-creator-react";
import { Model } from "survey-core";
import 'survey-core/survey-core.css';
import "survey-creator-core/survey-creator-core.min.css";

export default function SurveyCreatorWidget() {
  const creator = new SurveyCreator({
    showLogicTab: true,
    isAutoSave: true
  });

  // Load a survey when needed
  creator.JSON = {
    pages: [{
      name: "page1",
      elements: [{
        type: "text",
        name: "question1",
        title: "Question 1"
      }]
    }]
  };

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <SurveyCreatorComponent creator={creator} />
    </div>
  );
} 