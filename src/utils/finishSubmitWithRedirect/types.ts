export type ResponseType = {
  payload: unknown;
  meta: {
    requestStatus: string;
  };
};

export type SetErrors = (errors: string[]) => void;
