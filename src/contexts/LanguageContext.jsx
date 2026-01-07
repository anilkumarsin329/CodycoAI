import { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('EN');

  const translations = {
    EN: {
      // Navbar
      home: "Home",
      features: "Features",
      about: "About us",
      career: "Career",
      login: "Login",
      try: "Try Now",
      
      // Home Page
      heroTitle: "We help hotel groups",
      heroSubtitle: "turn missed calls into",
      heroHighlight: "bookings.",
      heroDescription: "Our AI answers the phone like your best employee and books rooms end-to-end into your PMS.",
      pmsIntegrated: "PMS integrated",
      available247: "Available 24/7",
      multilingual: "Multilingual",
      designedForGroups: "Designed for hotel groups",
      emailPlaceholder: "Your professional email address",
      receiveTestNumber: "Receive test number",
      noDemo: "No demo meeting necessary. After a quick email verification, you will receive direct access to a test number.",
      trustedBy: "Trusted by 7 groups such as:",
      
      // Problem Section
      theProblem: "The problem",
      problemTitle: "We hear this from hotel groups like yours...",
      staffLack: "The lack of staff is paralyzing the reception.",
      staffLackDesc: "Some positions have been unfilled for months. We just can't staff the phone 24/7 anymore – and my team is at its limit.",
      standardSolutions: "Standard solutions do not fit our group.",
      standardSolutionsDesc: "As a hotel group, we have complex requirements for data protection and brand standards. A one-size-fits-all solution is simply not enough.",
      poorAvailability: "Poor availability, poor reviews.",
      poorAvailabilityDesc: "Our availability is constantly criticized in the reviews. We've fallen below 8.0 and can already see how the bookings are declining.",
      currentSolution: "Our current solution is part of the problem.",
      currentSolutionDesc: "Our call center is impersonal, the internal forwarding is a labyrinth. Nevertheless, calls are lost. We need something that simply works.",
      missedCalls: "Every missed call is lost revenue.",
      missedCallsDesc: "When I hear the phone ringing, I literally hear money that we are losing. Every missed call is a missed booking.",
      
      // Solution Section
      theSolution: "The solution",
      solutionTitle: "With Phone AI",
      solutionSubtitle: "from Call Chaos to Top Guest Experience.",
      oldWorld: "The old world",
      withCodyco: "With Codyco",
      measurableResults: "Measurable results, usually after one week.",
      ensuringAvailability: "ensuring availability",
      availabilityDesc: "No call and no booking opportunity will be lost anymore – whether at night, on weekends, or when the lines are busy.",
      moreDirectBookings: "More direct bookings",
      bookingsDesc: "Nights on additional direct bookings per week and hotel through the automated acceptance of missed calls.",
      takeLoadOffTeam: "Take load of your team",
      teamLoadDesc: "All inquiries are autonomously answered by the AI so your team can focus on guests on site.",
      increaseGuestSatisfaction: "Increase guest satisfaction",
      satisfactionDesc: "Satisfaction rate among callers who receive immediate assistance without being placed on hold.",
      
      // Secure Sales Section
      fewerBookingsLose: "Fewer bookings lose",
      secureSales: "Secure sales",
      directlyOverPhone: "directly over the phone.",
      endToEndBookings: "End-to-End bookings into the PMS",
      aiAcceptsReservations: "The AI accepts reservations, processes payments securely, and automatically and accurately records the booking in your PMS (Opera Cloud, Sihot, Apaleo). Your revenue is secured instantly.",
      intelligentCallForwarding: "Intelligent call forwarding",
      answerStandardQuestions: "Answer standard questions",
      intelligentCompleteTransfers: "Intelligent and complete transfers",
      enterpriseLevel: "Enterprise-Level: Secure & Brand-Compliant",
      
      // Expansion Stages Section
      expansionStages: "Expansion stages",
      aiGrowsWithYou: "Our AI grows with you – In 3 clear phases.",
      immediateCoverage: "Immediate coverage",
      immediateCoverageDesc: "The AI acts like a call center. It only intervenes in missed calls, answers simple FAQs, and perfectly forwards complex queries to your team via email.",
      directBookingEngine: "Direct booking engine",
      directBookingEngineDesc: "The AI is seamlessly integrated with your PMS. It can now not only accept missed calls but also convert inquiries in real-time into paid direct bookings and enter them error-free.",
      phoneCenter: "The phone center",
      phoneCenterDesc: "The AI is the point of contact for all calls. It replaces your old \"Press 1\" menu, answers requests immediately, or intelligently directs the guest to the right contact person.",
      thisMeansForYou: "This means for you",
      
      // Footer
      footerDescription: "Codyco helps hotel groups turn missed calls into bookings using AI-powered phone assistants.",
      product: "Product",
      legal: "Legal",
      newsletter: "Newsletter",
      newsletterDesc: "Get product updates and AI insights for hospitality.",
      subscribe: "Subscribe",
      dataPrivacy: "Data Privacy",
      imprint: "Imprint",
      termsConditions: "Terms & Conditions",
      builtFor: "Built for hotel groups worldwide",
      yourEmail: "Your email"
    },
    HI: {
      // Navbar
      home: "होम",
      features: "विशेषताएँ",
      about: "हमारे बारे में",
      career: "करियर",
      login: "लॉगिन",
      try: "अभी आज़माएँ",
      
      // Home Page
      heroTitle: "हम होटल समूहों की मदद करते हैं",
      heroSubtitle: "छूटी हुई कॉलों को",
      heroHighlight: "बुकिंग में बदलने के लिए।",
      heroDescription: "हमारा AI आपके सबसे अच्छे कर्मचारी की तरह फोन का जवाब देता है और आपके PMS में कमरे बुक करता है।",
      pmsIntegrated: "PMS एकीकृत",
      available247: "24/7 उपलब्ध",
      multilingual: "बहुभाषी",
      designedForGroups: "होटल समूहों के लिए डिज़ाइन किया गया",
      emailPlaceholder: "आपका व्यावसायिक ईमेल पता",
      receiveTestNumber: "टेस्ट नंबर प्राप्त करें",
      noDemo: "कोई डेमो मीटिंग आवश्यक नहीं। त्वरित ईमेल सत्यापन के बाद, आपको टेस्ट नंबर तक सीधी पहुंच मिलेगी।",
      trustedBy: "7 समूहों द्वारा भरोसा किया गया जैसे:",
      
      // Problem Section
      theProblem: "समस्या",
      problemTitle: "हम आपके जैसे होटल समूहों से यह सुनते हैं...",
      staffLack: "स्टाफ की कमी रिसेप्शन को लकवाग्रस्त कर रही है।",
      staffLackDesc: "कुछ पद महीनों से खाली हैं। हम अब 24/7 फोन पर स्टाफ नहीं रख सकते - और मेरी टीम अपनी सीमा पर है।",
      standardSolutions: "मानक समाधान हमारे समूह के लिए उपयुक्त नहीं हैं।",
      standardSolutionsDesc: "एक होटल समूह के रूप में, हमारे पास डेटा सुरक्षा और ब्रांड मानकों के लिए जटिल आवश्यकताएं हैं। एक आकार-सभी के लिए उपयुक्त समाधान पर्याप्त नहीं है।",
      poorAvailability: "खराब उपलब्धता, खराब समीक्षाएं।",
      poorAvailabilityDesc: "हमारी उपलब्धता की समीक्षाओं में लगातार आलोचना की जाती है। हम 8.0 से नीचे गिर गए हैं और पहले से ही देख सकते हैं कि बुकिंग कैसे घट रही है।",
      currentSolution: "हमारा वर्तमान समाधान समस्या का हिस्सा है।",
      currentSolutionDesc: "हमारा कॉल सेंटर अव्यक्तिगत है, आंतरिक फॉरवर्डिंग एक भूलभुलैया है। फिर भी, कॉलें खो जाती हैं। हमें कुछ ऐसा चाहिए जो बस काम करे।",
      missedCalls: "हर छूटी हुई कॉल खोया हुआ राजस्व है।",
      missedCallsDesc: "जब मैं फोन की घंटी सुनता हूं, तो मैं सचमुच उस पैसे को सुनता हूं जो हम खो रहे हैं। हर छूटी हुई कॉल एक छूटी हुई बुकिंग है।",
      
      // Solution Section
      theSolution: "समाधान",
      solutionTitle: "फोन AI के साथ",
      solutionSubtitle: "कॉल अराजकता से शीर्ष अतिथि अनुभव तक।",
      oldWorld: "पुराना संसार",
      withCodyco: "Codyco के साथ",
      measurableResults: "मापने योग्य परिणाम, आमतौर पर एक सप्ताह बाद।",
      ensuringAvailability: "उपलब्धता सुनिश्चित करना",
      availabilityDesc: "कोई भी कॉल और कोई बुकिंग अवसर अब खो नहीं जाएगा - चाहे रात में, सप्ताहांत में, या जब लाइनें व्यस्त हों।",
      moreDirectBookings: "अधिक प्रत्यक्ष बुकिंग",
      bookingsDesc: "छूटी हुई कॉलों की स्वचालित स्वीकृति के माध्यम से प्रति सप्ताह और होटल अतिरिक्त प्रत्यक्ष बुकिंग पर रातें।",
      takeLoadOffTeam: "अपनी टीम का बोझ कम करें",
      teamLoadDesc: "सभी पूछताछ स्वायत्त रूप से AI द्वारा उत्तर दी जाती है ताकि आपकी टीम साइट पर मेहमानों पर ध्यान केंद्रित कर सके।",
      increaseGuestSatisfaction: "अतिथि संतुष्टि बढ़ाएं",
      satisfactionDesc: "कॉलर्स के बीच संतुष्टि दर जो होल्ड पर रखे बिना तत्काल सहायता प्राप्त करते हैं।",
      
      // Secure Sales Section
      fewerBookingsLose: "कम बुकिंग खोना",
      secureSales: "सुरक्षित बिक्री",
      directlyOverPhone: "सीधे फोन पर।",
      endToEndBookings: "PMS में एंड-टू-एंड बुकिंग",
      aiAcceptsReservations: "AI आरक्षण स्वीकार करता है, भुगतान को सुरक्षित रूप से प्रोसेस करता है, और आपके PMS (Opera Cloud, Sihot, Apaleo) में बुकिंग को स्वचालित और सटीक रूप से रिकॉर्ड करता है। आपका राजस्व तुरंत सुरक्षित हो जाता है।",
      intelligentCallForwarding: "बुद्धिमान कॉल फॉरवर्डिंग",
      answerStandardQuestions: "मानक प्रश्नों का उत्तर दें",
      intelligentCompleteTransfers: "बुद्धिमान और पूर्ण स्थानांतरण",
      enterpriseLevel: "एंटरप्राइज़-स्तर: सुरक्षित और ब्रांड-अनुपालित",
      
      // Expansion Stages Section
      expansionStages: "विस्तार चरण",
      aiGrowsWithYou: "हमारा AI आपके साथ बढ़ता है – 3 स्पष्ट चरणों में।",
      immediateCoverage: "तत्काल कवरेज",
      immediateCoverageDesc: "AI एक कॉल सेंटर की तरह काम करता है। यह केवल छूटी हुई कॉलों में हस्तक्षेप करता है, साधारण FAQ का उत्तर देता है, और जटिल प्रश्नों को ईमेल के माध्यम से आपकी टीम को पूर्ण रूप से फॉरवर्ड करता है।",
      directBookingEngine: "प्रत्यक्ष बुकिंग इंजन",
      directBookingEngineDesc: "AI आपके PMS के साथ निर्बाध रूप से एकीकृत है। अब यह न केवल छूटी हुई कॉलों को स्वीकार कर सकता है बल्कि पूछताछ को रियल-टाइम में भुगतान की गई प्रत्यक्ष बुकिंग में बदल सकता है और उन्हें त्रुटि-मुक्त दर्ज कर सकता है।",
      phoneCenter: "फोन केंद्र",
      phoneCenterDesc: "AI सभी कॉलों के लिए संपर्क का बिंदु है। यह आपके पुराने \"1 दबाएं\" मेनू को बदल देता है, अनुरोधों का तुरंत उत्तर देता है, या बुद्धिमानी से अतिथि को सही संपर्क व्यक्ति के पास भेजता है।",
      thisMeansForYou: "इसका मतलब आपके लिए",
      
      // Footer
      footerDescription: "Codyco AI-संचालित फोन सहायकों का उपयोग करके होटल समूहों को छूटी हुई कॉलों को बुकिंग में बदलने में मदद करता है।",
      product: "उत्पाद",
      legal: "कानूनी",
      newsletter: "न्यूज़लेटर",
      newsletterDesc: "आतिथ्य के लिए उत्पाद अपडेट और AI अंतर्दृष्टि प्राप्त करें।",
      subscribe: "सब्सक्राइब करें",
      dataPrivacy: "डेटा गोपनीयता",
      imprint: "छाप",
      termsConditions: "नियम और शर्तें",
      builtFor: "दुनिया भर के होटल समूहों के लिए बनाया गया",
      yourEmail: "आपका ईमेल"
    }
  };

  const t = (key) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};