import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import "./styles.css";
import { useSubmitDish } from "./useSubmitDish";
import { FormError } from "./FormError";
import {
  FormElement,
  FormHeading,
  FormInput,
  FormSelect,
  FormOption,
  FormButton,
  SuccessDialog,
  FailureDialog
} from "./Form.styled";

type FormFields = {
  name: string;
  preparation_time: string;
  dish_type: "empty" | "pizza" | "soup" | "sandwich";
  no_of_slices?: string;
  diameter?: number;
  spiciness_scale?: number;
  slices_of_bread?: number;
};

export const Form = () => {
  const {
    register,
    watch,
    handleSubmit,
    reset,
    formState: { isValid, errors, isDirty }
  } = useForm<FormFields>({ mode: "onBlur" });
  const { data: submitResponse, mutateAsync: sendForm } = useSubmitDish();
  const [submitStatus, setSubmitStatus] = useState<
    "failure" | "success" | undefined
  >(undefined);

  const dish_type = watch("dish_type");

  const onSubmit = handleSubmit(
    (fields) => {
      // @ts-ignore
      sendForm(fields).then((res) => {
        if (res.ok) setSubmitStatus("success");
        else setSubmitStatus("failure");
        reset();
      });
    },
    (fieldErrors) => {
      console.log("Failed submission");
      console.log(fieldErrors);
    }
  );

  useEffect(() => {
    if (isDirty) setSubmitStatus(undefined);
  }, [isDirty]);

  return (
    <FormElement onSubmit={onSubmit}>
      <FormHeading>Add new dish</FormHeading>
      <FormInput
        type="text"
        error={!!errors?.name}
        placeholder="Dish name"
        {...register("name", { required: true })}
      />
      <FormInput
        type="text"
        error={!!errors?.preparation_time}
        placeholder="Preparation time (hh:mm:ss)"
        {...register("preparation_time", {
          required: true,
          pattern: {
            value: /^\d+:[0-5]\d:[0-5]\d$/,
            message: "Required format: HH:MM:SS"
          }
        })}
      />
      <FormError name="preparation_time" errors={errors} />
      <FormSelect
        defaultValue="empty"
        {...register("dish_type", {
          required: true,
          validate: (value) => value !== "empty"
        })}
      >
        <FormOption value="empty" disabled hidden>
          Dish type
        </FormOption>
        <FormOption value="pizza">Pizza</FormOption>
        <FormOption value="soup">Soup</FormOption>
        <FormOption value="sandwich">Sandwich</FormOption>
      </FormSelect>
      {dish_type === "pizza" && (
        <>
          <FormInput
            type="text"
            error={!!errors?.no_of_slices}
            placeholder="Number of slices"
            {...register("no_of_slices", {
              required: true,
              pattern: {
                value: /^\d+$/,
                message: "Positive whole number is required"
              }
            })}
          />
          <FormError name="no_of_slices" errors={errors} />
          <FormInput
            type="text"
            error={!!errors?.diameter}
            placeholder="Diameter"
            {...register("diameter", {
              required: true,
              pattern: {
                value: /^\d+\.*\d*$/,
                message: "Positive number is required"
              }
            })}
          />
          <FormError name="diameter" errors={errors} />
        </>
      )}
      {dish_type === "soup" && (
        <>
          <FormInput
            type="text"
            error={!!errors?.spiciness_scale}
            placeholder="Spiciness scale (1-10)"
            {...register("spiciness_scale", {
              required: true,
              pattern: {
                value: /^[1-9]$|^10$/,
                message: "Positive whole number between 1 and 10 is required"
              }
            })}
          />
          <FormError name="spiciness_scale" errors={errors} />
        </>
      )}
      {dish_type === "sandwich" && (
        <>
          <FormInput
            type="text"
            error={!!errors?.slices_of_bread}
            placeholder="Number of slices"
            {...register("slices_of_bread", {
              required: true,
              pattern: {
                value: /^\d+$/,
                message: "Positive whole number is required"
              }
            })}
          />
          <FormError name="slices_of_bread" errors={errors} />
        </>
      )}
      <FormButton type="submit" disabled={!isValid}>
        Submit
      </FormButton>
      {submitStatus === "success" && <SuccessDialog>Dish added!</SuccessDialog>}
      {submitStatus === "failure" && (
        <FailureDialog>
          An error occured. Received error message:{"\n"}
          {JSON.stringify(submitResponse?.body)}
        </FailureDialog>
      )}
    </FormElement>
  );
};
