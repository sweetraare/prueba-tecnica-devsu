import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { addProduct, getAllProducts } from "../requests/products";
import Product from "../interfaces/products";

function ProductsTable() {
  const queryClient = useQueryClient();

  const { isPending, error, data, isFetching } = useQuery({
    queryKey: ["products"],
    queryFn: () => getAllProducts(),
  });

  const product: Product = {
    id: "10001123",
    name: "alex",
    description: "ulloa",
    logo: "htps://",
    date_release: new Date(),
    date_revision: new Date(),
  };

  const mutation = useMutation({
    mutationFn: () => addProduct(product),
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });

  if (isPending) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error: ${error.message}</h1>;
  }

  const handleAdd = () => {
    mutation.mutate();
  };

  return (
    <>
      <button onClick={handleAdd}>agregaaar</button>
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
