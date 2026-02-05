const menuCategories = [
  {
    title: 'Popular Items',
    icon: 'local_fire_department',
    items: [
      {
        id: 'p1',
        name: 'Super Food Bowl',
        price: 16.0,
        description:
          'Quinoa, avocado, roasted sweet potato, kale, chickpeas, and tahini dressing.',
        image:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuAUTYKsTFLIRie5J6w0jcqJeX-8yk49eGANu7stZUzsv2UT8ruFzYjgGyeaXTaGhiJ7Sfd7xirkeE7EZLBQOZg9RhKP3NtGsem2-puJqihaCIi_ww-PATC_KnQ2IVxt2YdO9yw35b2Jk72P4-VwXiqujSMHgNgDiT7xCRULzMF8WcBe9cWAkTbge83nqbMQstXitZsqTHV8nmdpxSftw2LJXUOp8eTC5nmCUJRYMp98qoDMmH40426Eqe14QQgTjuMMab4H3KkOSHrQ',
      },
      {
        id: 'p2',
        name: 'Truffle Burger',
        price: 18.5,
        description:
          'Angus beef patty, black truffle aioli, arugula, and swiss cheese on brioche.',
        image:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuAglQm6M6wRw4yXW_1dVbduIejndomXlra7m6gjaYIrTHstBrugXf_PJGOkqQB-zSwwITxf675GCpUrNVEpX7nNZaXP0pcKDkN9VK29UuI2NexZTHz4_FJp9u5dAZjQObn7SYJUAxznttO5ZIoaBl7jZelX8oXtw0VnQpunQgT2kexAn8enVGwvs9cz3839iW53jw1fBGhJVqOUecmZvlNF5gfdaSdzpLASXWX7AV8X_qNK6SenfEFWISIlnCEo77r0Gs8dBBUmPyav',
      },
      {
        id: 'p3',
        name: 'Spicy Tuna Roll',
        price: 14.0,
        description:
          'Fresh tuna, spicy mayo, cucumber, topped with sesame seeds.',
        image:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuDMEmSdx0qVYzqageROSGhk-i66j6xZTOXmHKL7YKP3wKEl-xvgSK2XQForrf6sWL60APxY4jtVPBiNg53RdruvNGINz1kuS7PC7bGSOaxU6vufLSksi9pqkyL3Yw85lwlCvF-aIjk9JXCXPGMYhpvBIDuHmJq-58TFKXrF1ylXb_yTR90uWv8dicNq22A57rnBAFEU5csVIXa4iCcL4JFBZ0jntg6M5OeFVvBi4TgcVPvRQgvDo6fptmLhhO3XVOov0wshRXHSSwC9',
      },
      {
        id: 'p4',
        name: 'Chicken Wrap Supreme',
        price: 12.5,
        description:
          'Grilled chicken, fresh veggies, creamy sauce wrapped in warm tortilla.',
        image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950',
      },
    ],
  },

  {
    title: 'Main Courses',
    icon: 'restaurant',
    items: [
      {
        id: 'm1',
        name: 'Pan Seared Salmon',
        price: 26.0,
        description:
          'Atlantic salmon, asparagus, lemon butter sauce, and roasted potatoes.',
        image:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuBrLsBeWDrle9N7B6ckPA7MsDk7rgFRDzTFJuu1eZLf1VyHFc45JokLK-_kTNygIqQwXxF4bez0dvS_kW6T7YEiYu_XbpP1j05BikrqilmL9TuKhHjdZ6aHfKrYdz2xyjF1wSPKG8q6MnJa6YvPg6G_0KBQSeKqldfSk_8j8peJS4QuOIgpO24IQLS6rkdzsKkx-6DVqK-VLNrcSNzARAzK2DZS8isHVrgI4zKbSyiBmT0Rh4xLlyy-Bpsmx1P-0gxIICtQ_o5ESF53',
      },
      {
        id: 'm2',
        name: 'Chicken Pesto Pasta',
        price: 21.0,
        description:
          'Grilled chicken breast, fresh basil pesto, cherry tomatoes, parmesan.',
        image:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuCw7tqMObESJG7UEE1MsFR7Lx0DJna43pt89yhiQjTEHkereM-IuAdsDH5C9bakNe1CRItMXU6H9tq0c0fI-bZijoIN9Wii3IA1R34LyS-tvBBZtkaNO0Ve_PU2s_Pb1pPqs5qHFNsu9bsr6o6bRYdwMFIBf_g_CZkFOHhhuJ89HuIdIa54-vjQHlET5zxM0uhUm-b86qbhSDg5YWcQXovCn8H2m3BFX8fyakLNMYwp_Y_vp_q45KDnMSvu75_i4rUqVnmcQ5oU0Oc-',
      },
      {
        id: 'm3',
        name: 'Crispy Duck Leg',
        price: 28.0,
        description:
          'Confit duck leg, orange glaze, mashed sweet potato, green beans.',
        image:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuAM312rnZwq_qnxZrnY5a6vbKWQRILMwIdrC6U5WsAZEKQb6eqMa62PeF3qHcvBjBNN74pCMpWqBFxq8_oTsM3HIUkDqf_X94BmuOgkRY85mH5H2RjIkHJQLjYtKp74kuAQ66CmwmAe9vD0gZ4aJC-pbkQJnpYZCy5iQ3JkQYjs07I0vo1RvHIiH-UnahiLI_bEOmYbFXK5NzLwPqJuOg_g-G6N9ExiD7q6EPfKZ3Qyf6EKLcehiKtOJFaec18LBnoQ4r73y2Z23pge',
      },
      {
        id: 'm4',
        name: 'Grilled Ribeye Steak',
        price: 32.0,
        description:
          'Juicy ribeye steak, peppercorn sauce, grilled vegetables.',
        image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e',
      },
    ],
  },

  {
    title: 'Desserts',
    icon: 'cake',
    items: [
      {
        id: 'd1',
        name: 'Molten Chocolate Cake',
        price: 9.0,
        description:
          'Rich dark chocolate cake with molten center, vanilla ice cream.',
        image:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuARbLl6fo-O9CoAA7NJQnDY5fde0CL4SG9CtGGi5-3hiS0SWg1Mh5LyvuSFTs2HvyQ9cSgXIBgxKwntQkCqq1mUyUxY6wLw95WchfPYbQnFfHH571j4TVqKF5MH8OvHLTsv5PJRXvA3TzDAD6NFdiO2jqpqct3VknqTSQmR2UZVkaRYMf07N_J253LlogjWwi9c6XKN_LgE33FAtpThD2Rs4KaphZ_LN2fNKhOc1EwISoHFQu-DYgcZt0yqLuhpB2FQ3C_uG7o_KROy',
      },
      {
        id: 'd2',
        name: 'Zesty Lemon Tart',
        price: 8.0,
        description: 'Classic french lemon tart with meringue topping.',
        image:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuC8phVkw3lFOBs5aeh3cGf1e1tngSbWKuOTcdNW0yBQd6ViKuKqRNHBARMdgpR7fMco-bjnh3haPorQE2PwS5af-M0gS1P6cwSbItkHnbHoX_oyRnyfNOq4A42C-J5KGHHpZ0IssBd6-v19CLjqCllz7cMbHBKfwprEFfuHHnmsjoLBAW0jnu16A_WyWA0031bslV_tnhkzFhnguy9lv_ABpR2zHcOYZhS-ix6tOi3dijiLL1DhoM184nfeEox2SlyHPdao_KsgvEMf',
      },
      {
        id: 'd3',
        name: 'Strawberry Cheesecake',
        price: 10.0,
        description: 'Creamy cheesecake topped with strawberry glaze.',
        image:
          'https://images.unsplash.com/photo-1619985632461-f33748ef8f3e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fFN0cmF3YmVycnklMjBDaGVlc2VjYWtlfGVufDB8fDB8fHww',
      },
      {
        id: 'd4',
        name: 'Caramel Brownie',
        price: 7.5,
        description: 'Chocolate brownie drizzled with salted caramel sauce.',
        image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c',
      },
    ],
  },
];

export default menuCategories;
