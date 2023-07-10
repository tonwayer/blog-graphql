export type Item = {
  id: number;
  title: string;
  arthur: string;
  numberOfViews: number;
  content: string;
  description: string;
};

export const initialBalance = 20;

export const initialItems: Item[] = [
  {
    id: 0,
    title: 'Hair Shampoo',
    arthur: 'Alex',
    content: 'lorem ipsum',
    numberOfViews: 1,
    description: 'lorem',
  },
];
