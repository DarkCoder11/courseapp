import {PartialNextContext} from '~/types';

export type RequestOptions = Partial<{
  auth: boolean;
  ctx: PartialNextContext;
}>;
