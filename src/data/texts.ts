export const mainTexts = {
  title: "Stay updated!",
  description: "Join 60,000+ product managers receiving monthly updates on:",
  listItems: [
    "Product discovery and building what matters",
    "Measuring to ensure updates are a success",
    "And much more!",
  ],
  inputLabel: "Email address",
  buttonLabel: "Subscribe to monthly newsletter",
};

export const successTexts = {
  title: "Thanks for subscribing!",
  description: (email: string) =>
    `A confirmation email has been sent to ${email}. Please open it and click the button inside to confirm your subscription.`,
  buttonLabel: "Dismiss message",
};