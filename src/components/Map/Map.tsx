import { Map as PigeonMap, Marker } from "pigeon-maps";
import { useQuery } from "@tanstack/react-query";
import { fetchLaunchesByDate } from "api/launches";
import Loading from "components/Loading/Loading";
import Error from "components/Error/Error";
import Filters from "components/Filters/Filters";
import { useFilterState } from "contexts/FilterStateContext";
import styles from "./Map.module.scss";

function Map() {
  const [filters] = useFilterState();
  const { data, isLoading, isError } = useQuery({
    queryKey: [
      "launchesByDate",
      filters.startDate,
      filters.endDate,
      filters.onlySuccessful,
    ],
    queryFn: () =>
      fetchLaunchesByDate(filters.startDate, filters.endDate, {
        limit: 100,
        onlySuccessful: filters.onlySuccessful,
      }),
  });

  return (
    <div className={styles.Map}>
      <Loading isLoading={isLoading} />
      <Error isError={isError} />
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
