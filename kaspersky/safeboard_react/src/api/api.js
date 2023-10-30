import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8000/api/v1/',
});

// export const employeesAPI = {
//   getEmployees(page = 1, count = 5) {
//     return instance.get(`employees/?page=${page}&page_size=${count}`).then((response) => {
//       return response.data;
//     });
//   },
// };

export const employeesAPI = {
  getEmployees() {
    return instance.get(`employees/`).then((response) => {
      return response.data;
    });
  },
};
