/* ================= MOBILE MENU ================= */

const nav = document.querySelector("nav");
const menu = document.querySelector(".menu");

if (menu) {

    menu.addEventListener("click", () => {

        nav.classList.toggle("open");

    });

}


/* Close menu after clicking a link */

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("open");

    });

});


/* ================= SCROLL REVEAL ================= */

const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


document
    .querySelectorAll(".reveal")
    .forEach(element => {

        observer.observe(element);

    });


/* ================= MOUSE GALAXY GLOW ================= */

const glow = document.querySelector(".glow");

if (glow) {

    window.addEventListener("pointermove", event => {

        glow.style.left =
            event.clientX + "px";

        glow.style.top =
            event.clientY + "px";

    });

}


/* ================= GALAXY PARALLAX ================= */

const visual =
    document.querySelector(".visual");

if (visual) {

    window.addEventListener("pointermove", event => {

        const rect =
            visual.getBoundingClientRect();

        const x =
            (event.clientX - rect.left)
            / rect.width
            - 0.5;

        const y =
            (event.clientY - rect.top)
            / rect.height
            - 0.5;


        const core =
            visual.querySelector(".core");

        const galaxy =
            visual.querySelector(".galaxy");


        if (core) {

            core.style.transform =
                `translate(${x * 12}px, ${y * 12}px)`;

        }


        if (galaxy) {

            galaxy.style.transform =
                `translate(${x * -10}px, ${y * -10}px)`;

        }

    });

}
