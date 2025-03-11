// Text strings used throughout the application

export const metadata = {
  title: "Credit Card Finder",
  description: "Find the perfect credit card for your needs",
}

export const formStrings = {
  progressBar: {
    complete: "% complete",
    keepItUp: ", keep it up!",
    completed: "!",
  },
  footer: {
    termsText: "By signing up, I agree to receive messages and accept the",
    termsLink: "Terms of Use",
    and: "and",
    privacyLink: "Privacy Policy",
    disclaimer: "Message frequency varies based on quiz answers. Text HELP for help or STOP to cancel. Your data is secure and encrypted.",
  },
  submission: {
    success: "Form submitted successfully!",
  },
}

export const step1Strings = {
  progress: "1 / 2",
  title: "Find your credit card",
  question: "What matters most to you when choosing a credit card?",
  options: [
    { id: "A", label: "High credit limit" },
    { id: "B", label: "Instant approval" },
    { id: "C", label: "No credit check required" },
    { id: "D", label: "No annual fee" },
    { id: "E", label: "Cashback rewards" },
    { id: "F", label: "Low or 0% APR" },
  ],
}

export const step2Strings = {
  progress: "2 / 2",
  title: "Find your credit card",
  question: "What is your monthly income?",
  options: [
    { id: "A", label: "Less than $2,500 USD" },
    { id: "B", label: "Between $2,500 and $5,000" },
    { id: "C", label: "Between $5,000 and $10,000" },
    { id: "D", label: "Between $10,000 and $15,000" },
    { id: "E", label: "Between $15,000 and $20,000" },
    { id: "F", label: "More than $20,000" },
  ],
}

export const step3Strings = {
  progress: "Almost there!",
  title: "Not long! Enter your data to find your result",
  fields: {
    email: "Email",
    name: "Name",
  },
  checkbox: "I agree to receive personalized messages",
  button: "Get Recommendation",
}
