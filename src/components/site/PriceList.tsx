import { ThemeLink } from "./ThemeLink";

export type PriceListProps = {
  period: string;
  items: { label: string; price: string }[];
  detailsCta?: { label: string; href: string };
};

export function PriceList({ period, items, detailsCta }: PriceListProps) {
  return (
    <div className="tuition-price-list">
      <h4 className="tuition-price-list-title whitespace-pre-line">{period}</h4>
      <ul className="tuition-price-list-items">
        {items.map((item) => (
          <li key={item.label} className="tuition-price-list-row">
            <span>{item.label}</span>
            <span>{item.price}</span>
          </li>
        ))}
      </ul>
      {detailsCta && (
        <ThemeLink href={detailsCta.href} className="tuition-price-card-cta">
          {detailsCta.label}
        </ThemeLink>
      )}
    </div>
  );
}
