import { Card } from "@/components/ui/Card";

type MetricCardProps = {
  label: string;
  value: string;
  detail: string;
};

export function MetricCard({ label, value, detail }: MetricCardProps) {
  return (
    <Card className="min-h-40 p-5">
      <p className="text-xs uppercase tracking-[0.14em] text-text-muted [overflow-wrap:anywhere] sm:tracking-[0.18em]">
        {label}
      </p>
      <p className="mt-3 font-display text-2xl font-bold leading-tight text-text-primary [overflow-wrap:anywhere] sm:text-3xl">
        {value}
      </p>
      <p className="mt-2 text-sm leading-6 text-text-secondary [overflow-wrap:anywhere]">{detail}</p>
    </Card>
  );
}
