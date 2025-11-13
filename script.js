document.addEventListener("DOMContentLoaded", () => {

    /* ----------------------------------------
       Feather Icons Init
    ---------------------------------------- */
    if (window.feather) {
        feather.replace();
    }

    /* ----------------------------------------
       Custom Cursor (Desktop Only)
    ---------------------------------------- */
    const cursor = document.querySelector(".cursor");
    const follower = document.querySelector(".cursor-follower");

    if (cursor && follower && window.innerWidth > 768) {
        document.addEventListener("mousemove", (e) => {
            cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
            follower.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        });
    }

    /* ----------------------------------------
       Back To Top Button
    ---------------------------------------- */
    const backToTop = document.getElementById("backToTop");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            backToTop.classList.remove("opacity-0", "invisible");
        } else {
            backToTop.classList.add("opacity-0", "invisible");
        }
    });

    backToTop.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    /* ----------------------------------------
       FAQ Dropdown Toggle
    ---------------------------------------- */
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach((item) => {
        const question = item.querySelector(".faq-question");
        const answer = item.querySelector(".faq-answer");
        const icon = item.querySelector("i");

        question.addEventListener("click", () => {
            answer.classList.toggle("hidden");
            icon.classList.toggle("rotate-180");
        });
    });

    /* ----------------------------------------
       Mobile Navbar Toggle
    ---------------------------------------- */
    const mobileMenuBtn = document.querySelector("nav button.md\\:hidden");
    const navLinks = document.querySelector(".md\\:flex");

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener("click", () => {
            navLinks.classList.toggle("hidden");
            navLinks.classList.toggle("flex");
            navLinks.classList.toggle("flex-col");
            navLinks.classList.toggle("bg-white");
            navLinks.classList.toggle("p-6");
        });
    }

    /* ----------------------------------------
       GSAP Section Fade Animations
    ---------------------------------------- */
    if (window.gsap) {
        gsap.registerPlugin(ScrollTrigger);

        gsap.utils.toArray("section").forEach((section) => {
            gsap.from(section, {
                opacity: 0,
                y: 50,
                duration: 1,
                scrollTrigger: {
                    trigger: section,
                    start: "top 80%",
                },
            });
        });
    }

});
