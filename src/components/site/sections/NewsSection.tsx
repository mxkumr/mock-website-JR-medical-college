import { FullBleed, PostCard, ThemeLink } from "@/components/site";
import { newsSection } from "@/data/home-sections";

export function NewsSection() {
  const { title, cta, posts } = newsSection;

  return (
    <FullBleed snapOnMobile boxed={false} className="news-section">
      <div className="news-container">
        <header className="news-header">
          <h2 className="news-section-title">{title}</h2>
          <ThemeLink href={cta.href} className="news-section-cta">
            {cta.label}
          </ThemeLink>
        </header>

        <div className="news-cards">
          {posts.map((post) => (
            <PostCard
              key={post.id}
              title={post.title}
              date={post.date}
              excerpt={post.excerpt}
              href={post.href}
            />
          ))}
        </div>
      </div>
    </FullBleed>
  );
}
