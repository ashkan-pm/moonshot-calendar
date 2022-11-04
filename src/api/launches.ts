export type Launches = {
  results: Array<{ id: string; pad: { latitude: string; longitude: string } }>;
};

export async function fetchLaunchesByDate(
  startDate: Date,
  endDate: Date,
  {
    limit = 10,
    onlySuccessful = false,
  }: { limit: number; onlySuccessful: boolean }
): Promise<Launches> {
  const params = new URLSearchParams({
    limit: String(limit),
    window_start__gte: startDate.toISOString(),
    window_start__lt: endDate.toISOString(),
  });
  if (onlySuccessful) params.set("status", "3");

  const response = await fetch(
    "https://lldev.thespacedevs.com/2.2.0/launch?" + params
  );

  return response.json();
}
