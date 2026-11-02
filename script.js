/* 1. DARK MODE */
const themeButton = document.getElementById("theme-toggle");

if (themeButton) {
    themeButton.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");

        themeButton.textContent =
            document.body.classList.contains("dark-mode") ? "☀" : "☾";
    });
}

/* 2. PROJECT DATABASE */
const projectData = {
    care: {
        category: "HEALTHTECH & ASSISTIVE INNOVATION",
        title: "CARE — AI-Powered Smart Medication Companion for Remote Elderly Care",
        year: "2025–2026 · Samsung Innovation Campus Batch 7",
        overview: "CARE (Companion AI for Remote Elderly Care) is an AI-powered smart medication box designed to support elderly care through visual and voice-based guidance. The system aims to improve medication assistance and accessibility for older adults.",
        role: "Project Manager",
        contribution: [
            "Led project planning, task allocation, and team coordination throughout the development process.",
            "Coordinated research into elderly care challenges and medication assistance needs.",
            "Organized research on AI applications and their integration into visual and voice-guidance features.",
            "Monitored project milestones and development progress.",
            "Coordinated project documentation and final presentation preparation."
        ],
        tags: ["Artificial Intelligence", "IoT", "Smart Medication System", "Visual Interaction", "Voice Guidance"],
        achievement: "Finalist — Samsung Innovation Campus Batch 7 (2025–2026), as part of Team NOVA, representing SMAN 1 Kota Malang.",
        certificate: "https://media.licdn.com/dms/image/v2/D562DAQEKpYLJXs_OWQ/profile-treasury-document-images_480/B56aA5foJcJ4AY-/1/1787670989192?e=1794441600&v=beta&t=AbIEBGfwmZyf1DFgn7NMt92gnj9EmFlogPpx2H1LBo8"
    },

    compass: {
        category: "SUSTAINABLE TECHNOLOGY & ENERGY",
        title: "COMPASS — IoT-Integrated Organic Waste Management & Smart Farming System",
        year: "2025 · Indonesia Science Project Olympiad",
        overview: "COMPASS is an integrated solution for household and agricultural organic waste management, combining microbiome-based processing, bioreactor technology, and IoT to support compost production and smart farming practices.",
        role: "Project Manager",
        contribution: [
            "Managed project planning, research coordination, and task distribution across the team.",
            "Coordinated scientific research on organic waste processing, microbiomes, and bioreactor applications.",
            "Organized the integration of biological processing concepts with IoT-based monitoring.",
            "Supervised project milestones and coordinated prototype development progress.",
            "Led preparation for the national-level presentation and project defense conducted entirely in English."
        ],
        tags: ["Internet of Things", "Microbiome Technology", "Bioreactor", "Organic Waste Processing", "Smart Farming"],
        achievement: "Finalist at the ISPO 2025 National Final Stage. Developed and presented a working prototype, with the final presentation and defense conducted entirely in English.",
        certificate: "https://media.licdn.com/dms/image/v2/D562DAQFUThfB_aXXFg/profile-treasury-document-images_480/B56aA5aXEFHUAY-/1/1787669608415?e=1794441600&v=beta&t=D7CYuOWtR-I5_TT_AJ-Z6Zgyjdvy46YLUZYE7W-cGME"
    },

    lotra: {
        category: "AI, IoT & SMART SYSTEMS",
        title: "LOTRA — IoT-Based Smart Logistics Robot with AI-Powered Real-Time Monitoring",
        year: "2025 · INJECTION",
        overview: "LOTRA is a smart logistics robot concept designed for material transportation, integrating IoT-based monitoring, AI technology, and load-cell sensors to support real-time material monitoring.",
        role: "Project Manager & Research Coordinator",
        contribution: [
            "Directed project planning and coordinated responsibilities across research and technical development teams.",
            "Organized research into smart logistics systems, automated transportation, and load-cell applications.",
            "Coordinated the integration of material transportation concepts with real-time monitoring requirements.",
            "Monitored project progress and facilitated collaboration between team members.",
            "Managed project documentation and competition preparation."
        ],
        tags: ["Robotics", "Internet of Things", "Artificial Intelligence", "Load Cell Sensors", "Real-Time Monitoring"],
        achievement: "Semifinalist — INJECTION 2025, with a project focused on technology-driven innovation.",
        certificate: "https://media.licdn.com/dms/image/v2/D562DAQHNjITWBenZUw/profile-treasury-image-shrink_480_480/B56aA5ZipmJkAY-/0/1787669392543?e=1794063600&v=beta&t=aJUXRLCxO0dkaEBjM74hUfTSLcZQSEoBA1RztJTSEGI"
    },

    sigap: {
        category: "AI, IoT & SMART SYSTEMS",
        title: "SIGAP — AI-IoT Smart Security System with Suspicious Motion Detection",
        year: "2025 · Samsung Innovation Campus Batch 6",
        overview: "SIGAP (Sistem Intelijen Garda Aman Pintar) is an intelligent e-security solution designed to detect suspicious movements and classify visitors automatically through AI and IoT integration.",
        role: "Project Manager & Research Coordinator",
        contribution: [
            "Led project planning, task delegation, and coordination throughout the development process.",
            "Coordinated research into smart security systems, motion detection, and automated visitor classification.",
            "Organized the development of the project concept and alignment between AI and IoT components.",
            "Monitored team progress during technology training and project development.",
            "Coordinated final project preparation and team presentation."
        ],
        tags: ["Artificial Intelligence", "Internet of Things", "Motion Detection", "Visitor Classification", "E-Security"],
        achievement: "Selected among the Top 10 High School teams in Samsung Innovation Campus Batch 6, organized by Hacktiv8 Indonesia.",
        certificate: "https://media.licdn.com/dms/image/v2/D562DAQG7U_czSqbqxA/profile-treasury-document-images_480/B56aBDL72SIYAY-/1/1787833598322?e=1794441600&v=beta&t=-rA7bruKCqm-KfxYNM5P2MUUNnYLsLB8xF5hOSfgjOk"
    },

    mobility: {
        category: "HEALTHTECH & ASSISTIVE INNOVATION",
        title: "Mobility Innovation — IoT & AI-Integrated Smart Wheel for Stroke Rehabilitation",
        year: "2024 · Multiple Competitions",
        overview: "Mobility Innovation explores a healthcare technology solution for stroke rehabilitation through a smart wheel prototype integrating IoT and AI-based analysis. The project focuses on applying technology to address rehabilitation-related challenges.",
        role: "Project Manager & Research Coordinator",
        contribution: [
            "Coordinated project planning, research activities, and task distribution among team members.",
            "Conducted and organized research into stroke rehabilitation challenges and assistive healthcare technologies.",
            "Coordinated the development of the smart wheel concept and research into its IoT and AI components.",
            "Monitored prototype development and coordinated preparation for project evaluation.",
            "Managed project documentation and presentation preparation."
        ],
        tags: ["Internet of Things", "Artificial Intelligence", "Assistive Technology", "Healthcare Innovation", "Stroke Rehabilitation"],
        achievement: "Awarded 1st Place in a technology competition and selected as a finalist in the STEAM Competition. The STEAM project featured a working prototype and an entirely English presentation before professional judges.",
        certificate: "https://media.licdn.com/dms/image/v2/D562DAQEbIPKY1PX0RQ/profile-treasury-document-images_480/B56aA5TZkLGgAY-/1/1787667782861?e=1794441600&v=beta&t=RQWPOwDHHJJ7aAly4T9N8Ja8saL2kcaN2IiOmd-FqzI",
        extraCertificate: "https://media.licdn.com/dms/image/v2/D562DAQEJfzMVIaz0PQ/profile-treasury-document-images_480/B56aA5cQwvJwAc-/1/1787670107778?e=1794441600&v=beta&t=wTnliXVzljKl6sfFtdKC9EQ7PndToIAIoHdS5ZSGz0Y"
    },

    nacell: {
        category: "SUSTAINABLE TECHNOLOGY & ENERGY",
        title: "NaCELL — Sustainable Molten Salt Battery for Energy Storage",
        year: "2024 · FSAD Fair",
        overview: "NaCELL explores the design and development of a molten salt battery prototype as an alternative energy storage solution, with an emphasis on sustainable energy technology.",
        role: "Project Manager & Research Coordinator",
        contribution: [
            "Managed research planning, task allocation, and team coordination.",
            "Coordinated literature reviews and scientific exploration of molten salt-based energy storage.",
            "Organized research activities related to battery design and sustainable energy applications.",
            "Monitored research progress and facilitated collaboration during prototype development.",
            "Coordinated scientific writing and competition submission preparation."
        ],
        tags: ["Energy Storage", "Battery Technology", "Molten Salt", "Sustainable Energy", "Prototype Development"],
        achievement: "Semifinalist — FSAD Fair 2024 Scientific Writing Competition.",
        certificate: "https://media.licdn.com/dms/image/v2/D562DAQHc9Kh0ia6iAA/profile-treasury-image-shrink_480_480/B56aA5Y7wqG0AU-/0/1787669232983?e=1794063600&v=beta&t=cLUIyEOr4ngifmwD0bdIKcNgAx6tRdNTHvII5XFRvyg"
    },

    stepvolt: {
        category: "SUSTAINABLE TECHNOLOGY & ENERGY",
        title: "STEPVolt — Hybrid Piezoelectric & Solar Energy Harvesting Floor System",
        year: "2024 · BRAND UI",
        overview: "STEPVolt proposes a hybrid energy-generating floor system that combines piezoelectric technology and photovoltaic solar cells to explore electricity generation from mechanical pressure and solar energy.",
        role: "Project Manager & Research Coordinator",
        contribution: [
            "Led research planning and coordinated team responsibilities throughout the project.",
            "Organized scientific exploration of piezoelectric energy harvesting and photovoltaic technology.",
            "Coordinated research into the integration of both energy-generation concepts.",
            "Monitored project progress and facilitated collaboration during research and prototype planning.",
            "Managed scientific documentation and competition preparation."
        ],
        tags: ["Piezoelectric Technology", "Solar Photovoltaics", "Hybrid Energy Systems", "Energy Harvesting", "Renewable Energy"],
        achievement: "Semifinalist — BRAND UI 2024, with a business idea focused on sustainable development and social impact in technology and science.",
        certificate: "https://media.licdn.com/dms/image/v2/D562DAQG0p0-wje_vNw/profile-treasury-image-shrink_480_480/B56aA5VQ8CHIAU-/0/1787668271180?e=1794060000&v=beta&t=VbSHDstgf0YoGjAn9EJXJjEKvMNZg0ppIOCUBgDN-kA"
    },

    resvibar: {
        category: "BIOINNOVATION & FOOD SCIENCE",
        title: "RESVIBAR — Resveratrol-Enriched Red Grape Nutraceutical Snack Bar",
        year: "2024 · National Scientific Writing Competition",
        overview: "RESVIBAR is a nutraceutical product innovation exploring red grape (Vitis vinifera L.) as a functional food ingredient, with a focus on resveratrol and its potential relevance to Alzheimer's-related research.",
        role: "Project Manager & Research Coordinator",
        contribution: [
            "Coordinated research planning, team responsibilities, and project development.",
            "Organized scientific research on resveratrol, red grape compounds, and nutraceutical applications.",
            "Facilitated the development of the product concept based on scientific findings.",
            "Monitored research progress and coordinated scientific manuscript preparation.",
            "Managed project documentation and competition submission."
        ],
        tags: ["Nutraceutical Research", "Resveratrol", "Red Grape", "Functional Food", "Food Science"],
        achievement: "Finalist — National Scientific Writing Competition, 2024.",
        certificate: "https://media.licdn.com/dms/image/v2/D562DAQEsVAfGjwZjDA/profile-treasury-image-shrink_480_480/B56aA5XP_kGQAU-/0/1787668791631?e=1794063600&v=beta&t=yFSOBpCY8nWqu9_oRhQu1voHj_NM6H4vQbdktdIc180"
    },

    nutrition: {
        category: "BIOINNOVATION & FOOD SCIENCE",
        title: "Red Grape & Peanut Skin Extracts for Nutritional Research on Alzheimer's Risk",
        year: "2024 · OPSI",
        overview: "A scientific research project investigating different proportions of red grape (Vitis vinifera L.) and peanut skin (Arachis hypogaea L.) extracts as potential nutritional food ingredients in research related to Alzheimer's risk prevention.",
        role: "Project Manager & Research Coordinator",
        contribution: [
            "Managed research planning, team coordination, and task distribution.",
            "Coordinated literature reviews on nutritional compounds found in red grapes and peanut skin.",
            "Organized research activities related to extract variations and potential nutritional applications.",
            "Monitored research progress and coordinated manuscript development.",
            "Managed documentation and preparation for the OPSI selection process."
        ],
        tags: ["Scientific Research", "Plant Extracts", "Nutritional Science", "Food Chemistry", "Research Methodology"],
        achievement: "Reached Stage 4 — Manuscript Selection, OPSI 2024, in the Mathematics, Science, and Technology (MST) field.",
        certificate: "https://media.licdn.com/dms/image/v2/D562DAQFOvz0GeD19eQ/profile-treasury-document-cover-images_800/B56aA5biBBIwA8-/0/1787669915996?e=1794063600&v=beta&t=XMaytCr5KgYcWB4IbOwaJkfx_UvVRfL9bxUs917sN7I"
    }
};

/* 3. PROJECT CATEGORY FILTER */
const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");
const emptyMessage = document.getElementById("empty-projects");

filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        const selectedCategory = button.dataset.filter;
        let visibleCount = 0;

        filterButtons.forEach(function (item) {
            item.classList.remove("active");
        });

        button.classList.add("active");

        projectCards.forEach(function (card) {
            const cardCategory = card.dataset.category;

            const shouldShow =
                selectedCategory === "all" ||
                selectedCategory === cardCategory;

            card.classList.toggle("hidden", !shouldShow);

            if (shouldShow) {
                visibleCount++;
            }
        });

        if (emptyMessage) {
            emptyMessage.hidden = visibleCount !== 0;
        }
    });
});

/* 4. PROJECT DETAIL MODAL */
const projectModal = document.getElementById("project-modal");
const modalClose = document.getElementById("modal-close");

const modalCategory = document.getElementById("modal-category");
const modalTitle = document.getElementById("modal-title");
const modalYear = document.getElementById("modal-year");
const modalOverview = document.getElementById("modal-overview");
const modalRole = document.getElementById("modal-role");
const modalContribution = document.getElementById("modal-contribution");
const modalTags = document.getElementById("modal-tags");
const modalAchievement = document.getElementById("modal-achievement");
const modalCertificate = document.getElementById("modal-certificate");

function openProject(projectId) {
    const project = projectData[projectId];

    if (!project || !projectModal) return;

    modalCategory.textContent = project.category;
    modalTitle.textContent = project.title;
    modalYear.textContent = project.year;
    modalOverview.textContent = project.overview;
    modalRole.textContent = project.role;
    modalAchievement.textContent = project.achievement;

    modalContribution.innerHTML = "";
    project.contribution.forEach(function (item) {
        const listItem = document.createElement("li");
        listItem.textContent = item;
        modalContribution.appendChild(listItem);
    });

    modalTags.innerHTML = "";
    project.tags.forEach(function (tag) {
        const tagElement = document.createElement("span");
        tagElement.textContent = tag;
        modalTags.appendChild(tagElement);
    });

    modalCertificate.href = project.certificate;
    modalCertificate.textContent = "View Certificate ↗";
    modalCertificate.style.display = "inline-block";

    // Additional certificate for Mobility Innovation
    const oldExtra = document.getElementById("modal-extra-certificate");

    if (oldExtra) {
        oldExtra.remove();
    }

    if (project.extraCertificate) {
        const extraLink = document.createElement("a");
        extraLink.id = "modal-extra-certificate";
        extraLink.className = "certificate-link";
        extraLink.href = project.extraCertificate;
        extraLink.target = "_blank";
        extraLink.rel = "noopener noreferrer";
        extraLink.textContent = "View STEAM Certificate ↗";

        modalCertificate.insertAdjacentElement("afterend", extraLink);
    }

    projectModal.classList.add("show");
    projectModal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
}

function closeProject() {
    if (!projectModal) return;

    projectModal.classList.remove("show");
    projectModal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
}

document.querySelectorAll(".view-project").forEach(function (button) {
    button.addEventListener("click", function () {
        openProject(button.dataset.project);
    });
});

if (modalClose) {
    modalClose.addEventListener("click", closeProject);
}

if (projectModal) {
    projectModal.addEventListener("click", function (event) {
        if (event.target === projectModal) {
            closeProject();
        }
    });
}

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        closeProject();
    }
});
