import {
  BookOpen,
  Building2,
  FlaskConical,
  Users,
  type LucideIcon,
} from "lucide-react";

export type StudentLifeCardData = {
  title: string;
  body: string;
  icon: "learning" | "campus" | "community" | "practicals";
};

const iconMap: Record<StudentLifeCardData["icon"], LucideIcon> = {
  learning: BookOpen,
  campus: Building2,
  community: Users,
  practicals: FlaskConical,
};

export function StudentLifeCards({ cards }: { cards: StudentLifeCardData[] }) {
  return (
    <div className="student-life-cards">
      {cards.map((card) => {
        const Icon = iconMap[card.icon];

        return (
          <article key={card.title} className="student-life-card">
            <Icon className="student-life-card-icon" aria-hidden />
            <h5 className="student-life-card-title">{card.title}</h5>
            <p className="student-life-card-body">{card.body}</p>
          </article>
        );
      })}
    </div>
  );
}
