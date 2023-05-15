import { ErrorMessage } from "@hookform/error-message";
import { ErrorMessageStyled } from "./FormError.styled";

export const FormError = (p: { name: string; errors: any }) => {
  return (
    <ErrorMessage
      errors={p.errors}
      name={p.name}
      render={(p) => <ErrorMessageStyled>{p.message}</ErrorMessageStyled>}
    />
  );
};
