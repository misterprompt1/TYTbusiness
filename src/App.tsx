/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Phone } from 'lucide-react';

export default function App() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-brand-black text-white font-sans">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260227_042027_c4b2f2ea-1c7c-4d6e-9e3d-81a78063703f.mp4" type="video/mp4" />
      </video>

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col min-h-screen p-[32px] md:p-[64px]">
        {/* Header */}
        <header className="flex items-center justify-between w-full max-w-7xl mx-auto">
          <div className="flex items-center gap-3">
            <a href="https://t.me/TYTcommunity" target="_blank" rel="noopener noreferrer">
              <img src="https://i.imgur.com/0YLbICg.png" alt="Logo" className="h-16 md:h-20 object-contain cursor-pointer" referrerPolicy="no-referrer" />
            </a>
          </div>

          <button className="clip-button bg-brand-red text-white px-6 py-2.5 text-sm font-medium hover:bg-red-600 transition-colors">
            Expert en Prop Firms
          </button>
        </header>

        {/* Main Hero Content */}
        <main className="flex-1 flex flex-col pt-[2vh] md:pt-[4vh] w-full max-w-7xl mx-auto">
          <div className="w-full flex justify-center">
            <h1 className="text-[28px] sm:text-[36px] md:text-[52px] font-bold uppercase tracking-[-0.04em] leading-[0.95] text-white drop-shadow-lg text-center max-w-4xl [word-spacing:5%]">
              Propose les meilleurs services prop firm
            </h1>
          </div>
          <div className="w-full flex justify-start mt-auto pb-4">
            <button className="clip-button bg-brand-red text-white px-6 py-3 text-sm md:px-8 md:py-4 md:text-lg font-bold uppercase tracking-wide hover:bg-red-600 transition-colors">
              Offre unique
            </button>
          </div>
        </main>

        {/* Bottom Widget */}
        <div className="w-full max-w-7xl mx-auto mt-auto flex justify-start">
          <div className="glass-card p-5 md:p-8 max-w-sm w-full">
            <h3 className="text-base md:text-lg font-bold mb-2 uppercase tracking-tight">Optimise ton Business</h3>
            <p className="text-xs md:text-sm text-gray-300 mb-6 leading-relaxed">Propose les meilleurs services Propfirm du marché à ta communauté, ou récupère notre kit complet pour lancer et structurer ta propre offre de A à Z (site, réseaux, comptes funded...)</p>
            <a 
              href="https://calendly.com/tytinsiders/30min" 
              target="_blank" 
              rel="noopener noreferrer"
              className="clip-button bg-white text-brand-black px-4 py-2.5 text-xs md:px-6 md:py-3.5 md:text-sm font-bold uppercase tracking-wide w-full flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors cursor-pointer"
            >
              <Phone size={16} className="text-brand-red" />
              Réserver un call
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
