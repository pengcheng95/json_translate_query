const axios = require("axios");

const BASE_URL = "https://expressjs-production-cb4b.up.railway.app/translate/";

const LAN = "fr";
// const LAN = 'cn';
// const LAN = 'es';

const english = {
  LABELS: {
    userInfo: "User Info",
    address: "Address",
    email: "Email",
    continue: "Continue",
    firstName: "First name",
    lastName: "Last name",
    phone: "Phone",
    createPassword: "Create Password",
    enterPassword: "Enter Password",
    enterNewPassword: "Enter New Password",
    show: "show",
    hide: "hide",
    dob: "Date of Birth",
    dobRequired: "Date of Birth*",
    address1: "Address Line 1",
    address1Required: "Address Line 1*",
    address2: "Address Line 2",
    city: "City",
    state: "State",
    zip: "Zip",
    cityRequired: "City*",
    stateRequired: "State*",
    zipRequired: "Zip*",
    gender: "Gender",
    race: "Race",
    verifyPhone: "Verification code",
    save: "Save",
    confirm: "Confirm",
    close: "Close",
    delete: "Delete",
    yes: "Yes",
    notNow: "Not now",
    cancel: "Cancel",
    updateEmail: "Update Email",
    accept: "Accept",
    decline: "Decline",
    allow: "Allow",
    deny: "Deny",
    positive: "Positive",
    negative: "Negative",
    invalid: "Invalid",
    example: "Example {{count}}",
  },
  LANDING: {
    title: "Innovating accessible community care",
    footer: "Having trouble logging in?",
    link: "Please email us.",
    register: "Sign up",
    login: "Log in",
    submit: "Get Started",
    slide1Title: "Welcome to Daybreak Health",
    slide1Description: "Access your health information, wherever you are",
    slide2Title: "View your test results",
    slide2Description:
      "Get your diagnostic test results on the go, direct from the lab",
    slide3Title: "Check-in with ease",
    slide3Description:
      "Show your unique QR code to a nurse for a seamless care experience",
    slide4Title: "Manage your health data",
    slide4Description:
      "Keep track of your information, without all the paperwork",
    selectLanguage: "Select Language",
    languageTitle: "Choose Your Preferred Language",
    languageTitle2: "Please select your language",
  },
  LOGIN: {
    title: "Please enter your password",
    submit: "Log in",
    footer: "Having trouble logging in?",
    link: "Please email us.",
    forgotPassword: "Forgot Password?",
  },
  ENTER_EMAIL: {
    title: "Please enter your email to continue:",
    submit: "Continue",
    biometricTitle: "Use {{biometricType}}",
    notEnrolled:
      "Please enable {{biometricType}} in account settings after you login",
    errorToast:
      "Error loggin in with {{biometricType}}, please login by entering your email",
    alertTitle: "{{biometricType}} is not available",
    alertDescription: "Please enable {{biometricType}} in settings.",
    prompt: "Go to settings",
  },
  MAGIC_LINK: {
    title:
      "We sent an email to {{email}}, Please check your email and click on the link to complete the onboarding process.",
    cta: "Open email application",
    footer: "Resend Email",
    success: "Sign-in link successful!",
    successToast: "Successfully re-sent email!",
  },
  ENTER_PHONE: {
    title: "Please enter your phone number to continue:",
    submit: "Continue",
  },
  VERIFY_PHONE: {
    title: "Please check your messages for a verification code!",
    footer: "Resend code",
    successToast: "Successfully sent verification code!",
  },
  VERIFY_EMAIL: {
    title: "Please check your email!",
    footer: "Resend email",
  },
  REGISTER: {
    title: "Welcome! Please enter the following information:",
    hint1: "Your password must contain",
    req1: " an uppercase letter",
    req2: " a lowercase letter",
    req3: " a special character",
    req4: " a numeric character",
    hint2: " and must be",
    req5: " at least 8 characters long",
    userAgreement: "I agree to the ",
    tos: "terms and conditions",
    and: "and",
    privacy: "privacy policy",
    submit: "Continue",
    phoneError: "Invalid Phone number",
  },
  DEMOGRAPHIC: {
    title: "Please enter the following information",
    submit: "Continue",
    successToast: "Creating your account...",
  },
  BIOMETRIC: {
    title: "Would you like to enable {{biometricType}}?",
    errorToast: "Error using {{biometricType}}, please try again.",
  },
  ACCOUNT: {
    title: "Account",
    basicInfo: "Basic Info",
    healthProfile: "Health Profile",
    dependents: "Dependents",
    accountSettings: "Account Settings",
    help: "Get Help / FAQ",
    logout: "Log out",
    tos: "Terms of Service",
    privacy: "Privacy Policy",
    successToast: "Successfully sent verification email!",
    updateAddress: "Successfully updated your address!",
    submit: "Send Verification Email",
    message: "Please click the button below to verify your email.",
    verified: "verified",
    unverified: "unverified",
    updateEmail: "Please enter your new email address below.",
    updateEmailSuccess: "Successfully update your email",
  },
  SETTINGS: {
    resetPassword: "Reset your password",
    language: "Change Language",
    notifications: "Allow Notifications",
    biometric: "Allow {{biometricType}}",
    tos: "Terms and Privacy",
    appVersion: "App Version {{version}} ",
    build: "({{build}})",
    resetToast: "Password Reset email sent!",
    save: "Settings saved.",
  },
  LANGUAGE: {
    english: "English",
    spanish: "Español",
    chinese: "中文",
    french: "French",
  },
  HOME: {
    title: "Welcome, {{firstName}}!",
    description: "Please have your QR code ready to display when you check in.",
    qrcodeError:
      "Sorry, we are having trouble loading your QR Code, please try again.",
    retry: "Retry",
  },
  RESULTS: {
    cta: "Scroll to top",
    noResults: "No results to display.",
    pending: "Pending",
  },
  RAPID_TEST: {
    error: "Something went wrong, please try again",
    cta: "Scroll to top",
    noResults:
      "You have no saved rapid tests. To upload a rapid test, select the button below",
    submit: "Upload a Rapid Test",
    success: "Image uploaded successfully",
    deleteError: "Error deleting image",
    deleteSuccess: "Image successfully deleted",
    UPLOAD: {
      header: "Rapid Test Upload",
      title: "Taking a Photo of Your Rapid Test",
      description:
        "Place your rapid test on a flat surface with bright lighting. Center your test on the screen, hold your device steady, and capture a photo using the camera button.",
      description2:
        "Please confirm that the photo you captured is clear. If you'd like to re-take your photo, tap the retry button. Once you've captured a high quality photo, click the confirm button.",
      takePicture: "Take picture",
      retake: "Retake",
      confirm: "Confirm",
    },
    PACKAGE_UPLOAD: {
      header: "Rapid Test Package Upload",
      title: "Taking a Photo of Your Rapid Test Packaging",
      description:
        "Place your rapid test packaging on a flat surface with bright lighting. Center your test on the screen, hold your device steady, and capture a photo using the camera button.",
      description2:
        "Please confirm that the photo you captured is clear. If you'd like to re-take your photo, tap the retry button. Once you've captured a high quality photo, click the confirm button.",
      takePicture: "Take picture",
      retake: "Retake",
      confirm: "Confirm",
      skip: "Skip",
    },
    RESULT: {
      header: "Test Result",
      title: "COVID-19 Rapid Antigen Test",
      result: "Your test has been identified as {{resultUpper}}.",
      confidence: "Confidence score: {{confidence}}% ",
      retake: "Please retake the photo to get a valid result.",
      noSymptom: "No symptoms reported",
      symptom: "Days experiencing symptoms",
      day: "day",
      days: "days",
      report: "Report",
      reportMessage: "Image Reported. Thank you for the feedback!",
      reportInstruction:
        "Not satisfied with our diagnosis? Please use the button below to report if you believe this result is incorrect.",
      reportSuccess: "Successfully reported image!",
      reportAlert: "Are you sure you want to report this test result?",
    },
  },
  NO_INTERNET: {
    title: "Sorry! We're having trouble loading this page.",
    description: "Make sure you're connected to internet and try again later.",
  },
  DATA_POLICY: {
    cameraModal:
      "Allow Daybreak Health to access your camera so you can submit photos of rapid antigen tests.",
    title:
      " We request access to certain data to optimize our clinical processes and technology.",
    wifi: {
      title: "SSID/BSSID from ACCESS_WIFI_STATE:",
      description:
        "We access cellular and WiFi network information to know if your phone is online.",
    },
    camera: {
      title: "CAMERA, READ_EXTERNAL_STORAGE, WRITE_EXTERNAL_STORAGE:",
      description:
        "We request access to your camera and the photos, videos, and files on your device to enable you to report rapid antigen diagnostic tests.",
    },
    safety: "This information is not shared with third parties",
    biometrics: {
      header: "Allow Daybreak Health to access your biometrics",
      title: "USE_BIOMETRICS/FINGERPRINT:",
      description:
        "We request access to your biometrics for authentication purposes",
    },
  },
  TERMS_AND_CONDITIONS: {
    title: "Please accept our newest terms and conditions",
  },
  PRIVACY_POLICY: {
    title: "Please accept our newest privacy policy",
  },
  TOAST: {
    sessionError: "Please log-in again.",
    "Sorry, something went wrong": "Sorry, something went wrong",
  },
  ROUTES: {
    home: "Home",
    results: "Results",
    passport: "Passport",
    rapid_test: "Rapid Test Scanner",
    account: "Account",
    landing: "Landing",
    register: "Register",
    login: "Login",
    result_details: "Result Details",
    blog_details: "Blog Details",
    verify_phone: "Verify Phone",
    demographic: "Personal Information",
    biometric: "Biometric",
    magic_link: "Magic Link",
    enter_email: "Enter Email",
    user_info: "User Info",
    settings: "Settings",
    language: "Language",
    bottom_tab: "Bottom Tab",
    no_internet: "No Internet",
    rapid_test_upload_nav: "Rapid Test Upload Nav",
    rapid_test_upload: "Rapid Test Upload",
    rapid_test_package_upload: "Rapid Test Package Upload",
    new_terms_nav: "New Terms Nav",
    terms_and_condition: "Terms and Conditions",
    privacy_policy: "Privacy Policy",
  },
  ALERT: {
    updateAvailable: "Update available",
    reload: "Press ok to reload the app",
  },
};

axios
  .post(`${BASE_URL}${LAN}`, english)
  .then((res) => {
    console.log(res);
    console.log(JSON.stringify(res));
  })
  .catch((error) => {
    console.error(error);
  });
