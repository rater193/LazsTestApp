const myQuestions = [
  {
    title: "Question 1 -",
    question: "_____ is the central repository for all criminal records, criminal histories, and hot file records throughout the state and is responsible for delivering the FCIC records information to respective states.",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "FCIC",
      b: "FDLE",
      c: "NCIC",
      d: "FEMA"
    },
    correctAnswer: "b",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 2 -",
    question: "A specialty vehicle used exclusively for aircraft firefighting:",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "ARFF",
      b: "Engine",
      c: "Platform",
      d: "Brush Truck"
    },
    correctAnswer: "a",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 3 -",
    question: "The acronym FEMA stand for:",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "Florida Emergency Management Agency",
      b: "Federal Emergency Managers Association",
      c: "First Emergency Management Action",
      d: "Federal Emergency Management Agency"
    },
    correctAnswer: "d",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 4 -",
    question: "PST’s must be able to respect different cultures and backgrounds.",
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
    title: "Question 5 -",
    question: "The following incidents would qualify as an MCI (Mass Casualty Incident) except:",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "Vicious dog mauling",
      b: "Terrorist attacks",
      c: "Mass shootings",
      d: "Vehicle crashes with numerous patients"
    },
    correctAnswer: "a",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 6 -",
    question: "Terrorism used to seek to form self-determination which may range from gaining greater autonomy to establishing a completely independent sovereign state. They consider themselves freedom fighters;",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "Independence Terrorism",
      b: "State Terrorism",
      c: "Home Grown Terrorism",
      d: "Nationalist Terrorism"
    },
    correctAnswer: "d",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 7 -",
    question: "Florida’s Public Records Law:",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "Chapter 23, F.S.",
      b: "HIPPA",
      c: "Freedom of Information Act",
      d: "Chapter 119, F.S."
    },
    correctAnswer: "d",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 8 -",
    question: "_________________ is an armed person who has or intends to use any type of weapon to inflict deadly physical force on others and continues to do so while having unrestricted access to additional victims.",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "Barricaded subject",
      b: "Hostage Taker",
      c: "Active Shooter",
      d: "Active Aggressor"
    },
    correctAnswer: "c",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 9 -",
    question: "Certain vehicles are equipped with emergency notification features. These features are activated and monitored by subscription to companies. When these services are activated, the request is routed through a:",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "Transitional Call Canter (TCC)",
      b: "PSAP",
      c: "Telematic Call Center (TCC)",
      d: "911 system"
    },
    correctAnswer: "c",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 10 -",
    question: "TERT stands for:",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "Telecommunicator Emergency Response Taskforce",
      b: "Telecommunications Emergency Response Team",
      c: "Telecommunicator Emergency Response Team",
      d: "Transitional Emergency Response Team"
    },
    correctAnswer: "a",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 11 -",
    question: "Which of the following is not an example of reasons citizens may request police assistance?",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "Protection",
      b: "Report a crime",
      c: "Seek legal guidance",
      d: "Report an in progress fire"
    },
    correctAnswer: "d",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 12 -",
    question: "Anyone whose whereabouts is unknown regardless of the circumstances of the disappearance",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "Endangered Person",
      b: "Missing Person",
      c: "Homeless Person",
      d: "Attempt to Locate Person"
    },
    correctAnswer: "b",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 13 -",
    question: "Personnel, consoles, computers with CAD software, radio systems, phone system, monitoring equipment, recording equipment and more are typical components of:",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "Police stations",
      b: "Sheriff’s office",
      c: "Communications centers",
      d: "Fire departments"
    },
    correctAnswer: "c",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 14 -",
    question: "PST’s should be ready to begin their shift:",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "As soon as possible after they clock in",
      b: "As close as possible to their start time",
      c: "As soon as they get their equipment together",
      d: "At the appointed start time"
    },
    correctAnswer: "d",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 15 -",
    question: "A method used by emergency medical personnel to grade the severity of a traumatic injury and determine the need to transport to a designated / verified trauma center.",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "Trauma Code Criteria",
      b: "Trauma Alert Criteria",
      c: "Trauma Declaration Criteria",
      d: "Trauma Call Criteria"
    },
    correctAnswer: "b",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 16 -",
    question: "Unlawfully entering a dwelling, structure or conveyance with the intent to commit an offense inside.",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "Robbery",
      b: "Larceny",
      c: "Burglary",
      d: "Theft"
    },
    correctAnswer: "c",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 17 -",
    question: "When giving instructions you should:",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "Provide all steps at once so nothing is left uncovered",
      b: "Provide a sequential, step by step process",
      c: "Speak very slowly because accuracy is very important",
      d: "Speak as quickly as possible because speed is very important"
    },
    correctAnswer: "b",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 18 -",
    question: "An All Clear is declared when:",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "The last truck leaves the scene",
      b: "The last truck arrives on the scene",
      c: "There are no more occupants or victims",
      d: "The primary search is complete"
    },
    correctAnswer: "c",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 19 -",
    question: "Emergency Management is responsible to plan, organize, and direct the activities and operations or emergency services regarding:",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "Manmade disasters",
      b: "Natural or manmade disasters",
      c: "FEMA incidents",
      d: "Telephone incidents"
    },
    correctAnswer: "b",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 20 -",
    question: "The Florida Division of Emergency Management (DEM) must work with all of the following except:",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "Other state agencies",
      b: "Federal government",
      c: "County governments",
      d: "Foreign governments"
    },
    correctAnswer: "d",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 21 -",
    question: "A quarrel within a family or between members of the same household, which may or may not include violence.",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "International dispute",
      b: "Civil dispute",
      c: "Low priority call",
      d: "Domestic dispute"
    },
    correctAnswer: "d",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 22 -",
    question: "A written order issued by authority of the state and commanding the seizure of the person named.",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "Writ",
      b: "Warrant",
      c: "Restraining Order",
      d: "Habeas Corpus"
    },
    correctAnswer: "b",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 23 -",
    question: "The most vital information, to be obtained first is:",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "When",
      b: "What",
      c: "Where",
      d: "Weapons"
    },
    correctAnswer: "c",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 24 -",
    question: "A mobile water source:",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "Tanker",
      b: "Delivery apparatus",
      c: "Liquid conveyance",
      d: "Supply truck"
    },
    correctAnswer: "a",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 25 -",
    question: "Responsibilities of TERT members include all but:",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "Having credit cards handy",
      b: "Flexibility with work schedules",
      c: "Adaptability in working with unfamiliar equipment",
      d: "Preparation for deployment"
    },
    correctAnswer: "a",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 26 -",
    question: "A rapid, thorough search to locate victims before or during the fire suppression operation:",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "Secondary search",
      b: "Cursory search",
      c: "Primary search",
      d: "Victim search"
    },
    correctAnswer: "c",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 27 -",
    question: "A portable device which has the ability to analyze the heart rhythm and deliver an electrical shock (when necessary) to restore the heart to a normal rhythm:",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "Automatic External Defibrillator",
      b: "Cardio Pulmonary Resuscitation",
      c: "Electrocardiogram",
      d: "Echocardiogram"
    },
    correctAnswer: "a",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 28 -",
    question: "Which of the following is not a stressor unique to the PST’s environment?",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "They take on others’ problems",
      b: "No one understands what he or she does for a living",
      c: "No one has heard what he or she has heard",
      d: "Cortisol dump"
    },
    correctAnswer: "d",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 29 -",
    question: "A 24/7 clearinghouse which holds and shares information with local, state, and federal entities.",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "County Emergency Operations Center",
      b: "FEMA",
      c: "State Watch Office",
      d: "City hall"
    },
    correctAnswer: "c",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 30 -",
    question: "Which one of the following is an act that will negatively affect the role of a PST?",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "Staying out after midnight",
      b: "Untruthfulness",
      c: "Great customer service",
      d: "Working overtime"
    },
    correctAnswer: "b",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 31 -",
    question: "Disasters caused by one or more, deliberate or negligent actions of a person:",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "Manmade disasters",
      b: "Natural disasters",
      c: "Terrorism",
      d: "Criminal activity"
    },
    correctAnswer: "a",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 32 -",
    question: "All of the below examples are considered fire emergency calls except:",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "Trash/dumpster fires",
      b: "Transportation crashes",
      c: "Public assist",
      d: "Mutual aid"
    },
    correctAnswer: "c",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 33 -",
    question: "Examples of public records include all but which one of the following?",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "911 call recordings",
      b: "CAD records",
      c: "Agency pay scale",
      d: "Victims of domestic violence"
    },
    correctAnswer: "d",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 34 -",
    question: "Terrorism practiced in a foreign country by terrorists who are not native to that country is called:",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "Internal terrorism",
      b: "Interdependent terrorism",
      c: "International terrorism",
      d: "Internet terrorism"
    },
    correctAnswer: "c",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 35 -",
    question: "A criminal offense that is punishable by a term of imprisonment in a county correctional facility not in excess of one year.",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "Felony",
      b: "Misdemeanor",
      c: "Petty crime",
      d: "Major crime"
    },
    correctAnswer: "b",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 36 -",
    question: "_____ is a subcomponent of NIMS and is used by all levels of government:",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "Incident Command System (ICS)",
      b: "National Response Framework (NRF)",
      c: "FEMA",
      d: "Federal Aviation Administration (FAA)"
    },
    correctAnswer: "a",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 37 -",
    question: "Changes in the brain’s electrical activity that can cause dramatic, noticeable symptoms or even no symptoms at all.",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "Defibrillation",
      b: "Spasm",
      c: "Seizure",
      d: "Tic"
    },
    correctAnswer: "c",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 38 -",
    question: "A favor or advantage granted or expected in return for something else.",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "Nolle Prosequi",
      b: "Quid Pro Quo",
      c: "Mojo",
      d: "Carpe Diem"
    },
    correctAnswer: "b",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 39 -",
    question: "Apparatus that is able to reach fires or situations in multiple story buildings when they are unable to be reached by the ground crews.",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "Platforms/Ladders",
      b: "Air truck",
      c: "Brush truck",
      d: "Fire boat"
    },
    correctAnswer: "a",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 40 -",
    question: "The failure to do that which a PST has a directed or moral obligation to do; careless or reckless performance of one’s duties.",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "Untruthfulness",
      b: "Discrimination",
      c: "Negligence of duty",
      d: "Poor interpersonal skills"
    },
    correctAnswer: "c",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 41 -",
    question: "The Federal Emergency Management Agency (FEMA) is an agency of:",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "The Federal Aviation Administration (FAA)",
      b: "The National Transportation Safety Board (NTSB)",
      c: "The Division of Emergency Management (DEM)",
      d: "The U.S. Department of Homeland Security (DHS)"
    },
    correctAnswer: "d",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 42 -",
    question: "An excessive and/or dangerous dose of a drug, whether intentional or accidental.",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "Suicide attempt",
      b: "Ingestion",
      c: "Overdose",
      d: "Drug abuse"
    },
    correctAnswer: "c",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 43 -",
    question: "When a fire is declared “Under Control” it is considered:",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "Extinguished",
      b: "No longer escalating",
      c: "Minor",
      d: "Not lethal"
    },
    correctAnswer: "b",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 44 -",
    question: "The unlawful killing of a human being:",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "Manslaughter",
      b: "Homicide",
      c: "Wrongful death",
      d: "Killing"
    },
    correctAnswer: "b",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 45 -",
    question: "The skill, good judgment, and respectful behavior that is expected from a person who is trained to do a job well; a person who keeps their word, demonstrates loyalty, and exceed expectations.",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "Ethics",
      b: "Community standards",
      c: "Professionalism",
      d: "Courtesy"
    },
    correctAnswer: "c",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 46 -",
    question: "The ___________ is usually the first point of contact for citizens:",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "Dispatcher",
      b: "Supervisor",
      c: "Operator",
      d: "Call taker"
    },
    correctAnswer: "d",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 47 -",
    question: "Crying, numbness, mad/sad/scared, elation at survival, agitation, irritability, feeling overwhelmed, anxiety/depression, flat affect, panic are indicators of what type of stress?",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "Mental",
      b: "Physical",
      c: "Behavioral",
      d: "Emotional"
    },
    correctAnswer: "d",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 48 -",
    question: "States that use force or the threat of force without declaring war to terrorize citizens and achieve a political goal:",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "National terrorism",
      b: "Federal terrorism",
      c: "State terrorism",
      d: "Domestic terrorism"
    },
    correctAnswer: "c",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 49 -",
    question: "Level of Consciousness (LOC):",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "The measure of a person’s responsiveness to stimuli and arousability",
      b: "Rescue breathing",
      c: "Internal stimulus",
      d: "The measure of a person’s blood pressure (BP) and heart rate"
    },
    correctAnswer: "a",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 50 -",
    question: "HIPAA does not prevent PST’s from relaying patient information to:",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "Curious callers",
      b: "The parents of a patient",
      c: "Responding units",
      d: "The media"
    },
    correctAnswer: "c",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 51 -",
    question: "GA, SK, Q, and SKSK are all abbreviations used to communicate using TDD equipment.",
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
    title: "Question 52 -",
    question: "The Incident Command System (ICS) is used by all levels of government (federal, state, tribal, and local), but never by non-governmental organizations and the private sector.",
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
    title: "Question 53 -",
    question: "PST’s do not need to know the agency’s geographical area as well as the agencies surrounding their boundaries in case they are needed for assistance.",
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
    title: "Question 54 -",
    question: "Several laws, policies, and confidentiality agreements bind PST’s and agencies to protect data.",
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
    title: "Question 55 -",
    question: "Most ___________ have a computer interface. They display all available talk groups and channels.",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "Mobile radios",
      b: "Radio consoles",
      c: "Portable radios",
      d: "Vacuum tube radios"
    },
    correctAnswer: "b",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 56 -",
    question: "PST’s are accountable for their actions, both on and off duty.",
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
    question: "PST’s must be careful not to control the caller and let them give the information in their own words.",
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
    question: "A current event call (also known as a delayed call) is an incident that has already occurred and is over.",
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
    title: "Question 59 -",
    question: "When dealing with other agencies and the public, PST’s must use industry jargon, codes, and abbreviations.",
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
    title: "Question 60 -",
    question: "Telematic Call Centers make contact with the appropriate PSAP to provide any available information and may conference the caller with the PST.",
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
    title: "Question 61 -",
    question: "The type of response is agency specific, based on the nature of the incident.",
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
    title: "Question 62 -",
    question: "Landfills are typical locations for the disposal of hazardous materials.",
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
    question: "You should NEVER ask a suicidal caller if they are suicidal.",
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
    title: "Question 64 -",
    question: "Recorded public safety radio transmissions are considered public records in Florida.",
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
    title: "Question 65 -",
    question: "Forms and logs no longer have to be completed rapidly and accurately.",
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
    title: "Question 66 -",
    question: "Mutual aid agreements allow emergency responders to reach across jurisdictional boundaries to supplement the requesting agency’s resources.",
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
    title: "Question 67 -",
    question: "A deposition is a sworn statement and is part of a case’s official records.",
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
    title: "Question 68 -",
    question: "FEMA provides funding for housing, medical assistance, funerals, fuels (heat source), items for clean-up, vehicle repair and moving/storage expenses.",
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
    title: "Question 69 -",
    question: "In addition to the HIPAA law and CJIS security policy, agency protocols may also dictate which information can or cannot be disseminated.",
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
    title: "Question 70 -",
    question: "NCIC maintains information on stolen and recovered property as well as wanted and missing persons for all 50 U.S. states, and other U.S. territories only.",
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
    title: "Question 71 -",
    question: "Some acts that are considered professionally unethical include: Quid Pro Quo, misuse of confidential or privileged information, failure to act, and willful neglect of duty.",
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
    title: "Question 72 -",
    question: "Signals, codes, and other terminology provide ways of classifying incidents.",
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
    title: "Question 73 -",
    question: "Forms and logs are official records which must be rapidly and accurately completed.",
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
    title: "Question 74 -",
    question: "For the PST, civil but not criminal liability may come about as the result of misconduct or negligence of duty.",
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
    title: "Question 75 -",
    question: "Handheld radios (also known as portable radios), are typically housed inside responders’ vehicles with mounted antennas.",
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
    title: "Question 76 -",
    question: "SLERS is radio system maintained by the State of Florida for use by participating public safety agencies.",
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
    question: "CAD documentation is a type of log.",
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
    title: "Question 78 -",
    question: "Digital radios allow for radio interoperability.",
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
    title: "Question 79 -",
    question: "A barricaded subject is someone that has blocked themselves in an area.",
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
    question: "The National Fire Protection Association (NFPA) is one of the associations that help members be accountable for their actions and demonstrate career achievements.",
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
    title: "Question 81 -",
    question: "In fire services, “Situational Awareness” refers to a roll call of all units assigned to an incident, usually done with incident command.",
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
    title: "Question 82 -",
    question: "Only the FAA (Federal Aviation Administration) can require or enforce changes for the grounding of aircraft.",
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
    question: "In the communications center, the PST can assume that most conversations will not be recorded.",
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
    title: "Question 84 -",
    question: "Agencies should train PST’s to avoid personal and professional liability during the course of their career.",
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
    title: "Question 85 -",
    question: "Fire emergency: An event which may not require immediate response.",
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
    title: "Question 86 -",
    question: "Computer Aided Dispatch (CAD) software is an electronic database that provides the PST with call information, response unit availability, and other resources.",
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
    question: "Criminal mischief (vandalism) is destroying or damaging public or private property maliciously.",
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
    title: "Question 88 -",
    question: "The base station is the main radio system of the agency that is installed in a fixed location.",
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
    title: "Question 89 -",
    question: "Part of the criteria for an AMBER Alert is the victim must be 18 years of age or older.",
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
    question: "AMBER Alerts are named in honor of Amber Hagerman.",
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
    title: "Question 91 -",
    question: "Law calls can be classified as in progress, just occurred, or past event.",
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
    title: "Question 92 -",
    question: "PST’s do not need to know the agencies surrounding their boundaries as they are only responsible for what happens in their jurisdiction.",
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
    title: "Question 93 -",
    question: "PST’s can give legal advice as long as it is correct and based on current law.",
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
    title: "Question 94 -",
    question: "Hypothermia is a state of abnormally high internal body temperature.",
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
    title: "Question 95 -",
    question: "TDD is a device giving people the ability to type a conversation instead of speaking.",
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
    title: "Question 96 -",
    question: "A Public Information Officer is known as a PIO.",
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
    title: "Question 97 -",
    question: "The HIPAA federal law protects criminals from having their criminal histories released.",
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
    question: "The medical term for fainting is syncope.",
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
    title: "Question 99 -",
    question: "The CHEMTREC book is used by emergency responders who may be the first to arrive at the scene of a transportation incident involving a hazardous material.",
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
    question: "The ICS (Incident Command System) is a systematic tool used in the command, control, and coordination of emergency response.",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "True",
      b: "False"
    },
    correctAnswer: "a",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  }
];
