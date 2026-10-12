export function calculateSlaMetrics(slaDeadlineIso: string) {
  const now = Date.now();
  const deadline = new Date(slaDeadlineIso).getTime();
  const diffMs = deadline - now;
  const hoursLeft = Math.round(diffMs / (1000 * 60 * 60));

  if (diffMs <= 0) {
    return {
      isOverdue: true,
      hoursLeft: 0,
      label: "Overdue (>24h)",
      badgeClass: "bg-red-100 text-red-800 border-red-300"
    };
  } else if (hoursLeft <= 6) {
    return {
      isOverdue: false,
      hoursLeft,
      label: `Urgent (${hoursLeft}h left)`,
      badgeClass: "bg-amber-100 text-amber-900 border-amber-300"
    };
  } else {
    return {
      isOverdue: false,
      hoursLeft,
      label: `${hoursLeft}h remaining`,
      badgeClass: "bg-emerald-100 text-emerald-800 border-emerald-300"
    };
  }
}
