import axios from "axios";

const base_URL =
  "https://api.spoonacular.com/recipes/complexSearch?apiKey=a7aa2f7b1dd041ee9079fd3f6f32cd61/";

export const instance = axios.create({
  baseURL: base_URL,
});
