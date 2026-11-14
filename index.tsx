import { createFileRoute } from "@tanstack/react-router";
import { useRef } from "react";

import { Hero, TopBar } from "@/components/landing/Hero";
import { OfferSection } from "@/components/landing/OfferSection";
import {
  Faq,
  FinalCta,
  Features,
  Footer,
  Mentor,
  Steps,
  StickyBuyBar,
  Testimonials,
  TrustStrip,
} from "@/components/landing/Sections";
import { useReveal } from "@/hooks/use-reveal";
import { EBOOK_PRICE, trackEvent } from "@/lib/offer";

const title = "AI से कमाई का मास्टर प्लान | Kamal Dubey";
const description =
  "AI से कमाई का मास्टर प्लान - घर बैठे पैसे कमाने का फॉर्मूला | अपनी स्किल्स + AI = आर्थिक आज़ादी";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: "AI से कमाई का मास्टर प्लान" },
      {
        property: "og:description",
        content: "घर बैठे पैसे कमाने का फॉर्मूला | अपनी स्किल्स + AI = आर्थिक आज़ादी",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const offerRef = useRef<HTMLElement>(null);
  useReveal();

  const scrollToOffer = () => {
    trackEvent("AddToCart", { value: EBOOK_PRICE, currency: "INR" });
    offerRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <TopBar onBuy={scrollToOffer} />
      <main>
        <Hero onSeeCombo={scrollToOffer} />
        <TrustStrip />
        <div className="space-y-24 py-24 sm:space-y-32 sm:py-32">
          <Features />
          <Steps />
          <OfferSection ref={offerRef} />
          <Testimonials />
          <Mentor />
          <FinalCta />
          <Faq />
        </div>
      </main>
      <Footer />
      <StickyBuyBar />
    </div>
  );
}
