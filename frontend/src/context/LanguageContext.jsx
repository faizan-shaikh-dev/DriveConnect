"use client";

import { createContext, useContext, useState, useEffect } from "react";

export const translations = {
  en: {
    brandTagline: "Your car. Our driver. Anywhere.",
    heroSubtitle: "Hire verified, professional personal drivers for your own vehicle by the hour, day, or trip. Direct WhatsApp communication and live trip tracking.",
    bookDriver: "Book a driver",
    browseDrivers: "Browse drivers",
    findDriver: "Find Driver",
    becomeDriver: "Become a driver",
    login: "Log in",
    signup: "Sign up",
    drivers: "Drivers",
    howItWorks: "How it works",
    pricing: "Pricing",
    about: "About",
    contact: "Contact",
    switchLanguage: "Language",
    
    // Statuses
    available: "Available Now",
    onTrip: "On the Trip (Busy)",
    pendingApproval: "Pending Approval",
    approved: "Approved",
    platformFeePaid: "Fee Paid",
    platformFeePending: "Pay Platform Fee (₹499)",
    
    // Home Benefits
    benefit1Title: "Verified drivers",
    benefit1Desc: "Background-checked and trained professionals.",
    benefit2Title: "Transparent pricing",
    benefit2Desc: "Hourly rates with no hidden fees or surges.",
    benefit3Title: "24/7 support",
    benefit3Desc: "We're here whenever you're on the road.",
    
    // Drivers Listing
    findYourDriver: "Find your driver",
    findYourDriverSub: "Every driver is verified, trained and rated by riders like you.",
    searchPlaceholder: "Search by name or city (e.g. Mumbai, Pune, Delhi)...",
    allDrivers: "All Drivers",
    manualSpecialists: "Manual Transmission",
    autoSpecialists: "Automatic & EV",
    chatWhatsApp: "Chat on WhatsApp",
    viewProfile: "View Profile",
    bookNow: "Book",
    perHour: "₹{rate}/hr",
    trips: "trips",
    
    // Booking Form
    bookingTitle: "Book a driver",
    bookingSub: "Tell us when and where — we'll handle the rest.",
    pickupAddress: "Pickup address",
    pickupDate: "Date",
    pickupTime: "Time",
    duration: "Duration",
    hours2: "2 hours",
    hours4: "4 hours",
    fullDay: "Full day (8h)",
    carType: "Car type",
    automatic: "Automatic",
    manual: "Manual",
    confirmBooking: "Confirm booking",
    bookingConfirmed: "Booking confirmed!",
    bookingConfirmedSub: "Driver assigned. Details sent via WhatsApp.",
    openWhatsApp: "Connect with Driver on WhatsApp",
    backToHome: "Back to home",
    
    // Trip lifecycle
    startTrip: "Start Trip (Mark Busy)",
    finishTrip: "Finish Trip (Mark Available)",
    tripStartedAlert: "Trip is now in progress. Your profile is marked Busy to other clients.",
    tripFinishedAlert: "Trip finished! Your profile is now Available for new bookings.",
    rateDriverTitle: "Rate Your Trip with",
    submitRating: "Submit Rating & Review",
    ratingThankYou: "Thank you! Your rating helps rank top drivers.",
    
    // Dashboards
    driverDashboard: "Driver dashboard",
    adminDashboard: "Admin dashboard",
    welcomeBack: "Welcome back",
    switchAccount: "Switch account",
    todaysEarnings: "Today's earnings",
    tripsThisWeek: "Trips this week",
    rating: "Rating",
    hoursOnline: "Hours online",
    weeklyActivity: "Weekly activity",
    upcomingRides: "Upcoming rides",
    activeTrips: "Live Active Trips",
    driverApprovals: "Driver Approvals & Platform Fee",
    approveBtn: "Approve",
    rejectBtn: "Reject",
    payFeeBtn: "Pay ₹499 Fee",
  },
  
  hi: {
    brandTagline: "आपकी गाड़ी। हमारा ड्राइवर। कहीं भी।",
    heroSubtitle: "अपनी पर्सनल कार के लिए घंटे, पूरे दिन या यात्रा के हिसाब से वेरिफाइड प्रोफेशनल ड्राइवर बुक करें। डायरेक्ट व्हाट्सएप कनेक्ट और लाइव ट्रैकिंग।",
    bookDriver: "ड्राइवर बुक करें",
    browseDrivers: "ड्राइवर देखें",
    findDriver: "ड्राइवर ढूंढें",
    becomeDriver: "ड्राइवर बनें",
    login: "लॉग इन",
    signup: "साइन अप",
    drivers: "ड्राइवर्स",
    howItWorks: "यह कैसे काम करता है",
    pricing: "किराया",
    about: "हमारे बारे में",
    contact: "संपर्क करें",
    switchLanguage: "भाषा",
    
    // Statuses
    available: "उपलब्ध (Available)",
    onTrip: "यात्रा पर (Busy)",
    pendingApproval: "मंजूरी लंबित",
    approved: "स्वीकृत (Approved)",
    platformFeePaid: "फीस जमा है",
    platformFeePending: "प्लेटफ़ॉर्म फीस भरें (₹499)",
    
    // Home Benefits
    benefit1Title: "सत्यापित ड्राइवर्स",
    benefit1Desc: "बैकग्राउंड चेक और पूरी तरह से प्रशिक्षित पेशेवर।",
    benefit2Title: "पारदर्शी दरें",
    benefit2Desc: "बिना किसी छुपे शुल्क के निश्चित प्रति घंटे की दर।",
    benefit3Title: "24/7 सहायता",
    benefit3Desc: "सड़क पर आपकी मदद के लिए हर समय उपलब्ध।",
    
    // Drivers Listing
    findYourDriver: "अपना ड्राइवर चुनें",
    findYourDriverSub: "हर ड्राइवर वेरिफाइड, प्रशिक्षित और राइडर्स द्वारा रेटेड है।",
    searchPlaceholder: "नाम या शहर से खोजें (जैसे मुंबई, पुणे, दिल्ली)...",
    allDrivers: "सभी ड्राइवर्स",
    manualSpecialists: "मैन्युअल ट्रांसमिशन",
    autoSpecialists: "ऑटोमैटिक और EV",
    chatWhatsApp: "व्हाट्सएप पर चैट करें",
    viewProfile: "प्रोफ़ाइल देखें",
    bookNow: "बुक करें",
    perHour: "₹{rate}/घंटा",
    trips: "ट्रिप्स",
    
    // Booking Form
    bookingTitle: "ड्राइवर बुक करें",
    bookingSub: "बताएं कब और कहां — बाकी काम हमारा है।",
    pickupAddress: "पिकअप का पता",
    pickupDate: "तारीख",
    pickupTime: "समय",
    duration: "अवधि",
    hours2: "2 घंटे",
    hours4: "4 घंटे",
    fullDay: "पूरा दिन (8 घंटे)",
    carType: "कार का प्रकार",
    automatic: "ऑटोमैटिक",
    manual: "मैन्युअल",
    confirmBooking: "बुकिंग कन्फर्म करें",
    bookingConfirmed: "बुकिंग कन्फर्म हो गई!",
    bookingConfirmedSub: "ड्राइवर नियुक्त किया गया। विवरण व्हाट्सएप पर भेजा गया।",
    openWhatsApp: "व्हाट्सएप पर ड्राइवर से जुड़ें",
    backToHome: "होम पर वापस जाएं",
    
    // Trip lifecycle
    startTrip: "ट्रिप शुरू करें (Busy करें)",
    finishTrip: "ट्रिप समाप्त करें (Available करें)",
    tripStartedAlert: "ट्रिप शुरू हो गई है। आपकी प्रोफ़ाइल अन्य ग्राहकों के लिए व्यस्त (Busy) दिख रही है।",
    tripFinishedAlert: "ट्रिप पूरी हुई! आपकी प्रोफ़ाइल नए बुकिंग्स के लिए उपलब्ध है।",
    rateDriverTitle: "ड्राइवर को रेटिंग दें",
    submitRating: "रेटिंग और समीक्षा सबमिट करें",
    ratingThankYou: "धन्यवाद! आपकी रेटिंग से बेहतरीन ड्राइवर्स लिस्ट में ऊपर आते हैं।",
    
    // Dashboards
    driverDashboard: "ड्राइवर डैशबोर्ड",
    adminDashboard: "एडमिन डैशबोर्ड",
    welcomeBack: "स्वागत है",
    switchAccount: "अकाउंट बदलें",
    todaysEarnings: "आज की कमाई",
    tripsThisWeek: "इस हफ्ते की ट्रिप्स",
    rating: "रेटिंग",
    hoursOnline: "ऑनलाइन घंटे",
    weeklyActivity: "साप्ताहिक गतिविधि",
    upcomingRides: "आगामी यात्राएं",
    activeTrips: "सक्रिय लाइव यात्राएं",
    driverApprovals: "ड्राइवर मंजूरी और प्लेटफ़ॉर्म फीस",
    approveBtn: "स्वीकार करें",
    rejectBtn: "अस्वीकार करें",
    payFeeBtn: "₹499 फीस भरें",
  },
  
  mr: {
    brandTagline: "तुमची गाडी। आमचा ड्रायव्हर। कुठेही।",
    heroSubtitle: "तुमच्या स्वतःच्या वाहनासाठी तासावर, संपूर्ण दिवसासाठी किंवा प्रवासासाठी पडताळणी केलेले व्यावसायिक ड्रायव्हर बुक करा. थेट व्हॉट्सॲप आणि थेट ट्रॅकिंग.",
    bookDriver: "ड्रायव्हर बुक करा",
    browseDrivers: "ड्रायव्हर्स पहा",
    findDriver: "ड्रायव्हर शोधा",
    becomeDriver: "ड्रायव्हर व्हा",
    login: "लॉग इन",
    signup: "साइन अप",
    drivers: "ड्रायव्हर्स",
    howItWorks: "हे कसे कार्य करते",
    pricing: "दर",
    about: "आमच्याबद्दल",
    contact: "संपर्क",
    switchLanguage: "भाषा",
    
    // Statuses
    available: "उपलब्ध (Available)",
    onTrip: "प्रवासात व्यस्त (Busy)",
    pendingApproval: "मंजुरी प्रलंबित",
    approved: "मंजूर (Approved)",
    platformFeePaid: "शुल्क भरले आहे",
    platformFeePending: "प्लॅटफॉर्म फी भरा (₹499)",
    
    // Home Benefits
    benefit1Title: "सत्यापित ड्रायव्हर्स",
    benefit1Desc: "पार्श्वभूमी तपासणी आणि पूर्ण प्रशिक्षित व्यावसायिक.",
    benefit2Title: "पारदर्शक दर",
    benefit2Desc: "कोणत्याही लपविलेल्या शुल्काशिवाय निश्चित प्रति तास दर.",
    benefit3Title: "24/7 सहकार्य",
    benefit3Desc: "रस्त्यावर तुमच्या मदतीसाठी आम्ही सतत उपलब्ध आहोत.",
    
    // Drivers Listing
    findYourDriver: "तुमचा ड्रायव्हर शोधा",
    findYourDriverSub: "प्रत्येक ड्रायव्हर सत्यापित, प्रशिक्षित आणि ग्राहकांद्वारे रेट केलेला आहे.",
    searchPlaceholder: "नाव किंवा शहराने शोधा (उदा. मुंबई, पुणे, नागपूर)...",
    allDrivers: "सर्व ड्रायव्हर्स",
    manualSpecialists: "मॅन्युअल ट्रान्समिशन",
    autoSpecialists: "ऑटोमॅटिक आणि EV",
    chatWhatsApp: "व्हॉट्सॲपवर चॅट करा",
    viewProfile: "प्रोफाइल पहा",
    bookNow: "बुक करा",
    perHour: "₹{rate}/तास",
    trips: "ट्रिप्स",
    
    // Booking Form
    bookingTitle: "ड्रायव्हर बुक करा",
    bookingSub: "केव्हा आणि कुठे ते सांगा — बाकी आम्ही सांभाळू.",
    pickupAddress: "पिकअप पत्ता",
    pickupDate: "तारीख",
    pickupTime: "वेळ",
    duration: "कालावधी",
    hours2: "2 तास",
    hours4: "4 तास",
    fullDay: "पूर्ण दिवस (8 तास)",
    carType: "गाडीचा प्रकार",
    automatic: "ऑटोमॅटिक",
    manual: "मॅन्युअल",
    confirmBooking: "बुकिंग निश्चित करा",
    bookingConfirmed: "बुकिंग निश्चित झाले!",
    bookingConfirmedSub: "ड्रायव्हर नेमला गेला. तपशील व्हॉट्सॲपवर पाठवला आहे.",
    openWhatsApp: "व्हॉट्सॲपवर ड्रायव्हरशी संपर्क साधा",
    backToHome: "मुख्यपृष्ठावर परत जा",
    
    // Trip lifecycle
    startTrip: "प्रवास सुरू करा (व्यस्त करा)",
    finishTrip: "प्रवास पूर्ण करा (उपलब्ध करा)",
    tripStartedAlert: "प्रवास सुरू झाला आहे. तुमची प्रोफाइल आता इतर ग्राहकांसाठी व्यस्त (Busy) दिसत आहे.",
    tripFinishedAlert: "प्रवास संपला! तुमची प्रोफाइल आता नवीन बुकिंगसाठी उपलब्ध आहे.",
    rateDriverTitle: "ड्रायव्हरला रेटिंग द्या",
    submitRating: "रेटिंग आणि पुनरावलोकन सबमिट करा",
    ratingThankYou: "धन्यवाद! तुमच्या रेटिंगमुळे उत्कृष्ट ड्रायव्हर्स यादीत वर येतात.",
    
    // Dashboards
    driverDashboard: "ड्रायव्हर डॅशबोर्ड",
    adminDashboard: "ॲडमिन डॅशबोर्ड",
    welcomeBack: "स्वागत आहे",
    switchAccount: "खाते बदला",
    todaysEarnings: "आजची कमाई",
    tripsThisWeek: "या आठवड्यातील फेऱ्या",
    rating: "रेटिंग",
    hoursOnline: "ऑनलाइन तास",
    weeklyActivity: "साप्ताहिक क्रियाकलाप",
    upcomingRides: "पुढील फेऱ्या",
    activeTrips: "सक्रिय थेट फेऱ्या",
    driverApprovals: "ड्रायव्हर मंजुरी आणि प्लॅटफॉर्म फी",
    approveBtn: "मंजूर करा",
    rejectBtn: "नाकारा",
    payFeeBtn: "₹499 फी भरा",
  }
};

const LanguageContext = createContext({
  language: "en",
  setLanguage: () => {},
  t: (key) => key,
});

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState("en");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("driveconnect_lang");
      if (saved && (saved === "en" || saved === "hi" || saved === "mr")) {
        setLanguageState(saved);
      }
    } catch (e) {
      // ignore SSR or storage restriction
    }
  }, []);

  const setLanguage = (lang) => {
    setLanguageState(lang);
    try {
      localStorage.setItem("driveconnect_lang", lang);
    } catch (e) {}
  };

  const t = (key, params = {}) => {
    let text = translations[language]?.[key] || translations["en"]?.[key] || key;
    if (params) {
      Object.keys(params).forEach((paramKey) => {
        text = text.replace(new RegExp(`\\{${paramKey}\\}`, "g"), params[paramKey]);
      });
    }
    return text;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
