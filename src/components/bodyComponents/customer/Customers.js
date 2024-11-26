import productList from "../inventory/productList";

const customers = [
  {
    id: 1,
    firstName: "John",
    lastName: "Dan",
    position: "Software Engineer",
    mobile: "+254722333990",
    orders: [
      {
        id: 1,
        products: [
          { quantity: 5, product: productList[0] },
          { quantity: 5, product: productList[1] },
          { quantity: 5, product: productList[2] },
        ],
      },
    ],
  },
  {
    id: 2,
    firstName: "John",
    lastName: "Doe",
    position: "Software Engineer",
    mobile: "+254712345678",
    orders: [
      {
        id: 1,
        products: [
          { quantity: 5, product: productList[0] },
          { quantity: 5, product: productList[1] },
          { quantity: 5, product: productList[2] },
        ],
      },
    ],
  },
  {
    id: 3,
    firstName: "Andrey",
    lastName: "Zack",
    position: "Software Engineer",
    mobile: "+254751886151",
    orders: [
      {
        id: 1,
        products: [
          { quantity: 5, product: productList[0] },
          { quantity: 5, product: productList[1] },
          { quantity: 5, product: productList[2] },
        ],
      },
    ],
  },
  {
    id: 4,
    firstName: "Antony",
    lastName: "Matt",
    position: "Software Engineer",
    mobile: "+25476665",
    orders: [
      {
        id: 1,
        products: [
          { quantity: 5, product: productList[0] },
          { quantity: 5, product: productList[1] },
          { quantity: 5, product: productList[2] },
        ],
      },
    ],
  },
  {
    id: 5,
    firstName: "Pope",
    lastName: "Fartis",
    position: "Software Engineer",
    mobile: "+212 6 51 88 61 51",
    orders: [
      {
        id: 1,
        products: [
          { quantity: 5, product: productList[0] },
          { quantity: 5, product: productList[1] },
          { quantity: 5, product: productList[2] },
        ],
      },
    ],
  },
  {
    id: 6,
    firstName: "Adani",
    lastName: "Den",
    position: "Software Engineer",
    mobile: "+212 6 51 88 61 51",
    orders: [
      {
        id: 1,
        products: [
          { quantity: 5, product: productList[0] },
          { quantity: 5, product: productList[1] },
          { quantity: 5, product: productList[2] },
        ],
      },
    ],
  },
  {
    id: 7,
    firstName: "Sam",
    lastName: "Zakayo",
    position: "Software Engineer",
    mobile: "+212 6 51 88 61 51",
    orders: [
      {
        id: 1,
        products: [
          { quantity: 5, product: productList[0] },
          { quantity: 5, product: productList[1] },
          { quantity: 5, product: productList[2] },
        ],
      },
    ],
  },
];
export default customers;
