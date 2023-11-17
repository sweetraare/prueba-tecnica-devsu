import "./App.css";
import Header from "./components/header";
import Button from "./components/button";
import ProductsTable from "./components/ProductsTable";
import {
  QueryClient,
  QueryClientProvider,
  useMutation,
} from "@tanstack/react-query";
import { addProduct } from "./requests/products";
import Product from "./interfaces/products";

const queryClient = new QueryClient();

function App() {
  // Mutations
  const handleAdd = () => {
    console.log("holi");
    // mutation.mutate();
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
    </QueryClientProvider>
  );
}

export default App;
