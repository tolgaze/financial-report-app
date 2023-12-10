import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getAuth } from "firebase/auth";

export const priceApi = createApi({
  baseQuery: fetchBaseQuery({
    async prepareHeaders() {
      const idToken = await getAuth().currentUser?.getIdToken();
      const headers = new Headers();
      headers.set("Content-Type", "application/x-www-form-urlencoded");
      headers.set("Authorization", `Bearer ${idToken}`);

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getPrices: builder.query<any, void>({
      query: () => ({
        url: "http://localhost:8080/",
        // url: "https://financial-report-bff-jhribh73wq-ew.a.run.app/",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetPricesQuery } = priceApi;
