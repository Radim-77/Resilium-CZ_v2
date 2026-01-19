import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import RevealSection from '../components/UI/RevealSection';
import { Mail, MapPin, Phone, Loader2, CheckCircle, AlertCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    sector: 'B2B - Soukromý sektor',
    message: ''
  });
  const [consent, setConsent] = useState(false);
  
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  // Pre-fill message/subject based on where the user clicked from
  useEffect(() => {
    const subjectParam = searchParams.get('subject');
    if (subjectParam) {
      setFormData(prev => ({
        ...prev,
        message: `Dobrý den, mám zájem o konzultaci k tématu: ${subjectParam}.\n\n`
      }));
    }
  }, [searchParams]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!consent) {
        alert("Pro odeslání formuláře je nutný souhlas se zpracováním osobních údajů.");
        return;
    }

    setStatus('submitting');

    try {
      const response = await fetch("https://formsubmit.co/ajax/info@resilium.cz", {
        method: "POST",
        headers: { 
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            _subject: `Nová poptávka: ${formData.organization || formData.name}`,
            _template: "table", // FormSubmit formatting
            ...formData,
            _gdpr_consent: "Uživatel udělil souhlas se zpracováním osobních údajů."
        })
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', organization: '', sector: 'B2B - Soukromý sektor', message: '' });
        setConsent(false);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className="min-h-screen pb-20 pt-10 px-4">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
        
        {/* Info Side */}
        <RevealSection>
            <h1 className="text-5xl md:text-7xl font-bold mb-8">Kontakt</h1>
            <p className="text-xl text-text-muted mb-12 max-w-md">
                Systémová příprava začíná auditem. Navrhneme tréninkový plán odpovídající rizikovému profilu vaší organizace.
            </p>

            <div className="space-y-8">
                <div className="flex items-center gap-6">
                    <div className="w-12 h-12 rounded-full bg-surface border border-white/10 flex items-center justify-center text-accent">
                        <Mail />
                    </div>
                    <div>
                        <p className="text-sm text-text-muted uppercase font-mono tracking-wider">Email</p>
                        <a href="mailto:info@resilium.cz" className="text-xl font-bold hover:text-accent transition-colors">info@resilium.cz</a>
                    </div>
                </div>
                <div className="flex items-center gap-6">
                    <div className="w-12 h-12 rounded-full bg-surface border border-white/10 flex items-center justify-center text-accent">
                        <Phone />
                    </div>
                    <div>
                        <p className="text-sm text-text-muted uppercase font-mono tracking-wider">Telefon</p>
                        <a href="tel:+420724462744" className="text-xl font-bold hover:text-accent transition-colors">+420 724 462 744</a>
                    </div>
                </div>
                 <div className="flex items-center gap-6">
                    <div className="w-12 h-12 rounded-full bg-surface border border-white/10 flex items-center justify-center text-accent">
                        <MapPin />
                    </div>
                    <div>
                        <p className="text-sm text-text-muted uppercase font-mono tracking-wider">Adresa</p>
                        <p className="text-xl font-bold">Zámostní 1155/27<br/>710 00 Ostrava</p>
                    </div>
                </div>
            </div>

            <div className="mt-12 p-6 bg-white/5 rounded-2xl border border-white/10 max-w-md">
                <h3 className="text-sm font-mono text-accent uppercase tracking-wider mb-2">Provozovatel</h3>
                <p className="text-sm text-text-muted leading-relaxed">
                    Resilium je značka programu společnosti <strong>Allprosys.cz s.r.o.</strong><br/>
                    IČ: 06365329 | DIČ: CZ06365329
                </p>
            </div>

            <div className="mt-12 pt-10 border-t border-white/10">
                <p className="text-2xl font-bold italic text-white/50">
                    "Pro ty, kteří nesou odpovědnost v momentech, kdy selhává improvizace."
                </p>
            </div>
        </RevealSection>

        {/* Form Side */}
        <RevealSection delay={0.2}>
            <div className="bg-surface/50 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-4xl shadow-2xl relative overflow-hidden">
                
                {status === 'success' ? (
                    <div className="absolute inset-0 z-20 bg-surface flex flex-col items-center justify-center text-center p-8 animate-in fade-in duration-500">
                        <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center text-green-500 mb-6">
                            <CheckCircle size={40} />
                        </div>
                        <h3 className="text-3xl font-bold mb-4">Odesláno</h3>
                        <p className="text-text-muted max-w-sm mb-8">
                            Děkujeme za poptávku. Váš požadavek jsme přijali a budeme vás kontaktovat do 24 hodin.
                        </p>
                        <button onClick={() => setStatus('idle')} className="px-8 py-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors font-bold">
                            Odeslat další
                        </button>
                    </div>
                ) : null}

                <form onSubmit={handleSubmit} className={`space-y-6 transition-opacity duration-300 ${status === 'success' ? 'opacity-0' : 'opacity-100'}`}>
                    <div>
                        <label className="block text-sm font-mono text-text-muted mb-2 uppercase">Jméno</label>
                        <input 
                            required
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            type="text" 
                            className="w-full bg-black/20 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                            placeholder="Jan Novák"
                        />
                    </div>
                    
                    <div>
                        <label className="block text-sm font-mono text-text-muted mb-2 uppercase">Email</label>
                        <input 
                            required
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            type="email" 
                            className="w-full bg-black/20 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                            placeholder="jan@firma.cz"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-mono text-text-muted mb-2 uppercase">Organizace</label>
                        <input 
                            required
                            name="organization"
                            value={formData.organization}
                            onChange={handleChange}
                            type="text" 
                            className="w-full bg-black/20 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                            placeholder="Název společnosti"
                        />
                    </div>
                    
                    <div>
                        <label className="block text-sm font-mono text-text-muted mb-2 uppercase">Sektor</label>
                        <select 
                            name="sector"
                            value={formData.sector}
                            onChange={handleChange}
                            className="w-full bg-black/20 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all appearance-none"
                        >
                            <option className="bg-surface text-text">B2B - Soukromý sektor</option>
                            <option className="bg-surface text-text">B2G - Státní správa</option>
                            <option className="bg-surface text-text">NGO - Neziskový sektor</option>
                        </select>
                    </div>
                    
                    <div>
                        <label className="block text-sm font-mono text-text-muted mb-2 uppercase">Zpráva</label>
                        <textarea 
                            required
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={4}
                            className="w-full bg-black/20 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                            placeholder="Popište vaše potřeby..."
                        ></textarea>
                    </div>

                    {/* GDPR Checkbox */}
                    <div className="flex items-start gap-3 mt-2 group cursor-pointer">
                        <div className="relative flex items-center mt-0.5">
                            <input 
                                type="checkbox"
                                id="gdpr-consent"
                                required
                                checked={consent}
                                onChange={(e) => setConsent(e.target.checked)}
                                className="peer h-5 w-5 cursor-pointer appearance-none rounded-md border border-white/20 bg-black/20 checked:bg-accent checked:border-accent transition-all"
                            />
                            <CheckCircle size={14} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 peer-checked:opacity-100 pointer-events-none" />
                        </div>
                        <label htmlFor="gdpr-consent" className="text-xs text-text-muted leading-relaxed cursor-pointer select-none">
                            Souhlasím se <Link to="/pravni-dolozka" target="_blank" className="text-accent hover:underline">zpracováním osobních údajů</Link> pro účely vyřízení poptávky. Beru na vědomí, že tento souhlas mohu kdykoliv odvolat.
                        </label>
                    </div>
                    
                    {status === 'error' && (
                        <div className="flex items-center gap-2 text-red-500 text-sm bg-red-500/10 p-4 rounded-xl">
                            <AlertCircle size={16} />
                            Chyba při odesílání. Zkuste to prosím znovu nebo napište přímo na info@resilium.cz
                        </div>
                    )}

                    <button 
                        type="submit" 
                        disabled={status === 'submitting' || !consent}
                        className="w-full bg-accent hover:bg-accent-dark text-white font-bold py-5 rounded-2xl mt-4 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-700"
                    >
                        {status === 'submitting' ? (
                            <>
                                <Loader2 className="animate-spin" /> Odesílám...
                            </>
                        ) : (
                            "Odeslat poptávku"
                        )}
                    </button>
                </form>
            </div>
        </RevealSection>
      </div>
    </div>
  );
};

export default Contact;