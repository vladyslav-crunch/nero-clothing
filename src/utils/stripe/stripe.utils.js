import { loadStripe } from "@stripe/stripe-js";

export const stripePromise = loadStripe(
  `${process.env.REACT_APP_STIPE_PUBLISHABLE_KEY}`
);
