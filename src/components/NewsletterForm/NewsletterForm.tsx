import { mainTexts } from "../../data/texts";
import { images } from "../../data/images";
import styles from "./NewsletterForm.module.scss";

interface INewsletterFormProps {
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setIsSuccess: React.Dispatch<React.SetStateAction<boolean>>;
  setError: React.Dispatch<React.SetStateAction<string | null>>;
  error: string | null;
}

export const NewsletterForm = (props: INewsletterFormProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.setError(null);
    props.setEmail(e.target.value);
  };

  const handleSubmit = () => {
    if (props.email === "") {
      props.setError("Value cannot be empty");
      return;
    }
    if (!props.email.match(/[^\s@]+@[^\s@]+\.[^\s@]+/gi)) {
      props.setError("Valid email required");
      return;
    }
    props.setIsSuccess(true);
  };

  return (
    <div className={styles.newsletterContainer}>
      <img
        className={styles.desktop}
        src={images.mainDesktopImage}
        alt="Desktop illustration of newsletter signup"
      />
      <img
        className={styles.mobile}
        src={images.mainMobileImage}
        alt="Mobile illustration of newsletter signup"
      />
      <div className={styles.contentContainer}>
        <div className={styles.content}>
          <h1 className={styles.title}>{mainTexts.title}</h1>
          <p className={styles.description}>{mainTexts.description}</p>
          <ul className={styles.listItems}>
            {mainTexts.listItems.map((item, index) => (
              <li className={styles.listItem} key={index}>
                <img
                  className={styles.listIcon}
                  src={images.listIcon}
                  alt="Icon representing list item"
                />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.inputContainer}>
          <div className={styles.labelErrorWrapper}>
            <label className={styles.label} htmlFor="email">
              {mainTexts.inputLabel}
            </label>
            {props.error && (
              <p className={styles.error} aria-live="polite">
                {props.error}
              </p>
            )}
          </div>
          <input
            className={`${styles.input} ${props.error ? styles.inputError : ""}`}
            id="email"
            type="email"
            name="email"
            placeholder="email@company.com"
            onChange={handleChange}
            value={props.email}
          />
          <button
            className={styles.subscribe}
            onClick={handleSubmit}
            aria-label="Subscribe to newsletter"
          >
            {mainTexts.buttonLabel}
          </button>
        </div>
      </div>
    </div>
  );
};