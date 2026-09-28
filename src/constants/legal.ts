export interface LegalSection {
  title: string;
  paragraphs?: readonly string[];
  items?: readonly string[];
  closing?: string;
  contact?: boolean;
}

export const privacySections: readonly LegalSection[] = [
  {
    title: "About This Policy",
    paragraphs: [
      "This Privacy Policy explains how information relating to visitors may be handled when they use the African Sacred Science website. It applies to this website, including its pages about African Sacred Science and the Doctrine of Divine Alignment. Websites linked from this site have their own privacy practices.",
    ],
  },
  {
    title: "Information Involved in Visiting the Website",
    paragraphs: [
      "As with most websites, the hosting service may receive technical information needed to deliver pages and keep the site secure. This may include an IP address, browser and device information, the page requested, and the time of the request. The website itself does not currently offer user accounts or payment processing.",
      "The community form displays name and email fields, but its current Join the Community button does not submit those entries to African Sacred Science. Please do not enter sensitive personal information into the form.",
    ],
  },
  {
    title: "How Information Is Used",
    paragraphs: [
      "Technical information may be used to deliver the website, maintain its availability, diagnose errors, and protect it from misuse. We do not use the name and email fields in the community form to create a mailing-list subscription in the website's current implementation.",
    ],
  },
  {
    title: "Cookies and External Websites",
    paragraphs: [
      "This website does not currently include a first-party analytics or advertising integration. The hosting service may use technical logs or essential technologies to operate the site. Any additional tools introduced later should be described in an updated policy before they are used.",
      "Links to ORIINU, The Enlightenment Academy, and other external sites take you to services outside this website. Their operators may collect information under their own privacy policies. Please review those policies before sharing information with them.",
    ],
  },
  {
    title: "Sharing, Retention, and Security",
    paragraphs: [
      "A hosting provider may process technical information on our behalf to deliver and protect the website. The retention of technical logs depends on the production hosting service and any applicable legal obligations.",
      "No method of transmitting or storing information online can promise absolute security.",
    ],
  },
  {
    title: "Your Choices and Rights",
    paragraphs: [
      "You can choose whether to follow links to external services. Depending on where you live, you may have rights to request access to, correction of, or deletion of personal information, or to object to certain uses. The available rights and how to exercise them depend on the law that applies to you and the information involved.",
    ],
  },
  {
    title: "Changes to This Policy",
    paragraphs: [
      "We may update this policy when the website's features, providers, or information practices change. The current version will be made available on this page.",
    ],
  },
  {
    title: "Website",
    paragraphs: ["The African Sacred Science website is available at:"],
    contact: true,
  },
];

export const termsSections: readonly LegalSection[] = [
  {
    title: "About These Terms",
    paragraphs: [
      "These Terms and Conditions apply to your use of the African Sacred Science website. The site introduces African Sacred Science, the Doctrine of Divine Alignment, its founders, and related learning and research initiatives. By using the website, you agree to use it lawfully and in accordance with these terms.",
    ],
  },
  {
    title: "Informational Content",
    paragraphs: [
      "The material on this website is provided for general educational and informational purposes. It is an introduction to ideas and initiatives, not a substitute for professional medical, mental health, legal, financial, or other individual advice. You should seek qualified advice when making decisions that require it.",
      "Descriptions of ORIINU, courses, publications, and other initiatives do not mean that those offerings are provided through this website. Availability and terms for an external offering are determined by its own provider.",
    ],
  },
  {
    title: "Acceptable Use",
    paragraphs: ["When using this website, you agree not to:"],
    items: [
      "Use the site for unlawful, fraudulent, or harmful purposes.",
      "Interfere with the site's operation, security, or access by other visitors.",
      "Attempt to access systems or information you are not authorized to access.",
      "Copy, republish, or present site materials as your own without permission, except where applicable law allows it.",
    ],
  },
  {
    title: "Content and Intellectual Property",
    paragraphs: [
      "The site's text, images, design, names, and logos may be protected by copyright, trademark, and other intellectual-property laws. You may read and share links to public pages for personal, non-commercial use. Other use of site materials requires permission from the relevant rights holder unless applicable law permits it.",
    ],
  },
  {
    title: "External Links",
    paragraphs: [
      "The website links to independent services, including ORIINU and The Enlightenment Academy. A link is provided for convenience and context. Once you leave this website, the other site's terms, privacy policy, content, and availability are its operator's responsibility.",
    ],
  },
  {
    title: "Availability and Accuracy",
    paragraphs: [
      "We aim to keep the information on this website useful and current, but content may change and the site may occasionally be unavailable. To the extent permitted by applicable law, the website is provided without a guarantee that every page will always be available, complete, or error-free. Nothing in these terms limits rights that cannot lawfully be limited.",
    ],
  },
  {
    title: "Changes to These Terms",
    paragraphs: [
      "These terms may be updated as the website develops. The current version will be made available on this page. Continued use of the site after an update is subject to the updated terms where permitted by applicable law.",
    ],
  },
  {
    title: "Website",
    paragraphs: ["The African Sacred Science website is available at:"],
    contact: true,
  },
];
