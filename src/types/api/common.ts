export type AxiosRequestConfigParams = {
  [key: string]: unknown;
};

export interface IDbRecord {
  id: string;
  createdAt: string;
  updatedAt: string;
}

export interface IErrorResponse {
  errors: string[];
}

export interface ISuccessResponse {
  success: boolean;
}
