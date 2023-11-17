import { useQuery } from "@tanstack/react-query";
import { getAllProducts } from "../requests/products";

function ProductsTable() {
  const { isPending, error, data } = useQuery({
    queryKey: ["products"],
    queryFn: () => getAllProducts(),
  });

  if (isPending) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error: ${error.message}</h1>;
  }

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Logo</th>
            <th>Nombre del producto</th>
            <th>Descripción</th>
            <th>Fecha de liberación</th>
            <th>Fecha de reestructuración</th>
          </tr>
        </thead>
        <tbody>
          {data.map((product) => (
            <tr key={product.id}>
              <td>{product.logo}</td>
              <td>{product.name}</td>
              <td>{product.description}</td>
              <td>{product.date_release.toString()}</td>
              <td>{product.date_revision.toString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default ProductsTable;
