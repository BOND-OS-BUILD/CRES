import type { Metadata } from "next";

import { LegalPage } from "@/components/layout/legal-page";
import { LegalSection } from "@/components/layout/legal-section";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: `The terms governing use of the ${siteConfig.name} website.`,
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Use" updated="10 July 2026">
      <LegalSection title="1. Acceptance of Terms">
        <p>
          By accessing this website, you agree to these Terms of Use. If you
          do not agree, please do not use this website.
        </p>
      </LegalSection>

      <LegalSection title="2. Use of This Website">
        <p>
          This website is provided to share information about{" "}
          {siteConfig.name} and to allow prospective suppliers and partners
          to submit enquiries. You agree to use it only for lawful purposes
          and to provide accurate information in any form you submit.
        </p>
      </LegalSection>

      <LegalSection title="3. Supplier & Partnership Enquiries">
        <p>
          Submitting the enquiry form does not create a binding agreement or
          guarantee a partnership with {siteConfig.name}. All enquiries are
          reviewed by our team, who will contact you if a collection or
          supply arrangement is appropriate.
        </p>
      </LegalSection>

      <LegalSection title="4. Intellectual Property">
        <p>
          All content on this website, including text, graphics, logos and
          photography, is owned by or licensed to {siteConfig.parentCompany}{" "}
          and may not be reproduced without prior written consent.
        </p>
      </LegalSection>

      <LegalSection title="5. No Warranty">
        <p>
          This website and its content are provided &quot;as is&quot; without
          warranties of any kind, express or implied. We do not guarantee
          that the website will always be available, error-free, or
          uninterrupted.
        </p>
      </LegalSection>

      <LegalSection title="6. Limitation of Liability">
        <p>
          To the fullest extent permitted by law, {siteConfig.parentCompany}{" "}
          shall not be liable for any indirect, incidental, or consequential
          damages arising from your use of this website.
        </p>
      </LegalSection>

      <LegalSection title="7. Third-Party Links">
        <p>
          This website may reference third-party organizations or services.
          We are not responsible for the content or practices of any
          third-party websites.
        </p>
      </LegalSection>

      <LegalSection title="8. Governing Law">
        <p>
          These Terms are governed by the laws of India, and any disputes
          arising from them shall be subject to the exclusive jurisdiction
          of the courts of Jammu and Kashmir, India.
        </p>
      </LegalSection>

      <LegalSection title="9. Changes to These Terms">
        <p>
          We may revise these Terms at any time by updating this page. Your
          continued use of the website constitutes acceptance of the revised
          Terms.
        </p>
      </LegalSection>

      <LegalSection title="10. Contact Us">
        <p>
          Questions about these Terms can be sent to{" "}
          <a href={`mailto:${siteConfig.email}`} className="text-accent-dark underline">
            {siteConfig.email}
          </a>
          .
        </p>
      </LegalSection>
    </LegalPage>
  );
}
