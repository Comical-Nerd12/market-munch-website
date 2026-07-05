const documents = [
  {
    icon: "ti ti-file-text",
    title: "Freelance Service Agreement",
    description:
      "Defines the scope of work, deliverables, timelines, and payment terms to avoid misunderstandings.",
  },
  {
    icon: "ti ti-currency-rupee",
    title: "Payment Recovery Notice",
    description:
      "A professionally drafted legal notice to recover overdue payments from clients.",
  },
  {
    icon: "ti ti-lock",
    title: "Non-Disclosure Agreement (NDA)",
    description:
      "Protects confidential information shared between you and your clients.",
  },
  {
    icon: "ti ti-copyright",
    title: "Copyright Assignment",
    description:
      "Clearly specifies who owns the intellectual property after the project is completed.",
  },
  {
    icon: "ti ti-license",
    title: "Terms of Service",
    description:
      "Establishes your working policies, revisions, cancellations, and client responsibilities.",
  },
  {
    icon: "ti ti-scale",
    title: "Legal Notice",
    description:
      "A formal notice for contract breaches, unpaid invoices, or other legal disputes.",
  },
];

const freelancerPage = `
<div class="freelancer-page">

    <section class="hero">

        <h1 class="hero-title">
            Legal Documents Every Freelancer Needs
        </h1>

        <p class="hero-description">
            Whether you're a developer, designer, writer, marketer, or consultant,
            protect your work, payments, and client relationships with professionally
            drafted legal documents.
        </p>

        <div class="hero-buttons">

            <button
                class="btn-primary"
                onclick="location.href='/prices'">
                Browse Prices
            </button>

            <a
                class="btn-secondary"
                href="https://wa.me/919996796697?text=Hi!%20I%20need%20help%20with%20freelancer%20legal%20documents."
                target="_blank">
                Talk to us
            </a>

        </div>

    </section>

    <section class="documents">

        <h2 class="section-title">
            Essential Documents
        </h2>

        <div class="cards">

            ${documents.map(doc => `
                <div class="card">

                    <i
                        class="${doc.icon}"
                        style="font-size:28px;color:#b69a72;">
                    </i>

                    <h3>${doc.title}</h3>

                    <p>${doc.description}</p>

                </div>
            `).join("")}

        </div>

    </section>

    <section class="benefits">

        <h2 class="section-title">
            Why These Documents Matter
        </h2>

        <div class="benefit-grid">

            <div>✔ Ensure timely payments</div>

            <div>✔ Avoid scope creep</div>

            <div>✔ Protect your intellectual property</div>

            <div>✔ Build trust with clients</div>

            <div>✔ Reduce legal disputes</div>

            <div>✔ Work confidently with every client</div>

        </div>

    </section>

    <section class="cta">

        <h2>
            Spend less time worrying about contracts.<br>
            Spend more time doing great work.
        </h2>

        <div class="hero-buttons">

            <button
                class="btn-primary"
                onclick="location.href='/prices'">
                View Pricing
            </button>

            <a
                class="btn-secondary"
                href="https://wa.me/919996796697?text=Hi!%20I%20need%20help%20with%20freelancer%20legal%20documents."
                target="_blank">
                WhatsApp Us
            </a>

        </div>

    </section>

</div>
`;

document.getElementById("app").innerHTML = freelancerPage;