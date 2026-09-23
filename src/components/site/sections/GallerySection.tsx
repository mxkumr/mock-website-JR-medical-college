import { FullBleed, ThemeLink } from "@/components/site";
import { ImageCarousel } from "@/components/site/ImageCarousel";
import { gallerySection } from "@/data/home-sections";

export function GallerySection() {
  const { title, cta, images } = gallerySection;

  return (
    <FullBleed
      id="gallery"
      snapOnMobile
      boxed={false}
      className="news-section section-gallery"
    >
      <div className="news-container site-container">
        <header className="news-header">
          <h2 className="news-section-title">{title}</h2>
          <ThemeLink href={cta.href} className="news-section-cta">
            {cta.label}
          </ThemeLink>
        </header>

        <ImageCarousel images={images} />
      </div>
    </FullBleed>
  );
}
