export const messages = [
  {
    _id: 1,
    text: '你好！想找點什麼吃的？',
    createdAt: new Date(),
    user: {
      _id: 2,
      name: '餐廳推薦小幫手',
    },
  },
    {
    _id: 2,
    text: '我想吃點辣的',
    createdAt: new Date(),
    user: {
      _id: 1,
      name: '我',
    },
  },
];
