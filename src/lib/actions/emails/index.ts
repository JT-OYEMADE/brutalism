import client from 'lib/axios';

export const fetchEmails = async (params: Record<string, any>) => {
  try {
    const { data } = await client.get(`/emails`, {
      params,
    });
    return Promise.resolve(data);
  } catch (error) {
    return Promise.reject(error);
  }
};
