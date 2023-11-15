import type {GetServerSidePropsContext} from 'next';

export type VoidCallback = () => void;

export type PartialNextContext = Partial<{
  req: GetServerSidePropsContext['req'];
  res: GetServerSidePropsContext['res'];
}>;
