const menuToggle = document.getElementById("menuToggle");
const mobileNav = document.getElementById("mobileNav");

menuToggle.addEventListener("click", () => {
    mobileNav.classList.toggle("active");
});

const navLinks = mobileNav.querySelectorAll("a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        mobileNav.classList.remove("active");
    });
});const projectForm = document.getElementById("projectForm");

if (projectForm) {
    projectForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("clientName").value;
        const business = document.getElementById("businessName").value;
        const type = document.getElementById("businessType").value;
        const budget = document.getElementById("budget").value;
        const project = document.getElementById("projectType").value;
        const message = document.getElementById("message").value;

        const whatsappMessage =
`Hello Mofeoluwa Media! 👋

I'd like to discuss a website project.

Name: ${name}
Business: ${business}
Business Type: ${type}
Project: ${project}
Budget: ${budget}

Project Details:
${message}`;

        const whatsappURL =
            "https://wa.me/2347062355824?text=" +
            encodeURIComponent(whatsappMessage);

        window.open(whatsappURL, "_blank");
    });
}