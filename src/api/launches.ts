export async function fetchLaunchesByDate(
  startDate: Date,
  endDate: Date,
  limit: number
): Promise<{
  results: Array<{ id: string; pad: { latitude: string; longitude: string } }>;
}> {
  const response = await fetch(
    "https://lldev.thespacedevs.com/2.2.0/launch?" +
      new URLSearchParams({
        limit: String(limit),
        window_start__gte: startDate.toISOString(),
        window_start__lt: endDate.toISOString(),
      })
  );

  return response.json();
}
