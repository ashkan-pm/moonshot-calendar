import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Map from "components/Map/Map";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Map />
    </QueryClientProvider>
  );
}

export default App;
