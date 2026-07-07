type PriceItem = { label: string; price: string };

export type PriceListProps = {
  period: string;
  items: PriceItem[];
  total: string;
};

export function PriceList({ period, items, total }: PriceListProps) {
  return (
    <div className="border border-accent-3/50 bg-accent-4 p-6">
      <p className="text-sm font-semibold uppercase tracking-wider text-accent-1">
        {period}
      </p>
      <ul className="mt-4 space-y-3 border-t border-accent-3/40 pt-4">
        {items.map((item) => (
          <li
            key={item.label}
            className="flex justify-between gap-4 text-sm text-accent-8"
          >
            <span>{item.label}</span>
            <span className="font-medium text-accent-6">{item.price}</span>
          </li>
        ))}
      </ul>
      <p className="mt-4 border-t border-accent-3/40 pt-4 font-display text-lg font-bold text-accent-1">
        {total}
      </p>
    </div>
  );
}
