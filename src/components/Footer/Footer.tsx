import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <div className={styles.attribution}>
      Challenge by
      <a className={styles.link}
        href="https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv/hub"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit the challenge page on Frontend Mentor"
      >
        Frontend Mentor
      </a>
      . Coded by
      <a className={styles.link}
        href="https://github.com/marijazlatkova"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit Marija Zlatkova's GitHub profile"
      >
        Marija Zlatkova
      </a>
      .
    </div>
  );
};