import { successTexts } from "../../data/texts";
import { images } from "../../data/images";
import styles from "./SuccessMessage.module.scss";

interface ISuccessMessageProps {
  email: string;
  reset: () => void;
}

export const SuccessMessage = (props: ISuccessMessageProps) => {
  return (
    <div className={styles.successContainer}>
      <div className={styles.successContent}>
        <img className={styles.successIcon}
          src={images.successIcon}
          alt="Success icon"
        />
        <h1 className={styles.successTitle}>{successTexts.title}</h1>
        <p className={styles.successDescription}>{successTexts.description(props.email)}</p>
      </div>
      <button className={styles.dismissButton} onClick={props.reset} aria-label="Dismiss success message">
        {successTexts.buttonLabel}
      </button>
    </div>
  );
};