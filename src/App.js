import { LogoWrapper, Header } from "./components";
import { InvoiceList } from "./components/invoice-list/invoice-list";

function App() {
  return (
    <main>
      <LogoWrapper />
      <Header />
      <InvoiceList />
    </main>
  );
}

export default App;
