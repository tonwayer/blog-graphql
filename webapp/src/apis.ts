import axios from "axios";

export const getItems = () => axios.get("http://localhost:8000/items");

export const buyItem = (itemId: number) =>
  axios({
    method: 'post',
    url: `http://localhost:8000/items`,
    data: {
      itemId,
    },
  });
