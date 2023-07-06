export type IItem = {
  /**
   * The db id of the item.
   */
  id: number;

  /**
   * In USD
   */
  price: number;

  /**
   * Display to the user
   */
  name: string;

  /**
   * amount remaining in inventory
   */
  inventory: number;
};
