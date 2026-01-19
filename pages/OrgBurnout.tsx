import React from 'react';
import { Link } from 'react-router-dom';
import RevealSection from '../components/UI/RevealSection';
import { HeartPulse, ArrowLeft, BatteryCharging } from 'lucide-react';

const OrgBurnout: React.FC = () => {
  return (
    <div className="min-h-screen pb-20 pt-10 px-4">
      <div className="max-w-4xl mx-auto">
        <Link to="/pro-organizace" className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-white mb-8 transition-colors">
            <ArrowLeft size={16} /> Zpět na Business Case
        </Link>
        
        <RevealSection>
            <div className="flex items-center gap-6 mb-8">
                <div className="p-4 bg-emerald-500/10 rounded-3xl text-emerald-500">
                    <HeartPulse size={48} />
                </div>
                <h1 className="text-4xl md:text-6xl font-bold">Prevence vyhoření</h1>
            </div>
            <p className="text-2xl text-text-muted leading-relaxed font-light mb-16">
                Udržitelnost výkonu klíčových expertů není otázkou "work-life balance", ale efektivního managementu biologických zdrojů během pracovní doby.
            </p>
        </RevealSection>

        <div className="grid gap-12">
            <RevealSection className="bg-surface border border-white/10 p-10 rounded-4xl">
                <h2 className="text-2xl font-bold mb-6">Fyziologická cena stresu</h2>
                <p className="text-text-muted text-lg mb-6">
                    Každá stresová reakce spaluje obrovské množství glukózy a zaplavuje tělo kortizolem. Pokud zaměstnanec neumí "vypnout" stresovou reakci okamžitě po pominutí hrozby,
                    zůstává v chronickém stavu pohotovosti. To vede k vyčerpání, cynismu a nakonec k odchodu z organizace.
                </p>
            </RevealSection>

            <RevealSection className="grid md:grid-cols-2 gap-8">
                <div>
                    <h2 className="text-2xl font-bold mb-6 text-accent">Řešení Resilium</h2>
                    <p className="text-text-muted leading-relaxed mb-6">
                        Neučíme lidi pracovat méně, ale pracovat s menším biologickým nákladem. Trénink se zaměřuje na vědomé přepínání mezi sympatikem (výkon) a parasympatikem (regenerace).
                        Tzv. "mikro-regenerace" během dne umožňuje udržet vysoký kognitivní výkon bez kumulativní únavy.
                    </p>
                </div>
                <div className="bg-surface-light p-8 rounded-3xl border border-white/5">
                    <h3 className="text-lg font-bold mb-4">HR & Talent Management</h3>
                    <ul className="space-y-4">
                        {[
                            'Prodloužení profesní životnosti seniorních expertů',
                            'Snížení fluktuace na vysoce exponovaných pozicích',
                            'Rychlejší návrat do plného výkonu po náročných projektech',
                            'Vědecký přístup k wellbeing (data vs. dojmy)'
                        ].map((item, i) => (
                            <li key={i} className="flex gap-3 items-start text-sm text-gray-300">
                                <BatteryCharging className="text-emerald-500 shrink-0 mt-0.5" size={18} />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </RevealSection>
        </div>

        <RevealSection className="mt-20 text-center">
            <Link 
                to="/kontakt?subject=Prevence vyhoření a udržitelnost" 
                className="inline-block px-10 py-5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-full transition-all"
            >
                Implementovat udržitelnost
            </Link>
        </RevealSection>
      </div>
    </div>
  );
};

export default OrgBurnout;