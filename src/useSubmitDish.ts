import { useMutation } from "react-query";

const submitUrl =
  "https://umzzcc503l.execute-api.us-west-2.amazonaws.com/dishes/";

type SubmitResponse = {
  id: number;
  name: string;
  preparation_time: string;
} & (
  | { type: "pizza"; diameter: number; no_of_slices: number }
  | { type: "soup"; spiciness_scale: number }
  | { type: "sandwich"; slices_of_bread: number }
);

export const useSubmitDish = () => {
  const response = useMutation<{ ok: boolean; body: SubmitResponse }>(
    async (data?: any) => {
      const res = await fetch(submitUrl, {
        body: data,
        method: "POST"
      });

      return { ok: res.ok, body: await res.json() };
    }
  );

  return response;
};
