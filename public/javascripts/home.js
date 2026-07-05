const services = [
    {
        icon: "ti ti-brand-google",
        title: "SEO Optimization",
        desc: "Rank higher on Google and drive consistent organic traffic."
    },
    {
        icon: "ti ti-speakerphone",
        title: "Social Media Marketing",
        desc: "Grow your audience across Instagram, Facebook and LinkedIn."
    },
    {
        icon: "ti ti-click",
        title: "Performance Marketing",
        desc: "High-converting Meta and Google Ads with measurable ROI."
    },
    {
        icon: "ti ti-pencil",
        title: "Content Creation",
        desc: "Creative content that attracts, engages and converts."
    },
    {
        icon: "ti ti-chart-bar",
        title: "Analytics",
        desc: "Track every click, lead and conversion with detailed reports."
    },
    {
        icon: "ti ti-device-desktop",
        title: "Website Development",
        desc: "Modern responsive websites designed to convert visitors."
    }
];

const process = [
    {
        no: "01",
        title: "Discovery",
        desc: "Understanding your business and goals."
    },
    {
        no: "02",
        title: "Strategy",
        desc: "Building a custom marketing roadmap."
    },
    {
        no: "03",
        title: "Execution",
        desc: "Launching campaigns across multiple channels."
    },
    {
        no: "04",
        title: "Optimization",
        desc: "Improving performance every single week."
    }
];

const testimonials = [
    {
        name:"Rahul Sharma",
        company:"Founder, TechNest",
        review:"Market Munch increased our leads by 270% within three months."
    },
    {
        name:"Sneha Kapoor",
        company:"Fashion Creator",
        review:"Our Instagram engagement doubled and sales followed."
    },
    {
        name:"Aman Verma",
        company:"Cafe Owner",
        review:"Professional team. Transparent reporting and amazing ROI."
    }
];

const portfolio = [
    {
        title:"E-Commerce Brand",
        growth:"+420%",
        desc:"Revenue Growth"
    },
    {
        title:"Fitness Startup",
        growth:"+180%",
        desc:"Organic Traffic"
    },
    {
        title:"Restaurant Chain",
        growth:"4.8x",
        desc:"ROAS"
    }
];

const homePage = `
<div class="home">

<section class="hero">

<div class="hero-left">
<div class="hero-tag">

    <img src="/images/logo.jpeg" alt="Market Munch Logo" class="hero-logo">

    <span>Market Munch</span>

</div>

<h1 class="hero-title">
Grow Faster.<br>
Market Smarter.
</h1>

<p class="hero-description">
Market Munch helps brands dominate online through SEO,
performance marketing, content creation and powerful
digital strategies that actually generate revenue.
</p>

<div class="hero-buttons">

<button class="btn-primary" onclick="scrollServices()">
Explore Services
</button>

<a
class="btn-secondary"
href="https://wa.me/919996796697"
target="_blank">
Let's Talk
</a>

</div>

<div class="hero-stats">

<div class="stat">
<h2>120+</h2>
<p>Projects</p>
</div>

<div class="stat">
<h2>98%</h2>
<p>Client Satisfaction</p>
</div>

<div class="stat">
<h2>15</h2>
<p>Million Reach</p>
<p>Reach Generated</p>
</div>

</div>

</div>

<div class="hero-right">

<div class="dashboard">

<div class="graph">
<div class="bar b1"></div>
<div class="bar b2"></div>
<div class="bar b3"></div>
<div class="bar b4"></div>
<div class="arrow"></div>
</div>

<div class="dashboard-card">

<h3>Growth Overview</h3>

<h1>+125%</h1>

<p>vs last month</p>

</div>

</div>

</div>

</section>

<section class="clients">

<p class="section-small">
TRUSTED FOR GROWTH
</p>

<div class="client-grid">

<div>Google Ads</div>

<div>Meta Ads</div>

<div>Instagram</div>

<div>LinkedIn</div>

<div>YouTube</div>

</div>

</section>

<section class="services" id="services">

<p class="section-small">
OUR SERVICES
</p>

<h2 class="section-title">
Everything You Need To Grow
</h2>

<div class="service-grid">

${services.map(service=>`

<div class="service-card">

<div class="service-icon">
<i class="${service.icon}"></i>
</div>

<h3>
${service.title}
</h3>

<p>
${service.desc}
</p>

<a href="#">
Learn More →
</a>

</div>

`).join("")}

</div>

</section>

<section class="why">

<p class="section-small">
WHY MARKET MUNCH
</p>

<h2 class="section-title">
Marketing Built Around Results
</h2>

<div class="why-grid">

<div class="why-card">

<h3>Data Driven</h3>

<p>
Every campaign is backed by analytics,
not assumptions.
</p>

</div>

<div class="why-card">

<h3>Creative First</h3>

<p>
Designs and content that people actually remember.
</p>

</div>

<div class="why-card">

<h3>ROI Focused</h3>

<p>
Our only goal is helping your business make more money.
</p>

</div>

<div class="why-card">

<h3>Transparent</h3>

<p>
Weekly reports with every metric explained clearly.
</p>

</div>

</div>

</section>

<section class="portfolio">

<p class="section-small">
CASE STUDIES
</p>

<h2 class="section-title">
Real Results
</h2>

<div class="portfolio-grid">

${portfolio.map(item=>`

<div class="portfolio-card">

<h1>${item.growth}</h1>

<h3>${item.title}</h3>

<p>${item.desc}</p>

</div>

`).join("")}

</div>

</section>

<section class="process">

    <p class="section-small">
        OUR PROCESS
    </p>

    <h2 class="section-title">
        How We Scale Your Brand
    </h2>

    <div class="process-grid">

        ${process.map(step=>`

        <div class="process-card">

            <div class="process-number">
                ${step.no}
            </div>

            <h3>
                ${step.title}
            </h3>

            <p>
                ${step.desc}
            </p>

        </div>

        `).join("")}

    </div>

</section>

<section class="testimonials">

    <p class="section-small">
        TESTIMONIALS
    </p>

    <h2 class="section-title">
        What Our Clients Say
    </h2>

    <div class="testimonial-grid">

        ${testimonials.map(item=>`

        <div class="testimonial-card">

            <div class="stars">

                ★★★★★

            </div>

            <p class="review">

                "${item.review}"

            </p>

            <div class="client">

                <h4>${item.name}</h4>

                <span>${item.company}</span>

            </div>

        </div>

        `).join("")}

    </div>

</section>

<section class="faq">

    <p class="section-small">
        FAQ
    </p>

    <h2 class="section-title">
        Frequently Asked Questions
    </h2>

    <div class="faq-container">

        <div class="faq-item">

            <button class="faq-question">

                How long before I see results?

            </button>

            <div class="faq-answer">

                SEO generally takes 3–6 months while paid advertising can start generating leads within days.

            </div>

        </div>

        <div class="faq-item">

            <button class="faq-question">

                Do you manage ad campaigns?

            </button>

            <div class="faq-answer">

                Yes. We manage Google Ads, Meta Ads, LinkedIn Ads and complete optimization.

            </div>

        </div>

        <div class="faq-item">

            <button class="faq-question">

                Do you design websites?

            </button>

            <div class="faq-answer">

                Yes. We build modern, responsive websites optimized for conversions.

            </div>

        </div>

    </div>

</section>

<section class="cta">

    <div class="cta-content">

        <h2>

            Ready To Grow Your Business?

        </h2>

        <p>

            Let's build a digital strategy that generates real revenue.

        </p>

    </div>

    <div class="cta-buttons">

        <button class="btn-primary" onclick="scrollServices()">

            Our Services

        </button>

        <a
        class="btn-secondary"
        href="https://wa.me/919996796697"
        target="_blank">

            Let's Talk

        </a>

    </div>

</section>

<footer class="footer">

    <div class="footer-logo">

        MARKET MUNCH

    </div>

    <div class="footer-links">

        <a href="/">Home</a>

        <a href="/services">Services</a>

        <a href="/pricing">Pricing</a>

        <a href="/contact">Contact</a>

    </div>

    <p>

        © 2026 Market Munch. All Rights Reserved.

    </p>

</footer>

</div>
`;

document.getElementById("app").innerHTML = homePage;

/* ---------- Buttons ---------- */

function scrollServices(){

    document
    .getElementById("services")
    .scrollIntoView({
        behavior:"smooth"
    });

}

/* ---------- FAQ ---------- */

const questions = document.querySelectorAll(".faq-question");

questions.forEach(question=>{

    question.addEventListener("click",()=>{

        const answer = question.nextElementSibling;

        answer.classList.toggle("show");

        question.classList.toggle("active");

    });

});

/* ---------- Counter Animation ---------- */

const counters = document.querySelectorAll(".stat h2");

let started = false;

window.addEventListener("scroll",()=>{

    if(started) return;

    const stats = document.querySelector(".hero-stats");

    if(stats.getBoundingClientRect().top < window.innerHeight-100){

        started = true;

        counters.forEach(counter=>{

            const finalValue = counter.innerText;

            const number = parseInt(finalValue);

            if(isNaN(number)) return;

            let current = 0;

            const increment = Math.ceil(number/40);

            const interval = setInterval(()=>{

                current += increment;

                if(current>=number){

                    counter.innerText = finalValue;

                    clearInterval(interval);

                }
                else{

                    counter.innerText = current+"+";

                }

            },30);

        });

    }

});

/* ---------- Reveal Animation ---------- */

const observer = new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("visible");

        }

    });

},{
    threshold:0.15
});

document.querySelectorAll(

".service-card,.why-card,.portfolio-card,.process-card,.testimonial-card"

).forEach(card=>{

    observer.observe(card);

});

