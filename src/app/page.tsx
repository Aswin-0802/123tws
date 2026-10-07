import { SiteShell } from "@/components/layout/SiteShell";
import { Hero } from "@/components/sections/Hero";
import { ClientMarquee } from "@/components/sections/ClientMarquee";
import { Intro } from "@/components/sections/Intro";
import { About } from "@/components/sections/About";
import { Stats } from "@/components/sections/Stats";
import { Services } from "@/components/sections/Services";
import { WhyUs } from "@/components/sections/WhyUs";
import { Industries } from "@/components/sections/Industries";
import { CallToAction } from "@/components/sections/CallToAction";
import { Contact } from "@/components/sections/Contact";
import { Testimonials } from "@/components/sections/Testimonials";
import { Faq } from "@/components/sections/Faq";
import { JsonLd } from "@/components/seo/JsonLd";

// Section order follows the live 123tws.com homepage.
export default function Home() {
  return (
    <SiteShell>
      <JsonLd />
      <Hero />
      <ClientMarquee />
      <Intro />
      <About />
      <Stats />
      <Services />
      <WhyUs />
      <Industries />
      <CallToAction />
      <Contact />
      <Testimonials />
      <Faq />
    </SiteShell>
  );
}
