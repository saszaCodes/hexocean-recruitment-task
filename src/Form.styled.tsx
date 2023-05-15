import styled from "styled-components";

export const FormElement = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 300px;
  margin: auto;
  align-self: center;
  box-shadow: grey 0 0 10px;
  border-radius: 5px;
  padding: 20px;
  background-color: white;

  input,
  select,
  button {
    border: 1px solid lightgrey;
    border-radius: 5px;
    padding: 8px 10px;

    :focus {
      outline: 1px solid #d9d9d9;
    }
  }
`;

export const FormHeading = styled.p`
  padding: 0;
  margin-top: 0;
`;

export const FormInput = styled.input<{ error?: boolean | undefined }>`
  ${(p) =>
    p.error
      ? `
    background-color: #ffe6e6;
    border: 1px solid #ffcccc !important;


    :focus {
      outline: 1px solid #ff4d4d !important;
    }
  `
      : ""}
`;

export const FormSelect = styled.select<{ error?: boolean | undefined }>`
  ${(p) =>
    p.error
      ? `
    background-color: #ffe6e6;
    border: 1px solid #ffcccc !important;

    :focus {
      outline: 1px solid #ff4d4d !important;
    }
  `
      : ""}
`;

export const FormOption = styled.option``;

export const FormButton = styled.button`
  background-color: #f2f2f2;

  :hover:not([disabled]) {
    background-color: #e6e6e6;
    cursor: pointer;
  }
`;

const Dialog = styled.div`
  font-size: 12px;
  border-radius: 5px;
  padding: 8px 10px;
`;

export const SuccessDialog = styled(Dialog)`
  background-color: #ecf9ec;
  border: 1px solid #b3e6b3 !important;
  color: #206020;
`;

export const FailureDialog = styled(Dialog)`
  background-color: #ffe6e6;
  border: 1px solid #ffcccc !important;
  color: #b32400;
`;
