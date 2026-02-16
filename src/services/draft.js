export const PRIMARY_CLIENT_EMAILS = [
  'anniemamma@gmail.com',
  'umarfaruk035@gmail.com',
  'makanakee@gmail.com',
];

export const PROFILE_AVATAR_BY_EMAIL = {
  'anniemamma@gmail.com':
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAL4guSp5kw2KNABipE5eK6BVJ7FL5OIfnb4s8VqnoWNrKmaxZ6XUPuxPqBuKK0rOAo73_Fdfd1iNqlWa6pa48TQzBGX7QVmEVYJgyAEaRJ-Z-GAdHeTGjdGVSLJGTdLaG0WZlDOFfiFF9enKfz8Kg5TJ2j6oxNlDCs-pECPK1JMrs5d4QYdssDDKnDY4PchtyWN4JvhIEkZAgyRbeZeZkEJ5_6f8kKhXrm_FTFtwuNYPqozYJ-kiR8cfFEbi-MkjCw3QvCkF19qRj9',
  'umarfaruk035@gmail.com':
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBUmi-BKyj9Dpt3fZbcfyTWfRzktBU-6KQlQGwfgvi8XSmWt7OChJ4oGi6D8h7pj9zhpmTs3LXqVcFsk-CYBnjDV-TncGjltyRWIFGcuHls1lGPMLM_3kHsAObP1DPGzDeScEKi8zA5NoOXGhSxEYVpEgucTJEM6Fb-NvuyPblqdi2NWvl6PeE8IyS6TRO2Knp79qTk7jRLJ4BDn29JFT_gEa3kUaFbeS8ahQYDuRSKjcYo47dasH2FvyXdfztgk7BQnpQA4jM68W29',
  'makanakee@gmail.com':
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAHd_ulEcTcqmgI_yZhdcdI8_De2B1dQA7M6qURNUz7iS6jdK2Nix4WVQXGblA7PfQdZMqc_Oxeu-SvTAc3XcjkIOHN4ibBp21m2fZ_zbo5dRo4LTULbCFD86Lk-3amqVlln4XqGpc6__CaOs0hXHCiXaf05_cjTe5CXeu94fzQyOcxPqJlwyMLODGrOVZYjrZa16wI0kmtJDPI1t0FZ4IGHCEqoHYlsj00jervU-fGwFF2bUvgPVR1MePNkdz5ujRxZPrYem9fh-NF',
};

export const draftAdminColumns = [
  {
    status: 'new',
    orders: [
      {
        id: '#2045',
        type: 'Table 4',
        createdAt: '12:45 PM',
        items: [
          { qty: 1, name: 'Wagyu Burger', note: 'Medium rare, No pickles' },
          { qty: 1, name: 'Truffle Fries' },
        ],
      },
      {
        id: '#2046',
        type: 'Takeout',
        createdAt: '12:48 PM',
        items: [{ qty: 2, name: 'Caesar Salad', note: 'Add Chicken' }],
      },
      {
        id: '#2047',
        type: 'Delivery',
        createdAt: '12:49 PM',
        items: [{ qty: 1, name: 'Margherita Pizza' }],
      },
    ],
  },
  {
    status: 'preparing',
    orders: [
      {
        id: '#2042',
        type: 'Table 12',
        createdAt: '12:30 PM',
        items: [
          { qty: 2, name: 'Ribeye Steak', note: 'Rare, Side of Asparagus' },
          { qty: 1, name: 'Lobster Bisque' },
        ],
      },
      {
        id: '#2044',
        type: 'Delivery',
        createdAt: '12:42 PM',
        items: [
          { qty: 1, name: 'Spicy Tuna Roll' },
          { qty: 1, name: 'Miso Soup' },
        ],
      },
    ],
  },
  {
    status: 'ready',
    orders: [
      {
        id: '#2040',
        type: 'Takeout',
        createdAt: '12:39 PM',
        items: [
          { qty: 3, name: 'Chicken Tacos' },
          { qty: 1, name: 'Guacamole & Chips' },
        ],
      },
    ],
  },
  {
    status: 'completed',
    orders: [
      {
        id: '#2038',
        type: 'Table 2',
        createdAt: '12:15 PM',
        items: ['1x Grilled Salmon', '1x Caesar Salad'],
      },
      {
        id: '#2035',
        type: 'Delivery',
        createdAt: '12:08 PM',
        items: ['2x Beef Burger', '2x Fries', '2x Coke Zero'],
      },
    ],
  },
];

export const draftCustomerOrders = [
  {
    id: 'ORD-9824',
    customer: 'Umar Faruk',
    email: 'umarfaruk035@gmail.com',
    date: 'Oct 23, 2025',
    time: '08:30 PM',
    amount: '$22.00',
    status: 'completed',
  },
  {
    id: 'ORD-9823',
    customer: 'YoungMill Makanakee',
    email: 'makanakee@gmail.com',
    date: 'Oct 23, 2025',
    time: '08:30 PM',
    amount: '$22.00',
    status: 'delivered',
  },
  {
    id: 'ORD-9827',
    customer: 'Annie Mamma',
    email: 'anniemamma@gmail.com',
    date: 'Oct 23, 2025',
    time: '08:30 PM',
    amount: '$27.00',
    status: 'cancelled',
  },
  {
    id: 'ORD-9826',
    customer: 'Cameron W.',
    email: 'cameron@example.com',
    date: 'Oct 24, 2023',
    time: '10:42 AM',
    amount: '$45.00',
    status: 'pending',
  },
  {
    id: 'ORD-9822',
    customer: 'Samantha W.',
    email: 'sam.w@example.com',
    date: 'Oct 24, 2023',
    time: '09:15 AM',
    amount: '$128.50',
    status: 'preparing',
  },
];

export const draftClientOrders = [
  {
    date: 'Oct 24, 2024 at 7:30 PM',
    total: '$42.50',
    status: 'Delivered',
    orderType: 'delivery',
    items: ['Super Food Bowl', 'Fresh Juice', 'Protein Bar'],
  },
  {
    date: 'Oct 20, 2024 at 1:15 PM',
    total: '$28.90',
    status: 'Delivered',
    orderType: 'takeaway',
    items: ['Classic Cheeseburger', 'Sweet Potato Fries'],
  },
  {
    date: 'Oct 18, 2024 at 6:45 PM',
    total: '$35.20',
    status: 'Delivered',
    orderType: 'delivery',
    items: ['Pepperoni Pizza', 'Garlic Bread'],
  },
  {
    date: 'Oct 15, 2024 at 12:30 PM',
    total: '$21.00',
    status: 'Delivered',
    orderType: 'table',
    items: ['Avocado Salad', 'Fruit Smoothie'],
  },
  {
    date: 'Oct 10, 2024 at 5:00 PM',
    total: '$26.75',
    status: 'Delivered',
    orderType: 'table',
    items: ['Fried Chicken', 'Coleslaw'],
  },
];

function parseCurrency(value) {
  if (!value) return 0;
  return Number(String(value).replace(/[^0-9.]/g, '')) || 0;
}

function parseOrderType(value) {
  const text = String(value || '').toLowerCase();
  if (text.includes('delivery')) return 'delivery';
  if (text.includes('take')) return 'takeaway';
  return 'table';
}

function parseAdminTime(value, shiftMinutes) {
  const now = new Date();
  const [rawTime, suffix] = String(value).split(' ');
  const [rawHour, rawMinute] = rawTime.split(':').map(Number);
  let hour = rawHour;

  if (suffix?.toUpperCase() === 'PM' && hour !== 12) hour += 12;
  if (suffix?.toUpperCase() === 'AM' && hour === 12) hour = 0;

  const date = new Date(now);
  date.setHours(hour || 0, rawMinute || 0, 0, 0);
  date.setMinutes(date.getMinutes() + shiftMinutes);
  return date.toISOString();
}

function parseDateTime(date, time) {
  const combined = `${date} ${time}`;
  const parsed = new Date(combined);
  if (Number.isNaN(parsed.getTime())) return new Date().toISOString();
  return parsed.toISOString();
}

function normalizeItems(items, fallbackName) {
  if (!Array.isArray(items) || !items.length) {
    return [{ qty: 1, name: fallbackName }];
  }

  return items.map((item) => {
    if (typeof item === 'string') {
      const matched = item.match(/^(\d+)x\s+(.+)$/i);
      if (matched) {
        return { qty: Number(matched[1]), name: matched[2] };
      }
      return { qty: 1, name: item };
    }

    return {
      qty: Number(item.qty || 1),
      name: item.name || fallbackName,
      note: item.note || null,
    };
  });
}

export function buildDraftOrders(availableEmails) {
  const fallbackEmails = availableEmails.length
    ? availableEmails
    : PRIMARY_CLIENT_EMAILS;
  let fallbackIndex = 0;
  const nextFallbackEmail = () => {
    const email = fallbackEmails[fallbackIndex % fallbackEmails.length];
    fallbackIndex += 1;
    return email;
  };

  const rows = [];

  draftAdminColumns.forEach((column, columnIndex) => {
    column.orders.forEach((order, orderIndex) => {
      rows.push({
        sourceId: order.id,
        email: nextFallbackEmail(),
        status: column.status,
        orderType: parseOrderType(order.type),
        totalAmount: 18 + columnIndex * 4 + orderIndex * 2.25,
        createdAt: parseAdminTime(order.createdAt, columnIndex + orderIndex),
        items: normalizeItems(order.items, `${order.type} order item`),
      });
    });
  });

  draftCustomerOrders.forEach((order) => {
    rows.push({
      sourceId: order.id,
      email: availableEmails.includes(order.email)
        ? order.email
        : nextFallbackEmail(),
      status: String(order.status || 'pending').toLowerCase(),
      orderType: 'delivery',
      totalAmount: parseCurrency(order.amount),
      createdAt: parseDateTime(order.date, order.time),
      items: [{ qty: 1, name: `${order.customer} order`, note: order.id }],
    });
  });

  draftClientOrders.forEach((order) => {
    const [datePart, timePart] = String(order.date).split(' at ');
    rows.push({
      sourceId: `UI-${order.date}`,
      email: nextFallbackEmail(),
      status: String(order.status || 'delivered').toLowerCase(),
      orderType: parseOrderType(order.orderType),
      totalAmount: parseCurrency(order.total),
      createdAt: parseDateTime(datePart || order.date, timePart || ''),
      items: normalizeItems(order.items, `${order.orderType} order item`),
    });
  });

  return rows;
}
