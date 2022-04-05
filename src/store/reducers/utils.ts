import { ActionReducerMapBuilder, AnyAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { ILoadingState } from "./types";

const isPendingAction = (action: AnyAction) => action.type.endsWith("pending");
const isFulfilledAction = (action: AnyAction) => action.type.endsWith("fulfilled");
const isCrashedAction = (action: AnyAction) => action.type.endsWith("rejected") && action?.payload?.status === 500;
const isRejectedErrorAction = (action: AnyAction) => action.type.endsWith("rejected") && ![404, 500].includes(action?.payload?.status);

const setStateMatchers = <T extends ILoadingState>(builder: ActionReducerMapBuilder<T>) =>
  builder
    .addMatcher(isPendingAction, (state) => {
      state.state = { error: false, loading: true, crash: false };
    })
    .addMatcher(isFulfilledAction, (state) => {
      state.state = { error: false, loading: false, crash: false };
    })
    .addMatcher(isCrashedAction, (state) => {
      state.state = { error: false, loading: false, crash: true };
    })
    .addMatcher(isRejectedErrorAction, (state) => {
      state.state = { error: true, loading: false, crash: false };
    });

const handleRejectValues = (name: string, action: any) => createAsyncThunk(
  name,
  async (data: object | undefined, { rejectWithValue }) => {
    try {
      return await action(data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const response = error.response;

        return rejectWithValue({
          status: response?.status,
          statusText: response?.statusText,
        });
      }

      return error;
    }
  },
);

export {
  handleRejectValues,
  setStateMatchers,

  isPendingAction,
  isFulfilledAction,
  isCrashedAction,
  isRejectedErrorAction,
};