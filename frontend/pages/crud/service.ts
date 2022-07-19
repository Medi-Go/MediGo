import axios from 'axios';

export type Item = {
  id: number;
  title: string;
  body: string;
};

export const apiClient = axios.create({
  baseURL: 'http://localhost:8080/test/post',
  headers: { withCredentials: true },
});

export const getItemById = async (id: any) => {
  const response = await apiClient.get(`/${id}`);
  return response.data;
};

export const createItem = async ({ id, title, body }: Item) => {
  const response = await apiClient.post('/', {
    body,
    title,
    id,
  });
  console.log('post');
  console.log(response.data);
  return response.data;
};

export const deleteById = async (id: number) => {
  const response = await apiClient.delete(`/${id}`);
  return response.data;
};
