const services = [
    {
        icon: "ti ti-brand-google",
        title: "SEO Optimization",
        desc: "Rank higher on Google and drive consistent organic traffic.",
        link: "/services/seo-optimization"
    },
    {
        icon: "ti ti-speakerphone",
        title: "Social Media Marketing",
        desc: "Grow your audience across Instagram, Facebook and LinkedIn.",
        link: "/services/socialmediamarketing"
    },
    {
        icon: "ti ti-click",
        title: "Performance Marketing",
        desc: "High-converting Meta and Google Ads with measurable ROI.",
        link: "/services/performance-marketing"
    },
    {
        icon: "ti ti-brand-google",
        title: "Google Ads Management",
        desc: "Drive qualified leads with expertly managed Google Ads campaigns.",
        link: "/services/google-ads-management"
    },
    {
        icon: "ti ti-brand-meta",
        title: "Meta Ads",
        desc: "Reach your ideal audience through Facebook and Instagram advertising.",
        link: "/services/meta-ads"
    },
    {
        icon: "ti ti-mail",
        title: "Email Marketing",
        desc: "Build customer relationships with targeted email campaigns.",
        link: "/services/email-marketing"
    },
    {
        icon: "ti ti-brand-whatsapp",
        title: "WhatsApp Marketing",
        desc: "Engage customers directly with personalized WhatsApp campaigns.",
        link: "/services/whatsapp-marketing"
    },
    {
        icon: "ti ti-pencil",
        title: "Content Creation",
        desc: "Creative content that attracts, engages and converts.",
        link: "/services/content-creation"
    },
    {
        icon: "ti ti-chart-bar",
        title: "Analytics",
        desc: "Track every click, lead and conversion with detailed reports.",
        link: "/services/analytics"
    },
    {
        icon: "ti ti-device-desktop",
        title: "Website Development",
        desc: "Modern responsive websites designed to convert visitors.",
        link: "/services/web-development"
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
        name:"Sumit Malik",
        company:"The imagination creatives",
        review:"Working with Market Munch completely changed our online presence. Their SEO and marketing strategy brought in more qualified leads within weeks, and communication throughout the project was excellent."
    },
    {
        name:"Varun Dua",
        company:"Barkha International",
        review:"We wanted more than just reels. The team showed extraordinary enthusiasm towards the brand and delieverd quality reels. The teamwork was exceptional and they updated us on each step of journey."
    },
    {
        name:"Mayank Jain",
        company:"Jain ki Dukan",
        review:"Market Munch didn't just promise growth—they showed us the numbers behind every decision. Their transparency and creativity really stood out."
    },
    {
        name:"Tanu Ahuja",
        company:"Jogan Couture",
        review:"Professional, creative, and incredibly easy to work with. Every campaign was backed by data, and we finally understood where our marketing budget was going."
    },
    {
        name:"Dr. Vineet Arya",
        company:"Dev Eye Care",
        review:"We've worked with multiple agencies before, but Market Munch was the first to make marketing feel collaborative instead of confusing."
    },
    {
        name:"Prachi Gawri",
        company:"Homadorn",
        review:"Their attention to detail and willingness to adapt to feedback made the entire experience smooth. We'd happily recommend them to other businesses."
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

<section class="founders-section">

    <div class="founders-heading">

        <p class="small-text">
            MARKET MUNCH
        </p>

        <h1>
            You found us.
        </h1>

        <h2>
            Now let's make sure your customers find you too.
        </h2>

    </div>

    
    <div class="founders-divider">

    <div class="divider-line"></div>

    <p>
        Let's meet the people behind the ideas.
    </p>

    <div class="divider-line"></div>

</div>

<div class="founders-container">


    <div class="founder-card orange-card active-card">

        <div class="gradient-circle"></div>

        <img src="/images/anjali.png" alt="Founder">

        <span>Co-Founder</span>

        <h3>Anjali Choudhary</h3>

        <p>
            Helping businesses grow with modern marketing,
            branding and scalable digital strategies.
        </p>

        <a href="https://wa.me/919996796697?text=Hi! I'm interested in your Basic Plan."
target="_blank">
    Connect →</a>

    </div>

    <div class="founder-card orange-card">

        <div class="gradient-circle"></div>

        <img src="/images/kamal.jpeg" alt="Founder">

        <span>Co-Founder</span>

        <h3>Kamal</h3>

        <p>
            Focused on creative campaigns,
            content and performance that actually
            converts visitors into customers.
        </p>

        <a href="https://wa.me/919996796697?text=Hi! I'm interested in your Basic Plan."
target="_blank">
    Connect →</a>

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

 <div class="showcase-image">

        <img src="/images/dashboard1.png"
             alt="Market Munch Dashboard">

    </div>

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

<a href="${service.link}">
Learn More →
</a>

</div>

`).join("")}

</div>

</section>

<section class="showcase">

    <div class="showcase-content">

        <p class="section-small">
            SEE THE DIFFERENCE
        </p>

        <h2>
            Marketing That Looks As Good As It Performs
        </h2>

        <p>
            From social media campaigns to analytics dashboards, we create
            digital experiences that attract attention and drive measurable growth.
        </p>

    </div>

    <div class="showcase-image">

        <img src="/images/dashboard.png"
             alt="Market Munch Dashboard">

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

<div class="showcase-image">

        <img src="/images/dashboard2.png"
             alt="Market Munch Dashboard">

    </div>

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
        href="https://wa.me/919350223775"
        target="_blank">

            Let's Talk

        </a>

    </div>

</section>



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

/* ---------- Reveal Animation ---------- */

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("visible");
            observer.unobserve(entry.target);

        }

    });

},{
    threshold:0.15
});

document.querySelectorAll(
`
.service-card,
.why-card,
.portfolio-card,
.process-card,
.testimonial-card,
.faq-item,
.cta
`
).forEach(el => observer.observe(el));

