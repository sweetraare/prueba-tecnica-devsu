import { Dispatch, SetStateAction } from "react";
import { Dialog } from "@headlessui/react";
import Button from "./button";
import { SubmitHandler, useForm } from "react-hook-form";
import Product from "../interfaces/products";
import FormInput from "./FormInput";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addProduct } from "../requests/products";

interface Props {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

function AddProductModalComponent({ isOpen, setIsOpen }: Props) {
  const queryClient = useQueryClient();

  const { register, handleSubmit, formState: { errors } } = useForm<
    Product
  >();

  const mutation = useMutation({
    mutationFn: (product: Product) => addProduct(product),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });

  const onSubmit: SubmitHandler<Product> = (data) => {
    mutation.mutate(data);
    setIsOpen(false);
  };

  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="fixed inset-0 flex items-center justify-center bg-neutral-400"
    >
      <Dialog.Panel className="bg-gray-50 p-3">
        <Dialog.Title className="border-b-2 border-gray-600">
          <p className="text-4xl text-center p-3">Formulario de Registro</p>
        </Dialog.Title>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-2 gap-4 p-10"
        >
          <FormInput
            label="Id"
            id="id"
            register={register}
            error={errors?.id}
            required={true}
          />
          <FormInput
            label="Nombre"
            id="name"
            register={register}
            error={errors?.name}
            required={true}
          />
          <FormInput
            label="Descripción"
            id="description"
            register={register}
            error={errors?.description}
            required
          />
          <FormInput
            label="Logo"
            id="logo"
            register={register}
            error={errors?.logo}
            required
          />
          <FormInput
            label="Fecha Liberación"
            id="date_release"
            register={register}
            error={errors?.date_release}
            required
            type="date"
          />
          <FormInput
            label="Fecha Revisión"
            id="date_revision"
            register={register}
            error={errors?.date_revision}
            required
            type="date"
          />
          <Button label="Reiniciar" type="reset" />
          <Button label="Enviar" type="submit" />
        </form>
      </Dialog.Panel>
    </Dialog>
  );
}

export default AddProductModalComponent;
