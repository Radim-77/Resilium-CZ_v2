import React from 'react';
import { Link } from 'react-router-dom';
import RevealSection from '../components/UI/RevealSection';
import { Briefcase, ArrowLeft, CheckCircle2 } from 'lucide-react';

const OrgErrorReduction: React.FC = () => {
  return (
    <div className="min-h-screen pb-20 pt-10 px-4">
      <div className="max-w-4xl mx-auto">
        <Link to="/pro-organizace" className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-white mb-8 transition-colors">
            <ArrowLeft size={16} /> Zpět na Business Case
        </Link>
        
        <RevealSection>
            <div className="flex items-center gap-6 mb-8">
                <div className="p-4 bg-blue-500/10 rounded-3xl text-blue-500">
                    <Briefcase size={48} />
                </div>
                <h1 className="text-4xl md:text-6xl font-bold">Snížení chybovosti</h1>
            </div>
            <p className="text-2xl text-text-muted leading-relaxed font-light mb-16">
                Lidský faktor je nejčastější příčinou selhání systémů. Ne proto, že by lidé byli neschopní, ale protože jejich kognitivní kapacita pod tlakem kolabuje.
            </p>
        </RevealSection>

        <div className="grid gap-12">
            <RevealSection className="bg-surface border border-white/10 p-10 rounded-4xl">
                <h2 className="text-2xl font-bold mb-6">Diagnóza: Kognitivní tunel</h2>
                <p className="text-text-muted text-lg mb-6">
                    Při náhlém stresu (deadlines, krizové stavy, konflikty) aktivuje mozek limbický systém. Dochází k jevu zvanému "kognitivní tunel". 
                    Periferní vnímání mizí, schopnost analyzovat komplexní data klesá až o 70 % a jemná motorika degraduje.
                </p>
                <div className="bg-white/5 p-6 rounded-2xl border-l-4 border-blue-500">
                    <p className="italic text-gray-300">
                        "V kritický moment neklesáme na úroveň našich očekávání, ale na úroveň našeho tréninku."
                    </p>
                </div>
            </RevealSection>

            <RevealSection className="grid md:grid-cols-2 gap-8">
                <div>
                    <h2 className="text-2xl font-bold mb-6 text-accent">Řešení Resilium</h2>
                    <p className="text-text-muted leading-relaxed mb-6">
                        Náš trénink nahrazuje improvizaci pevnými operačními protokoly. Vytváříme "podmíněné reflexy" pro intelektuální práci.
                        Pomocí fází CHECK a OBSERVE z metodiky C.O.R.E. učíme zaměstnance tzv. <span className="text-white font-medium">taktické dýchání a kognitivní přerámování</span>, 
                        které obnoví funkci prefrontálního kortexu do 10 sekund.
                    </p>
                </div>
                <div className="bg-surface-light p-8 rounded-3xl border border-white/5">
                    <h3 className="text-lg font-bold mb-4">Přínosy pro klienta</h3>
                    <ul className="space-y-4">
                        {[
                            'Zachování analytického myšlení i pod časovým presem',
                            'Drastické snížení "překlepů" a chyb z nepozornosti',
                            'Eliminace zbrklých rozhodnutí',
                            'Standardizace reakcí napříč celým týmem'
                        ].map((item, i) => (
                            <li key={i} className="flex gap-3 items-start text-sm text-gray-300">
                                <CheckCircle2 className="text-blue-500 shrink-0 mt-0.5" size={18} />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </RevealSection>
        </div>

        <RevealSection className="mt-20 text-center">
            <Link 
                to="/kontakt?subject=Snížení chybovosti a kognitivní trénink" 
                className="inline-block px-10 py-5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full transition-all"
            >
                Analyzovat rizika chybovosti
            </Link>
        </RevealSection>
      </div>
    </div>
  );
};

export default OrgErrorReduction;