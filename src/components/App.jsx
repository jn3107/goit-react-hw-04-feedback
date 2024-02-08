import { Component } from "react";
import css from "./App.module.css";
import { FeedbackOptions } from "./feedbackOptions/FeedbackOptions";
import { Statistics } from "./statistics/Statistics";
import { SectionTitle } from "./sectionTitle/SectionTitle";
import { NotificationMessage } from "./notificationMessage/NotificationMessage";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    return total ? Math.round((this.state.good / total) * 100) : 0;
  };

  onBtnClick = option =>
    this.setState(prevState => {
      return { [option]: prevState[option] + 1 };
    });
  
  render() {
    const options = Object.keys(this.state);
    const total = this.countTotalFeedback();
    const { good, neutral, bad } = this.state;

    return (
      <div className={css.container}>
        <SectionTitle title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.onBtnClick}
          />
        </SectionTitle>

        <SectionTitle title="Statistics">
          {total ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
              <NotificationMessage message="There is no feedback" />
          )}
        </SectionTitle>
      </div>
    );
  }
};
