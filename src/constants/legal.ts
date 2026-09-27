export interface LegalSection {
  title: string;
  paragraphs?: readonly string[];
  items?: readonly string[];
  closing?: string;
  contact?: boolean;
}

const placeholderParagraph =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

const purposes = [
  "To operate, manage, and maintain your account",
  "To provide investment and platform services",
  "To fulfill legal, regulatory, and compliance requirements, including AML, KYC, sanctions screening, and fraud prevention",
  "To maintain security and safeguard our systems",
  "To process payments, verify transactions, and detect unauthorized activity",
  "For internal administration, auditing, and operational activities",
  "To notify you about changes to our services or policies",
  "To improve the functionality, performance, and security of our website and apps",
  "To perform analytics, market research, and user behavior studies (using anonymized data where possible)",
  "To provide information about products or services that may be relevant to you, unless you opt out of marketing communications",
] as const;

// The supplied references use sample copy, including privacy copy on the terms screen.
// Keep it here so approved legal text can replace it without changing the page UI.
export const privacySections: readonly LegalSection[] = [
  { title: "Introduction", paragraphs: [placeholderParagraph] },
  { title: "Why We Have A Privacy Policy", paragraphs: [placeholderParagraph, placeholderParagraph] },
  {
    title: "How We Use Your Personal Data",
    paragraphs: ["We retain and process personal data for the following purposes:"],
    items: purposes,
    closing:
      "Except where you opt out, we may send updates, insights, and service-related communications via email or other digital channels.",
  },
  { title: "Contact", paragraphs: ["Questions or concerns about this Privacy Policy should be directed to:"], contact: true },
];

export const termsSections: readonly LegalSection[] = privacySections;
