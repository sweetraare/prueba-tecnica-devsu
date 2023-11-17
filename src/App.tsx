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

  const handleAdd = () => {
    setIsOpen(true);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <div className="bg-gray-400 min-h-screen min-w-screen">
        <Header />
        <div className="p-5">
          <div className="flex justify-between">
            <input>
            </input>
            <Button label="Agregar" onClick={handleAdd} />
          </div>
          <ProductsTable />
        </div>
      </div>
      <AddProductModalComponent isOpen={isOpen} setIsOpen={setIsOpen} />
    </QueryClientProvider>
  );
}

export default App;
