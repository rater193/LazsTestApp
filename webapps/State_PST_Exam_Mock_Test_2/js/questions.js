const myQuestions = [
  {
    title: "Question 1 -",
    question: "Respect for different cultures, backgrounds, lifestyles and generational differences is part of Human ____________________.",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "Differences",
      b: "Diversity",
      c: "Contrast",
      d: "Discrepancy"
    },
    correctAnswer: "b",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 2 -",
    question: "A mobile water source.",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "Engine",
      b: "Tanker",
      c: "Fire Boat",
      d: "Brush Truck"
    },
    correctAnswer: "b",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 3 -",
    question: "HIPAA does not prevent PSTs from relaying information to responding units; it does prevent PSTs from relaying information to curious callers.",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "True",
      b: "False"
    },
    correctAnswer: "a",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 4 -",
    question: "A conscious effort that requires the listener to understand and interpret what is being heard by showing interest in what the speaker is saying and to ensure mutual understanding is ___________________________.",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "Conversation attending",
      b: "Paraphrasing",
      c: "Active listening",
      d: "Communications cycle"
    },
    correctAnswer: "c",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 5 -",
    question: "Hypertension is low blood sugar.",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "True",
      b: "False"
    },
    correctAnswer: "b",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 6 -",
    question: "The use of force or threat of force without declaring war to terrorize citizens and achieve a political goal is known as ________________________.",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "Domestic Terrorism",
      b: "Nationalist Terrorism",
      c: "State Terrorism",
      d: "International Terrorism"
    },
    correctAnswer: "c",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 7 -",
    question: "One example of conditions which could rise to the level of trauma are falls greater than ________ feet.",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "8",
      b: "10",
      c: "15",
      d: "18"
    },
    correctAnswer: "b",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 8 -",
    question: "When callers intentionally give false information in order to misdirect law enforcement resources where no emergency exists, often initiating a SWAT response is known as __________________.",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "Swatting",
      b: "911 Pranking",
      c: "Hoaxing",
      d: "911 fraud"
    },
    correctAnswer: "a",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 9 -",
    question: "All TERT members are required to complete the ICS-800 training.",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "True",
      b: "False"
    },
    correctAnswer: "b",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 10 -",
    question: "Information should be gathered using the _____________________________.",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "3 Ws – Where, Who, and What",
      b: "5 Ws – Who, What, Where, When, and Why",
      c: "4 Ws – Who, What, Where, and When",
      d: "6 Ws – Where, What, Weapons, When, Who, and Why"
    },
    correctAnswer: "d",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 11 -",
    question: "What type of stress reactions are shaking, rapid pulse, and hyperventilation?",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "Emotional",
      b: "Cognitive",
      c: "Physical",
      d: "Behavioral"
    },
    correctAnswer: "c",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 12 -",
    question: "Responsibilities of the PST during an MCI include _____________________________.",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "Establish a command post for field units",
      b: "Designate command positions",
      c: "Designate the incident commander",
      d: "Fulfill resource requests from command"
    },
    correctAnswer: "d",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 13 -",
    question: "Putting information in a logical order will assist in the timely dispatching of resources.",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "True",
      b: "False"
    },
    correctAnswer: "a",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 14 -",
    question: "A secured area for landing emergency aircraft.",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "Landing area",
      b: "Emergency landing",
      c: "Emergency zone",
      d: "Landing zone"
    },
    correctAnswer: "d",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 15 -",
    question: "_______________ is defined as the potential for responsibility of payment to an aggrieved party due to the violation of a civil law.",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "Criminal Liability",
      b: "Financial Liability",
      c: "Civil liability",
      d: "Civil Obligation"
    },
    correctAnswer: "c",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 16 -",
    question: "The ICS is a systematic tool used in the command, control and coordination of emergency response.",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "True",
      b: "False"
    },
    correctAnswer: "a",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 17 -",
    question: "EMTs are trained on all of the following except ______________________________.",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "Child birth",
      b: "Administering medications",
      c: "Advanced first aid",
      d: "Oxygen therapy"
    },
    correctAnswer: "b",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 18 -",
    question: "When obtaining pertinent information, the PST should explain delays.",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "True",
      b: "False"
    },
    correctAnswer: "a",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 19 -",
    question: "Non-verbal communication skills include ________________________.",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "Listening for background noise",
      b: "Rushing the caller",
      c: "Use open and close-ended questions",
      d: "Paraphrasing statements to ensure understanding"
    },
    correctAnswer: "a",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 20 -",
    question: "Syncope means________________________.",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "Intoxication",
      b: "Diabetic",
      c: "Swelling",
      d: "Fainting"
    },
    correctAnswer: "d",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 21 -",
    question: "There is a fire in a residential neighborhood. Caller reports smoke and fire coming from roof of the home. What type of fire is this considered?",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "Industrial",
      b: "Trailer",
      c: "Multi-Family",
      d: "Single Family"
    },
    correctAnswer: "d",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 22 -",
    question: "Good decision making skills include learning from past mistakes and knowing the possible consequences.",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "True",
      b: "False"
    },
    correctAnswer: "a",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 23 -",
    question: "EMTs provide the following care except _____________________________.",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "Splinting",
      b: "Immobilization",
      c: "Establishing IVs",
      d: "CPR"
    },
    correctAnswer: "c",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 24 -",
    question: "________________ is defined as the willful, negligent, or reckless violation of criminal law or statute which can result in sanctions in the form of imprisonment.",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "Felonious Liability",
      b: "Criminal Liability",
      c: "Civil liability",
      d: "Criminal Responsibility"
    },
    correctAnswer: "b",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 25 -",
    question: "Location is the vital piece of information that should be obtained first.",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "True",
      b: "False"
    },
    correctAnswer: "a",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 26 -",
    question: "A licensed aeronautical transport unit used for the purpose of rapid patient transport.",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "Air Rescue Transport Unit",
      b: "Air Ambulance Unit",
      c: "Air Emergent Unit",
      d: "Air Medical Transport Unit"
    },
    correctAnswer: "a",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 27 -",
    question: "It is not important for the PST to know the agency’s geographical areas and the agencies surrounding the boundaries.",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "True",
      b: "False"
    },
    correctAnswer: "b",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 28 -",
    question: "____________________ refers to the mental process of selecting a course of action from two or more possible alternatives:",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "Supervising",
      b: "Decision making",
      c: "Stress",
      d: "Rational decisions"
    },
    correctAnswer: "b",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 29 -",
    question: "311/211 is a ___________ resource PSTs should be aware of and the services they provide.",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "Federal",
      b: "Local",
      c: "State",
      d: "Community"
    },
    correctAnswer: "d",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 30 -",
    question: "Paramedics can provide patients with advanced life support functions such as cardiac monitoring and establishing IVs.",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "True",
      b: "False"
    },
    correctAnswer: "a",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 31 -",
    question: "State resources available to the PSAP include the Highway Patrol, Fish and Wildlife, Department of Health and ____________________________.",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "Alcohol, Tobacco & Firearms",
      b: "NOAA",
      c: "State Watch Office",
      d: "Coast Guard"
    },
    correctAnswer: "c",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 32 -",
    question: "_____________is defined as bad stress.",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "Eustress",
      b: "Anxiety",
      c: "Distress",
      d: "Isolation"
    },
    correctAnswer: "c",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 33 -",
    question: "FEMA provides services for",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "Crisis counseling",
      b: "Unemployment",
      c: "Legal services",
      d: "All of the above"
    },
    correctAnswer: "d",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 34 -",
    question: "Databases such as the Criminal Justice Information System (CJIS) and the Driver and Vehicle Information Database (DAVID) user policies prohibit personal access and dissemination outside business purposes.",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "True",
      b: "False"
    },
    correctAnswer: "a",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 35 -",
    question: "CHEMTREC is available to provide emergency information and assistance to anyone involved in a chemical or hazardous material incident around the globe ___________.",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "Monday to Friday 8am to 5pm",
      b: "Seven days a week from 7 am to 9 pm",
      c: "24/7/365",
      d: "Available by page only"
    },
    correctAnswer: "c",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 36 -",
    question: "When dealing with an upset caller, the use of sarcasm can be used to lighten the situation and calm the caller.",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "True",
      b: "False"
    },
    correctAnswer: "b",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 37 -",
    question: "Location information includes address or intersection, name of business or apartment complex, building or apartment numbers, landmarks and _______________________.",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "direction of travel",
      b: "color of the house or building",
      c: "number of cars in the driveway",
      d: "whether or not there is a fence"
    },
    correctAnswer: "a",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 38 -",
    question: "An emergency is an unexpected situation which may cause injury, loss of life, or damage to property. Some examples are:",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "HAZMAT Incidents",
      b: "Life-threatening injuries/illness",
      c: "Extrications",
      d: "All the above"
    },
    correctAnswer: "d",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 39 -",
    question: "The first test call of the 911 system was made in ____________________.",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "Huntsville, AL",
      b: "Haleyville, AL",
      c: "Orange County, FL",
      d: "Orange County, CA"
    },
    correctAnswer: "b",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 40 -",
    question: "When staging for an incident, the responding field units should choose a location right in front of the scene.",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "True",
      b: "False"
    },
    correctAnswer: "b",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 41 -",
    question: "The highest rank in the Fire Chain of Command is ____________________.",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "Battalion Chief",
      b: "District Chief",
      c: "Chief",
      d: "Deputy or Assistant Chief"
    },
    correctAnswer: "c",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 42 -",
    question: "PSTs must have the ability to use logical and sound judgment based on ________________.",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "Inferences",
      b: "Common sense",
      c: "What someone else tells them?",
      d: "Experience and knowledge"
    },
    correctAnswer: "d",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 43 -",
    question: "Everything a PST does or says may be recorded, reproduced and examined.",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "True",
      b: "False"
    },
    correctAnswer: "a",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 44 -",
    question: "______________ can be divided by city, county, zone, region, or territory.",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "Logs",
      b: "Jurisdictions",
      c: "Teletype",
      d: "Interoperability"
    },
    correctAnswer: "b",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 45 -",
    question: "A method which provides PSTs and supervisors the opportunity to regularly monitor work performance and take corrective action in the form of training is known as ______________.",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "Quality Assurance",
      b: "Daily Observation Report",
      c: "Remedial Training",
      d: "Standard Evaluation Guidelines"
    },
    correctAnswer: "a",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 46 -",
    question: "International terrorism is defined as terrorism practiced in one’s own country against one’s own people.",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "True",
      b: "False"
    },
    correctAnswer: "b",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 47 -",
    question: "Guidelines for testifying in any court setting include all of the following except:",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "Refresh your memory before testifying",
      b: "Being courteous, using appropriate titles",
      c: "Exaggerate or guess when you are unsure about answers",
      d: "Do not volunteer information, answer only the question you are asked"
    },
    correctAnswer: "c",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 48 -",
    question: "Law Enforcement doesn’t assist with evacuations.",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "True",
      b: "False"
    },
    correctAnswer: "b",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 49 -",
    question: "Which mnemonic is commonly used to aid in obtaining the standard vehicle description?",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "DAVID",
      b: "CYMBALS",
      c: "VIN",
      d: "FCIC"
    },
    correctAnswer: "b",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 50 -",
    question: "Improperly logging information of forms could result in violations of user agreements, civil lawsuits, fines, and licensure revocations.",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "True",
      b: "False"
    },
    correctAnswer: "a",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 51 -",
    question: "All of the following are good techniques used to control hysterical, angry or highly emotional callers except________________________________.",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "Elevating to the caller’s emotional level",
      b: "Providing reassurance",
      c: "Using the caller’s name",
      d: "Building a good rapport with the caller"
    },
    correctAnswer: "a",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 52 -",
    question: "A stolen vehicle is considered a non-emergency incident.",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "True",
      b: "False"
    },
    correctAnswer: "a",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 53 -",
    question: "When the PIO is unavailable, agency policy may dictate the amount and type of information provided to members of the media or may prohibit all communications until the PIO is available.",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "True",
      b: "False"
    },
    correctAnswer: "a",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 54 -",
    question: "___________________________ is the successful, simultaneous performance of two or more tasks by one individual.",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "Active listening",
      b: "Performance standards",
      c: "Situational awareness",
      d: "Multi-functional dexterity"
    },
    correctAnswer: "d",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 55 -",
    question: "Critical Incident Stress Management teams are available only during normal business hours.",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "True",
      b: "False"
    },
    correctAnswer: "b",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 56 -",
    question: "Mutual Aid Agreements allow emergency responders to reach across jurisdictional boundaries to supplement the requesting agency’s resources.",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "True",
      b: "False"
    },
    correctAnswer: "a",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 57 -",
    question: "Silver Alerts provide a standardized system to aid local law enforcement in the rescue of an elderly person with a cognitive impairment who is lost or missing.",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "True",
      b: "False"
    },
    correctAnswer: "a",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 58 -",
    question: "The Health Insurance Portability and Accountability Act of 1996 was designed to protect __________________ from disclosure of protected health information (PHI) that is oral, written or electronic.",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "Physicians",
      b: "Patients",
      c: "Insurance Companies",
      d: "Hospitals"
    },
    correctAnswer: "b",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 59 -",
    question: "What type of resources are the Highway Patrol, Fish & Wildlife, and the Department of Health?",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "Local",
      b: "County",
      c: "State",
      d: "Federal"
    },
    correctAnswer: "c",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 60 -",
    question: "Maintaining good personal hygiene and adherence to agency dress code are not necessary in confined work spaces.",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "True",
      b: "False"
    },
    correctAnswer: "b",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 61 -",
    question: "Ethics is defined as the principles of ____________, ___________ and _____________ that govern an individual or group.",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "Professionalism, honor and integrity",
      b: "Honor, morality and integrity",
      c: "Honor, morality and accepted rules of conduct",
      d: "Duty, honor and integrity"
    },
    correctAnswer: "c",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 62 -",
    question: "One of the benefits of being a PST is receiving gratuities and gifts.",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "True",
      b: "False"
    },
    correctAnswer: "b",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 63 -",
    question: "________________________ are central databases used for tracking crime-related data at state and national levels respectively.",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "FCIC/NCIC",
      b: "NCIC/CJIS",
      c: "CJIS/DAVID",
      d: "FCIC/DAVID"
    },
    correctAnswer: "a",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 64 -",
    question: "Felony: A serious crime punishable by death or imprisonment in a _____________ penitentiary or in correctional facilities for a year or more.",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "Municipal",
      b: "County",
      c: "State",
      d: "Federal"
    },
    correctAnswer: "c",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 65 -",
    question: "More than one element of Critical Incident Stress Management may be utilized after a critical incident.",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "True",
      b: "False"
    },
    correctAnswer: "a",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 66 -",
    question: "In 1981, _______________ declared the first National Public Safety Telecommunicators Weeks as a nod to the voices behind the headset.",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "New York",
      b: "Florida",
      c: "Michigan",
      d: "California"
    },
    correctAnswer: "d",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 67 -",
    question: "Which of the following is not a primary duty of law enforcement officers",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "Provide community policing, education, and crime prevention",
      b: "Provide safety to the public and protection of property",
      c: "Relaying information quickly and accurately",
      d: "Investigate and document incidents and crime"
    },
    correctAnswer: "c",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 68 -",
    question: "The Enhanced 911 system was introduced in Orange County, CA in 1980.",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "True",
      b: "False"
    },
    correctAnswer: "b",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 69 -",
    question: "The Communications Cycle is made up of the following components:",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "Sender, Receiver, Message, Media, Response",
      b: "Transmitter, Receiver, Media, Medium, Feedback",
      c: "Sender, Receiver, Message, Medium, Feedback",
      d: "Transmitter, Receiver, Message, Medium, Reply"
    },
    correctAnswer: "c",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 70 -",
    question: "___________ complaints involve an offense against society and can be penalized by punishment such as incarceration or probation.",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "Criminal",
      b: "Misdemeanor",
      c: "Civil",
      d: "Felony"
    },
    correctAnswer: "a",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 71 -",
    question: "The Incident Command System (ICS) is solely used by the federal and state government.",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "True",
      b: "False"
    },
    correctAnswer: "b",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 72 -",
    question: "Typically the five major functional areas in ICS are Command, Operations, Planning, Logistics, and _________________________.",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "Finance/Administration",
      b: "Equipment",
      c: "Training",
      d: "Safety"
    },
    correctAnswer: "a",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 73 -",
    question: "Which of the following is not a stressor that is unique to the environment of a Public Safety Tele communicator?",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "They take on others problems",
      b: "The lack of sleep he or she gets",
      c: "No one understands what he or she does for a living",
      d: "Not caring about the problems of others"
    },
    correctAnswer: "d",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 74 -",
    question: "Providing legal advice can attach liability to the PST and/or the employing agency",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "True",
      b: "False"
    },
    correctAnswer: "a",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 75 -",
    question: "What types of stress reactions are changes in eating, withdrawal, and decrease in personal hygiene?",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "Emotional",
      b: "Cognitive",
      c: "Physical",
      d: "Behavioral"
    },
    correctAnswer: "d",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 76 -",
    question: "Each PST owes a standard of care to all stakeholders, by virtue of being endowed with the significant responsibilities of being a PST.",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "True",
      b: "False"
    },
    correctAnswer: "a",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 77 -",
    question: "Just occurred: the event has been committed and there is no _______________ threat to life or property.",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "Impending",
      b: "Imminent",
      c: "Critical",
      d: "Immediate"
    },
    correctAnswer: "d",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 78 -",
    question: "What types of stress reactions are irritability, feeling overwhelmed and depression?",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "Emotional",
      b: "Cognitive",
      c: "Physical",
      d: "Behavioral"
    },
    correctAnswer: "a",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 79 -",
    question: "The role of the PST is to gather and summarize pertinent information and relay it in a timely manner to the responder.",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "True",
      b: "False"
    },
    correctAnswer: "a",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 80 -",
    question: "The five phases of an Active Shooter Incident are ___________________________________.",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "Fantasy, Planning, Preparation, Approach and Implementation",
      b: "Fantasizing, Researching, Preparation, Planning and Implementation",
      c: "Dreaming, Planning, Logistics, Approach and Implementation",
      d: "Fantasy, Planning, Preparation, Containment and implementation"
    },
    correctAnswer: "a",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 81 -",
    question: "A _______________ primary role is to process the information received and deploy the closest, most appropriate field resource, based on the incident classification and priority.",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "call taker’s",
      b: "supervisor’s",
      c: "dispatcher’s",
      d: "operator’s"
    },
    correctAnswer: "c",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 82 -",
    question: "When providing instructions to a caller, it is important that the PST obtain feedback to ensure understanding.",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "True",
      b: "False"
    },
    correctAnswer: "a",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 83 -",
    question: "The L in CYMBALS is for the tag number.",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "True",
      b: "False"
    },
    correctAnswer: "a",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 84 -",
    question: "PSTs should treat all calls the same way, keeping responder, citizen, scene safety, and patient care in mind.",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "True",
      b: "False"
    },
    correctAnswer: "b",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 85 -",
    question: "Proper interview questions for suicidal callers should include _____________________.",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "Is it a threat or attempt?",
      b: "What is the method/means?",
      c: "Is anyone else present?",
      d: "All of the above"
    },
    correctAnswer: "d",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 86 -",
    question: "FEMA provides funding for housing, medical assistance, funerals, fuels (heat source), items for clean-up, vehicle repair, and moving/storage.",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "True",
      b: "False"
    },
    correctAnswer: "a",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 87 -",
    question: "PSTs need to be aware of officer safety issues at every scene. For all incidents, regardless of the nature, the PST needs to gather information including:",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "Nature of the incident/threat",
      b: "Suspect’s description and current location",
      c: "History (premise history, hazmat information, and other responder safety issues)",
      d: "Universal precautions",
      e: "All of the above"
    },
    correctAnswer: "e",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 88 -",
    question: "The three phases of a Hostage situation are.",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "Initial, Negotiation, and Release",
      b: "Taking, Demanding, and Surrender",
      c: "Initial, Negotiation, and Termination",
      d: "Observation, Containment and Termination"
    },
    correctAnswer: "c",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 89 -",
    question: "PSTs do not need to be available in the event of a natural disaster, emergency mobilizations, or other declarations of emergency.",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "True",
      b: "False"
    },
    correctAnswer: "b",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 90 -",
    question: "The US Department of Homeland Security is responsible for guarding against terrorism, securing US boarders, enforcing US immigration laws, and _________________.",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "investigating transportation accidents",
      b: "improving federal readiness for disasters",
      c: "provide the safest aerospace system",
      d: "maintaining emergency management programs"
    },
    correctAnswer: "b",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 91 -",
    question: "The Enhanced 911 system includes ________________.",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "text and photos",
      b: "AIN/AIL",
      c: "text and video",
      d: "ANI/ALI"
    },
    correctAnswer: "d",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 92 -",
    question: "The phases of a barricaded subject are _____________________________.",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "Barricading, Observation, Conclusion",
      b: "Observation, Containment and Termination",
      c: "Barricading, Observation, Securing",
      d: "Observation, Securing and Recovery"
    },
    correctAnswer: "b",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 93 -",
    question: "Silver Alerts provide a standardized system to aid local law enforcement in the rescue of an elderly person with a cognitive impairment who is lost or missing.",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "True",
      b: "False"
    },
    correctAnswer: "a",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 94 -",
    question: "There are several Critical Incident Stress Management resources available on line?",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "True",
      b: "False"
    },
    correctAnswer: "a",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 95 -",
    question: "A Blue Alert contains a subject and/or vehicle description of persons that may pose a serious threat to the public after a ______________________has been seriously injured, killed, or goes missing in the line of duty.",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "Firefighter and LEO",
      b: "Law Enforcement Officer",
      c: "Member of the Armed Services",
      d: "Firefighter"
    },
    correctAnswer: "b",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 96 -",
    question: "The first two-way radio system was implemented in ______________.",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "Bayonne, New Jersey",
      b: "Detroit Michigan",
      c: "San Jose, California",
      d: "Chicago Illinois"
    },
    correctAnswer: "a",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 97 -",
    question: "Facts are based on perceptions and inferences are based on something that has happened.",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "True",
      b: "False"
    },
    correctAnswer: "b",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 98 -",
    question: "If a caller is providing information that appears suspicious, the PST should______________.",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "Ask the caller to repeat, then paraphrase",
      b: "Tell the caller their story does not make sense",
      c: "Ask follow-up/open-ended questions",
      d: "Take the information as it is provided and relay to responders"
    },
    correctAnswer: "c",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 99 -",
    question: "Critical Incident Stress Management is therapy.",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "True",
      b: "False"
    },
    correctAnswer: "b",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 100 -",
    question: "_________________ is used to seek to form self-determination which may range from gaining greater autonomy to establishing a completely independent sovereign state.",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "Domestic Terrorism",
      b: "State Terrorism",
      c: "Nationalist Terrorism",
      d: "International Terrorism"
    },
    correctAnswer: "c",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
];
