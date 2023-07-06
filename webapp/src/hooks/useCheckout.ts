import { useState } from "react";
import { IItem } from "../interfaces/IItem";
import { buyItem, getItems } from "../apis";

type UseCheckout = {
  state: CheckoutState;
  buy: (itemId: IItem["id"]) => Promise<void>;
  getItems: () => Promise<void>;
};

type CheckoutState = {
  items: IItem[];
  balance: number;
};

export const useCheckout = (): UseCheckout => {
  const [state, setState] = useState<CheckoutState>({
    items: [],
    balance: 0,
  });

  return {
    buy: async (itemId: IItem["id"]) => {
      const updatedState = await buyItem(itemId);
      setState(updatedState.data);
    },
    getItems: async () => {
      const updatedState = await getItems();
      setState(updatedState.data);
    },
    state,
  };
};
