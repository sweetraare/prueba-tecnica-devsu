import { useQuery } from "@tanstack/react-query";
import { getAllProducts } from "../requests/products";
import { useState } from "react";
import dayjs from "dayjs";
import PopoverButton from "./PopoverButton";

interface ProductsTableProps {
  searchQuery: string;
}

function ProductsTable({ searchQuery }: ProductsTableProps) {
  const [numberOfContent, setNumberOfContent] = useState(5);

  const { isPending, error, data } = useQuery({
    queryKey: ["products"],
    queryFn: () => getAllProducts(),
  });

  if (isPending) {
    return <h1>Cargando...</h1>;
  }

  if (error) {
    return <h1>Error: ${error.message}</h1>;
  }

  const handleOptionSelected = (option: string) => {
    //TODO: create this functionality
    console.log(option);
  };

  const productsList = data.filter((product) =>
    product.name.toUpperCase().includes(searchQuery.toUpperCase()) ||
    product.description.toUpperCase().includes(searchQuery.toUpperCase())
  ).slice(0, numberOfContent);

  return (
    <>
      <table className="bg-white p-4 w-full">
        <thead className="bg-slate-100 ">
          <tr>
            <th className="py-4">Logo</th>
            <th>Nombre del producto</th>
            <th>Descripción</th>
            <th>Fecha de liberación</th>
            <th>Fecha de reestructuración</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {productsList.map((product) => (
            <tr key={product.id} className="border-y-2 border-gray-300">
              <td className="py-4">
                <img
                  className="rounded-full w-12 h-12 object-contain"
                  src={product.logo}
                  alt={product.name}
                />
              </td>
              <td>{product.name}</td>
              <td>{product.description}</td>
              <td>{dayjs(product.date_release).format("DD/MM/YYYY")}</td>
              <td>{dayjs(product.date_revision).format("DD/MM/YYYY")}</td>
              <td>
                <PopoverButton
                  options={["Editar", "Eliminar"]}
                  onOptionSelected={handleOptionSelected}
                />
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={5}>
              <div className="p-4  flex justify-between">
                <p>{productsList.length} Resultados</p>
                <select
                  value={numberOfContent}
                  onChange={(e) => setNumberOfContent(+e.target.value)}
                >
                  <option value={5}>5</option>
                  <option value={10}>10</option>
                  <option value={20}>20</option>
                </select>
              </div>
            </td>
          </tr>
        </tfoot>
      </table>
    </>
  );
}

export default ProductsTable;
