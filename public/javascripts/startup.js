const documents = [
  {
    icon: "ti ti-users",
    title: "Founders' Agreement",
    description:
      "Clearly defines ownership, equity, roles and responsibilities among founders."
  },
  {
    icon: "ti ti-lock",
    title: "Non-Disclosure Agreement",
    description:
      "Protect confidential business ideas before sharing them."
  },
  {
    icon: "ti ti-file-text",
    title: "Service Agreement",
    description:
      "Defines scope of work, payments and responsibilities with clients."
  },
  {
    icon: "ti ti-user-check",
    title: "Employment Agreement",
    description:
      "Protects your company when hiring employees."
  },
  {
    icon: "ti ti-shield-lock",
    title: "Privacy Policy",
    description:
      "Required if your website or app collects user information."
  },
  {
    icon: "ti ti-license",
    title: "Terms & Conditions",
    description:
      "Defines how users may use your website or platform."
  }
];

const startupPage = `
<div class="startup-page">

<section class="hero">

<h1 class="hero-title">
Legal Documents Every Startup Needs
</h1>

<p class="hero-description">
Start strong with legally sound documents that protect your business, founders and customers.
</p>

<div class="hero-buttons">

<button class="btn-primary" onclick="location.href='/prices'">
Browse Prices
</button>

<a
class="btn-secondary"
href="https://wa.me/919996796697"
target="_blank">
Talk to us
</a>

</div>

</section>

<section class="documents">

<h2>Essential Documents</h2>

<div class="cards">

${documents.map(doc=>`

<div class="card">

<i class="${doc.icon}"></i>

<h3>${doc.title}</h3>

<p>${doc.description}</p>

</div>

`).join("")}

</div>

</section>

<section class="benefits">

<h2>Why These Documents Matter</h2>

<div class="benefit-grid">

<div>✔ Protect founder ownership</div>

<div>✔ Prevent legal disputes</div>

<div>✔ Build investor confidence</div>

<div>✔ Stay legally compliant</div>

</div>

</section>

<section class="cta">

<h2>Ready to protect your startup?</h2>

<div class="hero-buttons">

<button class="btn-primary"
onclick="location.href='/prices'">
View Pricing
</button>

<a
class="btn-secondary"
href="https://wa.me/919996796697"
target="_blank">
WhatsApp Us
</a>

</div>

</section>

</div>
`;

document.getElementById("app").innerHTML = startupPage;