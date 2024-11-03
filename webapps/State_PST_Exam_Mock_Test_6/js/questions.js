const myQuestions = [
  {
    title: "Question 1 -",
    question: "A seizure is a sudden surge of electrical activity in the brain that typically affects how a person acts or feels for a short time. This can cause noticeable symptoms or no symptoms at all.",
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
    title: "Question 2 -",
    question: "NCMEC is an acronym for:",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "National Center for Missing and Exploited Children",
      b: "National Clearinghouse for Missing and Exploited Children",
      c: "National Center for Missing and Endangered Children",
      d: "Non-Profit Center for Missing and Exploited Children"
    },
    correctAnswer: "a",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 3 -",
    question: "The TDD/TTY technology is used to help locate the visually impaired 911 caller.",
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
    title: "Question 4 -",
    question: "PSAP is an acronym for:",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "Public Safety Accessing Point",
      b: "Public Safety Answering Port",
      c: "Public Safety Accessing Port",
      d: "Public Safety Answering Point"
    },
    correctAnswer: "d",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 5 -",
    question: "A pre-determined agreement between multiple agencies to provide mutual assistance for fires and other large-scale emergencies:",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "Mutual Aid",
      b: "Automatic Assistance",
      c: "Advanced Aid",
      d: "Automatic Aid"
    },
    correctAnswer: "d",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 6 -",
    question: "Receivers are devices capable of relaying voice and data signals.",
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
    title: "Question 7 -",
    question: "High blood pressure is also known as:",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "Hypothermia",
      b: "Hypertension",
      c: "Hyperthermia",
      d: "Hypotension"
    },
    correctAnswer: "b",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 8 -",
    question: "A theft is an authorized removal or concealment of property.",
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
    title: "Question 9 -",
    question: "A method used by emergency medical personnel to grade the severity of a traumatic injury and determine the need to transport to a designated/verified trauma center is a:",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "Trauma emergency",
      b: "Trauma alert criteria",
      c: "Trauma incident",
      d: "Trauma assistance"
    },
    correctAnswer: "b",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 10 -",
    question: "While CAD programs sort between incident types, incident classifications, and incident prioritization, the call taker must accurately assess each incident.",
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
    title: "Question 11 -",
    question: "The agency or field unit that responds to the incident is determined by:",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "Incident Classification",
      b: "Incident Recall",
      c: "Incident Type",
      d: "Incident Information"
    },
    correctAnswer: "c",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 12 -",
    question: "Lawmakers passed the Denise Amber Lee Act creating Florida Statute 401.465, 911 public safety telecommunicator certification on:",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "April 1, 2008",
      b: "April 24, 2008",
      c: "August 24, 2008",
      d: "February 1, 2008"
    },
    correctAnswer: "b",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 13 -",
    question: "All local hospitals are considered trauma centers.",
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
    title: "Question 14 -",
    question: "PSTs are only required to testify in a trial setting.",
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
    title: "Question 15 -",
    question: "A conclusion which is drawn from our observations:",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "Implication",
      b: "Interpretation",
      c: "Inference",
      d: "Extrapolation"
    },
    correctAnswer: "c",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 16 -",
    question: "Plain language should not be used during a mutual aid incident.",
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
    title: "Question 17 -",
    question: "Gas stations, hospitals, personal homes, and airports are all considered hazardous materials storage/use facilities.",
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
    title: "Question 18 -",
    question: "Simulcasting, silent dispatch, and use of alert tones are procedures used when differentiating the dispatch of:",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "Local and state resources",
      b: "State and federal resources",
      c: "Emergency and non-emergency incidents",
      d: "Administrative Resources"
    },
    correctAnswer: "c",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 19 -",
    question: "A missing child alert is the same as an AMBER alert.",
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
    title: "Question 20 -",
    question: "To obtain a PST state certification, a PST must successfully pass the state exam and complete a:",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "40-hour Training Program",
      b: "80-hour Training Program",
      c: "162-hour Training Program",
      d: "232-hour Training Program"
    },
    correctAnswer: "d",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 21 -",
    question: "DNR, CVA, GSW, and BP are commonly used acronyms by law enforcement officers.",
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
    title: "Question 22 -",
    question: "Which one of the following stress reactions is an example of physical stress?",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "Intrusive thoughts",
      b: "Sleep difficulty",
      c: "Numbness",
      d: "Increase in substance use"
    },
    correctAnswer: "b",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 23 -",
    question: "Swatting is an example of a suspect reporting false information to misdirect law enforcement resources to a location where no emergency exists.",
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
    title: "Question 24 -",
    question: "A response guidebook used by public safety responders who arrive at the scene of an incident involving hazardous materials:",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "DOTERG",
      b: "HAZ ERG",
      c: "CHEMTREC",
      d: "Responder Handbook"
    },
    correctAnswer: "a",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 25 -",
    question: "An SCBA device allows firefighters to breathe fresh oxygen while in a hazardous environment.",
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
    question: "The principles of honor, morality, and accepted rules of conduct that govern an individual or group:",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "Ethics",
      b: "Moral Code",
      c: "Rules of Engagement",
      d: "Principles"
    },
    correctAnswer: "a",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 27 -",
    question: "Which agency can require or enforce changes for the grounding of an aircraft?",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "Federal Airline Association (FAA)",
      b: "Federal Airline Administration (FAA)",
      c: "Federal Aviation Administration (FAA)",
      d: "Federal Aviation Association (FAA)"
    },
    correctAnswer: "c",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 28 -",
    question: "Non-emergency fire response requires use of lights and sirens.",
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
    title: "Question 29 -",
    question: "The first 9-1-1 call was made in 1968 in which state?",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "Alaska",
      b: "Arkansas",
      c: "Alabama",
      d: "Florida"
    },
    correctAnswer: "c",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 30 -",
    question: "The PST should explain to the caller why the caller is being placed on hold.",
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
    question: "Suspects initiate SWAT team responses to locations under false pretenses:",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "SWAT Deceit",
      b: "Swatting",
      c: "False Location",
      d: "False Report"
    },
    correctAnswer: "b",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 32 -",
    question: "When dealing with officer safety the PST must be aware of changes in the officer's tone and pitch.",
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
    title: "Question 33 -",
    question: "Which component is necessary for the sender to confirm that the message was delivered and correctly interpreted by the receiver?",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "Feedback",
      b: "Medium",
      c: "Instruction",
      d: "Completion"
    },
    correctAnswer: "a",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 34 -",
    question: "Varying the volume, rate, and/or pitch of speech to give particular emphasis on certain words does not aid in the use of proper pronunciation and enunciation.",
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
    title: "Question 35 -",
    question: "Essential interpersonal skills include:",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "Establishing friendships with your co-workers",
      b: "Baking cookies for your co-workers",
      c: "Compassion",
      d: "Volunteering to babysit for your co-worker's child"
    },
    correctAnswer: "c",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 36 -",
    question: "An incident in which a trapped victim must be removed from a vehicle or other type of machinery.",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "Extraction",
      b: "Expulsion",
      c: "Extrication",
      d: "Extortion"
    },
    correctAnswer: "c",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 37 -",
    question: "The FAA is responsible for investigating transportation crashes and issuing safety recommendations for improvement.",
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
    title: "Question 38 -",
    question: "A location away from the scene where units wait for their assigned position.",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "Standing",
      b: "Setting",
      c: "Staging",
      d: "Spotting"
    },
    correctAnswer: "c",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 39 -",
    question: "Maintaining a positive public image and keeping the peace are not primary duties required of law enforcement officers.",
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
    title: "Question 40 -",
    question: "Which structure fire is considered to be multi-family?",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "Condo",
      b: "Single Family",
      c: "Trailer",
      d: "Industrial"
    },
    correctAnswer: "a",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 41 -",
    question: "The NIMS provides the template for the management of incidents, while the NRF provides the structure and mechanisms for national-level policy.",
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
    title: "Question 42 -",
    question: "An event that has been committed and there is no immediate threat to life or property:",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "In-progress",
      b: "Just occurred",
      c: "Past event",
      d: "Delayed event"
    },
    correctAnswer: "b",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 43 -",
    question: "A rapid, thorough search to locate victims before or during the fire suppression operation:",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "Primary search",
      b: "Secondary search",
      c: "First search",
      d: "Initial search"
    },
    correctAnswer: "a",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 44 -",
    question: "Noting pertinent information in a logical order is not necessary for the timely dispatching of resources.",
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
    title: "Question 45 -",
    question: "Terrorism used to seek to form self-determination which may range from gaining greater autonomy to establishing a completely independent sovereign state:",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "Terrorism",
      b: "Narcoterrorism",
      c: "Independent Terrorism",
      d: "Nationalist Terrorism"
    },
    correctAnswer: "d",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 46 -",
    question: "Gas pump displays are used to disseminate crucial public information.",
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
    title: "Question 47 -",
    question: "Which type of information is considered protected or exempt in the Florida Public Records Law?",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "Law Enforcement Officer Home Address",
      b: "Victims of Domestic Violence",
      c: "Address of an Incident",
      d: "A and B only"
    },
    correctAnswer: "d",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 48 -",
    question: "Several laws, policies, and confidentiality agreements bind PSTs and agencies to protect data. PSTs are exempt of civil and/or criminal liability if violations of these policies occur.",
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
    question: "Rear side of a structure as established by incident command:",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "Alpha",
      b: "Bravo",
      c: "Charlie",
      d: "Delta"
    },
    correctAnswer: "c",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 50 -",
    question: "Next Generation 911 (NextGen911, NG911) allows callers to send:",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "Text Messages",
      b: "Text Messages and Photos",
      c: "Photos and Videos",
      d: "Text Messages/Photos and Videos"
    },
    correctAnswer: "d",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 51 -",
    question: "It is not necessary to complete forms, logs, and files completely.",
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
    title: "Question 52 -",
    question: "Which one of the following stress reactions is an example of cognitive stress?",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "Difficulty making decisions",
      b: "Panic",
      c: "Rapid pulse",
      d: "Isolation"
    },
    correctAnswer: "a",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 53 -",
    question: "Delays in processing information only jeopardize public safety.",
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
    question: "Adherence to agency dress code and good personal hygiene habits include:",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "Regular showering",
      b: "Use of heavy cologne or perfume",
      c: "Unkept hair and uniforms",
      d: "Excessive tattoos in plain view"
    },
    correctAnswer: "a",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 55 -",
    question: "A robbery and a burglary have the same incident classification.",
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
    question: "Knowingly and willfully resisting, obstructing, or opposing a law enforcement officer engaged in the execution of legal process, or lawful execution of a legal duty:",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "Restraining Order",
      b: "Resisting Arrest",
      c: "Obstruction",
      d: "Willful Neglect"
    },
    correctAnswer: "b",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 57 -",
    question: "The first two-way radio was implemented in New Jersey in:",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "1928",
      b: "1930",
      c: "1933",
      d: "1951"
    },
    correctAnswer: "c",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 58 -",
    question: "All documents, papers, letters, maps, books, tapes, photographs, films/ sound recordings, data processing software, or other material, regardless of the physical form, characteristics, or means of transmission, made or received pursuant to law or ordinance or in connection with the transaction of official business by any agency is publicly available to any requester with or without a reason.",
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
    title: "Question 59 -",
    question: "CISM is an acronym for:",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "Crucial Incident Stress Management",
      b: "Critical Involved Stress Management",
      c: "Critical Incident Stress Management",
      d: "Crucial Involved Stress Management"
    },
    correctAnswer: "c",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 60 -",
    question: "NENA is an acronym for National Emergency Number Association.",
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
    question: "The willful, negligent, or reckless violation of criminal law or statute which can result in sanctions in the form of imprisonment:",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "Civil Liability",
      b: "Criminal Liability",
      c: "Cyber Terrorism",
      d: "Liability"
    },
    correctAnswer: "b",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 62 -",
    question: "In Florida, PSTs can be held personally liable and may face civil and criminal sanctions, depending on the charges.",
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
    title: "Question 63 -",
    question: "The Amber Alert was established in:",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "1980",
      b: "1985",
      c: "1990",
      d: "1996"
    },
    correctAnswer: "d",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 64 -",
    question: "Quint/Aerial is a combination of a pumper and ladder truck.",
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
    title: "Question 65 -",
    question: "Wrongful or criminal deception intended to result in personal or financial gain:",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "Extortion",
      b: "Criminal liability",
      c: "Fraud",
      d: "Deception"
    },
    correctAnswer: "c",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 66 -",
    question: "Joining two or more talk groups together; field users cannot interact with users on other talk groups, but all can hear transmissions from the base station is known as:",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "Simulcasting",
      b: "Transmitting",
      c: "Patching",
      d: "Broadcasting"
    },
    correctAnswer: "a",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 67 -",
    question: "A fact is a conclusion which is drawn from our observations. It is based on perception.",
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
    title: "Question 68 -",
    question: "Identify the emergency incident:",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "Minor traffic accident",
      b: "Water leak",
      c: "Public assist",
      d: "Structure fire"
    },
    correctAnswer: "d",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 69 -",
    question: "TERT is an acronym for:",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "Telecommunicator Emergency Response Team",
      b: "Trained Emergency Response Team",
      c: "Telecommunicator Emergency Response Taskforce",
      d: "Trained Emergency Response Taskforce"
    },
    correctAnswer: "c",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 70 -",
    question: "Field investigative report (FIR) is a short narrative completed by field units after contact with citizens.",
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
    title: "Question 71 -",
    question: "The ability to dispatch via CAD, rather than via radio is known as:",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "Silent dispatch",
      b: "Radio silence",
      c: "Simulcasting",
      d: "Broadcasting"
    },
    correctAnswer: "a",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 72 -",
    question: "Telecommunicators do not have stressors unique to their environment.",
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
    title: "Question 73 -",
    question: "A digital radio system which allows for interoperable communications:",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "P-25: Project 25",
      b: "P-26: Project 26",
      c: "P-27: Project 27",
      d: "P-28: Project 28"
    },
    correctAnswer: "a",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 74 -",
    question: "Emergency medical care provided by paramedics that involve invasive medical procedures is:",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "ALS",
      b: "BLS",
      c: "Trauma Care",
      d: "ER Care"
    },
    correctAnswer: "a",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 75 -",
    question: "Bunker gear is clothing worn by firefighters when they are in interior bunkers.",
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
    question: "Commonly referred to as a stroke, when blood flow is interrupted to a part of the brain due to a blood clot.",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "Cerebrovascular Accident (CVA)",
      b: "Cerebroventricular Attack (CVA)",
      c: "Cerebroventricular Accident (CVA)",
      d: "Cerebrovascular Attack (CVA)"
    },
    correctAnswer: "a",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 77 -",
    question: "Information on stolen and recovered property as well as wanted and missing persons for all 50 U.S. states, other U.S. territories, and Canada and federal criminal and warrants data are maintained in the:",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "NCIC",
      b: "FCIC",
      c: "FDLE",
      d: "NDLE"
    },
    correctAnswer: "a",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 78 -",
    question: "CISM does not have resources available online.",
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
    title: "Question 79 -",
    question: "A fire incident that requires crowd control prompts a law enforcement response.",
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
    question: "Front side of a structure as established by incident command is:",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "Alpha",
      b: "Bravo",
      c: "Charlie",
      d: "Delta"
    },
    correctAnswer: "a",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 81 -",
    question: "Which roles and characteristics are similar to both the call taker and the dispatcher?",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "Maintain Professionalism",
      b: "Ensure Citizen and Responder safety",
      c: "Gather and distribute pertinent information",
      d: "A, B and C"
    },
    correctAnswer: "d",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 82 -",
    question: "Active listening is a conscious effort that requires the listener to understand and interpret what is being heard to ensure mutual understanding.",
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
    question: "Which are the five (5) major functional areas within ICS?",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "Command, Communications, Planning, Logistics and Finance/Administration",
      b: "Command, Operations, Communications, Logistics and Finance/Administration",
      c: "Command, Operations, Planning, Logistics and Communications",
      d: "Command, Operations, Planning, Logistics and Finance/Administration"
    },
    correctAnswer: "d",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 84 -",
    question: "The Americans with Disabilities Act (ADA) dictates that 911 services must be accessible to people with:",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "Hearing and Speech Impairments",
      b: "Hearing Impairments",
      c: "Speech Impairments",
      d: "Any Impairments"
    },
    correctAnswer: "a",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 85 -",
    question: "Professionalism is the principles of honor, morality, and accepted rules of conduct that govern an individual or group.",
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
    question: "PSTs must have the ability to use logical and sound judgment based on experience, available facts, and/or prior knowledge, good decision-making skills include:",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "Learning from past mistakes",
      b: "Acting quickly",
      c: "Obtaining facts",
      d: "A, B and C"
    },
    correctAnswer: "d",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 87 -",
    question: "Both EMTs and Paramedics provide advanced life support.",
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
    title: "Question 88 -",
    question: "Phone lines that operate differently than traditional landline systems.",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "Vocal-over Internet Protocol (VoIP)",
      b: "Voice-over Internet Protocol (VoIP)",
      c: "Vocal-over Internet Portal (VoIP)",
      d: "Voice-over Internet Portal (VoIP)"
    },
    correctAnswer: "b",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 89 -",
    question: "The Health Insurance Portability and Accountability Act (HIPAA) was signed into law by:",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "President Bill Clinton",
      b: "President Ronald Reagan",
      c: "President George Bush",
      d: "President Richard Nixon"
    },
    correctAnswer: "a",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 90 -",
    question: "An audible alarm is a tone used to alert of an upcoming event.",
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
    title: "Question 91 -",
    question: "To activate a Florida Amber Alert, which criteria must be met:",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "The abducted person must be under 16 years of age",
      b: "The abducted person must be under 17 years of age",
      c: "The abducted person must be under 18 years of age",
      d: "The abducted person must be under 21 years of age"
    },
    correctAnswer: "c",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 92 -",
    question: "A portable device which delivers an electrical shock to a patient's heart during arrest.",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "Automated Exterior Defibrillator",
      b: "Automated External Defibrillator",
      c: "Automatic External Defibrillator",
      d: "Automatic Exterior Defibrillator"
    },
    correctAnswer: "b",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 93 -",
    question: "A disturbance is a verbal argument which has resulted in physical contact.",
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
    question: "Direct 911 calls are received by a:",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "Primary PSAP",
      b: "Secondary PSAP",
      c: "Local Public Safety Offices",
      d: "Local Police Departments"
    },
    correctAnswer: "a",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 95 -",
    question: "A Telematic Call Center (TCC) operator will not contact the appropriate PSAP with information they receive from an automatic notification of an incident.",
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
    title: "Question 96 -",
    question: "A mobile water source:",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "Tanker",
      b: "Quint",
      c: "Engine",
      d: "Platform"
    },
    correctAnswer: "a",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 97 -",
    question: "Which acts will negatively affect the role of a PST?",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "Untruthfulness",
      b: "Poor Interpersonal skills",
      c: "Criminal activity",
      d: "A, B and C"
    },
    correctAnswer: "d",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 98 -",
    question: "An injunction or protective order issued by the court which requires one person to stop harming another is known as a restraining order.",
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
    question: "An Internet protocol-based system which acts as a bridge between agencies whose radio systems Are not usually compatible.",
    background: "<img src='./img/bg_slide1.jpg'>",
    answers: {
      a: "Florida Interoperability Network (FIN)",
      b: "Florida Interoperable Network (FIN)",
      c: "Florida Interoperability Number (FIN)",
      d: "Florida Interoperable Number (FIN)"
    },
    correctAnswer: "a",
    correctAnswerText: "Correct",
    falseAnswerText: "Incorrect"
  },
  {
    title: "Question 100 -",
    question: "Burglary is unlawfully entering a dwelling, structure, or conveyance with the intent to commit an offense inside.",
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
