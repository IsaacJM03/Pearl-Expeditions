export function calculateSlaMetrics(slaDeadlineIso: string) {
  if (!slaDeadlineIso) {
    return {
      isOverdue: false,
      hoursLeft: 0,
      label: "Pending",
      badgeClass: "bg-gray-100 text-gray-700 border-gray-300"
    };
  }

  const deadline = new Date(slaDeadlineIso).getTime();
  if (isNaN(deadline)) {
    return {
      isOverdue: false,
      hoursLeft: 0,
      label: "Pending",
      badgeClass: "bg-gray-100 text-gray-700 border-gray-300"
    };
  }

  const now = Date.now();
  const diffMs = deadline - now;
  const hoursLeft = Math.round(diffMs / (1000 * 60 * 60));

  if (diffMs <= 0) {
    const hoursOverdue = Math.max(1, Math.round(Math.abs(diffMs) / (1000 * 60 * 60)));
    return {
      isOverdue: true,
      hoursLeft: 0,
      label: `Overdue (${hoursOverdue}h over SLA)`,
      badgeClass: "bg-red-100 text-red-800 border-red-300"
    };
  } else if (diffMs < 60 * 60 * 1000) {
    const minsLeft = Math.max(1, Math.round(diffMs / (1000 * 60)));
    return {
      isOverdue: false,
      hoursLeft: 1,
      label: `Urgent (${minsLeft}m left)`,
      badgeClass: "bg-amber-100 text-amber-900 border-amber-300"
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
