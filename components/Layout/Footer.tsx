import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-black/50 border-t border-white/5 py-12 px-4 mt-20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10 text-center md:text-left">
        
        <div className="flex flex-col gap-6 max-w-md mx-auto md:mx-0">
            <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold flex items-center justify-center md:justify-start gap-2">
                    <ShieldCheck className="text-accent" /> RESILIUM
                </h3>
                <p className="text-sm text-text-muted">
                    Powered by metodikou RES-CON. Trénink reakcí pro kritické situace.
                </p>
            </div>
            
            <div className="text-xs text-zinc-500 space-y-1 pt-4 border-t border-white/5">
                <p className="font-medium text-zinc-400">Resilium je značka programu společnosti Allprosys.cz s.r.o.</p>
                <p>Zámostní 1155/27, 710 00 Ostrava</p>
                <p>IČ: 06365329 | DIČ: CZ06365329</p>
            </div>
        </div>
        
        <div className="flex flex-col gap-6 items-center md:items-end w-full md:w-auto mt-4 md:mt-0">
            <div className="flex gap-6 text-sm text-text-muted font-mono flex-wrap justify-center md:justify-end">
                <Link to="/pravni-dolozka" className="hover:text-accent transition-colors">Právní doložka a GDPR</Link>
                <Link to="/ochrana-znacky" className="hover:text-accent transition-colors">Ochrana značky</Link>
                <Link to="/cookies" className="hover:text-accent transition-colors">Cookies</Link>
            </div>
            
            <div className="text-xs text-zinc-600">
                &copy; {new Date().getFullYear()} Resilium Systems.
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;