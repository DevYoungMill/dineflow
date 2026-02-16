import { useState } from 'react';
import { Link } from 'react-router-dom';
import { runDraftAction } from '../../services/apiOrders';

export default function AdminDashboard() {
  const [draftLoading, setDraftLoading] = useState(false);
  const [draftMessage, setDraftMessage] = useState('');

  const handleDraftAction = async () => {
    try {
      setDraftLoading(true);
      setDraftMessage('');
      const result = await runDraftAction();
      setDraftMessage(
        `Draft inserted: ${result.inserted} orders, ${result.insertedItems} items (${result.mappedProfiles} profiles).`,
      );
    } catch (error) {
      setDraftMessage(error?.message || 'Draft action failed.');
    } finally {
      setDraftLoading(false);
    }
  };

  return (
    <div className="flex-1 overflow-y-auto p-6 lg:p-10 scroll-smooth">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
        <div>
          <div className="flex items-center text-sm text-slate-500 dark:text-slate-400">
            <span>Dashboard</span>
            <span className="material-icons-round text-base mx-1">
              chevron_right
            </span>
            <span className="text-primary font-medium">Analytics</span>
          </div>
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-800 dark:text-white mb-1">
            Dashboard Overview
          </h2>
        </div>

        <div className="mt-4 md:mt-0 flex items-center space-x-3">
          <span className="text-sm text-slate-500 dark:text-slate-400">
            Date Range:
          </span>
          <div className="flex items-center bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-1.5 cursor-pointer shadow-sm">
            <span className="text-sm font-medium mr-2 dark:text-slate-200">
              Oct 1 - Oct 31
            </span>
            <span className="material-icons-round text-slate-400 text-sm">
              calendar_today
            </span>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
        {/* Total Orders */}
        <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-2xl shadow-soft border border-slate-100 dark:border-slate-800">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-slate-500 dark:text-slate-400 text-sm font-medium mb-1">
                Total Orders
              </p>
              <h3 className="text-3xl font-bold text-slate-800 dark:text-white">
                346
              </h3>
            </div>
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <span className="material-icons-round">shopping_bag</span>
            </div>
          </div>

          <div className="w-full bg-slate-100 dark:bg-slate-700 rounded-full h-1.5 mb-2">
            <div className="bg-primary h-1.5 rounded-full w-[75%]"></div>
          </div>

          <p className="text-xs text-slate-400">+12% from yesterday</p>
        </div>

        {/* Revenue */}
        <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-2xl shadow-soft border border-slate-100 dark:border-slate-800">
          <div>
            <div className="flex justify-between items-start mb-4">
              <p className="text-slate-500 dark:text-slate-400 text-sm font-medium mb-1">
                Total Revenue
              </p>
              <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                <span className="material-icons-round">payments</span>
              </div>
            </div>

            <h3 className="text-3xl font-bold text-slate-800 dark:text-white">
              $95,167.52
            </h3>
          </div>

          <div className="flex items-end space-x-1 h-8">
            {[3, 5, 4, 6, 5, 8].map((h, i) => (
              <div
                key={i}
                className={`w-1/6 bg-emerald-${200 + i * 50} rounded-t h-${h}`}
              ></div>
            ))}
          </div>
        </div>

        {/* Active Locations */}
        <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-2xl shadow-soft border border-slate-100 dark:border-slate-800">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-slate-500 dark:text-slate-400 text-sm font-medium mb-1">
                Active Locations
              </p>
              <h3 className="text-3xl font-bold text-slate-800 dark:text-white">
                12
              </h3>
            </div>
            <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
              <span className="material-icons-round">storefront</span>
            </div>
          </div>

          <div className="flex items-center text-xs text-blue-500 font-medium">
            <span className="material-icons-round text-sm mr-1">
              trending_up
            </span>
            2 New this month
          </div>
        </div>

        {/* On-Time Delivery */}
        <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-2xl shadow-soft border border-slate-100 dark:border-slate-800">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-slate-500 dark:text-slate-400 text-sm font-medium mb-1">
                On-Time Delivery
              </p>
              <h3 className="text-3xl font-bold text-slate-800 dark:text-white">
                98%
              </h3>
            </div>

            <div className="relative w-12 h-12">
              <svg className="w-full h-full transform -rotate-90">
                <circle
                  className="text-slate-100 dark:text-slate-700"
                  cx="24"
                  cy="24"
                  fill="transparent"
                  r="20"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <circle
                  className="text-primary"
                  cx="24"
                  cy="24"
                  fill="transparent"
                  r="20"
                  stroke="currentColor"
                  strokeDasharray="125.6"
                  strokeDashoffset="3.7"
                  strokeLinecap="round"
                  strokeWidth="4"
                />
              </svg>
            </div>
          </div>

          <p className="text-xs text-slate-400">Avg time: 24 mins</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2 bg-surface-light dark:bg-surface-dark rounded-2xl p-6 shadow-soft border border-slate-100 dark:border-slate-800 transition-colors">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="font-bold text-lg text-slate-800 dark:text-white">
                Sales Statistics
              </h3>
              <p className="text-xs text-slate-500">
                Revenue breakdown by category
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-4 mr-4">
                <div className="flex items-center">
                  <span className="w-3 h-3 rounded-full bg-primary mr-2"></span>
                  <span className="text-xs font-medium text-slate-600 dark:text-slate-400">
                    Food
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="w-3 h-3 rounded-full bg-indigo-500 mr-2"></span>
                  <span className="text-xs font-medium text-slate-600 dark:text-slate-400">
                    Beverages
                  </span>
                </div>
              </div>
              <select className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-xs rounded-lg px-2 py-1.5 focus:outline-none">
                <option>Weekly</option>
                <option>Monthly</option>
              </select>
            </div>
          </div>
          <div className="h-64 flex items-end justify-between space-x-2 md:space-x-6 px-2">
            <div className="flex flex-col items-center w-full group">
              <div className="w-full flex justify-center items-end space-x-1 h-56 relative">
                <div className="w-2 md:w-4 bg-indigo-500/80 rounded-t-md h-20 transition-all group-hover:bg-indigo-600"></div>
                <div className="w-2 md:w-4 bg-primary/80 rounded-t-md h-32 transition-all group-hover:bg-primary"></div>
              </div>
              <span className="text-xs text-slate-400 mt-2">Mon</span>
            </div>
            <div className="flex flex-col items-center w-full group relative">
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-slate-800 text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none whitespace-nowrap shadow-lg">
                Food: $1,567
              </div>
              <div className="w-full flex justify-center items-end space-x-1 h-56">
                <div className="w-2 md:w-4 bg-indigo-500/80 rounded-t-md h-24 transition-all group-hover:bg-indigo-600"></div>
                <div className="w-2 md:w-4 bg-primary/80 rounded-t-md h-40 transition-all group-hover:bg-primary"></div>
              </div>
              <span className="text-xs text-slate-400 mt-2">Tue</span>
            </div>
            <div className="flex flex-col items-center w-full group">
              <div className="w-full flex justify-center items-end space-x-1 h-56">
                <div className="w-2 md:w-4 bg-indigo-500/80 rounded-t-md h-16 transition-all group-hover:bg-indigo-600"></div>
                <div className="w-2 md:w-4 bg-primary/80 rounded-t-md h-28 transition-all group-hover:bg-primary"></div>
              </div>
              <span className="text-xs text-slate-400 mt-2">Wed</span>
            </div>
            <div className="flex flex-col items-center w-full group">
              <div className="w-full flex justify-center items-end space-x-1 h-56">
                <div className="w-2 md:w-4 bg-indigo-500/80 rounded-t-md h-32 transition-all group-hover:bg-indigo-600"></div>
                <div className="w-2 md:w-4 bg-primary/80 rounded-t-md h-48 transition-all group-hover:bg-primary"></div>
              </div>
              <span className="text-xs text-slate-400 mt-2">Thu</span>
            </div>
            <div className="flex flex-col items-center w-full group">
              <div className="w-full flex justify-center items-end space-x-1 h-56">
                <div className="w-2 md:w-4 bg-indigo-500/80 rounded-t-md h-28 transition-all group-hover:bg-indigo-600"></div>
                <div className="w-2 md:w-4 bg-primary rounded-t-md h-56 shadow-lg shadow-primary/30 transition-all"></div>
              </div>
              <span className="text-xs font-bold text-slate-800 dark:text-white mt-2">
                Fri
              </span>
            </div>
            <div className="flex flex-col items-center w-full group">
              <div className="w-full flex justify-center items-end space-x-1 h-56">
                <div className="w-2 md:w-4 bg-indigo-500/80 rounded-t-md h-12 transition-all group-hover:bg-indigo-600"></div>
                <div className="w-2 md:w-4 bg-primary/80 rounded-t-md h-24 transition-all group-hover:bg-primary"></div>
              </div>
              <span className="text-xs text-slate-400 mt-2">Sat</span>
            </div>
            <div className="flex flex-col items-center w-full group">
              <div className="w-full flex justify-center items-end space-x-1 h-56">
                <div className="w-2 md:w-4 bg-indigo-500/80 rounded-t-md h-20 transition-all group-hover:bg-indigo-600"></div>
                <div className="w-2 md:w-4 bg-primary/80 rounded-t-md h-36 transition-all group-hover:bg-primary"></div>
              </div>
              <span className="text-xs text-slate-400 mt-2">Sun</span>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <div className="bg-surface-light dark:bg-surface-dark rounded-2xl p-6 shadow-soft border border-slate-100 dark:border-slate-800 transition-colors">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-bold text-lg text-slate-800 dark:text-white">
                Best Seller Menus
              </h3>
              <button className="text-slate-400 hover:text-primary">
                <span className="material-icons-round">more_horiz</span>
              </button>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <img
                  alt="Spinach Salad"
                  className="w-14 h-14 rounded-xl object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA95be4sAS594y4Yw1JmU61IJb8NagiV_UVQhK1OwGe1aphVYzWU-yo_c1NTlBXvlONqqejxHp1xwsqQ3uzwVQhWNn-hozp1mMzJF_cDCJ9XV6ewUUpTdZy1s6dNeRaT39t6jFnhp7_EEqnJ82yjVQ54-CfV4WUpzjAR_lCDRhDHS5UnPwEUdIiGv5xqcVVa_vkt7x4G0qaipaDWj_1kvntS6V677jYoK4pSn4uL-MWvlyUCgG9E8RilIyRUjvom2_fUIkNro9Ylgwi"
                />
                <div className="flex-1">
                  <h4 className="text-sm font-bold text-slate-800 dark:text-slate-200">
                    Spinach Salad
                  </h4>
                  <p className="text-xs text-slate-500">256 orders</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-primary">$12.40</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <img
                  alt="BBQ Chicken"
                  className="w-14 h-14 rounded-xl object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDM9J4yiBU1XeErNVtybjORn6LiAM6bKaFuQ1ih9uVUfFFCaZdfi-tGWpPONRIwjpELl2jAL2L0VMMmyvQjN9nmVAuTBGd326zsOpuEP22M8L8kZoMDzjfw-_ysYFnhOTSk92pcra57Hf9QY8d_9OLXEp-EJD0Vob_T7ZhRw6SNpIovcD5piTl3pG9yo5ETz-c4rZhqDHAmeAqX-oO_CD7IEue_PPJy31nCoi9iBmnrbRVKaCriIGDzcqX4X0wCOLKM-mksnjY04qa"
                />
                <div className="flex-1">
                  <h4 className="text-sm font-bold text-slate-800 dark:text-slate-200">
                    BBQ Chicken
                  </h4>
                  <p className="text-xs text-slate-500">198 orders</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-primary">$18.50</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <img
                  alt="Veggie Bowl"
                  className="w-14 h-14 rounded-xl object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8BR96C-d8ccElPxW1qFLiMtZiilFLVMgMP_hwuuMU8Fa3MoiORUUhUAT5ohevIeOYqwotvvw1E2RzfVq1NB9Lp2d6OlpGxvvIT3n65VFd-M4zoM1JRII8nlgwt2bS4tCv6FxjkmIay84mzv9BHMQcpG6cB7lFbG6N34B6zo1nWMlofBM4KW5j3GpDTDhfwuP1H1-VYcNY53xJRw2EWjYNuWJxZKm84rzVQ4XlLtQlqU3x0AMOC5qIVvCiMex-gHeeZfioGnbgtIWR"
                />
                <div className="flex-1">
                  <h4 className="text-sm font-bold text-slate-800 dark:text-slate-200">
                    Veggie Bowl
                  </h4>
                  <p className="text-xs text-slate-500">142 orders</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-primary">$9.99</p>
                </div>
              </div>
            </div>
            <Link to="/admin/orders">
              <button className="w-full mt-6 py-2 text-sm text-primary font-semibold hover:bg-primary/5 rounded-lg transition-colors cursor-pointer">
                View All Menus
              </button>
            </Link>
          </div>
          <div className="bg-surface-light dark:bg-surface-dark rounded-2xl p-6 shadow-soft border border-slate-100 dark:border-slate-800 transition-colors h-64 relative overflow-hidden group">
            <h3 className="font-bold text-lg text-slate-800 dark:text-white mb-2 relative z-10">
              Customer Map
            </h3>
            <p className="text-xs text-slate-500 mb-4 relative z-10">
              Global Distribution
            </p>
            <div className="absolute inset-0 top-12 opacity-30 dark:opacity-20 flex items-center justify-center">
              <svg
                className="w-full h-full fill-slate-400"
                viewBox="0 0 100 50"
              >
                <path
                  d="M20,10 Q30,5 40,15 T60,20 T80,10"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="0.5"
                ></path>
                <path
                  d="M10,30 Q25,25 35,35 T65,30 T90,35"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="0.5"
                ></path>
                <circle
                  className="text-primary fill-current animate-pulse"
                  cx="35"
                  cy="18"
                  r="3"
                ></circle>
                <circle
                  className="text-primary fill-current"
                  cx="68"
                  cy="28"
                  r="2"
                ></circle>
                <circle
                  className="text-primary fill-current"
                  cx="22"
                  cy="32"
                  r="1.5"
                ></circle>
              </svg>
            </div>
            <div className="absolute bottom-6 left-6 right-6 z-10">
              <div className="flex justify-between items-center bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-3 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm">
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                  <span className="text-xs font-semibold text-slate-700 dark:text-slate-200">
                    USA
                  </span>
                </div>
                <span className="text-xs font-bold text-slate-800 dark:text-white">
                  65%
                </span>
              </div>
              <div className="mt-2 flex justify-between items-center bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-3 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm">
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-indigo-500 mr-2"></div>
                  <span className="text-xs font-semibold text-slate-700 dark:text-slate-200">
                    Europe
                  </span>
                </div>
                <span className="text-xs font-bold text-slate-800 dark:text-white">
                  22%
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-surface-light dark:bg-surface-dark rounded-2xl p-6 shadow-soft border border-slate-100 dark:border-slate-800 transition-colors">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-lg text-slate-800 dark:text-white">
              Loyal Customers
            </h3>
            <button className="text-xs bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 px-3 py-1 rounded-lg text-slate-600 dark:text-slate-300 transition-colors">
              See all
            </button>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <img
                  alt="User"
                  className="w-10 h-10 rounded-full border border-slate-200 dark:border-slate-700"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUmi-BKyj9Dpt3fZbcfyTWfRzktBU-6KQlQGwfgvi8XSmWt7OChJ4oGi6D8h7pj9zhpmTs3LXqVcFsk-CYBnjDV-TncGjltyRWIFGcuHls1lGPMLM_3kHsAObP1DPGzDeScEKi8zA5NoOXGhSxEYVpEgucTJEM6Fb-NvuyPblqdi2NWvl6PeE8IyS6TRO2Knp79qTk7jRLJ4BDn29JFT_gEa3kUaFbeS8ahQYDuRSKjcYo47dasH2FvyXdfztgk7BQnpQA4jM68W29"
                />
                <div>
                  <h5 className="text-sm font-bold text-slate-800 dark:text-white">
                    Samantha W.
                  </h5>
                  <p className="text-xs text-slate-500">42 Orders</p>
                </div>
              </div>
              <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400 cursor-pointer hover:bg-primary hover:text-white transition-colors">
                <span className="material-icons-round text-sm">email</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <img
                  alt="User"
                  className="w-10 h-10 rounded-full border border-slate-200 dark:border-slate-700"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBs302N5RkW-uiddE65kVCCvnp5SvfBasfSbubrMgUVpAq4SP6su5CPP194r55vEPClQ1BZpSk_VWx1VASFOPXfY4YTvarNFrgiY36k-0amssa7qLzJapkrznWh4RnaOWj1JimT3HOo2oVUCIfUl_sq-ShWy-FefkAiQVYl0Fi_uxRKjRc-sbRPizxYOmY95MgfG_q6kCeNw-Al57KlOp6Otu2_qYoOr-6PM98o7Cjzmj1XVG4KHkZtbIX-OdICJaO6xyn-HvsAikWD"
                />
                <div>
                  <h5 className="text-sm font-bold text-slate-800 dark:text-white">
                    Karen Hope
                  </h5>
                  <p className="text-xs text-slate-500">38 Orders</p>
                </div>
              </div>
              <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400 cursor-pointer hover:bg-primary hover:text-white transition-colors">
                <span className="material-icons-round text-sm">email</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <img
                  alt="User"
                  className="w-10 h-10 rounded-full border border-slate-200 dark:border-slate-700"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAL4guSp5kw2KNABipE5eK6BVJ7FL5OIfnb4s8VqnoWNrKmaxZ6XUPuxPqBuKK0rOAo73_Fdfd1iNqlWa6pa48TQzBGX7QVmEVYJgyAEaRJ-Z-GAdHeTGjdGVSLJGTdLaG0WZlDOFfiFF9enKfz8Kg5TJ2j6oxNlDCs-pECPK1JMrs5d4QYdssDDKnDY4PchtyWN4JvhIEkZAgyRbeZeZkEJ5_6f8kKhXrm_FTFtwuNYPqozYJ-kiR8cfFEbi-MkjCw3QvCkF19qRj9"
                />
                <div>
                  <h5 className="text-sm font-bold text-slate-800 dark:text-white">
                    Tony Soap
                  </h5>
                  <p className="text-xs text-slate-500">31 Orders</p>
                </div>
              </div>
              <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400 cursor-pointer hover:bg-primary hover:text-white transition-colors">
                <span className="material-icons-round text-sm">email</span>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-2 bg-surface-light dark:bg-surface-dark rounded-2xl p-6 shadow-soft border border-slate-100 dark:border-slate-800 transition-colors">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-lg text-slate-800 dark:text-white">
              Recent Transactions
            </h3>
            <div className="flex items-center space-x-2">
              <button className="text-slate-400 hover:text-primary">
                <span className="material-icons-round">filter_list</span>
              </button>
              <button className="text-slate-400 hover:text-primary">
                <span className="material-icons-round">more_vert</span>
              </button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="text-xs text-slate-400 border-b border-slate-100 dark:border-slate-700">
                  <th className="font-medium py-2">Order ID</th>
                  <th className="font-medium py-2">Date</th>
                  <th className="font-medium py-2">Customer</th>
                  <th className="font-medium py-2">Status</th>
                  <th className="font-medium py-2 text-right">Amount</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="group hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <td className="py-4 font-bold text-slate-700 dark:text-slate-200">
                    #9821
                  </td>
                  <td className="py-4 text-slate-500">Oct 24, 2023</td>
                  <td className="py-4 text-slate-600 dark:text-slate-300">
                    Marvin McKinney
                  </td>
                  <td className="py-4">
                    <span className="bg-emerald-100 text-emerald-600 dark:bg-emerald-900/40 dark:text-emerald-400 px-2 py-1 rounded text-xs font-bold">
                      Completed
                    </span>
                  </td>
                  <td className="py-4 text-right font-bold text-slate-700 dark:text-slate-200">
                    $45.00
                  </td>
                </tr>
                <tr className="group hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <td className="py-4 font-bold text-slate-700 dark:text-slate-200">
                    #9822
                  </td>
                  <td className="py-4 text-slate-500">Oct 24, 2023</td>
                  <td className="py-4 text-slate-600 dark:text-slate-300">
                    Esther Howard
                  </td>
                  <td className="py-4">
                    <span className="bg-yellow-100 text-yellow-600 dark:bg-yellow-900/40 dark:text-yellow-400 px-2 py-1 rounded text-xs font-bold">
                      Pending
                    </span>
                  </td>
                  <td className="py-4 text-right font-bold text-slate-700 dark:text-slate-200">
                    $22.50
                  </td>
                </tr>
                <tr className="group hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <td className="py-4 font-bold text-slate-700 dark:text-slate-200">
                    #9823
                  </td>
                  <td className="py-4 text-slate-500">Oct 23, 2023</td>
                  <td className="py-4 text-slate-600 dark:text-slate-300">
                    Cameron W.
                  </td>
                  <td className="py-4">
                    <span className="bg-red-100 text-red-600 dark:bg-red-900/40 dark:text-red-400 px-2 py-1 rounded text-xs font-bold">
                      Cancelled
                    </span>
                  </td>
                  <td className="py-4 text-right font-bold text-slate-700 dark:text-slate-200">
                    $120.00
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Temporary Draft Action (remove/comment later) */}
      <div className="fixed bottom-6 right-6 z-[60] flex flex-col items-end gap-2">
        {draftMessage ? (
          <div className="max-w-xs rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs text-slate-700 shadow-lg dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200">
            {draftMessage}
          </div>
        ) : null}

        <button
          type="button"
          onClick={handleDraftAction}
          disabled={draftLoading}
          className="rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-primary/30 transition hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {draftLoading ? 'Running...' : 'Draft Action'}
        </button>
      </div>
    </div>
  );
}
