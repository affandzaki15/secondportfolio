"use strict";

// element toggle function
const elementToggleFunc = function (elem) {
  elem.classList.toggle("active");
};

// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () {
  elementToggleFunc(sidebar);
});

// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () {
  elementToggleFunc(this);
});

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);
  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {
  for (let i = 0; i < filterItems.length; i++) {
    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }
  }
};

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {
  filterBtn[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;
  });
}

// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {
    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }
  });
}

// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

    const projects = {
      ps: {
        title: "Playstation Management",
        image: "./assets/images/psnew.png",
        desc: "Aplikasi manajemen rental playstation dengan fitur booking, transaksi dan laporan.",
        tech: ["Tailwind CSS", "PHP", "JavaScript"],
        github: "https://github.com/affandzaki15/playstation",
        demo: "",
      },

      job: {
        title: "Job Search Web",
        image: "./assets/images/nexhire.png",
        desc: "Website pencarian kerja dengan fitur filter dan UI responsif.",
        tech: ["Tailwind CSS", "React JS"],
        github:
          "https://gitlab.com/affandzaki15/sanbercode-reactjs-batch-66/-/tree/main/final-project?ref_type=heads",
        demo: "https://nexhire.vercel.app/",
      },

      learning: {
        title: "Learning Center Web",
        image: "./assets/images/scover.png",
        desc: "Platform learning management system untuk siswa dan pengajar. (no share)",
        tech: ["PHP Native", "JavaScript", "Bootstrap", "MySQL"],
        github: "",
        demo: "",
      },

      online: {
        title: "Online Course Management",
        image: "./assets/images/bootcampp.png",
        desc: "Aplikasi manajemen kursus online dengan fitur CRUD",
        tech: ["React JS", "Tailwind CSS", "Mock API"],
        github: "https://github.com/affandzaki15/belajar-harisenin/tree/main/mission-advfe1",
        demo: "https://missionadvancefrontend1.vercel.app/",
      },

      dorm: {
        title: "Dorm Management",
        image: "./assets/images/asrama.png",
        desc: "Sistem manajemen asrama untuk pengelolaan kamar, penghuni, dan laporan administrasi.",
        tech: ["PHP Native", "Bootstrap", "MySQL"],
        github: "https://github.com/affandzaki15/asramamahasiswa",
        demo: "",
      },

      game: {
        title: "Game Center Management",
        image: "./assets/images/psold.png",
        desc: "Aplikasi pengelolaan game center dan transaksi pelanggan berbasis web.",
        tech: ["PHP", "JavaScript", "Bootstrap", "MySQL"],
        github: "https://github.com/affandzaki15/PlayStationrentalmanagementsystem",
        demo: "",
      },
    };

    // ELEMENT
    const modal = document.getElementById("projectModal");
    const modalImage = document.getElementById("modalImage");
    const modalTitle = document.getElementById("modalTitle");
    const modalDesc = document.getElementById("modalDesc");
    const modalGithub = document.getElementById("modalGithub");
    const modalDemo = document.getElementById("modalDemo");
    const closeModal = document.getElementById("closeModal");

    // CLICK PROJECT
    document.querySelectorAll(".project-item").forEach((item) => {
      item.addEventListener("click", () => {
        const id = item.dataset.id;
        const project = projects[id];

        if (!project) return;

        modalImage.src = project.image;
        modalTitle.innerText = project.title;
        modalDesc.innerText = project.desc;
        const modalTech = document.getElementById("modalTech");
        modalTech.innerHTML = ""; // reset

        project.tech.forEach((tech) => {
          const span = document.createElement("span");
          span.innerText = tech;
          modalTech.appendChild(span);
        });

        // GITHUB BUTTON
        if (project.github) {
          modalGithub.href = project.github;
          modalGithub.classList.remove("disabled");
        } else {
          modalGithub.removeAttribute("href");
          modalGithub.classList.add("disabled");
        }

        if (project.demo) {
          modalDemo.href = project.demo;
          modalDemo.classList.remove("disabled");
        } else {
          modalDemo.removeAttribute("href");
          modalDemo.classList.add("disabled");
        }

        modal.classList.add("active");
      });
    });

    // CLOSE MODAL
    closeModal.addEventListener("click", () => {
      modal.classList.remove("active");
    });

    // CLOSE WHEN CLICK OUTSIDE
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.classList.remove("active");
      }
    });
  });
}
