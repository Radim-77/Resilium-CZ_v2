import React from 'react';
import { Link } from 'react-router-dom';
import RevealSection from '../components/UI/RevealSection';
import { Users, ArrowLeft, ShieldAlert } from 'lucide-react';

const OrgReputation: React.FC = () => {
  return (
    <div className="min-h-screen pb-20 pt-10 px-4">
      <div className="max-w-4xl mx-auto">
        <Link to="/pro-organizace" className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-white mb-8 transition-colors">
            <ArrowLeft size={16} /> Zpět na Business Case
        </Link>
        
        <RevealSection>
            <div className="flex items-center gap-6 mb-8">
                <div className="p-4 bg-indigo-500/10 rounded-3xl text-indigo-500">
                    <Users size={48} />
                </div>
                <h1 className="text-4xl md:text-6xl font-bold">Ochrana reputace</h1>
            </div>
            <p className="text-2xl text-text-muted leading-relaxed font-light mb-16">
                Reputace se buduje roky, ale ztrácí se během vteřin. Selhání zaměstnance ve veřejném prostoru nebo při jednání s klientem může mít fatální PR následky.
            </p>
        </RevealSection>

        <div className="grid gap-12">
            <RevealSection className="bg-surface border border-white/10 p-10 rounded-4xl">
                <h2 className="text-2xl font-bold mb-6">Riziko: Emoční únos</h2>
                <p className="text-text-muted text-lg mb-6">
                    Tváří v tvář agresivnímu klientovi, novinářskému tlaku nebo krizové situaci na sociálních sítích mají lidé tendenci sklouzávat do defenzivy nebo agrese.
                    Tento "emoční únos" (amygdala hijack) vede k neprofesionálním výrokům, které se okamžitě stávají virálními.
                </p>
            </RevealSection>

            <RevealSection className="grid md:grid-cols-2 gap-8">
                <div>
                    <h2 className="text-2xl font-bold mb-6 text-accent">Řešení Resilium</h2>
                    <p className="text-text-muted leading-relaxed mb-6">
                        Učíme personál oddělit vlastní ego od profesní role. Trénujeme techniky deeskalace a "řízené empatie", které umožňují převzít kontrolu nad dynamikou konverzace.
                        Důraz je kladen na fázi RESOLVE a EXECUTE – chladné, přesné vyhodnocení dopadu slov.
                    </p>
                </div>
                <div className="bg-surface-light p-8 rounded-3xl border border-white/5">
                    <h3 className="text-lg font-bold mb-4">Strategické výhody</h3>
                    <ul className="space-y-4">
                        {[
                            'Prevence mediálních krizí způsobených lidským selháním',
                            'Schopnost zaměstnanců reprezentovat značku i pod palbou kritiky',
                            'Konzistentní "tvář" organizace v krizových momentech',
                            'Profesionální zvládání konfliktních klientů'
                        ].map((item, i) => (
                            <li key={i} className="flex gap-3 items-start text-sm text-gray-300">
                                <ShieldAlert className="text-indigo-500 shrink-0 mt-0.5" size={18} />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </RevealSection>
        </div>

        <RevealSection className="mt-20 text-center">
            <Link 
                to="/kontakt?subject=Ochrana reputace a PR" 
                className="inline-block px-10 py-5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-full transition-all"
            >
                Zabezpečit reputaci týmu
            </Link>
        </RevealSection>
      </div>
    </div>
  );
};

export default OrgReputation;