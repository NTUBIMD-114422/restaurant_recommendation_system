import AsyncStorage from '@react-native-async-storage/async-storage';

const API_URL = 'http://127.0.0.1:8000/api'; // 請根據你的 Django 伺服器位址修改

const getAuthHeaders = async () => {
  const token = await AsyncStorage.getItem('accessToken');
  return {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`,
  };
};

export const processMessage = async (message) => {
  const headers = await getAuthHeaders();
  const response = await fetch(`${API_URL}/chat/process_message/`, {
    method: 'POST',
    headers,
    body: JSON.stringify({ message }),
  });
  return response.json();
};

export const getChatHistory = async () => {
  const headers = await getAuthHeaders();
  const response = await fetch(`${API_URL}/chat/chathistory/`, {
    method: 'GET',
    headers,
  });
  return response.json();
};
