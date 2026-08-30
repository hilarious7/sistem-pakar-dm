export function formatPercent(value: number): string {
  return (value * 100).toFixed(1) + '%';
}

export function formatDecimal(value: number, places: number = 2): string {
  return value.toFixed(places);
}
