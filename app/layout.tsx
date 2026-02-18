import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://starlinkglobal.ai"),
  title: {
    default: "StarlinkGlobal | Satellite Internet, Anywhere",
    template: "%s | StarlinkGlobal"
  },
  description: "Starlink-based connectivity for business, maritime, remote sites, and emergency backup with expert deployment support.",
  openGraph: {
    title: "StarlinkGlobal",
    description: "Starlink hardware and plans provided with expert support.",
    url: "https://starlinkglobal.ai",
    siteName: "StarlinkGlobal",
    locale: "en_US",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: "StarlinkGlobal",
        url: "https://starlinkglobal.ai",
        email: "sales@starlinkglobal.ai"
      },
      {
        "@type": "WebSite",
        name: "StarlinkGlobal",
        url: "https://starlinkglobal.ai",
        potentialAction: {
          "@type": "SearchAction",
          target: "https://starlinkglobal.ai/?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      }
    ]
  };

  return (
    <html lang="en">
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
