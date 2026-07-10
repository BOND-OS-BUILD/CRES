import type { Metadata } from "next";

import { LegalPage } from "@/components/layout/legal-page";
import { LegalSection } from "@/components/layout/legal-section";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${siteConfig.name} collects, uses and protects information submitted through this website.`,
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="10 July 2026">
      <LegalSection title="1. Introduction">
        <p>
          This Privacy Policy explains how {siteConfig.name}, a business
          division of {siteConfig.parentCompany} (&quot;CRES&quot;,
          &quot;we&quot;, &quot;us&quot;), collects, uses and protects
          information submitted through this website.
        </p>
      </LegalSection>

      <LegalSection title="2. Information We Collect">
        <p>
          When you submit our supplier or partnership enquiry form, we
          collect the information you choose to provide, which may include
          your company name, contact person, phone number, email address,
          city, estimated monthly UCO volume, and any message you send us. We
          do not collect this information through any other means on this
          website.
        </p>
      </LegalSection>

      <LegalSection title="3. How We Use Your Information">
        <p>We use the information you submit only to:</p>
        <ul className="ml-5 list-disc">
          <li>Respond to your enquiry and assess a potential partnership.</li>
          <li>Schedule and coordinate UCO collection logistics.</li>
          <li>
            Maintain records of our supplier and buyer network for
            operational purposes.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="4. Data Sharing">
        <p>
          We do not sell, rent, or trade your information to third parties.
          We may share necessary details with our own logistics and
          collection personnel solely to fulfil a scheduled pickup or
          partnership you have requested.
        </p>
      </LegalSection>

      <LegalSection title="5. Data Retention">
        <p>
          We retain enquiry information for as long as necessary to respond
          to your request and maintain our supplier records, or until you
          ask us to delete it.
        </p>
      </LegalSection>

      <LegalSection title="6. Cookies">
        <p>
          This website does not use tracking or advertising cookies. Only
          essential technical data required for the site to function is
          processed by our hosting provider.
        </p>
      </LegalSection>

      <LegalSection title="7. Your Rights">
        <p>
          You may request access to, correction of, or deletion of any
          information you have submitted to us by writing to{" "}
          <a href={`mailto:${siteConfig.email}`} className="text-accent-dark underline">
            {siteConfig.email}
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection title="8. Security">
        <p>
          We take reasonable technical and organizational measures to protect
          the information you share with us from unauthorized access, loss,
          or misuse.
        </p>
      </LegalSection>

      <LegalSection title="9. Changes to This Policy">
        <p>
          We may update this Privacy Policy from time to time. Any changes
          will be posted on this page with a revised &quot;last updated&quot;
          date.
        </p>
      </LegalSection>

      <LegalSection title="10. Contact Us">
        <p>
          For any privacy-related questions, contact us at{" "}
          <a href={`mailto:${siteConfig.email}`} className="text-accent-dark underline">
            {siteConfig.email}
          </a>{" "}
          or {siteConfig.phone}.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
