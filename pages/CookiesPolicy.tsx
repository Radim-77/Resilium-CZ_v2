import React from 'react';
import { Link } from 'react-router-dom';
import RevealSection from '../components/UI/RevealSection';
import { Cookie, ArrowLeft } from 'lucide-react';

const CookiesPolicy: React.FC = () => {
  return (
    <div className="min-h-screen pb-20 pt-10 px-4">
      <div className="max-w-4xl mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-white mb-8 transition-colors">
            <ArrowLeft size={16} /> Zpět na úvod
        </Link>
        
        <RevealSection>
            <h1 className="text-4xl md:text-5xl font-bold mb-8 flex items-center gap-4">
                <Cookie className="text-accent" size={48} />
                Zásady používání cookies
            </h1>
        </RevealSection>

        <div className="space-y-12 text-text-muted leading-relaxed">
            <RevealSection delay={0.1}>
                 <p className="text-xl text-white mb-8">
                    Pro zajištění správného fungování těchto stránek ukládáme na vašem zařízení malé datové soubory, tzv. cookies.
                </p>
            </RevealSection>

            <RevealSection delay={0.2} className="bg-surface border border-white/10 p-8 rounded-3xl">
                <h2 className="text-2xl font-bold text-white mb-4">Co jsou cookies?</h2>
                <p className="mb-4">
                    Cookie je krátký textový soubor, který navštívená webová stránka odešle do prohlížeče. Umožňuje webu zaznamenat informace o vaší návštěvě, například preferovaný jazyk a další nastavení. Příští návštěva stránek tak může být snazší a produktivnější.
                </p>
            </RevealSection>

            <RevealSection delay={0.3} className="bg-surface border border-white/10 p-8 rounded-3xl">
                <h2 className="text-2xl font-bold text-white mb-6">Jaké cookies používáme?</h2>
                
                <div className="space-y-6">
                    <div>
                        <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                            <span className="w-3 h-3 rounded-full bg-green-500"></span>
                            Technické (Nezbytné)
                        </h3>
                        <p>
                            Tyto cookies jsou nutné pro fungování webu a nelze je vypnout. Zajišťují základní funkce, jako je navigace stránky, bezpečnostní prvky nebo odesílání formulářů.
                        </p>
                    </div>

                    <div>
                         <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                            <span className="w-3 h-3 rounded-full bg-blue-500"></span>
                            Analytické
                        </h3>
                        <p>
                            Pomáhají nám pochopit, jak návštěvníci web používají. Data jsou sbírána anonymně a slouží ke zlepšování uživatelské zkušenosti (např. Google Analytics).
                        </p>
                    </div>
                </div>
            </RevealSection>

            <RevealSection delay={0.4} className="bg-surface border border-white/10 p-8 rounded-3xl">
                <h2 className="text-2xl font-bold text-white mb-4">Správa cookies</h2>
                <p className="mb-4">
                    Většina prohlížečů cookies automaticky akceptuje, pokud není prohlížeč nastaven jinak. Používání cookies můžete omezit nebo zablokovat v nastavení svého webového prohlížeče.
                </p>
                <p>
                    Informace o nastavení konkrétních prohlížečů naleznete na těchto adresách:
                </p>
                <ul className="list-disc pl-5 mt-4 space-y-1 text-sm">
                    <li><a href="https://support.google.com/chrome/answer/95647?hl=cs" target="_blank" rel="noreferrer" className="hover:text-accent">Google Chrome</a></li>
                    <li><a href="https://support.mozilla.org/cs/kb/rozsirena-ochrana-proti-sledovani-ve-firefoxu-pro-pc" target="_blank" rel="noreferrer" className="hover:text-accent">Mozilla Firefox</a></li>
                    <li><a href="https://support.apple.com/cs-cz/guide/safari/sfri11471/mac" target="_blank" rel="noreferrer" className="hover:text-accent">Safari</a></li>
                    <li><a href="https://support.microsoft.com/cs-cz/microsoft-edge/odstran%C4%9Bn%C3%AD-soubor%C5%AF-cookie-v-aplikaci-microsoft-edge-63947406-40ac-c2b9-2592-7096f795d14a" target="_blank" rel="noreferrer" className="hover:text-accent">Microsoft Edge</a></li>
                </ul>
            </RevealSection>
        </div>
      </div>
    </div>
  );
};

export default CookiesPolicy;