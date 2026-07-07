import { Navbar, Footer } from "@/components/layout";
import { SectionHeader, Button } from "@/components/ui";
import {
  Hero,
  Counters,
  Gallery,
  Timeline,
  CTA,
} from "@/components/sections";
import {
  DepartmentCard,
  FacultyCard,
  NewsCard,
} from "@/components/cards";
import {
  heroContent,
  departments,
  faculty,
  news,
  galleryImages,
  timelineEvents,
  counters,
  ctaContent,
} from "@/data/mock-content";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero {...heroContent} />

        {/* Departments */}
        <section className="mx-auto max-w-7xl px-6 py-20" aria-labelledby="departments-heading">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <SectionHeader
              eyebrow="Academics"
              title="Our Departments"
              description="Explore world-class programs across medical disciplines, designed to prepare the next generation of healthcare professionals."
            />
            <Button
              href="#"
              variant="secondary"
              rightIcon={<ArrowRight className="h-4 w-4" />}
              className="shrink-0"
            >
              View All Programs
            </Button>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {departments.map((dept) => (
              <DepartmentCard key={dept.id} {...dept} />
            ))}
          </div>
        </section>

        <Counters items={counters} />

        {/* Faculty */}
        <section className="bg-surface/50 py-20" aria-labelledby="faculty-heading">
          <div className="mx-auto max-w-7xl px-6">
            <SectionHeader
              eyebrow="Our People"
              title="Distinguished Faculty"
              description="Learn from leading clinicians, researchers, and educators committed to mentoring the next generation."
              align="center"
              className="mx-auto"
            />
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {faculty.map((member) => (
                <FacultyCard key={member.id} {...member} />
              ))}
            </div>
          </div>
        </section>

        {/* News */}
        <section className="mx-auto max-w-7xl px-6 py-20" aria-labelledby="news-heading">
          <SectionHeader
            eyebrow="Latest Updates"
            title="News & Announcements"
            description="Stay informed about campus events, research breakthroughs, and admission updates."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {news.map((item) => (
              <NewsCard key={item.id} {...item} />
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section className="bg-white py-20" aria-labelledby="timeline-heading">
          <div className="mx-auto max-w-7xl px-6">
            <SectionHeader
              eyebrow="Our Heritage"
              title="A Legacy of Excellence"
              description="Five decades of commitment to medical education and community health."
              align="center"
              className="mx-auto"
            />
            <div className="mt-16">
              <Timeline events={timelineEvents} />
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="mx-auto max-w-7xl px-6 py-20" aria-labelledby="gallery-heading">
          <SectionHeader
            eyebrow="Campus Life"
            title="Life at JR Medical College"
            description="Experience our vibrant campus community, state-of-the-art facilities, and memorable traditions."
          />
          <div className="mt-12">
            <Gallery images={galleryImages} />
          </div>
        </section>

        {/* Button showcase */}
        <section className="border-y border-secondary/10 bg-surface/30 py-16" aria-label="Button variants">
          <div className="mx-auto max-w-7xl px-6">
            <SectionHeader
              eyebrow="Design System"
              title="Button Variants"
              description="Consistent, accessible buttons for every interaction."
              align="center"
              className="mx-auto"
            />
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="accent">Accent</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link Style</Button>
            </div>
          </div>
        </section>

        <CTA {...ctaContent} />
      </main>
      <Footer />
    </>
  );
}
