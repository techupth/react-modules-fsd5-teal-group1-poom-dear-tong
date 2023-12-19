import "./App.css";
import {
  Header,
  MainContent,
  ProductSection,
  FAQ,
  Footer,
} from "./components/allcomponents";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <Header />
      <MainContent />
      <ProductSection />
      <FAQ />
      <Footer />
    </ChakraProvider>
  );
}

export default App;
