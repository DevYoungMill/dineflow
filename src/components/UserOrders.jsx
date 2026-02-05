import Button from './Button';

const orders = [
  {
    id: 1,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAJzYe8XwWwJhf4Ovy3mACJAi75gSQrF8Zd4-Dcq9uCsNhxpMEhwHMmXPFzUkN4xpZDbXPrE6LT8KAgRQApW1u3byfCvWrUaXl-loEu60EyhfiAqWXXPoSF6x5VhlwTXX1fFt_SwHMoNnwnXNMmnw9y6C0cprNvh2XEoKx--E18B-EvYubm07fDPdwbzCRnHlZ-ouuOYIgDzBKLDpTVu0tSs84kBNBSH8ifR_Du7DxrvjUUjYsp3kklLlrIGMAEdizobevA0DnEcT84',
    date: 'Oct 24, 2024 at 7:30 PM',
    items: ['Super Food Bowl', 'Fresh Juice', 'Protein Bar'],
    total: '$42.50',
    status: 'Delivered',
  },
  {
    id: 2,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAHd_ulEcTcqmgI_yZhdcdI8_De2B1dQA7M6qURNUz7iS6jdK2Nix4WVQXGblA7PfQdZMqc_Oxeu-SvTAc3XcjkIOHN4ibBp21m2fZ_zbo5dRo4LTULbCFD86Lk-3amqVlln4XqGpc6__CaOs0hXHCiXaf05_cjTe5CXeu94fzQyOcxPqJlwyMLODGrOVZYjrZa16wI0kmtJDPI1t0FZ4IGHCEqoHYlsj00jervU-fGwFF2bUvgPVR1MePNkdz5ujRxZPrYem9fh-NF',
    date: 'Oct 20, 2024 at 1:15 PM',
    items: ['Classic Cheeseburger', 'Sweet Potato Fries'],
    total: '$28.90',
    status: 'Delivered',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1601924582975-7aa1d8f4f8c6',
    date: 'Oct 18, 2024 at 6:45 PM',
    items: ['Pepperoni Pizza', 'Garlic Bread'],
    total: '$35.20',
    status: 'Delivered',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1551218808-94e220e084d2',
    date: 'Oct 15, 2024 at 12:30 PM',
    items: ['Avocado Salad', 'Fruit Smoothie'],
    total: '$21.00',
    status: 'Delivered',
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec',
    date: 'Oct 10, 2024 at 5:00 PM',
    items: ['Fried Chicken', 'Coleslaw'],
    total: '$26.75',
    status: 'Delivered',
  },
];

function UserOrders({ limit }) {
  const visibleOrders = limit ? orders.slice(0, limit) : orders;

  return (
    <div className="flex flex-col gap-4">
      {visibleOrders.map((order) => {
        const [mainItem, ...otherItems] = order.items;

        return (
          <div
            key={order.id}
            className="bg-white dark:bg-surface-dark p-4 md:p-6 rounded-2xl border border-gray-100 dark:border-white/5 shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row gap-6 items-start md:items-center group"
          >
            {/* Image */}
            <div
              className="size-20 md:size-24 rounded-xl bg-gray-100 shrink-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${order.image})` }}
            />

            {/* Info */}
            <div className="grow">
              <div className="flex flex-wrap items-center justify-between mb-1">
                {/* Main Item as Title */}
                <h4 className="font-heading font-bold text-lg text-secondary dark:text-white">
                  {mainItem}
                </h4>

                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 text-xs font-bold">
                  <span className="material-symbols-outlined text-[14px]">
                    check_circle
                  </span>
                  {order.status}
                </span>
              </div>

              <p className="text-sm text-secondary/60 dark:text-gray-400 mb-2">
                {order.date} • {order.items.length} items
              </p>

              <div className="flex flex-wrap gap-2 mb-3">
                {otherItems.slice(0, 2).map((item, index) => (
                  <span
                    key={index}
                    className="text-xs px-2 py-1 rounded bg-gray-100 dark:bg-white/5 text-secondary/70 dark:text-gray-300"
                  >
                    {item}
                  </span>
                ))}

                {otherItems.length > 2 && (
                  <span className="text-xs px-2 py-1 rounded bg-gray-100 dark:bg-white/5 text-secondary/70 dark:text-gray-300">
                    +{otherItems.length - 2} more
                  </span>
                )}
              </div>
            </div>

            {/* Price & Actions */}
            <div className="flex flex-row md:flex-col items-center md:items-end gap-3 md:gap-4 w-full md:w-auto justify-between md:justify-center">
              <span className="font-bold text-lg text-secondary dark:text-white">
                {order.total}
              </span>

              <div className="flex gap-2">
                <button className="px-4 py-2 rounded-lg border border-gray-200 dark:border-white/10 text-sm font-semibold hover:bg-gray-50 dark:hover:bg-white/5 text-secondary dark:text-white">
                  Help
                </button>

                <button className="px-4 py-2 rounded-lg bg-primary text-white text-sm font-semibold hover:bg-primary/90 shadow-lg shadow-primary/20">
                  Reorder
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default UserOrders;
