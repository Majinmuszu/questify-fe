import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const questifyApi = createApi({
  reducerPath: "questify",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://questify-pl.herokuapp.com/api/",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().authToken;
      if (token) {
        console.log(token);
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["Cards", "Users"],
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => `users`,
      providesTags: ["Users", "Cards"],
    }),

    registerUser: builder.mutation({
      query: (user) => ({
        // example user = {
        //  email: "example@mail.com",
        //  password: "examplepassword123"
        // }
        url: `users/signup`,
        method: "POST",
        body: user,
      }),
      invalidatesTags: ["Users", "Cards"],
    }),

    loginUser: builder.mutation({
      // example is the same as in register
      query: (user) => ({
        url: `users/login`,
        method: "POST",
        body: user,
      }),
      invalidatesTags: ["Users", "Cards"],
    }),

    logoutUser: builder.query({
      query: () => `users/logout`,
      providesTags: ["Users", "Cards"],
    }),

    getCurrentUser: builder.query({
      query: () => `users/logout`,
      providesTags: ["Users", "Cards"],
    }),

    getCards: builder.query({
      query: () => `card`,
      providesTags: ["Cards"],
    }),

    addCard: builder.mutation({
      //                   Here example is the same as below
      query: (card) => ({
        //                                |A|
        url: `card`, //                 __|R|__
        method: "POST", //             \   R  /
        body: card, //                  \  O /
      }), //                             \ W/
      invalidatesTags: ["Cards"], //      \/ (XD)
    }),

    // cardID is everytime STRING type

    updateCard: builder.mutation({
      query: (cardID, card) => ({
        //example card = {
        //  title: "example title",
        //  difficulty: "easy"/"normal"/"hard",
        //  category: "stuff"/"family"/"health"/"learning"/"leisure"/"work",
        //  date: "2029-12-31",  (example date)
        //  time: "20:30", (example time)
        //  type: "task"/"challange"
        // }
        url: `card/${cardID}`,
        method: "PATCH",
        body: card,
      }),
      invalidatesTags: ["Cards"],
    }),

    updateCardStatus: builder.mutation({
      query: (cardID, isDone) => ({
        // example isDone = {isDone: true/false}
        url: `card/complete/${cardID}`,
        method: "PATCH",
        body: isDone,
      }),
      invalidatesTags: ["Cards"],
    }),

    deleteCard: builder.mutation({
      query: (cardID) => ({
        url: `card/${cardID}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Cards"],
    }),
  }),
});

const {
  useGetUsersQuery,
  useRegisterUserMutation,
  useLoginUserMutation,
  useLogoutUserQuery,
  useGetCurrentUserQuery,
  useGetCardsQuery,
  useAddCardMutation,
  useUpdateCardMutation,
  useUpdateCardStatusMutation,
  useDeleteCardMutation,
} = questifyApi;

export {
  questifyApi,
  useGetUsersQuery,
  useRegisterUserMutation,
  useLoginUserMutation,
  useLogoutUserQuery,
  useGetCurrentUserQuery,
  useGetCardsQuery,
  useAddCardMutation,
  useUpdateCardMutation,
  useUpdateCardStatusMutation,
  useDeleteCardMutation,
};
