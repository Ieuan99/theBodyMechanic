"use client";

import Image from "next/image";
import { FadeIn } from "@/components/FadeIn";

export default function Home() {
  return (
    <div className="min-h-screen bg-pastel-cream">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-pastel-cream/90 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="block">
            <Image
              src="/theBodyMechanicLogoMain.svg"
              alt="The Body Mechanic"
              width={60}
              height={60}
              className="h-12 w-12 md:h-14 md:w-14"
            />
          </a>
          <div className="hidden md:flex gap-8">
            <a
              href="#about"
              className="text-text-secondary hover:text-text-primary transition-colors"
            >
              About
            </a>
            <a
              href="#services"
              className="text-text-secondary hover:text-text-primary transition-colors"
            >
              Services
            </a>
            <a
              href="#contact"
              className="text-text-secondary hover:text-text-primary transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn delay={0.2}>
            <Image
              src="/theBodyMechanicLogoMain.svg"
              alt="The Body Mechanic - Massage Therapist"
              width={280}
              height={280}
              className="mx-auto mb-8 w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72"
              priority
            />
          </FadeIn>
          <FadeIn delay={0.6}>
            <p className="text-xl md:text-2xl text-text-secondary mb-8 max-w-2xl mx-auto">
              Helping your body function at its best through expert assessment
              and personalised therapeutic massage
            </p>
          </FadeIn>
          <FadeIn delay={0.8}>
            <div className="inline-block bg-pastel-sage/50 text-text-primary px-6 py-3 rounded-full text-sm mb-8">
              Student therapist offering reduced rates until March 2026
            </div>
          </FadeIn>
          <FadeIn delay={1}>
            <a
              href="https://app.acuityscheduling.com/schedule.php?owner=37775387"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-pastel-blush hover:bg-pastel-blush/80 text-text-primary px-8 py-4 rounded-full transition-all hover:scale-105"
            >
              Book Your Appointment
            </a>
          </FadeIn>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-pastel-lavender/30">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl text-text-primary text-center mb-12">
              About Me
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-lg text-text-secondary text-center max-w-3xl mx-auto leading-relaxed">
              My goal is to help your body function at its best through thorough
              assessment and the expertise I have gained as an orthopaedic nurse
              and massage therapist. I will create a personalised plan designed
              to meet your unique needs and goals.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl text-text-primary text-center mb-16">
              Services
            </h2>
          </FadeIn>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            <FadeIn delay={0.1} className="h-full">
              <ServiceCard
                title="Sports Injuries"
                description="Targeted treatment to aid recovery and get you back to your best performance"
                color="bg-pastel-blush/40"
              />
            </FadeIn>
            <FadeIn delay={0.2} className="h-full">
              <ServiceCard
                title="Rehabilitation"
                description="Supportive therapy to help restore function and mobility after injury or surgery"
                color="bg-pastel-sage/40"
              />
            </FadeIn>
            <FadeIn delay={0.3} className="h-full">
              <ServiceCard
                title="Muscle Tension"
                description="Relief from everyday tension and stress held in the body"
                color="bg-pastel-lavender/40"
              />
            </FadeIn>
            <FadeIn delay={0.4} className="h-full">
              <ServiceCard
                title="Joint Pain"
                description="Therapeutic techniques to ease discomfort and improve joint health"
                color="bg-pastel-peach/40"
              />
            </FadeIn>
            <FadeIn delay={0.5} className="h-full">
              <ServiceCard
                title="Mobility Issues"
                description="Treatment to enhance range of motion and functional movement"
                color="bg-pastel-mint/40"
              />
            </FadeIn>
            <FadeIn delay={0.6} className="h-full">
              <ServiceCard
                title="General Wellness"
                description="Regular massage to maintain healthy musculoskeletal function"
                color="bg-pastel-blush/40"
              />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 px-6 bg-pastel-blush/20">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl text-text-primary mb-12">
              Pricing
            </h2>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <FadeIn delay={0.1}>
              <div className="bg-white/60 p-8 rounded-2xl">
                <p className="text-3xl text-text-primary mb-2">£20</p>
                <p className="text-text-secondary">40 minute session</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="bg-white/60 p-8 rounded-2xl">
                <p className="text-3xl text-text-primary mb-2">£40</p>
                <p className="text-text-secondary">1 hour 30 minute session</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-24 px-6 bg-pastel-sage/20">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl text-text-primary mb-8">
              Location & Availability
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-16 mb-12">
              <div>
                <p className="text-text-accent uppercase tracking-wider text-sm mb-2">
                  Based in
                </p>
                <p className="text-xl text-text-primary">Wadebridge</p>
              </div>
              <div>
                <p className="text-text-accent uppercase tracking-wider text-sm mb-2">
                  Availability
                </p>
                <p className="text-xl text-text-primary">7 days a week</p>
              </div>
              <div>
                <p className="text-text-accent uppercase tracking-wider text-sm mb-2">
                  Mobile Service
                </p>
                <p className="text-xl text-text-primary">
                  Wadebridge & surrounding villages
                </p>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20624.77847366!2d-4.853!3d50.517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x486b13a3c5c9e5c7%3A0x9a5c26c7c0e9c8e5!2sWadebridge%2C%20UK!5e0!3m2!1sen!2suk!4v1702570000000!5m2!1sen!2suk"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Map showing Wadebridge, Cornwall"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl text-text-primary mb-12">
              Get in Touch
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="flex justify-center gap-6 mb-12">
              <a
                href="tel:07717756760"
                className="p-5 bg-pastel-blush/30 rounded-full hover:bg-pastel-blush/50 transition-all hover:scale-110"
                aria-label="Call us"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8 text-text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
              </a>
              <a
                href="mailto:Thebodymechanictherapy@gmail.com"
                className="p-5 bg-pastel-lavender/30 rounded-full hover:bg-pastel-lavender/50 transition-all hover:scale-110"
                aria-label="Email us"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8 text-text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </a>
              <a
                href="https://instagram.com/the_body_mechanic_therapy"
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 bg-pastel-peach/30 rounded-full hover:bg-pastel-peach/50 transition-all hover:scale-110"
                aria-label="Follow us on Instagram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8 text-text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <a
              href="https://app.acuityscheduling.com/schedule.php?owner=37775387"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-pastel-sage hover:bg-pastel-sage/80 text-text-primary px-10 py-4 rounded-full text-lg transition-all hover:scale-105"
            >
              Book Online Today
            </a>
          </FadeIn>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-pastel-blush/20">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-text-secondary text-sm">
            &copy; {new Date().getFullYear()} The Body Mechanic Therapy. All
            rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

function ServiceCard({
  title,
  description,
  color,
}: {
  title: string;
  description: string;
  color: string;
}) {
  return (
    <div
      className={`${color} p-8 rounded-2xl h-full min-h-[180px] flex flex-col justify-center transition-transform hover:scale-105`}
    >
      <h3 className="text-xl text-text-primary mb-3">{title}</h3>
      <p className="text-text-secondary">{description}</p>
    </div>
  );
}
