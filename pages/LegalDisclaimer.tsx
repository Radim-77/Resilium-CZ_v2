import React from 'react';
import { Link } from 'react-router-dom';
import RevealSection from '../components/UI/RevealSection';
import { Scale, ArrowLeft, ShieldCheck } from 'lucide-react';

const LegalDisclaimer: React.FC = () => {
  return (
    <div className="min-h-screen pb-20 pt-10 px-4">
      <div className="max-w-4xl mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-white mb-8 transition-colors">
            <ArrowLeft size={16} /> Zpět na úvod
        </Link>
        
        <RevealSection>
            <h1 className="text-4xl md:text-5xl font-bold mb-8 flex items-center gap-4">
                <Scale className="text-accent" size={48} />
                Právní doložka a GDPR
            </h1>
        </RevealSection>

        <div className="space-y-12 text-text-muted leading-relaxed">
            <RevealSection delay={0.1} className="bg-surface border border-white/10 p-8 rounded-3xl">
                <h2 className="text-2xl font-bold text-white mb-4">1. Provozovatel a identifikační údaje</h2>
                <p className="mb-4">
                    Provozovatelem internetových stránek www.resilium.cz a poskytovatelem služeb je společnost:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-300">
                    <li><strong>Obchodní firma:</strong> Allprosys.cz s.r.o.</li>
                    <li><strong>Sídlo:</strong> Zámostní 1155/27, 710 00 Ostrava</li>
                    <li><strong>IČO:</strong> 06365329</li>
                    <li><strong>DIČ:</strong> CZ06365329</li>
                    <li><strong>Spisová značka:</strong> C 71603 vedená u Krajského soudu v Ostravě</li>
                </ul>
            </RevealSection>

            <RevealSection delay={0.2} className="bg-surface border border-white/10 p-8 rounded-3xl">
                <h2 className="text-2xl font-bold text-white mb-4">2. Ochrana osobních údajů (GDPR)</h2>
                <p className="mb-4">
                    V souladu s Nařízením Evropského parlamentu a Rady (EU) 2016/679 (GDPR) vás informujeme o tom, jak zpracováváme vaše osobní údaje.
                </p>
                
                <h3 className="text-xl font-bold text-white mt-6 mb-2">Rozsah a účel zpracování</h3>
                <p className="mb-4">
                    Zpracováváme osobní údaje, které nám poskytnete prostřednictvím kontaktních formulářů nebo emailové komunikace (zejména jméno, email, telefon, název organizace). Tyto údaje využíváme výhradně za účelem:
                </p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                    <li>Vyřízení vaší poptávky a zodpovězení dotazů (předsmluvní jednání).</li>
                    <li>Poskytování objednaných služeb a plnění smluvních povinností.</li>
                    <li>Plnění zákonných povinností (účetnictví, daně).</li>
                </ul>

                <h3 className="text-xl font-bold text-white mt-6 mb-2">Doba uložení</h3>
                <p className="mb-4">
                    Osobní údaje uchováváme po dobu nezbytnou k výkonu práv a povinností vyplývajících ze smluvního vztahu a dále po dobu vyplývající z obecně závazných právních předpisů.
                </p>

                <h3 className="text-xl font-bold text-white mt-6 mb-2">Vaše práva</h3>
                <p>
                    Máte právo požadovat od nás přístup k vašim osobním údajům, jejich opravu nebo výmaz, popřípadě omezení zpracování. Máte právo vznést námitku proti zpracování a právo na přenositelnost údajů. Kontakt pro uplatnění práv: <a href="mailto:info@resilium.cz" className="text-accent hover:underline">info@resilium.cz</a>.
                </p>
            </RevealSection>

            <RevealSection delay={0.3} className="bg-surface border border-white/10 p-8 rounded-3xl">
                <h2 className="text-2xl font-bold text-white mb-4">3. Vyloučení odpovědnosti</h2>
                <p className="mb-4">
                    Metodika Resilium a související tréninkové programy jsou zaměřeny na zvyšování psychické odolnosti a nácvik reakcí. Ačkoliv jsou postupy založeny na neurobiologických poznatcích a praxi, provozovatel nenese odpovědnost za:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                    <li>Individuální psychické reakce účastníků v reálných krizových situacích.</li>
                    <li>Případné škody na zdraví či majetku vzniklé nesprávnou aplikací natrénovaných postupů.</li>
                    <li>Rozhodnutí učiněná klientem na základě informací získaných během výcviku.</li>
                </ul>
                <p className="mt-4 text-sm bg-white/5 p-4 rounded-xl border border-white/5">
                    <strong>Upozornění:</strong> Tréninky fyzické bezpečnosti nenahrazují práci Policie ČR ani jiných složek IZS. V případě bezprostředního ohrožení vždy kontaktujte tísňovou linku.
                </p>
            </RevealSection>
        </div>
      </div>
    </div>
  );
};

export default LegalDisclaimer;