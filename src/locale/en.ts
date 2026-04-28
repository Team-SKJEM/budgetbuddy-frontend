// Page content
const content = {
  home: {
    title: "Build better money habits with BudgetBuddy",
    subtitle:
      "Track spending, set practical goals, and stay confident with your budget every month.",
    primaryCta: "View on GitHub",
    githubUrl: "https://github.com/Team-SKJEM",
    secondaryCta: "Learn More",
    heroImagePlaceholder:
      "Placeholder: Home hero image (app screenshot or lifestyle)",
    highlightsTitle: "What you can do with BudgetBuddy",
    highlights: [
      {
        title: "Track every dollar",
        description:
          "Capture expenses in seconds and keep your spending history organized.",
      },
      {
        title: "Plan smarter budgets",
        description:
          "Set category budgets that match your lifestyle and update as life changes.",
      },
      {
        title: "See your trends",
        description:
          "Use simple visuals to understand where money goes and where to save.",
      },
    ],
    previewTitle: "Product preview",
    previewDesc:
      "Drop product screenshots here once you choose final images for launch.",
    previewImagePlaceholder:
      "Placeholder: Dashboard or receipt-scanning preview image",
    previewShots: [
      "Placeholder: Home dashboard screenshot",
      "Placeholder: Budgets screen screenshot",
      "Placeholder: Insights screen screenshot",
    ],
  },
  about: {
    title: "About BudgetBuddy",
    intro:
      "BudgetBuddy is built to make personal finance less stressful and more actionable for everyday users.",
    storyTitle: "Our story",
    storyParagraphs: [
      "We started BudgetBuddy after seeing how difficult it is to stay consistent with traditional budgeting tools.",
      "Our approach is simple: clear data, practical guidance, and a product that feels approachable from day one.",
    ],
    valuesTitle: "What we value",
    values: [
      {
        title: "Clarity",
        description:
          "You should always understand your financial picture at a glance.",
      },
      {
        title: "Consistency",
        description:
          "Small regular habits beat big one-time budgeting efforts.",
      },
      {
        title: "Confidence",
        description:
          "Better decisions come from tools that support, not overwhelm.",
      },
    ],
    teamTitle: "Team and culture",
    teamDesc:
      "Formed in Computer Engineering at University of Waterloo, our team values hard work, ownership, and consistency. We move fast, give direct feedback, and focus on building and shipping without ego. High standards, mutual respect, and trust drive everything we do.",
    teamImagePlaceholder: "Placeholder: Team photo or workspace image",
  },
  login: {
    title: "Login",
    emailPlaceholder: "Email",
    passwordPlaceholder: "Password",
    forgotPassword: "Forgot Password?",
    cta: "Login",
    error: {
      invalidEmail: "Invalid email format.",
      emptyPassword: "Password is required.",
      network: "Network error. Check your connection and backend URL.",
    },
  },
  forgotPassword: {
    title: "Forgot Password",
    desc: "Enter your account email and we'll send a password reset link.",
    emailPlaceholder: "Email",
    submit: "Send Reset Link",
    successTitle: "Check Your Email",
    successDesc: "If this email exists, a reset link has been sent.",
    backToLogin: "Back to",
    login: "Login",
    error: {
      invalidEmail: "Invalid email format.",
    },
  },
  resetPassword: {
    title: "Reset Password",
    desc: "Create a new password for your account.",
    passwordPlaceholder: "New Password",
    submit: "Update Password",
    successTitle: "Password Updated",
    successDesc: "Your password was reset successfully. You can sign in now.",
    backToLogin: "Back to",
    login: "Login",
    error: {
      missingToken: "Invalid reset link. Token is missing.",
    },
  },
};

export default content;
