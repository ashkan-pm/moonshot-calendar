import { useState } from "react";
import { Map as PigeonMap, Marker } from "pigeon-maps";
import { useQuery } from "@tanstack/react-query";
import { fetchLaunchesByDate } from "api/launches";
import Filters from "components/Filters/Filters";
import styles from "./Map.module.scss";

function Map() {
  const today = new Date();
  const threeMonthsFromToday = new Date();
  threeMonthsFromToday.setMonth(threeMonthsFromToday.getMonth() + 3);

  const [dates, setDates] = useState<{ startDate: Date; endDate: Date }>({
    startDate: today,
    endDate: threeMonthsFromToday,
  });

  const { data } = useQuery({
    queryKey: ["launchesByDate"],
    queryFn: () => fetchLaunchesByDate(dates.startDate, dates.endDate, 100),
  });

  return (
    <div className={styles.Map}>
      <Filters />
      <PigeonMap defaultCenter={[50.879, 4.6997]} defaultZoom={3}>
        {data?.results.map((launch) => (
          <Marker
            key={launch.id}
            width={50}
            anchor={[Number(launch.pad.latitude), Number(launch.pad.longitude)]}
          />
        ))}
      </PigeonMap>
    </div>
  );
}

export default Map;
