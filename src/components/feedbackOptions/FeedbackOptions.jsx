import css from "./FeedbackOptions.module.css";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <div className={css.feedbackList}>
            {options.map(option => (
                <button
                    className={css.feedbackButton}
                    key={option}
                    name={option}
                    type="button"
                    onClick={() => onLeaveFeedback(option)}
                >
                    {option}
                </button>
            ))}
        </div>
    );
};

export { FeedbackOptions };