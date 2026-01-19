import React from 'react';
import { Link } from 'react-router-dom';
import RevealSection from '../components/UI/RevealSection';
import { Briefcase, Gavel, Users, HeartPulse, ArrowRight } from 'lucide-react';

const ForOrganizations: React.FC = () => {
  const metrics = [
    {
      title: "Snížení chybovosti",
      desc: "Eliminace kognitivních selhání v klíčových momentech.",
      icon: Briefcase,
      path: "/pro-organizace/chybovost"
    },
    {
      title: "Ochrana reputace",
      desc: "Prevence neprofesionálního chování navenek.",
      icon: Users,
      path: "/pro-organizace/reputace"
    },
    {
      title: "Právní jistota",
      desc: "Průkazná příprava zaměstnanců na krizové stavy snižuje právní rizika.",
      icon: Gavel,
      path: "/pro-organizace/pravo"
    },
    {
      title: "Prevence vyhoření",
      desc: "Udržitelnost výkonu expertů skrze systémovou práci se zátěží.",
      icon: HeartPulse,
      path: "/pro-organizace/vyhoreni"
    }
  ];

  return (
    <div className="min-h-screen pb-20 pt-10 px-4">
      <div className="max-w-7xl mx-auto">
        <RevealSection>
            <div className="text-center max-w-3xl mx-auto mb-20">
                <h1 className="text-5xl font-bold mb-6">Business Case</h1>
                <p className="text-2xl text-accent font-mono">Resilium jako systémová pojistka organizace.</p>
            </div>
        </RevealSection>

        <div className="grid md:grid-cols-2 gap-6">
            {metrics.map((metric, index) => (
                <RevealSection key={index} delay={index * 0.1}>
                    <Link to={metric.path} className="group block h-full">
                        <div className="h-full bg-surface border border-white/10 p-10 rounded-4xl transition-all duration-300 hover:border-accent hover:bg-surface-light hover:scale-[1.02] hover:shadow-2xl hover:shadow-accent/10 flex flex-col items-start gap-6 relative overflow-hidden interactive-target">
                            
                            <div className="p-4 bg-white/5 rounded-3xl text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                                <metric.icon size={40} />
                            </div>
                            
                            <div className="relative z-10">
                                <h3 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors">{metric.title}</h3>
                                <p className="text-lg text-text-muted leading-relaxed group-hover:text-gray-300 transition-colors">{metric.desc}</p>
                            </div>

                            <div className="mt-auto flex items-center gap-2 text-sm font-mono text-accent opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                                <span>Detail řešení</span>
                                <ArrowRight size={16} />
                            </div>

                            {/* Decorative gradient blob */}
                            <div className="absolute -right-20 -top-20 w-64 h-64 bg-accent/5 rounded-full blur-3xl group-hover:bg-accent/10 transition-colors duration-500 pointer-events-none"></div>
                        </div>
                    </Link>
                </RevealSection>
            ))}
        </div>
        
        <RevealSection className="mt-20">
            <div className="bg-accent/10 border border-accent/20 rounded-4xl p-12 text-center">
                <h2 className="text-3xl font-bold mb-4">Investice do bezpečnosti</h2>
                <p className="max-w-2xl mx-auto text-text-muted mb-8">
                    Selhání v krizi je násobně dražší než příprava. Spočítáme ROI pro vaši organizaci.
                </p>
                <Link 
                    to="/kontakt?subject=Analýza ROI a bezpečnosti" 
                    className="inline-block px-8 py-4 bg-accent text-white font-bold rounded-full hover:bg-accent-dark transition-colors"
                >
                    Konzultovat řešení
                </Link>
            </div>
        </RevealSection>
      </div>
    </div>
  );
};

export default ForOrganizations;