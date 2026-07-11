import { FullBleed, PostCard, ThemeLink } from "@/components/site";
import { newsSection } from "@/data/home-sections";

export function NewsSection() {
  return (
    <FullBleed snapOnMobile className="bg-accent-4 py-10 md:py-28">
      <div className="mb-8 flex items-end justify-between gap-4 md:mb-12 md:gap-6">
        <h2 className="font-display text-h2 font-bold text-accent-6">
          {newsSection.title}
        </h2>
        <ThemeLink href={newsSection.cta.href}>{newsSection.cta.label}</ThemeLink>
      </div>
      <div className="grid gap-6 md:grid-cols-3 md:gap-8">
        {newsSection.posts.map((post) => (
          <PostCard
            key={post.id}
            title={post.title}
            date={post.date}
            image={post.image}
            href={post.href}
          />
        ))}
      </div>
    </FullBleed>
  );
}
