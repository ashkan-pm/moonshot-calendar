import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Map from "components/Map/Map";
import { FilterStateProvider } from "contexts/FilterStateContext";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <FilterStateProvider>
        <Map />
      </FilterStateProvider>
    </QueryClientProvider>
  );
}

export default App;
