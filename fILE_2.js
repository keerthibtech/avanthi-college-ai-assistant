const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");

// ======================================================
// AVEN COLLEGE KNOWLEDGE BASE
// ======================================================

const collegeData = {

    // ==================================================
    // COURSES
    // ==================================================

    courses: {
        keywords: [
            "course", "courses", "program", "programs",
            "branch", "branches", "degree",
            "btech", "b tech", "mtech", "m tech",
            "mba", "diploma", "study",
            "what can i study",
            "what courses are offered"
        ],

        answer: `
            <strong>🎓 Programs Offered</strong>
            <br><br>

            Avanthi Institute of Engineering & Technology
            offers programs including:
            <br><br>

            • B.Tech Computer Science & Engineering (CSE)<br>
            • B.Tech Electronics & Communication Engineering (ECE)<br>
            • B.Tech Electrical & Electronics Engineering (EEE)<br>
            • B.Tech Mechanical Engineering<br>
            • B.Tech Agricultural Engineering<br>
            • M.Tech Computer Science & Engineering<br>
            • M.Tech Digital Electronics & Communication Systems<br>
            • M.Tech Software Engineering<br>
            • M.Tech Power Electronics<br>
            • M.Tech Power Systems<br>
            • M.Tech VLSI Design<br>
            • M.Tech Information Technology<br>
            • MBA<br>
            • Diploma EEE<br>
            • Diploma Mechanical

            <br><br>

            🔗 <a href="https://avanthi.edu.in/programs"
            target="_blank">
            View Programs Page →
            </a>
        `
    },


    // ==================================================
    // ADMISSIONS
    // ==================================================

    admissions: {
        keywords: [
            "admission", "admissions", "apply",
            "application", "eligibility", "eligible",
            "how to join", "how can i join",
            "admission process", "documents required"
        ],

        answer: `
            <strong>📝 Admission Information</strong>
            <br><br>

            According to the available admission information:
            <br><br>

            • Students should have passed the required
            qualifying examination for the program.
            <br><br>

            • Selection is based on merit and applicable
            reservation rules.
            <br><br>

            • Candidates must submit the required certificates
            and documents during admission.
            <br><br>

            • Scholarships and concessions may be available
            for meritorious and financially weak students.
            <br><br>

            <strong>📌 Important:</strong>
            Admission requirements can vary by program
            and academic year.

            <br><br>

            🔗 <a href="https://avanthi.edu.in/"
            target="_blank">
            Visit Official Avanthi Website →
            </a>
        `
    },


    // ==================================================
    // FEES
    // ==================================================

    fees: {
        keywords: [
            "fee",
            "fees",
            "fee structure",
            "tuition",
            "college fee",
            "college fees",
            "course fee",
            "course fees",
            "academic fee",
            "academic fees",
            "btech fee",
            "btech fees",
            "b tech fee",
            "b tech fees",
            "engineering fee",
            "engineering fees",
            "cse fee",
            "cse fees",
            "ece fee",
            "ece fees",
            "eee fee",
            "eee fees",
            "mechanical fee",
            "mechanical fees",
            "mech fee",
            "mech fees",
            "first year fee",
            "first year fees",
            "1st year fee",
            "1st year fees",
            "how much",
            "cost",
            "fees details",
            "tuition fee",
            "tuition fees"
        ],

        answer: `
            <strong>💰 Academic Fee Structure</strong>
            <br><br>

            <strong>🎓 B.Tech 1st Year Fees</strong>
            <br><br>

            • 💻 Computer Science & Engineering (CSE):
            <strong>₹70,000 per year</strong>
            <br><br>

            • 📡 Electronics & Communication Engineering (ECE):
            <strong>₹65,000 per year</strong>
            <br><br>

            • ⚡ Electrical & Electronics Engineering (EEE):
            <strong>₹55,000 per year</strong>
            <br><br>

            • ⚙️ Mechanical Engineering:
            <strong>₹50,000 per year</strong>
            <br><br>

            <strong>📚 Other Course Fee Information</strong>
            <br><br>

            • B.E. / B.Tech:
            approximately <strong>₹1.60 Lakh – ₹1.66 Lakh</strong>
            total tuition fee
            <br><br>

            • M.E. / M.Tech:
            approximately <strong>₹1 Lakh</strong>
            <br><br>

            • MBA / PGDM:
            approximately <strong>₹70,000</strong>
            <br><br>

            • MCA:
            approximately <strong>₹70,000</strong>
            <br><br>

            <strong>📌 Additional Expenses</strong>
            <br><br>

            🏠 Hostel:
            <strong>₹48,000 per year</strong>
            <br>
            ₹24,000 per semester
            <br><br>

            🚌 Transportation:
            approximately <strong>₹14,000 – ₹21,000 per year</strong>
            depending on route.
            <br><br>

            <strong>Note:</strong>
            Fees may vary depending on the academic year,
            branch and admission category. Please confirm
            the latest fee structure with the college.

            <br><br>

            🔗 <a href="https://avanthi.edu.in/"
            target="_blank">
            Official Avanthi Website →
            </a>
        `
    },


    // ==================================================
    // HOSTEL
    // ==================================================

    hostel: {
        keywords: [
            "hostel",
            "hostel fee",
            "hostel fees",
            "hostel cost",
            "hostel charges",
            "hostel price",
            "hostel availability",
            "hostel available",
            "hostel facility",
            "hostel facilities",
            "hostel per year",
            "hostel per semester",
            "accommodation",
            "stay"
        ],

        answer: `
            <strong>🏠 Hostel Facilities</strong>
            <br><br>

            Hostel accommodation is available for students.
            <br><br>

            <strong>💰 Hostel Fee:</strong>
            <br>
            • ₹48,000 per year
            <br>
            • ₹24,000 per semester
            <br><br>

            Hostel availability and room allocation may
            depend on the academic year and available seats.
            <br><br>

            Students can contact the college for current
            hostel availability and room details.
        `
    },


    // ==================================================
    // FACILITIES
    // ==================================================

    facilities: {
        keywords: [
            "facility",
            "facilities",
            "infrastructure",
            "lab",
            "labs",
            "laboratories",
            "library",
            "classrooms",
            "computer lab",
            "campus facilities",
            "what facilities"
        ],

        answer: `
            <strong>🏢 Campus Facilities</strong>
            <br><br>

            Avanthi provides academic infrastructure
            and opportunities for student development.
            <br><br>

            <strong>Facilities & Activities include:</strong>
            <br><br>

            • 🔬 Laboratories<br>
            • 📚 Library<br>
            • 💻 Computer facilities<br>
            • 🏫 Classrooms<br>
            • 🪖 NCC<br>
            • 🤝 NSS<br>
            • 💡 Innovation Club<br>
            • 💻 Internal Hackathons<br>
            • 🏏 Sports Activities<br>
            • 🎉 Student Events

            <br><br>

            These activities support technical skills,
            leadership, innovation, teamwork and
            overall student development.
        `
    },


    // ==================================================
    // TRANSPORT
    // ==================================================

    transport: {
        keywords: [
            "transport",
            "transportation",
            "bus",
            "buses",
            "college bus",
            "bus facility",
            "bus route",
            "bus routes",
            "bus fee",
            "bus fees",
            "transport fee",
            "transport fees",
            "bus charges",
            "transport available",
            "transport facility",
            "bus availability",
            "how to reach"
        ],

        answer: `
            <strong>🚌 Transportation Facility</strong>
            <br><br>

            Transportation facilities are available for
            students from villages and nearby areas around
            <strong>Narsipatnam and Anakapalli</strong>.
            <br><br>

            <strong>💰 Approximate Transport Fee:</strong>
            <br><br>

            • Nearest villages:
            <strong>₹14,000 per year</strong>
            <br><br>

            • Depending on the route, the fee can go up to
            approximately <strong>₹21,000 per year</strong>.
            <br><br>

            Buses are available for students travelling
            from nearby villages and surrounding areas.
            <br><br>

            Transport fees may vary depending on the
            route and academic year.
            <br><br>

            For current routes and timings, contact
            the college.
        `
    },


    // ==================================================
    // PLACEMENTS
    // ==================================================

    placements: {
        keywords: [
            "placement",
            "placements",
            "package",
            "packages",
            "highest package",
            "highest salary",
            "maximum package",
            "maximum salary",
            "salary",
            "salaries",
            "job",
            "jobs",
            "recruiter",
            "recruiters",
            "companies",
            "company",
            "career",
            "career opportunities",
            "lpa",
            "earn"
        ],

        answer: `
            <strong>💼 Training & Placement Cell</strong>
            <br><br>

            The Training & Placement Facility focuses on
            technical training, soft skills, personality
            enhancement and preparing students for employment.
            <br><br>

            Its motto is:
            <strong>"Get every student placed."</strong>
            <br><br>

            The facility started functioning in
            <strong>2007</strong>.
            <br><br>

            <strong>🏆 2026 Highest Package</strong>
            <br><br>

            <strong>₹12 LPA</strong>
            <br><br>

            The highest package reported for the
            <strong>2026 placement season is ₹12 LPA</strong>.
            <br><br>

            Students also receive technical and
            professional training to improve their
            employability skills.
        `
    },


    // ==================================================
    // LOCATION
    // ==================================================

    location: {
        keywords: [
            "location",
            "address",
            "where is college",
            "where is avanthi",
            "campus location",
            "college location",
            "college address",
            "where is the campus",
            "situated",
            "located"
        ],

        answer: `
            <strong>📍 Campus Location</strong>
            <br><br>

            <strong>
            Avanthi Institute of Engineering & Technology
            (AVEN)
            </strong>
            <br><br>

            Tamaram, Makavarapalem,
            Narsipatnam (RD),
            Visakhapatnam – 531113
            <br><br>

            🔗 <a href="https://avanthi.edu.in/"
            target="_blank">
            View Official College Information →
            </a>
        `
    },


    // ==================================================
    // CONTACT
    // ==================================================

    contact: {
        keywords: [
            "contact",
            "phone",
            "telephone",
            "email",
            "mail",
            "contact details",
            "contact information",
            "how can i contact",
            "college phone number"
        ],

        answer: `
            <strong>📞 Contact Information</strong>
            <br><br>

            <strong>Phone:</strong>
            <br>
            +91-9866664636
            <br>
            +91-08932-222382
            <br><br>

            <strong>Email:</strong>
            <br>
            info@avanthi.edu.in
            <br><br>

            🔗 <a href="https://avanthi.edu.in/"
            target="_blank">
            Official Avanthi Website →
            </a>
        `
    },


    // ==================================================
    // EVENTS
    // ==================================================

    events: {
        keywords: [
            "event",
            "events",
            "freshers",
            "freshers day",
            "celebration",
            "celebrations",
            "activities",
            "activity",
            "student activities",
            "college activities",
            "hackathon",
            "hackathons",
            "internal hackathon",
            "ncc",
            "nss",
            "innovation club",
            "clubs",
            "cricket",
            "cricket carnival",
            "avanthi cricket carnival",
            "sports",
            "sports events",
            "sports activities"
        ],

        answer: `
            <strong>🎉 Events & Student Activities</strong>
            <br><br>

            Students can participate in academic,
            technical, cultural and extracurricular
            activities.
            <br><br>

            <strong>🎊 Events & Activities include:</strong>
            <br><br>

            • 🎉 Freshers celebrations
            <br>
            • 🏏 Avanthi Cricket Carnival
            <br>
            • 🪖 NCC activities
            <br>
            • 🤝 NSS activities
            <br>
            • 💡 Innovation Club
            <br>
            • 💻 Internal Hackathons
            <br>
            • 🏆 Sports activities
            <br><br>

            These activities help students develop
            teamwork, leadership, communication,
            innovation and technical skills.
        `
    },


    // ==================================================
    // EXAMS
    // ==================================================

    exams: {
        keywords: [
            "exam",
            "exams",
            "examination",
            "examinations",
            "semester exam",
            "semester",
            "test",
            "timetable",
            "exam timetable",
            "exam schedule"
        ],

        answer: `
            <strong>📝 Examinations</strong>
            <br><br>

            For current examination schedules, timetables,
            notifications and examination-related documents,
            please check the latest official college
            notifications.
            <br><br>

            🔗 <a href="https://avanthi.edu.in/"
            target="_blank">
            Official Avanthi Website →
            </a>
        `
    },


    // ==================================================
    // VISION
    // ==================================================

    vision: {
        keywords: [
            "vision",
            "college vision",
            "what is the vision"
        ],

        answer: `
            <strong>🎯 Vision</strong>
            <br><br>

            To develop highly skilled professionals with
            ethics and human values.
            <br><br>

            🔗 <a href="https://www.avanthi.edu.in/about"
            target="_blank">
            Official About Page →
            </a>
        `
    },


    // ==================================================
    // MISSION
    // ==================================================

    mission: {
        keywords: [
            "mission",
            "college mission",
            "what is the mission"
        ],

        answer: `
            <strong>🚀 Mission</strong>
            <br><br>

            1. To impart quality education with industrial
            exposure and professional training.
            <br><br>

            2. To produce competent and highly knowledgeable
            engineers with a positive approach.
            <br><br>

            3. To build self-confidence among students to
            face the challenges of life.
            <br><br>

            🔗 <a href="https://www.avanthi.edu.in/about"
            target="_blank">
            Official About Page →
            </a>
        `
    },


    // ==================================================
    // ABOUT
    // ==================================================

    about: {
        keywords: [
            "about college",
            "about avanthi",
            "college overview",
            "overview",
            "tell me about college",
            "tell me about avanthi"
        ],

        answer: `
            <strong>🏫 About Avanthi</strong>
            <br><br>

            Avanthi Educational Society was registered in
            <strong>1991</strong> and has promoted multiple
            educational institutions.
            <br><br>

            The group provides education across engineering,
            pharmacy, management, degree and postgraduate
            programs.
            <br><br>

            🔗 <a href="https://www.avanthi.edu.in/about"
            target="_blank">
            Official About Page →
            </a>
        `
    },


    // ==================================================
    // DOCUMENTS
    // ==================================================

    documents: {
        keywords: [
            "document",
            "documents",
            "pdf",
            "notice",
            "notices",
            "download",
            "certificate",
            "important links",
            "links"
        ],

        answer: `
            <strong>📄 Documents & Official Links</strong>
            <br><br>

            I can guide you to official Avanthi webpages
            where available information and documents
            are published.
            <br><br>

            🔗 <a href="https://avanthi.edu.in/"
            target="_blank">
            Open Official Website →
            </a>
        `
    }
};


// ======================================================
// TEXT NORMALIZATION
// ======================================================

function normalizeText(text) {

    return text
        .toLowerCase()
        .replace(/[^\w\s]/g, " ")
        .replace(/\s+/g, " ")
        .trim();
}


// ======================================================
// INTENT DETECTION
// ======================================================

function detectIntent(question) {

    const text = normalizeText(question);

    let bestIntent = null;
    let bestScore = 0;

    for (const intent in collegeData) {

        let score = 0;

        const keywords = collegeData[intent].keywords;

        for (const keyword of keywords) {

            const cleanKeyword = normalizeText(keyword);

            if (text.includes(cleanKeyword)) {

                if (cleanKeyword.includes(" ")) {
                    score += 3;
                } else {
                    score += 1;
                }
            }
        }

        if (score > bestScore) {
            bestScore = score;
            bestIntent = intent;
        }
    }

    return {
        intent: bestIntent,
        score: bestScore
    };
}


// ======================================================
// ANSWER GENERATOR
// ======================================================

function getAnswer(question) {

    const result = detectIntent(question);

    if (!result.intent || result.score === 0) {

        return `
            <strong>🤖 I couldn't find that information.</strong>
            <br><br>

            You can ask me about:
            <br><br>

            🎓 Courses<br>
            📝 Admissions<br>
            💰 Fees<br>
            🏠 Hostel<br>
            🏢 Facilities<br>
            🚌 Transport<br>
            💼 Placements<br>
            📍 Location<br>
            📞 Contact<br>
            🎉 Events & Activities<br>
            📝 Exams<br>
            🎯 Vision / Mission

            <br><br>

            <strong>Tip:</strong>
            Ask your question naturally.
        `;
    }

    return collegeData[result.intent].answer;
}


// ======================================================
// ADD MESSAGE
// ======================================================

function addMessage(message, className) {

    const messageDiv = document.createElement("div");

    messageDiv.className = `message ${className}`;

    messageDiv.innerHTML = message;

    chatBox.appendChild(messageDiv);

    chatBox.scrollTop = chatBox.scrollHeight;
}


// ======================================================
// SEND MESSAGE
// ======================================================

function sendMessage() {

    const question = userInput.value.trim();

    if (question === "") {
        return;
    }

    addMessage(question, "user-message");

    const thinkingDiv = document.createElement("div");

    thinkingDiv.className = "message bot-message";

    thinkingDiv.innerHTML = "🤖 Thinking...";

    chatBox.appendChild(thinkingDiv);

    chatBox.scrollTop = chatBox.scrollHeight;

    setTimeout(() => {

        thinkingDiv.innerHTML = getAnswer(question);

        chatBox.scrollTop = chatBox.scrollHeight;

    }, 500);

    userInput.value = "";
}


// ======================================================
// QUICK QUESTION BUTTONS
// ======================================================

function askQuestion(type) {

    const questions = {

        admission:
            "What is the admission process?",

        courses:
            "What courses are offered?",

        hostel:
            "What is the hostel fee?",

        departments:
            "What departments are available?",

        contact:
            "How can I contact the college?",

        transport:
            "What is the transport fee?",

        placements:
            "What is the highest package?",

        events:
            "What events and activities are available?",

        fees:
            "What are the college fees?"
    };

    if (questions[type]) {

        userInput.value = questions[type];

        sendMessage();
    }
}


// ======================================================
// ENTER KEY SUPPORT
// ======================================================

userInput.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {

        event.preventDefault();

        sendMessage();
    }
});