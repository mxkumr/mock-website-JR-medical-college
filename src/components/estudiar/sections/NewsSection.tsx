import { FullBleed, PostCard, ThemeLink } from "@/components/estudiar";
import { newsSection } from "@/data/estudiar-home";

export function NewsSection() {
  return (
    <FullBleed className="bg-accent-4 py-20 md:py-28">
      <div className="mb-12 flex items-end justify-between gap-6">
        <h2 className="font-display text-h2 font-bold text-accent-6">
          {newsSection.title}
        </h2>
        <ThemeLink href={newsSection.cta.href}>{newsSection.cta.label}</ThemeLink>
      </div>
      <div className="grid gap-8 md:grid-cols-3">
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
