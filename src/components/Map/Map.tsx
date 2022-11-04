import { useState } from "react";
import { Map as PigeonMap, Marker, Overlay } from "pigeon-maps";
import { useQuery } from "@tanstack/react-query";
import { fetchLaunchesByDate, Launch } from "api/launches";
import Loading from "components/Loading/Loading";
import Error from "components/Error/Error";
import Filters from "components/Filters/Filters";
import LaunchOverlay from "components/LaunchOverlay/LaunchOverlay";
import { useFilterState } from "contexts/FilterStateContext";
import styles from "./Map.module.scss";

type SelectedLaunch = {
  lat: number;
  lng: number;
  launch: Launch;
};

function Map() {
  const [selectedLaunch, setSelectedLaunch] = useState<SelectedLaunch | null>(
    null
  );
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
            onClick={() => {
              setSelectedLaunch({
                lat: Number(launch.pad.latitude),
                lng: Number(launch.pad.longitude),
                launch: launch,
              });
            }}
          />
        ))}
        {selectedLaunch && (
          <Overlay
            anchor={[selectedLaunch.lat, selectedLaunch.lng]}
            offset={[0, 0]}
          >
            <LaunchOverlay
              launch={selectedLaunch.launch}
              onClose={() => setSelectedLaunch(null)}
            />
          </Overlay>
        )}
      </PigeonMap>
    </div>
  );
}

export default Map;
