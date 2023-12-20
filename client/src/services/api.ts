import { API_BASE_URL } from "@/constants/config"

const api = {
  actuator: {
    get: `${API_BASE_URL}/actuator`
  },
  me: `${API_BASE_URL}/api/v1/me`,
  postFile: `${API_BASE_URL}/api/v1/postFile`,
  login: `${API_BASE_URL}/saml2/authenticate/altima-sso`,
  request: {
    getAll: `${API_BASE_URL}/api/requests`,
    getUpCsv: `${API_BASE_URL}/api/v1/postFile`
  }
}

export default api
