import React from 'react';
import { Link } from 'react-router-dom';
import RevealSection from '../components/UI/RevealSection';
import { Gavel, ArrowLeft, FileCheck } from 'lucide-react';

const OrgLegal: React.FC = () => {
  return (
    <div className="min-h-screen pb-20 pt-10 px-4">
      <div className="max-w-4xl mx-auto">
        <Link to="/pro-organizace" className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-white mb-8 transition-colors">
            <ArrowLeft size={16} /> Zpět na Business Case
        </Link>
        
        <RevealSection>
            <div className="flex items-center gap-6 mb-8">
                <div className="p-4 bg-amber-500/10 rounded-3xl text-amber-500">
                    <Gavel size={48} />
                </div>
                <h1 className="text-4xl md:text-6xl font-bold">Právní jistota</h1>
            </div>
            <p className="text-2xl text-text-muted leading-relaxed font-light mb-16">
                V krizovém řízení není důležitý jen výsledek, ale i proces rozhodování. Organizace musí být schopna prokázat, že udělala maximum pro prevenci škod.
            </p>
        </RevealSection>

        <div className="grid gap-12">
            <RevealSection className="bg-surface border border-white/10 p-10 rounded-4xl">
                <h2 className="text-2xl font-bold mb-6">Kontext: Povinnost péče (Duty of Care)</h2>
                <p className="text-text-muted text-lg mb-6">
                    Pokud dojde k mimořádné události (pracovní úraz, bezpečnostní incident, fatální chyba v projektu), vyšetřování se zaměřuje na to, zda byli zaměstnanci adekvátně připraveni.
                    Pouhé proškolení BOZP často nestačí, pokud situace vyžadovala psychickou odolnost, kterou zaměstnanec neměl.
                </p>
            </RevealSection>

            <RevealSection className="grid md:grid-cols-2 gap-8">
                <div>
                    <h2 className="text-2xl font-bold mb-6 text-accent">Řešení Resilium</h2>
                    <p className="text-text-muted leading-relaxed mb-6">
                        Trénink Resilium je měřitelný a doložitelný. Implementací našich programů organizace prokazuje tzv. "Due Diligence" v oblasti Human Capital Management.
                        Protokolizace rozhodovacích procesů (metodika C.O.R.E.) navíc zajišťuje zpětnou auditovatelnost kroků, které zaměstnanec v krizi podnikl.
                    </p>
                </div>
                <div className="bg-surface-light p-8 rounded-3xl border border-white/5">
                    <h3 className="text-lg font-bold mb-4">Právní benefity</h3>
                    <ul className="space-y-4">
                        {[
                            'Prokazatelné zvýšení kvalifikace pro rizikové činnosti',
                            'Auditovatelná stopa rozhodovacího procesu',
                            'Snížení rizika právních sporů ze strany zaměstnanců (psychická újma)',
                            'Lepší pozice při vyjednávání s pojišťovnami (risk management)'
                        ].map((item, i) => (
                            <li key={i} className="flex gap-3 items-start text-sm text-gray-300">
                                <FileCheck className="text-amber-500 shrink-0 mt-0.5" size={18} />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </RevealSection>
        </div>

        <RevealSection className="mt-20 text-center">
            <Link 
                to="/kontakt?subject=Právní jistota a Compliance" 
                className="inline-block px-10 py-5 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-full transition-all"
            >
                Konzultovat compliance
            </Link>
        </RevealSection>
      </div>
    </div>
  );
};

export default OrgLegal;