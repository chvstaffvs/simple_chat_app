import axios from "axios";

const apiClient = axios.create({ baseURL: "http://192.168.1.5:5000" });

export const sendMessage = (username, message, client) =>
  client.send(JSON.stringify({ username, message }));

export const receiveMessages = (response) => JSON.parse(response.data);

export const assignClient = async (username) =>
  await apiClient.post(`/user/${username}`);

export const preLoadMessages = () => apiClient.get("/messages");
