/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Phone, Users, Target, Rocket } from 'lucide-react';

export default function App() {
  return (
    <div className="relative min-h-dvh w-full bg-brand-black text-white font-sans">
      {/* Hero Section */}
      <section className="relative min-h-dvh w-full overflow-hidden">
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

      {/* Subtle fade transition to next section */}
      <div className="absolute bottom-0 left-0 w-full h-32 md:h-48 bg-linear-to-t from-[#0a0a0a] to-transparent pointer-events-none z-5" />

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col min-h-dvh p-4 pb-8 md:p-[64px]">
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
          <div className="hidden md:flex w-full justify-start mt-auto pb-4 md:pb-8">
            <button className="clip-button bg-brand-red text-white px-5 py-2.5 text-xs md:px-8 md:py-4 md:text-lg font-bold uppercase tracking-wide hover:bg-red-600 transition-colors">
              Offre unique
            </button>
          </div>
        </main>

        {/* Bottom Widget */}
        <div className="w-full max-w-7xl mx-auto mt-auto flex justify-center md:justify-start">
          <div className="glass-card p-4 md:p-8 max-w-sm w-full shadow-2xl">
            <h3 className="text-sm md:text-lg font-bold mb-2 uppercase tracking-tight text-center md:text-left">Optimise ton Business</h3>
            <p className="text-[11px] md:text-sm text-gray-300 mb-5 md:mb-6 leading-relaxed text-center md:text-left">Propose les meilleurs services Propfirm du marché à ta communauté, ou récupère notre kit complet pour lancer et structurer ta propre offre de A à Z (site, réseaux, comptes funded...)</p>
            <a 
              href="https://calendly.com/tytinsiders/30min" 
              target="_blank" 
              rel="noopener noreferrer"
              className="clip-button bg-white text-brand-black px-4 py-2 text-[10px] md:px-6 md:py-3.5 md:text-sm font-bold uppercase tracking-wide w-full flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors cursor-pointer"
            >
              <Phone size={16} className="text-brand-red" />
              Réserver un call
            </a>
          </div>
        </div>
      </div>
      </section>

      {/* Seconde Section (Étapes d'accompagnement) */}
      <section className="min-h-screen w-full bg-[#0a0a0a] flex items-center justify-center p-6 md:p-12 relative overflow-hidden">
        {/* Glow effect in background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-brand-red/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row gap-8 lg:gap-6 xl:gap-10 items-stretch justify-center">
          
          {/* Étape 1 */}
          <div className="relative overflow-hidden rounded-xl border-2 border-brand-red/40 p-8 flex-1 flex flex-col backdrop-blur-xl bg-black/60 hover:bg-black/80 hover:border-brand-red/70 transition-all duration-300 shadow-[0_8px_32px_rgba(0,0,0,0.6)] min-h-[420px]">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-red/10 rounded-full blur-2xl pointer-events-none" />
            
            <div className="flex flex-col items-center text-center gap-4 relative z-10">
              <div className="w-16 h-16 rounded-full bg-brand-red/10 text-brand-red flex items-center justify-center font-bold text-2xl border border-brand-red/30 mb-2">1</div>
              <h3 className="text-xl font-bold uppercase tracking-tight text-white">Audit de votre audience</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Nous commençons par analyser votre audience. Le but est de comprendre exactement comment proposer nos comptes Propfirms à votre communauté, afin de maximiser vos conversions.
              </p>
            </div>

            {/* Bottom Icon & Text */}
            <div className="mt-auto pt-8 flex flex-col items-center justify-center gap-3 relative z-10 text-white animate-glow">
              <div className="p-3 rounded-full bg-white/5 border border-white/20">
                <Users size={28} />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-white">Analyse de potentiel</span>
            </div>
          </div>

          {/* Étape 2 */}
          <div className="relative overflow-hidden rounded-xl border-2 border-brand-red/40 p-8 flex-1 flex flex-col backdrop-blur-xl bg-black/60 hover:bg-black/80 hover:border-brand-red/70 transition-all duration-300 shadow-[0_8px_32px_rgba(0,0,0,0.6)] min-h-[420px]">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-red/10 rounded-full blur-2xl pointer-events-none" />
            
            <div className="flex flex-col items-center text-center gap-4 relative z-10">
              <div className="w-16 h-16 rounded-full bg-brand-red/10 text-brand-red flex items-center justify-center font-bold text-2xl border border-brand-red/30 mb-2">2</div>
              <h3 className="text-xl font-bold uppercase tracking-tight text-white">Stratégie de monétisation</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Nous élaborons le plan de croissance. Vous avez le choix : proposer directement les comptes à vos abonnés pour booster vos ventes, ou nous laisser structurer l'intégralité de votre business de A à Z pour une rentabilité optimale.
              </p>
            </div>

            {/* Bottom Icon & Text */}
            <div className="mt-auto pt-8 flex flex-col items-center justify-center gap-3 relative z-10 text-white animate-glow">
              <div className="p-3 rounded-full bg-white/5 border border-white/20">
                <Target size={28} />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-white">Plan sur mesure</span>
            </div>
          </div>

          {/* Étape 3 */}
          <div className="relative overflow-hidden rounded-xl border-2 border-brand-red/40 p-8 flex-1 flex flex-col backdrop-blur-xl bg-black/60 hover:bg-black/80 hover:border-brand-red/70 transition-all duration-300 shadow-[0_8px_32px_rgba(0,0,0,0.6)] min-h-[420px]">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-red/10 rounded-full blur-2xl pointer-events-none" />
            
            <div className="flex flex-col items-center text-center gap-4 relative z-10">
              <div className="w-16 h-16 rounded-full bg-brand-red/10 text-brand-red flex items-center justify-center font-bold text-2xl border border-brand-red/30 mb-2">3</div>
              <h3 className="text-xl font-bold uppercase tracking-tight text-white">Développement et profits</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Place à l'action. En offrant une solution clé en main à votre audience, vous facilitez vos ventes et attirez de nouveaux clients naturellement. Votre communauté grandit en confiance, et vos revenus explosent grâce à un volume de closing nettement supérieur.
              </p>
            </div>

            {/* Bottom Icon & Text */}
            <div className="mt-auto pt-8 flex flex-col items-center justify-center gap-3 relative z-10 text-white animate-glow">
              <div className="p-3 rounded-full bg-white/5 border border-white/20">
                <Rocket size={28} />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-white">Croissance des revenus</span>
            </div>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-[#050505] py-20 flex flex-col items-center justify-center gap-10 border-t border-brand-red/10">
        <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border border-white/20 bg-white/5 flex items-center justify-center p-3">
          <img 
            src="https://i.imgur.com/0YLbICg.png" 
            alt="TYT Logo" 
            className="w-full h-full object-contain" 
          />
        </div>
        <a 
          href="https://calendly.com/tytinsiders/30min" 
          target="_blank" 
          rel="noopener noreferrer"
          className="clip-button bg-white text-brand-black px-6 py-2.5 text-xs md:px-8 md:py-3.5 md:text-base font-bold uppercase tracking-wide hover:bg-gray-200 transition-colors cursor-pointer"
        >
          Réserver un call
        </a>
      </footer>
    </div>
  );
}
