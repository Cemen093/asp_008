import axios from "axios";

export default class HitService {
  static async getAll(){
    const response = await axios.get(`http://cemenp93-001-site1.etempurl.com/api/WeatherForecast`);
    return response
  }
}