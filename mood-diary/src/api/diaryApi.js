import axios from 'axios';

const BASE_URL = 'https://6818d7905a4b07b9d1d10d74.mockapi.io/entries';

export const getEntries = () => axios.get(BASE_URL);
export const getEntryById = (id) => axios.get(`${BASE_URL}/${id}`);
export const createEntry = (data) => axios.post(BASE_URL, data);
export const updateEntry = (id, data) => axios.put(`${BASE_URL}/${id}`, data);
export const deleteEntry = (id) => axios.delete(`${BASE_URL}/${id}`);
