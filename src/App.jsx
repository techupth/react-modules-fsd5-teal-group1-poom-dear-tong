import "./App.css";

import { ChakraProvider } from "@chakra-ui/react";
import {
  Header,
  MainContent,
  ProductSection,
  Footer,
  FAQ,
} from "./components/LandingPage";

function App() {
  return (
    <ChakraProvider>
      <div>
        <Header />
        <MainContent />
        <ProductSection />
        <FAQ />
        <Footer />
      </div>
    </ChakraProvider>
  );
}

export default App;
