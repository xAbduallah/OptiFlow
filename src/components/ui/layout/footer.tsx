'use client';
import Image from 'next/image';
import footerWatermark from '../../../../public/images/footer/Mask group.png';
export default function Footer() {
    return (
      <footer className="relative flex justify-center items-center bg-[#0F0E2C] text-neutral-50">
        {/* Decorative watermark / background image (optional) */}
        <Image
          src={footerWatermark} /* replace with your asset or remove img entirely */
          alt=""
          aria-hidden="true"
          className="pointer-events-none mx-auto select-none justify-items-center absolute inset-x-0 bottom-0 h-[200px] w-[1,439.53px] object-cover "
        />
  
        <div className="relative mx-auto max-w-7xl pb-60 px-6 py-16 lg:px-8">
          {/* Top grid */}
          <div className="flex flex-row gap-[90px] border-b border-white/10 pb-10 sm:grid-cols-2 lg:grid-cols-4">
            {/* Brand */}
            <div className="space-y-4 w-[233.18px]">
              <div className="text-xl font-extrabold tracking-tight">OptiFlow</div>
              <p className="text-zinc-100/90 leading-7">
                Simple innate summer fat appear basket his desire joy.
              </p>
  
              {/* Socials */}
              <div className="flex items-center gap-4 pt-2">
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition"
                >
                  {/* LinkedIn icon */}
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                    <path d="M4.98 3.5A2.5 2.5 0 1 1 0 3.5a2.5 2.5 0 0 1 4.98 0zM.5 8.5h4.9V24H.5zM9 8.5h4.7v2.1h.1c.7-1.3 2.5-2.8 5.1-2.8 5.5 0 6.5 3.6 6.5 8.2V24h-4.9v-6.9c0-1.7 0-3.9-2.4-3.9-2.4 0-2.8 1.9-2.8 3.8V24H9z" />
                  </svg>
                </a>
                <a
                  href="#"
                  aria-label="Messenger"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition"
                >
                  {/* Messenger icon */}
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.02 2 10.98c0 2.77 1.33 5.25 3.5 6.95V22l3.2-1.75c1.07.3 2.2.48 3.3.48 5.52 0 10-4.02 10-8.98S17.52 2 12 2zm4.27 7.93l-2.63 2.79-2.2-2.05-3.71 3.96 2.63-2.79 2.2 2.05 3.71-3.96z" />
                  </svg>
                </a>
                <a
                  href="#"
                  aria-label="Twitter / X"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition"
                >
                  {/* X icon */}
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                    <path d="M18.244 2H21l-6.54 7.47L22.5 22h-6.9l-4.33-5.63L5.3 22H2.5l7.06-8.07L1.5 2h6.9l3.94 5.2L18.24 2zm-2.39 18h1.32L7.1 4H5.78l10.07 16z" />
                  </svg>
                </a>
              </div>
            </div>
  
            {/* Links */}
            <nav className="space-y-4 w-[106.18946838378906px]" aria-label="OptiFlow links">
              <h3 className="text-xl font-bold">OptiFlow</h3>
              <ul className="space-y-3 text-base text-neutral-50/95">
                <li><a href="#" className="hover:opacity-80 transition">Home</a></li>
                <li><a href="#" className="hover:opacity-80 transition">Services</a></li>
                <li><a href="#" className="hover:opacity-80 transition">Solution</a></li>
                <li><a href="#" className="hover:opacity-80 transition">Frappe</a></li>
                <li><a href="#" className="hover:opacity-80 transition">Products</a></li>
                <li><a href="#" className="hover:opacity-80 transition">Contact</a></li>
              </ul>
            </nav>
  
            {/* Contact */}
            <div className="space-y-4 w-[191px]">
              <h3 className="text-xl font-bold">Contact US</h3>
              <div className="space-y-3 flex flex-col gap-2 text-base">
                <a href="tel:+201070861631">+201070861631</a>
                <a href="tel:+201092404282">+201092404282</a>
                <p className="max-w-xs">
                  second state- second district -5th tagamo3
                </p>
                <a href="mailto:info@optiflowsys.com">info@optiflowsys.com</a>
              </div>
            </div>
  
            {/* Newsletter */}
            <div className="space-y-4 w-[450px]">
              <h3 className="text-xl font-bold">Join Our Newsletter</h3>
  
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex w-full max-w-md items-stretch"
              >
                <label htmlFor="newsletter-email" className="sr-only">
                  Your email address
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  inputMode="email"
                  placeholder="Your email address"
                  className="min-w-0 flex-1  border-white/10 bg-zinc-800 px-4 py-3 text-sm text-white placeholder:text-stone-300 outline-none focus:ring-2 focus:ring-teal-500"
                  required
                />
                <button
                  type="submit"
                  className=" bg-[#2A8E9E] px-5 text-sm font-medium text-white hover:bg-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500"
                >
                  Subscribe
                </button>
              </form>
  
              <p className="max-w-md text-base text-neutral-50/90 w-full">
                Will send you weekly updates for your better experience.
              </p>
            </div>
          </div>
  
          {/* Bottom bar */}
          <div className="mt-10 flex flex-col items-start justify-between gap-6 text-base text-neutral-50/95 sm:flex-row">
            <p>Copyright @ OptiFlow. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    );
  }
  