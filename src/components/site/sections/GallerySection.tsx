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
      className="gallery-section section-gallery"
    >
      <div className="gallery-container site-container">
        <header className="gallery-header">
          <h2 className="gallery-title">{title}</h2>
          <ThemeLink href={cta.href} className="gallery-cta">
            {cta.label}
          </ThemeLink>
        </header>

        <ImageCarousel images={images} />
      </div>
    </FullBleed>
  );
}
