import axios from "axios";

const API_URL = "http://127.0.0.1:8000/auth";

export const registerUser = async (username, password) => {
    return axios.post(`${API_URL}/signupnow/`, { username, password });
};

export const loginUser = async (username, password) => {
    return axios.post(`${API_URL}/signin/`, { username, password });
};
