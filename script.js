const bars = document.querySelector(".bar"),
close = document.querySelector(".close"),
menu = document.querySelector(".menu");
const menuItem = document.querySelectorAll(".menu ul li");

menuItem.forEach(item => {
    item.addEventListener("click", () => {
        menu.classList.remove("active");
    });
});

bars.addEventListener("click", () => {
    menu.classList.add("active");
    gsap.from(".menu", {
        opacity: 0,
        duration: 0.3
    })
    gsap.from(".menu ul", {
        opacity: 0,
        x: -300
    })
})

close.addEventListener("click", () => {
    menu.classList.remove("active")
})

window.addEventListener("scroll", function() {
    var navbar = document.getElementById("navbar");
    if (window.scrollY > 0) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

document.querySelector(".dark-mode").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    document.querySelectorAll(".opsi .container .box h4").forEach((h4) => {
        h4.classList.toggle("dark-mode");
    });
    document.querySelectorAll(".opsi .container .box p").forEach((p) => {
        p.classList.toggle("dark-mode");
    });
    document.querySelectorAll(".about").forEach((p) => {
        p.classList.toggle("dark-mode");
    });
    document.querySelectorAll(".about-creato").forEach((p) => {
        p.classList.toggle("dark-mode");
    });
    document.querySelectorAll(".objek .container .container-box .content p").forEach((p) => {
        p.classList.toggle("dark-mode");
    });
    document.querySelectorAll(".objek .label").forEach((label) => {
        label.classList.toggle("dark-mode");
    });
    document.querySelectorAll(".kuliner .label").forEach((label) => {
        label.classList.toggle("dark-mode");
    });
    document.querySelectorAll(".kesenian .label").forEach((label) => {
        label.classList.toggle("dark-mode");
    });
    document.querySelectorAll(".artikel .label").forEach((label) => {
        label.classList.toggle("dark-mode");
    });
    document.querySelectorAll(".objek .container .container-box .heading").forEach((heading) => {
        heading.classList.toggle("dark-mode");
    });
    document.querySelectorAll(".objek .container .container-box .content a").forEach((a) => {
        a.classList.toggle("dark-mode");
    });
    document.querySelectorAll(".kesenian .container .container-box .heading").forEach((heading) => {
        heading.classList.toggle("dark-mode");
    });
    document.querySelectorAll(".kesenian .container .container-box .content a").forEach((a) => {
        a.classList.toggle("dark-mode");
    });
    document.querySelectorAll(".artikel .container .container-box .heading").forEach((heading) => {
        heading.classList.toggle("dark-mode");
    });
    document.querySelectorAll(".artikel .container .container-box .content a").forEach((a) => {
        a.classList.toggle("dark-mode");
    });
    document.querySelectorAll(".artikel .container .latest-artikel h3").forEach((h3) => {
        h3.classList.toggle("dark-mode");
    });
    document.querySelectorAll(".artikel .container .latest-artikel p").forEach((h3p) => {
        h3p.classList.toggle("dark-mode");
    });
    document.querySelectorAll(".artikel .container .more-artikel .text h3").forEach((h3) => {
        h3.classList.toggle("dark-mode");
    });
    document.querySelectorAll(".artikel .container .more-artikel .text li").forEach((li) => {
        li.classList.toggle("dark-mode");
    });
    document.querySelectorAll(".kuliner .galerii .box1").forEach((b1) => {
        b1.classList.toggle("dark-mode");
    });
    document.querySelectorAll(".kuliner .galerii .heading").forEach((h2) => {
        h2.classList.toggle("dark-mode");
    });
    document.querySelectorAll(".kuliner .galerii .box .first-box p").forEach((p) => {
        p.classList.toggle("dark-mode");
    });
    document.querySelectorAll(".kesenian .container .container-box .content p").forEach((p) => {
        p.classList.toggle("dark-mode");
    });
    document.querySelectorAll(".artikel .container .container-box .content p").forEach((p) => {
        p.classList.toggle("dark-mode");
    });
    document.querySelectorAll(".post-box").forEach((p) => {
        p.classList.toggle("dark-mode");
    });
    document.querySelectorAll(".filter-item").forEach((p) => {
        p.classList.toggle("dark-mode");
    });
    document.querySelectorAll(".post-text").forEach((p) => {
        p.classList.toggle("dark-mode");
    });
    document.querySelectorAll(".sub-heading").forEach((p) => {
        p.classList.toggle("dark-mode");
    });
    document.querySelectorAll(".header-title").forEach((p) => {
        p.classList.toggle("dark-mode");
    });
    document.querySelectorAll("article h2").forEach((p) => {
        p.classList.toggle("dark-mode");
    });
    document.querySelectorAll("article p").forEach((p) => {
        p.classList.toggle("dark-mode");
    });
    const boximg = document.querySelector(".opsi .container .box.box3 img");
    if (document.body.classList.contains("dark-mode")) {
        boximg.src = "img/seni1.png"; 
    } else {
        boximg.src = "img/seni.png"; 
    }
    const galeriImg = document.querySelector(".kuliner .galerii .box.box1 img");
    if (document.body.classList.contains("dark-mode")) {
        galeriImg.src = "img/kul1.png"; 
    } else {
        galeriImg.src = "img/kul.png"; 
    }
});

document.querySelector(".search-button").addEventListener("click", () => {
    const searchTerm = document.querySelector(".search-input").value.toLowerCase();
    const allContent = document.querySelectorAll(".objek .galeri .text");
    allContent.forEach((content) => {
        if (content.textContent.toLowerCase().includes(searchTerm)) {
            content.style.display = "block";
        } else {
            content.style.display = "none";
        }
    });
});

function animateContent(selector) {
    selector.forEach((selector) => {
        gsap.to(selector, {
            y: 30,
            duration: 0.1,
            opacity: 1,
            delay: 0.2,
            stagger: 0.2,
            ease: "power2.out"
        })
    })
}

function scrollTriggerAnimation(triggerSelector, boxSelectors){
    const timeline = gsap.timeline({
        scrollTrigger: {
            trigger: triggerSelector,
            start: "top 50%",
            end: "top 80%",
            scrub: 1,
        },
    });

    boxSelectors.forEach((boxSelectors) => {
        timeline.to(boxSelectors, {
            y: 0,
            duration: 1,
            opacity: 1,
        })
    })
}

function swipeAnimation(triggerSelector, boxSelectors){
    const timeline = gsap.timeline({
        scrollTrigger: {
            trigger: triggerSelector,
            start: "top 50%",
            end: "top 100%",
            scrub: 1
        }
    })
    boxSelectors.forEach((boxSelectors) => {
        timeline.to(boxSelectors, {
            x: 0,
            duration: 1,
            opacity: 1
        })
    })
}

function galleryAnimation(triggerSelector, boxSelectors) {
    const timeline = gsap.timeline({
        scrollTrigger: {
            trigger: triggerSelector,
            start: "top 100%",
            end: "bottom 100%",
            scrub: 1
        }
    })
    boxSelectors.forEach((boxSelectors) => {
        timeline.to(boxSelectors, {
            y: 0,
            opacity: 1,
            duration: 1
        })
    })
}

animateContent([".home .content h5, .home .content h1, .home .content p"])

scrollTriggerAnimation(".opsi", [".opsi .box1", ".opsi .box2", ".opsi .box3",])
scrollTriggerAnimation(".faqs .container", [".faqs .label", ".faqs .heading", ".faqs .paragraph",])
scrollTriggerAnimation(".artikel", [".artikel .label", ".artikel .heading", ".artikel .content"])

swipeAnimation(".objek", [".objek .heading", ".objek .content"])
swipeAnimation(".kesenian", [".kesenian .heading", ".kesenian .content"])
swipeAnimation(".artikel", [".artikel .latest-artikel", ".artikel .box1", ".artikel .box2", ".artikel .box3", ".artikel .box4",])

galleryAnimation(".objek .galeri", [".objek .galeri .box1", ".objek .galeri .box2", ".objek .galeri .box3", ".objek .galeri .box4", ".objek .galeri .box5", ".objek .galeri .box6"])
galleryAnimation(".kuliner .galerii", [".kuliner .galerii .box1", ".kuliner .galerii .box2", ".kuliner .galerii .box3", ".kuliner .galerii .box4", ".kuliner .galerii .box5"])
galleryAnimation(".kesenian .galeriii", [".kesenian .galeriii .box1", ".kesenian .galeriii .box2", ".kesenian .galeriii .box3", ".kesenian .galeriii .box4"])
galleryAnimation(".faqs .faq", [".faqs .faq .box1", ".faqs .faq .box2", ".faqs .faq .box3", ".faqs .faq .box4", ".faqs .faq .box5", ".faqs .faq .box6"])

$(document).ready(function () {
    $(".filter-item").click(function () {
        const value = $(this).attr("data-fil")
        if (value == "all") {
            $(".post-box").show("500")
        }else{
            $(".post-box")
            .not("." + value)
            .hide("500")
            $(".post-box")
            .filter("." + value)
            .show("500")
        }
    });

    $(".filter-item").click(function () {
        $(this).addClass("active-filter").siblings().removeClass("active-filter");
    });
});