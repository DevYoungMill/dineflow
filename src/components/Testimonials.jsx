const reviews = [
  {
    name: 'Sarah Jenkins',
    role: 'Owner, Bistro 52',
    quote:
      'DineFlow revolutionized our takeout business. Revenue is up 30% in just two months since implementing the smart menu.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBn1M-OCIEm8kqAnYK_Y3w4gJtcK7sHCERA-0IrCfviEwFDRiDaLa6C7TFGzzo7Ep1jqbFreN5peVdmXLovXZ8QwFfVNbY6UkjCoHW8Ibs8N8_N3vPBy7_xXqOviwikmINUWhsALnnZC6PeNk82OMqi6da_QLeJ4CL-VIVEULlhizqKKcdBb8wJd4W2nOp8JMtcopLPc0io2jaIX3LMZOm-wqQhr4OcNKeicDPfOrN7jWDtQ3PXDe8i0ng429KmIUaaFMRyToUT7eGS',
  },
  {
    name: 'Mike Ross',
    role: 'Manager, The Grill',
    quote:
      'The kitchen display system is a lifesaver during rush hour. No more lost tickets or confused chefs.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAHd_ulEcTcqmgI_yZhdcdI8_De2B1dQA7M6qURNUz7iS6jdK2Nix4WVQXGblA7PfQdZMqc_Oxeu-SvTAc3XcjkIOHN4ibBp21m2fZ_zbo5dRo4LTULbCFD86Lk-3amqVlln4XqGpc6__CaOs0hXHCiXaf05_cjTe5CXeu94fzQyOcxPqJlwyMLODGrOVZYjrZa16wI0kmtJDPI1t0FZ4IGHCEqoHYlsj00jervU-fGwFF2bUvgPVR1MePNkdz5ujRxZPrYem9fh-NF',
  },
  {
    name: 'Emily Chen',
    role: 'Founder, Noodle House',
    quote:
      'Best investment we made this year. The delivery tracking is flawless and customers love the updates.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA6hfsXpR3kZbmZoAIDJDHw1bGxkYOszLwgHTImbJ6AavAAdUtB-U_kVehss8VjLbFlf6mwgMp0WiuI2w4Iql3EkoOpb-wC31GVkMpxKXgyWHwxDTqhO4OKWF2yjc3g82XEy17Sf2quSFDkp2etgbB9A_R4JUpflNLM9qK8sylaXIqILG9ySb6dADmuG3vRL0BNSjZ1aqEUwJ_f1NoMWZJCqXRjhCYiNEjWR2FZpOmgdC1AdANXJ9OotlWOupgpokMlNycImpcx3cKI',
  },
];

export default function Testimonials() {
  return (
    <section className="px-4 lg:px-10 py-20 bg-white dark:bg-surface-dark border-t border-gray-100 dark:border-white/5 flex justify-center">
      <div className="w-full">
        {/* Centered Title */}
        <h2 className="font-heading text-secondary dark:text-white text-3xl font-bold text-center mb-12">
          Loved by Restaurant Owners
        </h2>

        {/* Slider */}
        <div className="flex gap-6 overflow-x-auto pb-6 scroll-smooth custom-scrollbar">
          {reviews.map((review, i) => (
            <div
              key={i}
              className="min-w-[320px] md:min-w-[400px] bg-background-light dark:bg-background-dark p-8 rounded-2xl border border-gray-100 dark:border-white/5"
            >
              <p className="text-secondary dark:text-gray-300 text-lg font-medium italic mb-6">
                “{review.quote}”
              </p>

              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${review.image})` }}
                />
                <div>
                  <p className="font-bold text-secondary dark:text-white">
                    {review.name}
                  </p>
                  <p className="text-sm text-secondary/60 dark:text-gray-500">
                    {review.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
