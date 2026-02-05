export default function Footer() {
  return (
    <footer className="px-4 lg:px-10 bg-secondary dark:bg-black text-white py-16">
      <div className="mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-[28px]">
                restaurant_menu
              </span>
              <span className="font-heading font-bold text-xl">DineFlow</span>
            </div>
            <p className="text-gray-400 text-sm">
              Empowering restaurants with modern technology to serve better
              food, faster.
            </p>

            <div className="flex gap-4 mt-2">
              <a
                className="text-gray-400 hover:text-white transition-colors"
                href="#"
              >
                <span className="material-symbols-outlined">star</span>
              </a>
              <a
                className="text-gray-400 hover:text-white transition-colors"
                href="#"
              >
                <span className="material-symbols-outlined">favorite</span>
              </a>
              <a
                className="text-gray-400 hover:text-white transition-colors"
                href="#"
              >
                <span className="material-symbols-outlined">share</span>
              </a>
            </div>
          </div>

          {/* Product */}
          <div className="flex flex-col gap-3">
            <h4 className="font-bold text-white mb-2">Product</h4>
            <a
              className="text-gray-400 hover:text-primary transition-colors text-sm"
              href="#"
            >
              Features
            </a>
            <a
              className="text-gray-400 hover:text-primary transition-colors text-sm"
              href="#"
            >
              Pricing
            </a>
            <a
              className="text-gray-400 hover:text-primary transition-colors text-sm"
              href="#"
            >
              Hardware
            </a>
            <a
              className="text-gray-400 hover:text-primary transition-colors text-sm"
              href="#"
            >
              Integrations
            </a>
          </div>

          {/* Company */}
          <div className="flex flex-col gap-3">
            <h4 className="font-bold text-white mb-2">Company</h4>
            <a
              className="text-gray-400 hover:text-primary transition-colors text-sm"
              href="#"
            >
              About Us
            </a>
            <a
              className="text-gray-400 hover:text-primary transition-colors text-sm"
              href="#"
            >
              Careers
            </a>
            <a
              className="text-gray-400 hover:text-primary transition-colors text-sm"
              href="#"
            >
              Blog
            </a>
            <a
              className="text-gray-400 hover:text-primary transition-colors text-sm"
              href="#"
            >
              Contact
            </a>
          </div>

          {/* App Buttons */}
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-white mb-2">Get the App</h4>

            <button className="flex items-center gap-3 bg-white/10 hover:bg-white/20 transition-colors p-2 rounded-lg border border-white/10 w-full max-w-[180px]">
              <span className="material-symbols-outlined text-[24px]">ios</span>
              <div className="text-left">
                <div className="text-[10px] leading-tight text-gray-400">
                  Download on the
                </div>
                <div className="text-sm font-bold leading-tight">App Store</div>
              </div>
            </button>

            <button className="flex items-center gap-3 bg-white/10 hover:bg-white/20 transition-colors p-2 rounded-lg border border-white/10 w-full max-w-[180px]">
              <span className="material-symbols-outlined text-[24px]">
                android
              </span>
              <div className="text-left">
                <div className="text-[10px] leading-tight text-gray-400">
                  Get it on
                </div>
                <div className="text-sm font-bold leading-tight">
                  Google Play
                </div>
              </div>
            </button>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2024 DineFlow Inc. All rights reserved.
          </p>

          <div className="flex gap-6 text-sm text-gray-500">
            <a className="hover:text-white transition-colors" href="#">
              Privacy Policy
            </a>
            <a className="hover:text-white transition-colors" href="#">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
