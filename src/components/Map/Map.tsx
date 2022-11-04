import { Map as PigeonMap, Marker } from "pigeon-maps";
import { useQuery } from "@tanstack/react-query";
import { fetchLaunchesByDate } from "api/launches";
import Filters from "components/Filters/Filters";
import { useFilterState } from "contexts/FilterStateContext";
import styles from "./Map.module.scss";

function Map() {
  const [filters] = useFilterState();

  const { data } = useQuery({
    queryKey: ["launchesByDate", filters.startDate, filters.endDate],
    queryFn: () => fetchLaunchesByDate(filters.startDate, filters.endDate, 100),
  });

  console.log(data);

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
