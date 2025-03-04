import styles from "./CSSModule.module.css";

const CSSModule = () => {
    console.log(styles);
    return (
        <div className={`${styles.wrapper} ${styles.inverted}`}>
            Hello, I'm <span className="something">CSS Module!</span>
        </div>
    );
};

export default CSSModule;
