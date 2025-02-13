import { TrpcProvider } from "./lib/trpc";
import { AllFosPage } from "./pages/AllFosPage";


export const App = () => {
  return (
    <TrpcProvider>
      <AllFosPage />
    </TrpcProvider>
  );
};
