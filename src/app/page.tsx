"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FeatureCardTwentyEight from '@/components/sections/feature/FeatureCardTwentyEight';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import MetricCardEleven from '@/components/sections/metrics/MetricCardEleven';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialCardFive from '@/components/sections/testimonial/TestimonialCardFive';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-bubble"
        defaultTextAnimation="reveal-blur"
        borderRadius="rounded"
        contentWidth="compact"
        sizing="medium"
        background="grid"
        cardStyle="gradient-mesh"
        primaryButtonStyle="primary-glow"
        secondaryButtonStyle="glass"
        headingFontWeight="medium"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleFullscreen
      navItems={[
        {
          name: "Home",
          id: "home",
        },
        {
          name: "Products",
          id: "products",
        },
        {
          name: "Categories",
          id: "categories",
        },
        {
          name: "FAQ",
          id: "faq",
        },
      ]}
      brandName="Urban Essentials"
    />
  </div>

  <div id="home" data-section="home">
      <HeroBillboard
      background={{
        variant: "sparkles-gradient",
      }}
      title="Curated Essentials for Modern Living"
      description="Discover top-rated products handpicked for your lifestyle. High-quality finds, honest reviews, and the best deals in one place."
      buttons={[
        {
          text: "Shop Categories",
          href: "#categories",
        },
        {
          text: "View Deals",
          href: "#products",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/man-portrait-with-blue-lights-visual-effects_23-2149419466.jpg?_wi=1"
      imageAlt="Modern home office setup"
      mediaAnimation="slide-up"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/portrait-young-beautiful-smiling-hipster-girl-trendy-summer-clothes-sexy-carefree-woman-posing-near-blue-wall-positive-model-having-fun_158538-6594.jpg",
          alt: "Hipster girl",
        },
        {
          src: "http://img.b2bpic.net/free-photo/portrait-beautiful-young-brunette-woman-with-wavy-hair-looking-camera-isolated-dark-background_639032-149.jpg",
          alt: "Brunette woman",
        },
        {
          src: "http://img.b2bpic.net/free-photo/portrait-young-blonde-woman_273609-10453.jpg",
          alt: "Blonde woman",
        },
        {
          src: "http://img.b2bpic.net/free-photo/portrait-young-red-haired-woman_273609-12232.jpg",
          alt: "Red-haired woman",
        },
        {
          src: "http://img.b2bpic.net/free-photo/happy-young-woman-with-short-hair-blue-turtleneck-wearing-beret-looking-front-smiling-cheerfully-standing-white-wall_141793-62085.jpg",
          alt: "Happy woman",
        },
      ]}
      avatarText="Trusted by 5,000+ modern homemakers"
      marqueeItems={[
        {
          type: "text",
          text: "Curated Daily",
        },
        {
          type: "image",
          src: "http://img.b2bpic.net/free-photo/front-view-boy-posing-studio_23-2149596296.jpg",
          alt: "Studio boy",
        },
        {
          type: "text",
          text: "Tech Essentials",
        },
        {
          type: "image",
          src: "http://img.b2bpic.net/free-photo/high-angle-hard-drive-still-life_23-2149417036.jpg",
          alt: "Hard drive",
        },
        {
          type: "text",
          text: "Home Comfort",
        },
      ]}
    />
  </div>

  <div id="categories" data-section="categories">
      <FeatureCardTwentyEight
      textboxLayout="split"
      useInvertedBackground={true}
      features={[
        {
          id: "c1",
          title: "Apartment Living",
          subtitle: "Space-saving tech",
          category: "Home",
          value: "Essential",
        },
        {
          id: "c2",
          title: "Morning Routine",
          subtitle: "Productivity gear",
          category: "Lifestyle",
          value: "Popular",
        },
        {
          id: "c3",
          title: "Daily Commute",
          subtitle: "On-the-go tech",
          category: "Tech",
          value: "Must-Have",
        },
      ]}
      title="Shop by Essential Lifestyle"
      description="Navigate our curated collections designed to elevate your everyday routines."
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="split-actions"
      gridVariant="four-items-2x2-equal-grid"
      useInvertedBackground={false}
      products={[
        {
          id: "p1",
          name: "Noise Cancelling Headphones",
          price: "$199",
          imageSrc: "http://img.b2bpic.net/free-photo/modern-round-wireless-speaker-with-slick-design-floating-concrete-background_23-2150808025.jpg?_wi=1",
        },
        {
          id: "p2",
          name: "Smart Coffee Maker",
          price: "$89",
          imageSrc: "http://img.b2bpic.net/free-photo/cute-rounded-3d-object_23-2151881049.jpg?_wi=1",
        },
        {
          id: "p3",
          name: "Ergonomic Desk Chair",
          price: "$299",
          imageSrc: "http://img.b2bpic.net/free-photo/still-life-office-chair-indoors_23-2151108726.jpg?_wi=1",
        },
        {
          id: "p4",
          name: "Portable Power Bank",
          price: "$49",
          imageSrc: "http://img.b2bpic.net/free-photo/powerful-external-battery-with-usb-wire_93675-129232.jpg?_wi=1",
        },
        {
          id: "p5",
          name: "Minimalist Wallet",
          price: "$35",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-girl-laying-floor_23-2149645174.jpg",
        },
        {
          id: "p6",
          name: "Desktop LED Lamp",
          price: "$55",
          imageSrc: "http://img.b2bpic.net/free-photo/modern-photorealistic-lamp-design_23-2151039007.jpg",
        },
      ]}
      title="Top Trending Essentials"
      description="Our most popular picks updated weekly for your needs."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardEleven
      textboxLayout="split"
      useInvertedBackground={true}
      metrics={[
        {
          id: "m1",
          value: "500+",
          title: "Products Reviewed",
          description: "Curated with expertise.",
          imageSrc: "http://img.b2bpic.net/free-photo/abstract-orange-background-layout-design-studio-room-web-template-business-report-with-smooth-circle-gradient-color_1258-63961.jpg",
        },
        {
          id: "m2",
          value: "98%",
          title: "User Satisfaction",
          description: "High-quality standards.",
          imageSrc: "http://img.b2bpic.net/free-photo/review-evaluation-satisfaction-customer-service-feedback-sign-icon_53876-122935.jpg",
        },
        {
          id: "m3",
          value: "24/7",
          title: "Support Access",
          description: "Helping you choose.",
          imageSrc: "http://img.b2bpic.net/free-photo/call-mum-inscription-with-white-flowers-laptop_23-2148096658.jpg",
        },
      ]}
      title="Why Urban Essentials?"
      description="We rigorously test and review every product to ensure you get only the best recommendations."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFive
      textboxLayout="split"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "t1",
          name: "Sarah J.",
          date: "Oct 2024",
          title: "Verified Buyer",
          quote: "The best headphones I ever bought!",
          tag: "Electronics",
          avatarSrc: "http://img.b2bpic.net/free-photo/portrait-attractive-happy-young-woman-with-messy-braid-beautiful-charming-smile_273609-9329.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/man-portrait-with-blue-lights-visual-effects_23-2149419466.jpg?_wi=2",
          imageAlt: "young woman portrait",
        },
        {
          id: "t2",
          name: "Mark D.",
          date: "Sept 2024",
          title: "Verified Buyer",
          quote: "Super fast shipping via Amazon link.",
          tag: "Home",
          avatarSrc: "http://img.b2bpic.net/free-photo/surprised-redhead-girl-with-short-haircut-posing-against-white-wall_176420-30165.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/modern-round-wireless-speaker-with-slick-design-floating-concrete-background_23-2150808025.jpg?_wi=2",
          imageAlt: "young woman portrait",
        },
        {
          id: "t3",
          name: "Emma L.",
          date: "Sept 2024",
          title: "Verified Buyer",
          quote: "My morning routine is so much better.",
          tag: "Lifestyle",
          avatarSrc: "http://img.b2bpic.net/free-photo/close-up-portrait-confident-successful-businesswoman-suit-cross-arms-chest-standing_1258-118021.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/cute-rounded-3d-object_23-2151881049.jpg?_wi=2",
          imageAlt: "young woman portrait",
        },
        {
          id: "t4",
          name: "Jason K.",
          date: "Aug 2024",
          title: "Verified Buyer",
          quote: "Truly curated collections.",
          tag: "Tech",
          avatarSrc: "http://img.b2bpic.net/free-photo/serious-young-business-man-looking-camera_1262-18625.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/still-life-office-chair-indoors_23-2151108726.jpg?_wi=2",
          imageAlt: "young woman portrait",
        },
        {
          id: "t5",
          name: "Lucy H.",
          date: "Aug 2024",
          title: "Verified Buyer",
          quote: "High quality items, highly recommended.",
          tag: "Beauty",
          avatarSrc: "http://img.b2bpic.net/free-photo/businesswoman-glasses-portrait_1262-1461.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/powerful-external-battery-with-usb-wire_93675-129232.jpg?_wi=2",
          imageAlt: "young woman portrait",
        },
      ]}
      title="Trusted by Thousands"
      description="Hear what our community says about their latest finds."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitText
      useInvertedBackground={true}
      faqs={[
        {
          id: "f1",
          title: "How does the affiliate link work?",
          content: "We earn a small commission when you click and buy through our links.",
        },
        {
          id: "f2",
          title: "Is the shipping fast?",
          content: "Shipping is managed by Amazon and other retailers for speed.",
        },
        {
          id: "f3",
          title: "Can I return products?",
          content: "Yes, returns are handled directly by the retail partner.",
        },
      ]}
      sideTitle="Questions?"
      sideDescription="Check our FAQ for shipping, affiliate links, and refund info."
      faqsAnimation="blur-reveal"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      useInvertedBackground={false}
      background={{
        variant: "plain",
      }}
      tag="Stay Updated"
      title="Get Our Best Deals"
      description="Sign up for our newsletter and never miss an essential gadget deal again."
      imageSrc="http://img.b2bpic.net/free-photo/3d-render-particle-design-with-motion-blur-effect_1048-12685.jpg"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoEmphasis
      columns={[
        {
          items: [
            {
              label: "About Us",
              href: "#",
            },
            {
              label: "Shop",
              href: "#products",
            },
          ],
        },
        {
          items: [
            {
              label: "Privacy Policy",
              href: "#",
            },
            {
              label: "Affiliate Disclaimer",
              href: "#",
            },
          ],
        },
        {
          items: [
            {
              label: "Twitter",
              href: "#",
            },
            {
              label: "Instagram",
              href: "#",
            },
          ],
        },
      ]}
      logoText="Urban Essentials"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
