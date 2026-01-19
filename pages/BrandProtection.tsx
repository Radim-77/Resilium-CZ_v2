import React from 'react';
import { Link } from 'react-router-dom';
import RevealSection from '../components/UI/RevealSection';
import { ShieldCheck, ArrowLeft, Copyright } from 'lucide-react';

const BrandProtection: React.FC = () => {
  return (
    <div className="min-h-screen pb-20 pt-10 px-4">
      <div className="max-w-4xl mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-white mb-8 transition-colors">
            <ArrowLeft size={16} /> Zpět na úvod
        </Link>
        
        <RevealSection>
            <h1 className="text-4xl md:text-5xl font-bold mb-8 flex items-center gap-4">
                <ShieldCheck className="text-accent" size={48} />
                Ochrana značky
            </h1>
        </RevealSection>

        <div className="space-y-12 text-text-muted leading-relaxed">
            <RevealSection delay={0.1}>
                <p className="text-xl text-white mb-8">
                    Resilium® a metodika RES-CON™ představují duševní vlastnictví společnosti Allprosys.cz s.r.o.
                    Níže uvádíme pravidla pro nakládání s obsahem a ochrannými známkami.
                </p>
            </RevealSection>

            <RevealSection delay={0.2} className="bg-surface border border-white/10 p-8 rounded-3xl">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                    <Copyright size={24} className="text-accent" />
                    Autorská práva
                </h2>
                <p className="mb-4">
                    Veškerý obsah na těchto webových stránkách (texty, grafika, loga, ikony, obrázky, audio a video klipy, digitální stahování a kompilace dat) je majetkem společnosti Allprosys.cz s.r.o. nebo jejích dodavatelů obsahu a je chráněn českými i mezinárodními zákony o autorském právu.
                </p>
                <p>
                    <strong>Je přísně zakázáno:</strong>
                </p>
                <ul className="list-disc pl-5 space-y-2 mt-2">
                    <li>Kopírovat strukturu výcvikových programů a vydávat je za vlastní.</li>
                    <li>Používat názvosloví metodiky C.O.R.E. v komerčních nabídkách bez licenční smlouvy.</li>
                    <li>Stahovat a redistribuovat grafické prvky webu bez písemného souhlasu.</li>
                </ul>
            </RevealSection>

            <RevealSection delay={0.3} className="bg-surface border border-white/10 p-8 rounded-3xl">
                <h2 className="text-2xl font-bold text-white mb-6">Ochranné známky</h2>
                <p className="mb-4">
                    Názvy <strong>Resilium</strong>, <strong>RES-CON</strong> a logo štítu jsou obchodními značkami. Nesmí být používány ve spojení s jakýmkoliv produktem nebo službou, která není součástí našeho portfolia, způsobem, který by mohl vyvolat záměnu u zákazníků, nebo způsobem, který by poškozoval dobré jméno značky.
                </p>
            </RevealSection>

            <RevealSection delay={0.4} className="p-8 rounded-3xl bg-accent/5 border border-accent/20">
                <h2 className="text-xl font-bold text-white mb-4">Pro partnery a média</h2>
                <p className="mb-4">
                    Máte-li zájem o použití našeho loga nebo materiálů pro mediální účely, kontaktujte nás prosím na adrese <a href="mailto:info@resilium.cz" className="text-accent font-bold hover:underline">info@resilium.cz</a>.
                </p>
                <p>
                    Neautorizované použití může vést k právním krokům k ochraně našeho duševního vlastnictví.
                </p>
            </RevealSection>
        </div>
      </div>
    </div>
  );
};

export default BrandProtection;