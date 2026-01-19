import React from 'react';
import { Link } from 'react-router-dom';
import RevealSection from '../components/UI/RevealSection';
import { ShieldAlert, Eye, Move, Swords, ArrowLeft, Target } from 'lucide-react';

const PhysicalSafety: React.FC = () => {
  return (
    <div className="min-h-screen pb-20 pt-10 px-4">
      <div className="max-w-7xl mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-white mb-8 transition-colors">
            <ArrowLeft size={16} /> Zpět na úvod
        </Link>
        
        <RevealSection>
            <div className="mb-20">
                <div className="inline-block px-4 py-1.5 border border-warning/30 rounded-full bg-warning/10 backdrop-blur-md mb-6">
                    <span className="text-warning text-xs font-mono tracking-widest uppercase font-bold">Tactical Protocols</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-bold mb-6">
                    Fyzická <span className="text-transparent bg-clip-text bg-gradient-to-r from-warning to-red-600">integrita.</span>
                </h1>
                <p className="text-2xl text-text-muted max-w-3xl leading-relaxed">
                    Násilí je chaos. Naší odpovědí je řád. Aplikujeme systémovou logiku Resilium na situace bezprostředního fyzického ohrožení.
                </p>
            </div>
        </RevealSection>

        <div className="grid lg:grid-cols-2 gap-16 mb-24">
            <RevealSection className="bg-surface border border-white/10 p-10 rounded-4xl">
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                    <Swords className="text-warning" />
                    Konflikt jako proces
                </h2>
                <p className="text-lg text-text-muted leading-relaxed mb-6">
                    Neporovnáváme se s bojovými sporty. Sport má pravidla, realita ne. Náš výcvik se zaměřuje na "pre-konfliktní fázi" (detekce hrozby) a "post-konfliktní fázi" (taktický ústup a právní/zdravotní dohra).
                </p>
                <p className="text-lg text-text-muted leading-relaxed">
                    Samotný střet je až poslední, často zbytečnou variantou. Pokud k němu dojde, musí být reakce <span className="text-white font-bold">instinktivní, technicky jednoduchá a maximálně efektivní.</span>
                </p>
            </RevealSection>

            <RevealSection delay={0.2} className="space-y-6">
                <div className="bg-white/5 p-6 rounded-3xl border-l-2 border-warning">
                    <h3 className="text-xl font-bold mb-2 text-white">Deeskalace & Verbal Judo</h3>
                    <p className="text-text-muted">
                        Schopnost "vymluvit se" z problému vyžaduje ovládnutí vlastního ega a strachu. Učíme komunikační vzorce, které snižují agresivitu útočníka.
                    </p>
                </div>
                <div className="bg-white/5 p-6 rounded-3xl border-l-2 border-warning">
                    <h3 className="text-xl font-bold mb-2 text-white">Situační povědomí (Cooper's Color Code)</h3>
                    <p className="text-text-muted">
                        Trénink periferního vnímání a skenování prostoru. Nebezpečí, které vidíte včas, se dá obejít.
                    </p>
                </div>
                <div className="bg-white/5 p-6 rounded-3xl border-l-2 border-warning">
                    <h3 className="text-xl font-bold mb-2 text-white">Přepnutí módu ("Killer instinct")</h3>
                    <p className="text-text-muted">
                        Okamžitá neurobiologická aktivace organismu pro boj o přežití. Změna z "diplomata" na "bojovníka" musí proběhnout ve zlomku vteřiny.
                    </p>
                </div>
            </RevealSection>
        </div>

        <RevealSection>
            <div className="relative rounded-4xl overflow-hidden bg-surface border border-white/10">
                <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-l from-warning/10 to-transparent pointer-events-none"></div>
                <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
                    <div className="p-10 text-center">
                        <Eye size={40} className="mx-auto text-text-muted mb-4" />
                        <h3 className="text-xl font-bold mb-2">Detekce</h3>
                        <p className="text-sm text-text-muted">Rozpoznání řeči těla a signálů útoku.</p>
                    </div>
                    <div className="p-10 text-center relative overflow-hidden group">
                        <div className="absolute inset-0 bg-warning/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                        <Target size={40} className="mx-auto text-warning mb-4 relative z-10" />
                        <h3 className="text-xl font-bold mb-2 relative z-10">Neutralizace</h3>
                        <p className="text-sm text-text-muted relative z-10">Hrubá motorika. Vitální body. Rychlost.</p>
                    </div>
                    <div className="p-10 text-center">
                        <Move size={40} className="mx-auto text-text-muted mb-4" />
                        <h3 className="text-xl font-bold mb-2">Extrakce</h3>
                        <p className="text-sm text-text-muted">Bezpečné opuštění prostoru a kontrola okolí.</p>
                    </div>
                </div>
            </div>
        </RevealSection>

        <RevealSection className="mt-20 text-center">
            <h2 className="text-3xl font-bold mb-6">Máte odpovědnost za bezpečnost týmu?</h2>
            <p className="text-text-muted max-w-2xl mx-auto mb-8">
                Nabízíme specializované workshopy pro firmy, zdravotnická zařízení i jednotlivce.
                Od prevence šikany po reakci na aktivního útočníka.
            </p>
            <Link 
                to="/kontakt?subject=Trénink fyzické bezpečnosti a sebeobrany" 
                className="inline-block px-10 py-5 bg-warning text-black font-bold rounded-full hover:bg-white transition-all"
            >
                Poptat bezpečnostní workshop
            </Link>
        </RevealSection>
      </div>
    </div>
  );
};

export default PhysicalSafety;