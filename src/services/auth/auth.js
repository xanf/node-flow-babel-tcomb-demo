// @flow
import { compareSync } from 'bcryptjs';
import UserCollection from '../../models/User';
type LoginParamsType = {|
  username: string,
  password: string,
|};

type LoggedInMessageType = {|
  token: string,
  user: {|
    id: number,
    CompanyId: number,
    name: string,
    type: 'admin' | 'operator' | 'user',
  |},
|}

export async function login({ username, password }: LoginParamsType): Promise<LoggedInMessageType> {
  const user = await UserCollection.findOne({ username });
  if (!user || !compareSync(password, user.password)) {
    throw new Error('Not authorized');
  }

  return {
    token: 'sometoken',
    user: user.toJSON(),
  };
};

