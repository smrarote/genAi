import axios from 'axios';

const BASE_URL = "http://localhost:8090/api/v1";

const UserService = {
  registerUser: (formData) => {
    return axios.post(`${BASE_URL}/register`, formData);
  },

  loginUser: (formData) => {
    return axios.post(`${BASE_URL}/login`, formData);
  },

  sendPasswordChangeRequest: (formData) => {
    return axios.post(`${BASE_URL}/change-password`, formData);
  },

  sendOtp: (formData) => {
    return axios.post(`${BASE_URL}/send-otp`, formData);
  },

  verifyOtp: (formData) => {
    return axios.post(`${BASE_URL}/verify-otp`, formData);
  },

  forgotPassword: (formData) => {
    return axios.post(`${BASE_URL}/forgot-password`, formData);
  }


};

export default UserService;
