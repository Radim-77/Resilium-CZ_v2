import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, TrendingUp, Zap, ShieldAlert, Crosshair } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import RevealSection from '../components/UI/RevealSection';

const HomePage: React.FC = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);
  const yBg = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <div className="flex flex-col gap-32 pb-20">
      {/* Hero Section */}
      <section ref={targetRef} className="relative h-[85vh] flex items-center justify-center overflow-hidden px-4">
        {/* Parallax Background */}
        <motion.div 
            style={{ y: yBg }}
            className="absolute inset-0 w-full h-full pointer-events-none z-0"
        >
            <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/20 blur-[120px] rounded-full animate-pulse duration-[5000ms]"></div>
        </motion.div>
        
        <motion.div 
            style={{ opacity, scale, y }} 
            className="z-10 text-center max-w-4xl flex flex-col items-center gap-8"
        >
          <div className="inline-block px-4 py-1.5 border border-accent/30 rounded-full bg-accent/10 backdrop-blur-md">
            <span className="text-accent text-xs font-mono tracking-widest uppercase font-bold">Res-Con Methodology</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[1.1]">
            Systém trénovaných <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-gray-500">reakcí.</span>
          </h1>
          
          <div className="flex flex-col items-center gap-4">
            <p className="text-lg md:text-2xl text-text-muted max-w-2xl font-light leading-relaxed">
              Zajišťujeme akceschopnost lidí a organizací v situacích, kdy stres narušuje rozhodování, komunikaci a odpovědnost.
            </p>
            <p className="text-base md:text-lg text-text-muted/80 max-w-2xl font-light leading-relaxed">
              Součástí našich programů je i trénink chování při fyzickém ohrožení a násilných incidentech.
            </p>
          </div>

          <Link to="/programy" className="interactive-target group relative inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-semibold rounded-full hover:scale-105 transition-transform duration-300">
            <span>Prozkoumat programy</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </section>

      {/* Grid Hover Boxes */}
      <RevealSection>
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-xs font-mono text-accent uppercase tracking-widest mb-8 ml-2">Systémová pojistka</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Box 1 - Snížení chybovosti */}
            <Link to="/pro-organizace/chybovost" className="block interactive-target group p-8 rounded-4xl bg-surface border border-white/5 hover:border-accent/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent/10 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">
                <Zap size={64} className="text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-4 mt-8 group-hover:text-accent transition-colors">Snížení chybovosti</h3>
              <p className="text-text-muted leading-relaxed">
                Eliminace kognitivních selhání v klíčových procesech skrze natrénované operační protokoly.
              </p>
            </Link>

            {/* Box 2 - Ochrana reputace */}
            <Link to="/pro-organizace/reputace" className="block interactive-target group p-8 rounded-4xl bg-surface border border-white/5 hover:border-accent/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent/10 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">
                <Shield size={64} className="text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-4 mt-8 group-hover:text-accent transition-colors">Ochrana reputace</h3>
              <p className="text-text-muted leading-relaxed">
                Prevence neprofesionálního chování a eskalace konfliktů v krizových interakcích.
              </p>
            </Link>

            {/* Box 3 - Udržitelnost (Prevence vyhoření) */}
            <Link to="/pro-organizace/vyhoreni" className="block interactive-target group p-8 rounded-4xl bg-surface border border-white/5 hover:border-accent/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent/10 transition-all duration-300 relative overflow-hidden">
               <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">
                <TrendingUp size={64} className="text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-4 mt-8 group-hover:text-accent transition-colors">Udržitelnost</h3>
              <p className="text-text-muted leading-relaxed">
                Dlouhodobá akceschopnost klíčových expertů díky efektivní práci s biologickým stresem.
              </p>
            </Link>

            {/* Box 4 - Fyzická bezpečnost */}
            <Link to="/fyzicka-bezpecnost" className="block interactive-target group p-8 rounded-4xl bg-surface border border-white/5 hover:border-warning/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-warning/10 transition-all duration-300 relative overflow-hidden">
               <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">
                <ShieldAlert size={64} className="text-warning" />
              </div>
              <h3 className="text-2xl font-bold mb-4 mt-8 group-hover:text-warning transition-colors">Fyzická bezpečnost</h3>
              <p className="text-text-muted leading-relaxed">
                Trénink reakcí na přímé fyzické ohrožení, útoky a násilné incidenty.
              </p>
            </Link>

          </div>
        </div>
      </RevealSection>

      {/* Methodology Core */}
      <RevealSection>
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold">
                    Neurobiologie v <br/><span className="text-accent">praxi.</span>
                </h2>
                <p className="text-lg text-text-muted leading-relaxed">
                    Resilium integruje neurobiologické poznatky do praktického výcviku. Výsledkem jsou automatizované vzorce chování, které nahrazují instinktivní reakce.
                </p>
                <p className="text-lg text-text-muted leading-relaxed">
                    Celý systém je postaven na metodice <strong>RES-CON</strong>, která mění způsob, jakým mozek zpracovává hrozby.
                </p>
                <Link to="/metodika" className="inline-block border-b border-accent text-accent font-mono mt-4 hover:text-white hover:border-white transition-colors">
                    Více o metodice &rarr;
                </Link>
            </div>
            <div className="relative h-[400px] bg-gradient-to-tr from-surface to-surface-light rounded-4xl border border-white/5 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558494949-ef526b0042a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center opacity-30 mix-blend-overlay"></div>
                <div className="z-10 text-center p-8 bg-black/40 backdrop-blur-md rounded-2xl border border-white/10">
                    <span className="block text-6xl font-bold text-white mb-2">35%</span>
                    <span className="text-sm font-mono text-gray-300 uppercase">Snížení chybovosti</span>
                </div>
            </div>
        </div>
      </RevealSection>

      {/* NEW: Physical Safety Section */}
      <RevealSection>
        <div className="max-w-7xl mx-auto px-4 mt-20">
          <div className="relative rounded-4xl bg-surface border border-white/5 overflow-hidden group hover:border-warning/50 transition-colors duration-500">
            {/* Background Accent */}
            <div className="absolute inset-0 bg-gradient-to-r from-warning/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="grid md:grid-cols-2">
                <div className="p-10 md:p-16 flex flex-col justify-center relative z-10">
                    <div className="flex items-center gap-3 text-warning mb-6">
                        <ShieldAlert size={24} />
                        <span className="text-xs font-mono uppercase tracking-widest font-bold">Kinetická odolnost</span>
                    </div>
                    
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        Protokoly pro <br/>
                        <span className="text-white">fyzické ohrožení.</span>
                    </h2>
                    
                    <p className="text-lg text-text-muted leading-relaxed mb-8">
                        Násilí je extrémní forma stresu. Naše metodika nerozlišuje mezi psychickým nátlakem a fyzickým útokem – pro oba existuje trénovaný algoritmus. Učíme osobní bezpečnost jako systém, ne jako sport.
                    </p>

                    <Link to="/fyzicka-bezpecnost" className="inline-flex items-center gap-2 text-warning font-bold hover:text-white transition-colors group/link">
                        <span>Prozkoumat protokoly bezpečnosti</span>
                        <Crosshair size={20} className="group-hover/link:rotate-90 transition-transform duration-300" />
                    </Link>
                </div>
                
                {/* Visual / Image Side */}
                <div className="relative min-h-[300px] md:min-h-full bg-black/50 border-l border-white/5 flex items-center justify-center overflow-hidden">
                     {/* Abstract tactical grid */}
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
                    <div className="absolute w-[200%] h-[200%] bg-warning/5 animate-[spin_60s_linear_infinite] rounded-[40%] blur-3xl"></div>
                    
                    <div className="relative z-10 text-center">
                        <div className="inline-block p-6 rounded-full border border-warning/20 bg-warning/5 mb-4 backdrop-blur-sm">
                            <ShieldAlert size={48} className="text-warning" />
                        </div>
                        <div className="space-y-2">
                             <div className="text-xs font-mono text-zinc-500 uppercase">Status</div>
                             <div className="text-sm font-bold text-white tracking-widest">ACTIVE THREAT READY</div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </RevealSection>
    </div>
  );
};

export default HomePage;