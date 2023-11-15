import crypto from 'crypto';
import type {NextApiRequest, NextApiResponse} from 'next';

import {IUser} from '~/types';

type ResponseData = Partial<{
  user: IUser;
  token: string;
  errors: string[];
}>;

export default function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  if (req.method === 'POST') {
    if (req.body.user.email === 'test@gmail.com') {
      res.status(400).json({
        errors: ['test@gmail.com already started course'],
      });
    } else {
      res.status(200).json({
        user: req.body.user,
        token: crypto.randomBytes(64).toString('hex'),
      });
    }
  }
}
