// =========================================================
// SUDARSHANA CHAKRA IT FEST EVENT REGISTRATION - SCRIPT
// =========================================================

// 🔗 GOOGLE SHEETS INTEGRATION URL
// Paste your deployed Google Apps Script Web App URL between the quotes below:
const GOOGLE_SHEET_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwU6e_QnJUVI5hTRSsD7-dDU330FeE9UVurod-RK1WP19cIgcuwAMM7mnzM2jwvgpye/exec";

document.addEventListener("DOMContentLoaded", () => {

    const starsContainer = document.getElementById("starsContainer");
    const solarFlare = document.getElementById("solarFlare");
    const shockwaveRing = document.getElementById("shockwaveRing");
    const lightBeam = document.getElementById("lightBeam");

    const sudarshana = document.getElementById("sudarshana");
    const registrationCard = document.getElementById("registrationCard");

    const registrationForm = document.getElementById("registrationForm");
    const successMessage = document.getElementById("successMessage");
    const successDetails = document.getElementById("successDetails");
    const successResetBtn = document.getElementById("successResetBtn");


    // ========================================
    // 1. GENERATE COSMIC STARS
    // ========================================
    function generateStars() {
        const starCount = 70;
        for (let i = 0; i < starCount; i++) {
            const star = document.createElement("div");
            star.className = "star";
            const size = Math.random() * 2.5 + 1;
            star.style.width = `${size}px`;
            star.style.height = `${size}px`;
            star.style.top = `${Math.random() * 100}%`;
            star.style.left = `${Math.random() * 100}%`;
            star.style.animationDelay = `${Math.random() * 3}s`;
            star.style.animationDuration = `${Math.random() * 2 + 2}s`;
            starsContainer.appendChild(star);
        }
    }

    generateStars();

    // ========================================
    // 2. GENERATE RAY PARTICLES (CHAKRA TO FORM)
    // ========================================
    function generateRayParticles() {
        const rayParticles = document.getElementById("rayParticles");
        if (!rayParticles) return;
        const particleCount = 30;
        for (let i = 0; i < particleCount; i++) {
            const p = document.createElement("div");
            p.className = "ray-particle";
            p.style.top = `${15 + Math.random() * 70}%`;
            p.style.animationDuration = `${1.5 + Math.random() * 2}s`;
            p.style.animationDelay = `${Math.random() * 3}s`;
            const size = Math.random() * 4 + 3;
            p.style.width = `${size}px`;
            p.style.height = `${size}px`;
            rayParticles.appendChild(p);
        }
    }

    generateRayParticles();


    // ========================================
    // 3. MAJESTIC INTRO ANIMATION TIMELINE
    // ========================================
    const divineRays = document.getElementById("divineRays");

    // Stage 1: Solar Flare Burst at Center (0.3s)
    setTimeout(() => {
        solarFlare.classList.add("active");
    }, 300);

    // Stage 2: Shockwave Expansion (0.5s)
    setTimeout(() => {
        shockwaveRing.classList.add("active");
    }, 500);

    // Stage 3: Sudarshana Chakra Materializes (0.6s)
    setTimeout(() => {
        sudarshana.classList.add("materialized");
    }, 600);

    // Stage 4: Chakra floats to left side (2.0s)
    setTimeout(() => {
        sudarshana.classList.add("settled");
    }, 2000);

    // Stage 5: Light Beam & Divine Rays Shoot toward Form (2.8s)
    setTimeout(() => {
        lightBeam.classList.add("active");
        if (divineRays) divineRays.classList.add("active");
    }, 2800);

    // Stage 6: Celestial Registration Card Arrives & Illumined by Rays (3.2s)
    setTimeout(() => {
        registrationCard.classList.add("show");
    }, 3200);

    // Stage 7: Enable Card Ambient Glow (4.2s)
    setTimeout(() => {
        registrationCard.classList.add("pushing");
    }, 4200);


    // ========================================
    // 4. INTERACTIVE INPUT ENERGY REACTION
    // ========================================
    const formInputs = registrationForm.querySelectorAll("input, select");

    formInputs.forEach(input => {
        input.addEventListener("focus", () => {
            sudarshana.classList.add("energized");
        });

        input.addEventListener("blur", () => {
            sudarshana.classList.remove("energized");
        });
    });


    // ========================================
    // 5. FORM SUBMISSION & DIVINE BLAST
    // ========================================
    registrationForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // Get Form Input Values
        const selectedEvent = document.getElementById("eventSelect").value;
        const participantName = document.getElementById("participantName").value.trim();
        const contactNumber = document.getElementById("contactNumber").value.trim();
        const collegeEmail = document.getElementById("collegeEmail").value.trim();
        const year = document.getElementById("year").value;
        const className = document.getElementById("className").value.trim();
        const section = document.getElementById("section").value.trim();
        const rollNumber = document.getElementById("rollNumber").value.trim();
        const terms = document.getElementById("terms").checked;

        // Validation Checks
        if (!selectedEvent) {
            alert("Please select an event.");
            return;
        }

        if (!participantName) {
            alert("Please enter the participant name.");
            return;
        }

        if (contactNumber.length < 10) {
            alert("Please enter a valid 10-digit contact number.");
            return;
        }

        if (!collegeEmail || !collegeEmail.includes("@")) {
            alert("Please enter a valid college email address.");
            return;
        }

        if (!year) {
            alert("Please select year of study.");
            return;
        }

        if (!className) {
            alert("Please enter class/course (e.g. BCA).");
            return;
        }

        if (!section) {
            alert("Please enter section.");
            return;
        }

        if (!rollNumber) {
            alert("Please enter roll number (e.g. 24BCA001).");
            return;
        }

        if (!terms) {
            alert("Please confirm your details before submitting.");
            return;
        }

        // Trigger Hyper-Spin & Celestial Solar Flare Blast
        sudarshana.classList.add("hyperspin");

        solarFlare.classList.remove("active");
        shockwaveRing.classList.remove("active");

        void solarFlare.offsetWidth; // Force reflow
        void shockwaveRing.offsetWidth;

        solarFlare.classList.add("active");
        shockwaveRing.classList.add("active");

        // Data Object
        const eventRegistrationData = {
            event: selectedEvent,
            name: participantName,
            contact: contactNumber,
            email: collegeEmail,
            year: year,
            class: className,
            section: section,
            rollNo: rollNumber,
            registeredAt: new Date().toLocaleString()
        };

        // 🔗 SEND DATA TO GOOGLE SHEETS IF URL IS SET
        if (GOOGLE_SHEET_SCRIPT_URL && GOOGLE_SHEET_SCRIPT_URL.trim() !== "") {
            fetch(GOOGLE_SHEET_SCRIPT_URL, {
                method: "POST",
                mode: "no-cors",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(eventRegistrationData)
            })
                .then(() => console.log("Successfully sent to Google Sheets!"))
                .catch(err => console.error("Google Sheets error:", err));
        }

        // Save to LocalStorage as fallback/local record
        const existingRegistrations = JSON.parse(localStorage.getItem("itFestRegistrations") || "[]");
        existingRegistrations.push(eventRegistrationData);
        localStorage.setItem("itFestRegistrations", JSON.stringify(existingRegistrations));

        // Format Confirmation Content for Success Modal
        successDetails.innerHTML = `
            <p><strong>Participant:</strong> ${participantName}</p>
            <p><strong>Event Registered:</strong> 🏆 ${selectedEvent}</p>
            <p><strong>Roll No:</strong> ${rollNumber} | <strong>Class:</strong> ${className} - '${section}' (${year})</p>
            <p><strong>College Email:</strong> ${collegeEmail}</p>
            <p><strong>Contact:</strong> ${contactNumber}</p>
        `;

        // Hide Form smoothly
        setTimeout(() => {
            registrationCard.style.opacity = "0";
            registrationCard.style.transform = "translateY(-50%) scale(0.85)";
        }, 400);

        // Show Celestial Success Modal
        setTimeout(() => {
            successMessage.classList.add("show");
            sudarshana.classList.remove("hyperspin");
        }, 800);

        // Reset Form
        registrationForm.reset();
    });


    // ========================================
    // 6. RETURN / RESET FROM SUCCESS MODAL
    // ========================================
    successResetBtn.addEventListener("click", () => {
        successMessage.classList.remove("show");

        setTimeout(() => {
            registrationCard.style.opacity = "1";
            registrationCard.style.transform = "translateY(-50%) rotateY(0deg) scale(1)";
        }, 200);
    });

});