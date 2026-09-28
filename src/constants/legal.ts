export interface LegalContactDetail {
  label: string;
  value: string;
  href: string;
}

export interface LegalSection {
  title: string;
  paragraphs?: readonly string[];
  items?: readonly string[];
  closing?: string;
  contactDetails?: readonly LegalContactDetail[];
}

export const privacyIntroduction = [
  "This Privacy Policy explains how information may be collected, used, disclosed, and protected when you visit africansacredscience.ai, communicate with us, subscribe to communications, or interact with features available through this website.",
] as const;

export const termsIntroduction = [
  "Welcome to africansacredscience.ai.",
  "By accessing or using the website, you agree to these Terms.",
  "If you do not agree with these Terms, please discontinue use of the website.",
] as const;

export const privacySections: readonly LegalSection[] = [
  {
    title: "Information We May Collect",
    paragraphs: [
      "Depending on how you use the website, we may collect information that you voluntarily provide, including your name, email address, telephone number, information submitted through contact or inquiry forms, newsletter or mailing-list subscriptions, and other information you choose to provide.",
      "We may also automatically receive limited technical information when you visit the website, such as your IP address, browser type, device type, operating system, pages visited, referring website, approximate geographic region, and information collected through cookies or similar technologies.",
    ],
  },
  {
    title: "How We Use Information",
    paragraphs: [
      "Information collected through this website may be used to operate and improve the website; respond to inquiries; provide requested information; communicate about African Sacred Science programs, publications, research, events, educational opportunities, or related initiatives; maintain website security; understand website usage; and comply with applicable legal obligations.",
      "We do not use personal information for purposes materially different from those described in this Policy without providing appropriate notice where required.",
    ],
  },
  {
    title: "Cookies and Analytics",
    paragraphs: [
      "The website at africansacredscience.ai may use cookies and similar technologies to enable website functionality, understand visitor activity, improve website performance, and maintain security.",
      "Some third-party website, analytics, hosting, security, or embedded-content providers may also use cookies or similar technologies according to their own privacy practices.",
      "Visitors may be able to control certain cookies through their browser settings or any cookie-management tools provided on the website.",
    ],
  },
  {
    title: "Sharing of Information",
    paragraphs: [
      "We may disclose information to trusted service providers that help us operate the website or provide related services, including website hosting, analytics, communications, security, and technical support.",
      "We may also disclose information where reasonably necessary to comply with applicable law, respond to lawful requests, protect our rights or property, investigate fraud or security concerns, or protect the safety and integrity of our services.",
      "African Sacred Science does not sell personal information for monetary consideration.",
      "If our data practices change in the future, this Privacy Policy will be updated as required.",
    ],
  },
  {
    title: "The African Sacred Science Ecosystem",
    paragraphs: [
      "The africansacredscience.ai website serves as the principal digital gateway to the African Sacred Science™ knowledge ecosystem.",
      "The website may contain links to or introduce related initiatives, including:",
    ],
    items: [
      "ORIINU™ — the AI-powered personal intelligence experience",
      "African Sacred Science Research Institute™ — research, scholarship, and knowledge preservation",
      "The Enlightenment Academy™ — education, formation, and teaching",
      "Books & Publications — books, journals, educational materials, and other resources",
    ],
    closing:
      "These services or websites may maintain separate privacy policies or terms appropriate to their activities. When you leave africansacredscience.ai and use another website, platform, application, payment provider, or third-party service, additional privacy practices may apply.",
  },
  {
    title: "ORIINU™",
    paragraphs: [
      "The africansacredscience.ai website may provide links directing visitors to ORIINU™, including app.oriinu.ai.",
      "ORIINU is a separate interactive digital experience and may collect additional information necessary to provide user accounts, subscriptions, AI-powered interactions, personalization, and related functionality.",
      "Use of ORIINU is therefore subject to the Privacy Policy and Terms applicable to that service.",
    ],
  },
  {
    title: "Data Security",
    paragraphs: [
      "We use reasonable administrative, technical, and organizational measures intended to protect personal information.",
      "However, no internet transmission, electronic storage system, or digital platform can be guaranteed to be completely secure.",
    ],
  },
  {
    title: "Data Retention",
    paragraphs: [
      "We retain personal information only for as long as reasonably necessary for the purposes for which it was collected, to provide requested services, maintain legitimate business records, resolve disputes, protect our rights, and comply with applicable legal obligations.",
    ],
  },
  {
    title: "Your Privacy Choices and Rights",
    paragraphs: [
      "Depending upon where you live and applicable law, you may have rights concerning your personal information, which may include rights to request access to, correction of, or deletion of certain personal information, or to obtain information about how it is used or disclosed.",
      "Where applicable, requests may be submitted using our contact us information.",
      "We will not unlawfully discriminate against individuals for exercising applicable privacy rights.",
    ],
  },
  {
    title: "Children's Privacy",
    paragraphs: [
      "The africansacredscience.ai website is intended for a general adult audience and is not directed to children under 13.",
      "We do not knowingly seek to collect personal information from children under 13 through this website. If we learn that such information has been collected in circumstances governed by applicable children's privacy laws, we will take appropriate steps to address it.",
    ],
  },
  {
    title: "Third-Party Links",
    paragraphs: [
      "The website may contain links to third-party websites, platforms, social-media services, or other resources.",
      "African Sacred Science is not responsible for the privacy practices, content, security, or operation of independently operated third-party services. Visitors should review the applicable privacy policies before providing personal information to them.",
    ],
  },
  {
    title: "Changes to This Privacy Policy",
    paragraphs: [
      "We may update this Privacy Policy periodically to reflect changes in our services, technology, business practices, or applicable law.",
      "The revised policy will be posted on this page with an updated revision date.",
    ],
  },
  {
    title: "Contact Us",
    paragraphs: [
      "Questions or requests concerning this Privacy Policy or personal information may be directed to:",
      "African Sacred Science™",
    ],
    contactDetails: [
      { label: "Email", value: "Support@Africansacredscience.ai", href: "mailto:Support@Africansacredscience.ai" },
      { label: "Website", value: "africansacredscience.ai", href: "https://africansacredscience.ai" },
    ],
  },
];

export const termsSections: readonly LegalSection[] = [
  {
    title: "About African Sacred Science",
    paragraphs: [
      "African Sacred Science™ is a contemporary knowledge framework devoted to recovering, researching, preserving, interpreting, teaching, and responsibly applying knowledge drawn from Africa's diverse philosophical, spiritual, ethical, cultural, and indigenous intellectual traditions.",
      "The africansacredscience.ai website serves as a digital gateway to this work and its related knowledge ecosystem.",
    ],
  },
  {
    title: "Educational and Informational Purpose",
    paragraphs: [
      "Content available through the africansacredscience.ai website is provided primarily for educational, informational, cultural, philosophical, and spiritual purposes.",
      "Nothing on this website should be interpreted as individualized medical, psychological, legal, financial, investment, or other regulated professional advice.",
      "Users should seek appropriately qualified professional advice when circumstances require it.",
    ],
  },
  {
    title: "Respect for Africa's Diverse Traditions",
    paragraphs: [
      "African Sacred Science recognizes that Africa encompasses many peoples, languages, civilizations, philosophical systems, spiritual traditions, and knowledge traditions.",
      "Material presented through this website may include documented knowledge, living traditions, scholarly interpretations, historical sources, contemporary interpretations, and areas of continuing scholarly or cultural debate.",
      "African Sacred Science does not claim that a single interpretation represents every African tradition, community, scholar, or practitioner.",
    ],
  },
  {
    title: "Intellectual Property",
    paragraphs: [
      "Unless otherwise indicated, the website's original text, branding, graphics, frameworks, educational materials, publications, designs, and other original content are owned by or licensed to African Sacred Science and are protected by applicable intellectual-property laws.",
      "The names and marks African Sacred Science™, ORIINU™, The Doctrine of Divine Alignment™, The Enlightenment Academy™, and associated names, logos, phrases, frameworks, and branding may constitute trademarks or other proprietary intellectual property.",
      "Nothing on this website grants permission to use these marks without prior authorization.",
    ],
  },
  {
    title: "Permitted Use",
    paragraphs: [
      "Visitors may access website content for lawful personal, educational, and informational purposes.",
      "Unless expressly authorized in writing, users may not reproduce substantial portions of proprietary materials; republish or commercially distribute website content; remove copyright, trademark, or attribution notices; falsely represent African Sacred Science content as their own; use African Sacred Science branding in a manner suggesting unauthorized affiliation or endorsement; or exploit proprietary materials for unauthorized commercial purposes.",
    ],
  },
  {
    title: "Scholarly and Third-Party Materials",
    paragraphs: [
      "Certain content may discuss, quote, cite, interpret, or reference historical works, scholarship, cultural traditions, languages, oral traditions, or third-party materials.",
      "Ownership of third-party intellectual property remains with its respective owners.",
      "References to scholars, traditions, institutions, communities, or historical materials do not necessarily imply their endorsement of African Sacred Science.",
    ],
  },
  {
    title: "ORIINU and Related Services",
    paragraphs: [
      "The africansacredscience.ai website may provide access or links to ORIINU™, The Enlightenment Academy™, African Sacred Science Research Institute™, publications, educational programs, and other related services.",
      "Some services may be governed by additional or separate terms, including terms concerning accounts, subscriptions, payments, cancellations, artificial intelligence, user-generated information, educational programs, and digital services.",
      "Where separate terms apply, users must agree to those terms when accessing the relevant service.",
    ],
  },
  {
    title: "Artificial Intelligence",
    paragraphs: [
      "The africansacredscience.ai website may introduce or link to AI-powered services such as ORIINU™.",
      "AI-generated responses may contain errors, incomplete information, differing interpretations, or information that requires independent verification.",
      "Users remain responsible for decisions made based upon information obtained through AI-powered services and should seek appropriate professional advice for consequential decisions.",
      "Detailed terms governing ORIINU should be provided within the ORIINU application itself.",
    ],
  },
  {
    title: "External Websites",
    paragraphs: [
      "Links to external websites or services may be provided for convenience or informational purposes.",
      "African Sacred Science does not necessarily control, endorse, guarantee, or assume responsibility for independently operated third-party websites, products, services, information, or privacy practices.",
    ],
  },
  {
    title: "No Guarantee of Results",
    paragraphs: [
      "African Sacred Science provides educational frameworks, teachings, resources, and opportunities for reflection and learning.",
      "Individual experiences and outcomes vary.",
      "We do not guarantee particular spiritual, educational, personal, professional, financial, business, relationship, health, or other outcomes from using the website or related educational materials.",
    ],
  },
  {
    title: "Website Availability",
    paragraphs: [
      "We may modify, suspend, discontinue, or update portions of the website at any time.",
      "We do not guarantee that the website will always operate uninterrupted, securely, or without technical errors.",
    ],
  },
  {
    title: "Disclaimer of Warranties",
    paragraphs: [
      "To the extent permitted by applicable law, the website and its content are provided on an “as is” and “as available” basis without warranties of any kind, whether express or implied.",
      "Nothing in these Terms excludes rights or warranties that cannot lawfully be excluded.",
    ],
  },
  {
    title: "Limitation of Liability",
    paragraphs: [
      "To the fullest extent permitted by applicable law, African Sacred Science and its affiliated entities, officers, directors, founders, employees, contractors, and representatives will not be liable for indirect, incidental, special, consequential, or punitive damages arising from use of, or inability to use, this website.",
      "Nothing in these Terms limits liability where such limitation is prohibited by law.",
    ],
  },
  {
    title: "Changes to These Terms",
    paragraphs: [
      "We may revise these Terms periodically.",
      "Updated Terms will be posted on this page with a revised effective or last-updated date. Continued use of the website after changes become effective constitutes acceptance of the revised Terms to the extent permitted by applicable law.",
    ],
  },
  {
    title: "Governing Law",
    paragraphs: [
      "These Terms shall be governed by the laws of the State of Georgia, United States, without regard to conflict-of-law principles, except where applicable law requires otherwise.",
    ],
  },
  {
    title: "Contact",
    paragraphs: [
      "Questions concerning these Terms may be directed to:",
      "African Sacred Science™",
    ],
    contactDetails: [
      { label: "Email", value: "Support@Africansacredscience.ai", href: "mailto:Support@Africansacredscience.ai" },
      { label: "Website", value: "africansacredscience.ai", href: "https://africansacredscience.ai" },
    ],
  },
];
