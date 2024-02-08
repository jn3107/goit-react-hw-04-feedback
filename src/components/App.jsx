import css from "./App.module.css";
import { FeedbackOptions } from "./feedbackOptions/FeedbackOptions";
import { Statistics } from "./statistics/Statistics";
import { SectionTitle } from "./sectionTitle/SectionTitle";
import { NotificationMessage } from "./notificationMessage/NotificationMessage";
import { useState } from "react";

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return total ? Math.round((this.state.good / total) * 100) : 0;
  };

  const onBtnClick = option => {
    switch (option) {
      case "good":
        setGood(prevGood => prevGood + 1);
        break;
      case "neutral":
        setNeutral(prevNeutral => prevNeutral + 1);
        break;
      case "bad":
        setBad(prevBad => prevBad + 1);
        break;
      default:
        return;
    }
  };

  const total = countTotalFeedback();
  
  return (
    <div className={css.container}>
      <SectionTitle title="Please leave feedback">
        <FeedbackOptions
          options={["good", "neutral", "bad"]}
          onLeaveFeedback={onBtnClick}
        />
      </SectionTitle>

      <SectionTitle title="Statistics">
        {total ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <NotificationMessage message="There is no feedback" />
        )}
      </SectionTitle>
    </div>
  );
};
