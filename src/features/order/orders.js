export const columns = [
  {
    id: 'new',
    title: 'New',
    status: 'new',
    count: 3,
    orders: [
      {
        id: '#2045',
        type: 'Table 4',
        icon: 'table_restaurant',
        time: '02:15',
        createdAt: '12:45 PM',
        items: [
          { qty: 1, name: 'Wagyu Burger', note: 'Medium rare, No pickles' },
          { qty: 1, name: 'Truffle Fries' },
        ],
      },
      {
        id: '#2046',
        type: 'Takeout',
        icon: 'shopping_bag',
        time: '00:45',
        createdAt: '12:48 PM',
        items: [{ qty: 2, name: 'Caesar Salad', note: 'Add Chicken' }],
      },
      {
        id: '#2047',
        type: 'Delivery',
        icon: 'two_wheeler',
        time: '00:10',
        createdAt: '12:49 PM',
        items: [{ qty: 1, name: 'Margherita Pizza' }],
      },
    ],
  },

  {
    id: 'preparing',
    title: 'Preparing',
    status: 'preparing',
    count: 2,
    orders: [
      {
        id: '#2042',
        type: 'Table 12',
        icon: 'table_restaurant',
        time: '18:20',
        createdAt: '12:30 PM',
        warning: true,
        items: [
          { qty: 2, name: 'Ribeye Steak', note: 'Rare, Side of Asparagus' },
          { qty: 1, name: 'Lobster Bisque' },
        ],
      },
      {
        id: '#2044',
        type: 'Delivery',
        icon: 'two_wheeler',
        time: '05:12',
        createdAt: '12:42 PM',
        items: [
          { qty: 1, name: 'Spicy Tuna Roll' },
          { qty: 1, name: 'Miso Soup' },
        ],
      },
    ],
  },

  {
    id: 'ready',
    title: 'Ready',
    status: 'ready',
    count: 1,
    orders: [
      {
        id: '#2040',
        type: 'Takeout',
        icon: 'shopping_bag',
        status: 'Done',
        totalTime: '14m',
        items: [
          { qty: 3, name: 'Chicken Tacos' },
          { qty: 1, name: 'Guacamole & Chips' },
        ],
      },
    ],
  },

  {
    id: 'completed',
    title: 'Completed',
    status: 'completed',
    count: 14,
    orders: [
      {
        id: '#2038',
        type: 'Table 2',
        icon: 'table_restaurant',
        createdAt: '12:15 PM',
        totalTime: '15m Prep',
        items: ['1x Grilled Salmon', '1x Caesar Salad'],
      },
      {
        id: '#2035',
        type: 'Delivery',
        icon: 'two_wheeler',
        createdAt: '12:08 PM',
        totalTime: '22m Prep',
        items: ['2x Beef Burger', '2x Fries', '2x Coke Zero'],
      },
    ],
  },
];
