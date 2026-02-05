import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Button from '../components/Button';

function About() {
  return (
    <>
      <Navbar />
      <section className="px-4 lg:px-10 py-20 lg:py-32 flex justify-center bg-white dark:bg-background-dark relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-linear-to-l from-primary/5 to-transparent pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-linear-to-tr from-primary/5 to-transparent pointer-events-none"></div>

        <div className="w-full text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-6">
            Our Mission
          </div>

          <h1 className="font-heading text-secondary dark:text-white text-3xl sm:text-4xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight mb-8">
            Revolutionizing the{' '}
            <span className="text-primary">Dining Experience</span> for
            Everyone.
          </h1>

          <p className="text-secondary/70 dark:text-gray-300 text-base sm:text-xl leading-relaxed mx-auto">
            We're on a journey to bridge the gap between world-class culinary
            talent and cutting-edge technology, making dining more seamless,
            enjoyable, and efficient.
          </p>
        </div>
      </section>

      <section className="px-4 lg:px-10 py-20 flex justify-center bg-background-light dark:bg-surface-dark/30">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="rounded-2xl overflow-hidden shadow-2xl aspect-4/5 lg:aspect-square relative">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: "url('/hero.png')",
              }}
            ></div>
            <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
          </div>

          <div className="flex flex-col gap-8">
            <h2 className="font-heading text-secondary dark:text-white text-3xl md:text-4xl font-bold">
              The DineFlow Story
            </h2>

            <div className="space-y-6 text-secondary/70 dark:text-gray-300 text-lg leading-relaxed">
              <p>
                Founded in 2021, DineFlow began in a small kitchen where we saw
                firsthand the friction between great service and outdated
                systems.
              </p>
              <p>
                What started as a simple QR menu prototype has evolved into a
                comprehensive operating system trusted by thousands worldwide.
              </p>
              <p>
                Today, we're proud to support the dreamers, the chefs, and the
                restaurateurs who keep our communities vibrant.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 lg:px-10 py-24 flex justify-center bg-white dark:bg-background-dark">
        <div className="w-full">
          <div className="text-center mb-16">
            <h2 className="font-heading text-secondary dark:text-white text-3xl md:text-4xl font-bold mb-4">
              Our Core Values
            </h2>
            <p className="text-secondary/60 dark:text-gray-400 mx-auto">
              The principles that guide every feature we build and every
              partnership we form.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 md:p-10 rounded-2xl bg-background-light dark:bg-surface-dark border border-gray-100 dark:border-white/5 transition-all hover:shadow-xl hover:shadow-primary/5">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 md:mb-8">
                <span className="material-symbols-outlined text-4xl!">
                  lightbulb
                </span>
              </div>
              <h3 className="font-heading text-lg md:text-xl font-bold text-secondary dark:text-white mb-3 md:mb-4">
                Unrelenting Innovation
              </h3>
              <p className="text-secondary/60 dark:text-gray-400 leading-relaxed text-sm md:text-base">
                We never settle for the status quo. We constantly push the
                boundaries of what's possible in hospitality technology.
              </p>
            </div>
            <div className="p-8 md:p-10 rounded-2xl bg-background-light dark:bg-surface-dark border border-gray-100 dark:border-white/5 transition-all hover:shadow-xl hover:shadow-primary/5">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 md:mb-8">
                <span className="material-symbols-outlined text-4xl!">
                  verified_user
                </span>
              </div>
              <h3 className="font-heading text-lg md:text-xl font-bold text-secondary dark:text-white mb-3 md:mb-4">
                Uptime Reliability
              </h3>
              <p className="text-secondary/60 dark:text-gray-400 leading-relaxed text-sm md:text-base">
                Your business depends on us. We build industrial-grade systems
                that perform flawlessly during the busiest dinner rushes.
              </p>
            </div>
            <div className="p-8 md:p-10 rounded-2xl bg-background-light dark:bg-surface-dark border border-gray-100 dark:border-white/5 transition-all hover:shadow-xl hover:shadow-primary/5">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 md:mb-8">
                <span className="material-symbols-outlined text-4xl!">
                  favorite
                </span>
              </div>
              <h3 className="font-heading text-lg md:text-xl font-bold text-secondary dark:text-white mb-3 md:mb-4">
                Customer-First
              </h3>
              <p className="text-secondary/60 dark:text-gray-400 leading-relaxed text-sm md:text-base">
                We listen. Every update we ship is rooted in direct feedback
                from the restaurant owners and staff who use DineFlow daily.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 lg:px-10 py-24 flex justify-center">
        <div className="w-full">
          <div className="bg-secondary rounded-3xl p-12 lg:p-20 relative overflow-hidden text-center text-white">
            <div className="absolute inset-0 bg-linear-to-br from-primary/30 via-transparent to-transparent pointer-events-none"></div>

            <div className="relative z-10">
              <h2 className="font-heading text-2xl md:text-4xl font-bold mb-6">
                Want to be part of the future?
              </h2>

              <p className="text-gray-300 text-base sm:text-lg md:text-xl mb-10 mx-auto">
                We're always looking for talented individuals and visionary
                partners.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <Button size="large" type="tertiary">
                  Join Our Team
                </Button>
                <Button size="large" type="secondary">
                  Partner With Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default About;
