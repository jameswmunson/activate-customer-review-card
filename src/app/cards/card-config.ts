import clientLogo from "./client-logo.svg";

// Change these settings for each customer. Use property INTERNAL names.
// Property labels, owners, stages, currency and dates are rendered by HubSpot.
export const cardConfig = {
  clientName: "Client name",
  clientLogo,
  clientLogoWidth: 133,
  title: "Deal overview",
  description: "Key information for this deal.",
  showAssociatedCompany: true,
  sections: [
    { title: "Deal details", properties: ["dealname", "amount", "closedate"] },
    {
      title: "Ownership and progress",
      properties: ["hubspot_owner_id", "pipeline", "dealstage"],
    },
  ],
  // Turn this on and replace the text when adding a custom section.
  showAdditionalSection: false,
  additionalSectionTitle: "Additional information",
  additionalSectionText: "Add customer-specific content here.",
};
