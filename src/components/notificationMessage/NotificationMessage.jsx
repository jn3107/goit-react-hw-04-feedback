import css from "./NotificationMessage.module.css";

const NotificationMessage = ({ message }) => {
    return (
        <div>
            <p className={css.message}>{message}</p>;
        </div>
    )
};

export { NotificationMessage };