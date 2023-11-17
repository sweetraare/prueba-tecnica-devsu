import "./App.css";
import Header from "./components/header";
import Button from "./components/button";
import ProductsTable from "./components/ProductsTable";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AddProductModalComponent from "./components/AddProductModal";
import { useState } from "react";

const queryClient = new QueryClient();

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleAdd = () => {
    setIsOpen(true);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <div className="bg-gray-400 min-h-screen min-w-screen flex flex-col items-center">
        <Header />
        <div className="mt-10  w-9/12">
          <div className="p-5 overflow-x-scroll">
            <div className="flex justify-between my-3 flex-col md:flex-row">
              <input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
                className="border-2 border-gray-300 rounded"
              />
              <Button label="Agregar" onClick={handleAdd} />
            </div>
            <ProductsTable searchQuery={searchQuery} />
          </div>
        </div>
      </div>
      <AddProductModalComponent isOpen={isOpen} setIsOpen={setIsOpen} />
    </QueryClientProvider>
  );
}

export default App;
