const pricing = {

    freelancers: [
        {
            title: "Freelance Service Agreement",
            description: "Custom drafted agreement for client projects.",
            basePrice: 799
        },
        {
            title: "Non-Disclosure Agreement (NDA)",
            description: "Protect confidential information.",
            basePrice: 599
        },
        {
            title: "Legal Notice",
            description: "For non-payment or breach of contract.",
            basePrice: 999
        },
        {
            title: "Invoice & Payment Terms",
            description: "Professional payment policy template.",
            basePrice: 499
        },
          {
            title: "Client Onboarding Contract",
            description: " Official legal bridge between a closed sale and active service delivery",
            basePrice: 699
        }
    ],

    creators: [
        {
            title: "Brand Collaboration Agreement",
            description: "For sponsorships and influencer deals.",
            basePrice: 999
        },
        {
            title: "IP Assignment & Licensing",
            description: "Protect your content and intellectual property.",
            basePrice: 1999
        },
        {
            title: "Content Licensing Agreement",
            description: "Sell templates, presets and digital products safely.",
            basePrice: 899
        },
        {
            title: "Copyright / Defamation Notice",
            description: "For stolen content and online defamation.",
            basePrice: 699
        }, {
            title: "Sponsorship Contract",
            description: " Official legal bridge between a closed sale and active service delivery",
            basePrice: 1199
        }, {
            title: "Cease & Desist",
            description: "  A formal demand requiring a party to immediately stop an unlawful or infringing activity.",
            basePrice: 1099
        }
    ],

    startups: [
        {
            title: "Founders Agreement",
            description: "Clearly define ownership and responsibilities.",
            basePrice: 2999
        },
        {
            title: "Non-Disclosure Agreement",
            description: "Protect confidential business information.",
            basePrice: 999
        },
        {
            title: "Employment Agreement",
            description: "Professional employment contracts.",
            basePrice: 1799
        },
        {
            title: "Terms & Conditions",
            description: "Website and product legal protection.",
            basePrice: 1499
        },
        {
            title: "MOU (Memorandum of Understanding)",
            description: "A formal, non-legally binding document used by two or more parties to outline a mutual understanding, shared goals, and intended courses of action.",
            basePrice: 1599
        },
        {
            title: "Startup Founding Kit (Bundle)",
            description: "All necessary documents for a startup.",
            basePrice: 5999
        }
    ]

};

let category = "freelancers";
let speed = "standard";

const multiplier = {
    standard: 1,
    urgent: 1.25,
    express: 1.5
};

function renderCards() {

    const cards = pricing[category];

    const container = document.getElementById("priceCards");

    container.innerHTML = "";

    cards.forEach(card => {

        const price = Math.round(card.basePrice * multiplier[speed]);

        container.innerHTML += `
            <div class="price-card">

                <h3>${card.title}</h3>

                <p>${card.description}</p>

                <div class="price-bottom">

                    <span class="price">₹${price}</span>

                    <span class="revision">
                        1 Revision Included
                    </span>

                </div>

            </div>
        `;

    });

}

renderCards();

/* ---------- Category Buttons ---------- */

document.querySelectorAll("[data-category]").forEach(button => {

    button.addEventListener("click", () => {

        document
            .querySelectorAll("[data-category]")
            .forEach(btn => btn.classList.remove("active"));

        button.classList.add("active");

        category = button.dataset.category;

        renderCards();

    });

});

/* ---------- Speed Buttons ---------- */

document.querySelectorAll("[data-speed]").forEach(button => {

    button.addEventListener("click", () => {

        document
            .querySelectorAll("[data-speed]")
            .forEach(btn => btn.classList.remove("active"));

        button.classList.add("active");

        speed = button.dataset.speed;

        renderCards();

    });

});