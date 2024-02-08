import css from "./SectionTitle.module.css";

const SectionTitle = ({ title, children }) => {
    return (
        <div>
            <section className={css.section}>
                <h2 className={css.title}>{title}</h2>
                {children}
            </section>
        </div>
    );
};

export { SectionTitle };