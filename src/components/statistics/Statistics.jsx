import css from "./Statistics.module.css";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
        <div>
            <ul className={css.listWrapper}>
                <li className={css.listItem}>Good: {good}</li>
                <li className={css.listItem}>Neutral: {neutral}</li>
                <li className={css.listItem}>Bad: {bad}</li>
                <li className={css.listItem}>Total: {total}</li>
                <li className={css.listItem}>Positive feedback: {positivePercentage}%</li>
            </ul>
        </div>
    );
};

export { Statistics };