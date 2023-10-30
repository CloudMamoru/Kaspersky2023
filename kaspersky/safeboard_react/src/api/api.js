import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8000/api/v1/',
  withCredentials: true,
});

export const employeesAPI = {
  getEmployees(page = 1, count = 5) {
    return instance.get(`employees?page=${page}&page_size=${count}`).then((response) => {
      return response.data;
    });
  },
};
