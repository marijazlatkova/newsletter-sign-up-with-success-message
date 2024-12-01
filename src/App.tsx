import { useState } from "react";
import { NewsletterForm } from "./components/NewsletterForm/NewsletterForm";
import { SuccessMessage } from "./components/SuccessMessage/SuccessMessage";
import { Footer } from "./components/Footer/Footer";
import styles from "./App.module.scss";

const App = () => {
  const [email, setEmail] = useState<string>("");
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const reset = () => {
    setEmail("");
    setIsSuccess(false);
    setError(null);
  };

  return (
    <div
      className={`${styles.App} ${
        isSuccess ? styles.SuccessMessage : styles.NewsletterForm
      }`}
    >
      <main aria-label="Main content">
        <section aria-label="Newsletter subscription section">
          {!isSuccess ? (
            <NewsletterForm
              email={email}
              setEmail={setEmail}
              setIsSuccess={setIsSuccess}
              setError={setError}
              error={error}
            />
          ) : (
            <SuccessMessage email={email} reset={reset} />
          )}
        </section>
      </main>
      <footer className={styles.Footer} aria-label="Footer">
        <Footer />
      </footer>
    </div>
  );
};

export default App;