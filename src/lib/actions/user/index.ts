import client from '../../axios';
import type { InitiateSessionProps } from './models';

export const login = async (props: InitiateSessionProps) => {
  try {
    const { data } = await client.post('auth/login', props);

    return Promise.resolve(data);
  } catch (error) {
    return Promise.reject(error);
  }
};
