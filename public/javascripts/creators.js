const documents = [
  {
    icon: "ti ti-brand-youtube",
    title: "Brand Collaboration Agreement",
    description:
      "Protects both creators and brands by clearly defining deliverables, timelines and payment terms.",
  },
  {
    icon: "ti ti-copyright",
    title: "Copyright Assignment",
    description:
      "Defines who owns the content after it is created and prevents future ownership disputes.",
  },
  {
    icon: "ti ti-license",
    title: "Content Licensing Agreement",
    description:
      "Allows others to legally use your content while you retain ownership rights.",
  },
  {
    icon: "ti ti-lock",
    title: "Non-Disclosure Agreement",
    description:
      "Protects confidential campaign information before working with agencies or brands.",
  },
  {
    icon: "ti ti-file-text",
    title: "Influencer Agreement",
    description:
      "Covers campaign scope, revisions, posting schedule, payment and termination terms.",
  },
  {
    icon: "ti ti-alert-circle",
    title: "Copyright Strike / Takedown Notice",
    description:
      "Helps remove unauthorized use of your content from online platforms.",
  },
];

const creatorPage = `
<div class="creator-page">

    <section class="hero">

        <h1 class="hero-title">
            Legal Documents Every Creator Needs
        </h1>

        <p class="hero-description">
            Whether you're a YouTuber, influencer, streamer, designer or photographer,
            protect your work, collaborations and income with professionally drafted legal documents.
        </p>

        <div class="hero-buttons">

            <button
                class="btn-primary"
                onclick="location.href='/prices'">
                Browse Prices
            </button>

            <a
                class="btn-secondary"
                href="https://wa.me/919996796697?text=Hi!%20I%20need%20help%20with%20creator%20legal%20documents."
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

                    <i class="${doc.icon}" style="color:#d8b870;font-size:28px;"></i>

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

            <div>✔ Protect your original content</div>

            <div>✔ Get paid on time</div>

            <div>✔ Avoid brand disputes</div>

            <div>✔ Secure copyright ownership</div>

            <div>✔ Handle sponsorships professionally</div>

            <div>✔ Build long-term credibility</div>

        </div>

    </section>

    <section class="cta">

        <h2>
            Focus on creating.<br>
            We'll handle the legal side.
        </h2>

        <div class="hero-buttons">

            <button
                class="btn-primary"
                onclick="location.href='/prices'">
                View Pricing
            </button>

            <a
                class="btn-secondary"
                href="https://wa.me/919996796697?text=Hi!%20I%20need%20help%20with%20creator%20legal%20documents."
                target="_blank">
                WhatsApp Us
            </a>

        </div>

    </section>

</div>
`;

document.getElementById("app").innerHTML = creatorPage;