
import React, { useState, useEffect, useRef } from 'react';
import { 
  CheckCircle2, 
  XCircle, 
  ArrowRight, 
  Calendar, 
  ShieldCheck, 
  ChevronDown, 
  Zap, 
  Clock, 
  Quote,
  ShieldAlert,
  Award,
  MessageCircle,
  Monitor
} from 'lucide-react';

// --- Scroll Reveal Wrapper ---
const Reveal: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${className} ${isVisible ? 'reveal-visible' : 'reveal-hidden'}`}
    >
      {children}
    </div>
  );
};

// --- Top Banner ---
const TopBanner: React.FC = () => (
  <div className="gold-gradient w-full py-4 px-4 text-center relative z-50 shadow-[0_4px_30px_rgba(245,158,11,0.2)]">
    <p className="text-black text-[12px] md:text-lg font-black uppercase tracking-[0.3em] leading-tight">
      Plano do Milhão • Exclusivo para Fisioterapeutas
    </p>
  </div>
);

// --- Hero ---
const Hero: React.FC = () => (
  <header className="relative min-h-[calc(100vh-56px)] flex flex-col lg:flex-row items-center overflow-hidden bg-black border-b border-white/5">
    {/* DESKTOP BACKGROUND IMAGE */}
    <div className="hidden lg:block absolute inset-0 z-0">
      <img 
        src="https://i.postimg.cc/TYRppmXb/img_hero.png" 
        alt="Expert segurando as placas do Clube do Milhão" 
        className="w-full h-full object-cover object-[65%_center] brightness-[0.6] lg:brightness-100 scale-105"
        fetchPriority="high"
        decoding="sync"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 lg:via-black/50 to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
    </div>

    <div className="max-w-7xl mx-auto px-6 relative z-10 w-full pt-8 lg:pt-0">
      <div className="max-w-3xl lg:text-left text-center">
        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-6">
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-md glass border-white/10 bg-black/60 shadow-lg">
            <Calendar className="w-4 h-4 text-amber-500" />
            <span className="text-[10px] font-bold tracking-[0.1em] uppercase text-zinc-100">28 de Fevereiro | Sábado</span>
          </div>
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-md glass border-white/10 bg-black/60 shadow-lg">
            <Clock className="w-4 h-4 text-amber-500" />
            <span className="text-[10px] font-bold tracking-[0.1em] uppercase text-zinc-100">09h às 17h • Ao Vivo</span>
          </div>
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-md glass border-white/10 bg-black/60 shadow-lg">
            <Monitor className="w-4 h-4 text-amber-500" />
            <span className="text-[10px] font-bold tracking-[0.1em] uppercase text-zinc-100">100% ONLINE</span>
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black heading-font mb-6 leading-[1.1] tracking-tighter uppercase drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)] text-balance">
          Em Apenas 6 Horas Você Vai Criar Comigo <br />
          <span className="gold-text">O Seu Plano do Milhão.</span>
        </h1>

        <p className="text-lg md:text-2xl text-zinc-100 mb-8 max-w-2xl mx-auto lg:mx-0 leading-tight font-medium drop-shadow-[0_4px_15px_rgba(0,0,0,1)] text-balance">
          Vou te entregar os pilares do método que levou fisioterapeutas comuns a faturamentos milionários com seus atendimentos.
        </p>

        {/* MOBILE IMAGE - OPTIMIZED SPACING */}
        <div className="lg:hidden relative w-full mb-2">
          <div className="relative w-full overflow-hidden rounded-[2rem] border border-white/5">
            <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-black via-black/20 to-transparent z-10"></div>
            <img 
              src="https://i.postimg.cc/YqpLTrQf/hero-mobile-luplacas.png" 
              alt="Expert Luciana Ramos - Imersão Plano do Milhão" 
              className="w-full h-auto block relative z-0"
              fetchPriority="high"
              decoding="sync"
              loading="eager"
            />
            <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-black via-black/20 to-transparent z-10"></div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-8 mt-0 lg:mt-8">
          <a 
            href="https://payfast.greenn.com.br/154044/offer/vZtACP" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-10 py-5 cta-green-gradient text-black font-black rounded-2xl text-lg flex items-center justify-center gap-3 animate-cta-pulse transition-all uppercase tracking-tighter shadow-[0_20px_60px_rgba(4,214,57,0.5)]"
          >
            QUERO O MEU MILHÃO
            <ArrowRight className="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
  </header>
);

// --- Sessão 1: TransformationSection (Resultados) ---
const TransformationSection: React.FC = () => (
  <section className="py-12 md:py-20 bg-[#080808] relative overflow-hidden">
    <div className="absolute top-0 right-0 w-[50%] h-full bg-gradient-to-l from-amber-500/5 to-transparent pointer-events-none"></div>
    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-5xl font-black heading-font text-white uppercase tracking-tighter mb-10 text-center leading-tight text-balance">
          Eu já guiei fisioterapeutas que faturavam menos de 10 mil reais por mês para o <span className="gold-text">"Clube do Milhão"</span> em minhas mentorias.
        </h2>

        <div className="space-y-10">
          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            <div className="relative aspect-video rounded-[1.5rem] md:rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl group bg-zinc-900">
              <img 
                src="https://i.postimg.cc/hGQ7n7kQ/premio_24_pm.png" 
                alt="Aluno comemorando milhão" 
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                loading="eager"
                decoding="sync"
              />
            </div>
            <div className="relative aspect-video rounded-[1.5rem] md:rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl group bg-zinc-900">
              <img 
                src="https://i.postimg.cc/s2GZzZkZ/premio_25_pm.png" 
                alt="Aluna comemorando faturamento" 
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                loading="eager"
                decoding="sync"
              />
            </div>
          </div>

          <div className="text-center pt-10 space-y-8">
            <div className="relative inline-block">
              <Quote className="absolute -top-8 -left-8 w-16 h-16 text-white/5 -z-10" />
              <h3 className="text-2xl md:text-4xl font-medium text-zinc-300 leading-tight max-w-4xl mx-auto text-balance">
                "O que eles fizeram não foi mágica, nem sorte; foi a <span className="gold-text font-black">aplicação guiada de um </span><span className="whitespace-nowrap"><span className="gold-text font-black">método</span>."</span>
              </h3>
            </div>
            
            <p className="text-lg md:text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed font-medium text-balance">
              Pela primeira vez, eu vou abrir esse método em um formato de imersão de um único dia para que você possa implementar os <span className="text-white font-bold">pilares do método</span> no seu negócio.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// --- Sessão 2: ObjectiveSection (O Objetivo) ---
const ObjectiveSection: React.FC = () => (
  <section className="py-12 md:py-20 bg-black relative bg-grid">
    <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none"></div>
    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <Reveal>
        <div className="space-y-12">
          <div className="text-center max-w-5xl mx-auto">
            <h3 className="text-[22px] md:text-5xl lg:text-6xl font-black heading-font text-white uppercase tracking-tighter leading-[1.2] md:leading-[1.1] mb-2 text-balance">
              ESSA IMERSÃO TEM UN OBJETIVO <br />
              <span className="gold-text">BEM CLARO E DEFINIDO</span>
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <div className="glass p-8 md:p-12 rounded-[2.5rem] border-amber-500/20 bg-zinc-950/60 relative group overflow-hidden transition-all hover:bg-zinc-950/80">
              <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/5 blur-3xl rounded-full"></div>
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center mb-6 border border-amber-500/20 shadow-inner">
                <Zap className="text-amber-500 w-5 h-5" />
              </div>
              <p className="text-lg md:text-xl text-zinc-200 font-medium leading-relaxed">
                Abrir em detalhes o método que eu criei para transformar pequenos consultórios e estúdios de pilates em negócios com faturamentos milionários.
              </p>
            </div>

            <div className="glass p-8 md:p-12 rounded-[2.5rem] border-amber-500/20 bg-zinc-950/60 relative group overflow-hidden transition-all hover:bg-zinc-950/80">
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-amber-500/10 blur-[80px] rounded-full"></div>
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center mb-6 border border-amber-500/20 shadow-inner">
                <Clock className="text-amber-500 w-5 h-5" />
              </div>
              <p className="text-lg md:text-xl text-zinc-200 font-medium leading-relaxed">
                Depois de <span className="text-white font-bold">6 HORAS</span> de imersão, você terá clareza do que precisa fazer para sair do seu faturamento atual e entrar para o seleto grupo do <span className="text-white font-bold underline decoration-amber-500 underline-offset-8">“Clube do Milhão.”</span>
              </p>
            </div>
          </div>

          <div className="pt-8 md:pt-12 text-center">
            <div className="max-w-4xl mx-auto">
              <h4 className="text-xl md:text-3xl font-bold text-zinc-300 leading-tight text-balance">
                Em apenas seis horas você vai desenhar o <span className="gold-text font-black">exato plano</span> que eu utilizei para levar fisioterapeutas que faturavam menos de R$ 10 mil para o <span className="text-white">Clube do Milhão.</span>
              </h4>
              <div className="w-16 h-1 gold-gradient mx-auto mt-6 opacity-40 rounded-full"></div>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

// --- Sessão 3: PainSection (A Estagnação) ---
const PainSection: React.FC = () => (
  <section className="py-12 md:py-20 bg-[#0a0a0a] relative overflow-hidden">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/[0.03] blur-[150px] rounded-full pointer-events-none"></div>
    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <Reveal>
        <div className="relative">
          <div className="text-center">
            <h2 className="text-2xl md:text-4xl font-medium text-zinc-300 leading-tight mb-8 max-w-4xl mx-auto text-balance">
              A maioria dos fisioterapeutas foca apenas em ser um <span className="text-white font-bold">excelente técnico</span>, mas ignora aquilo que realmente gera o <span className="gold-text font-black">crescimento real</span>.
            </h2>
            <p className="text-white text-xl md:text-3xl max-w-4xl mx-auto font-medium leading-tight tracking-tight text-balance">
              O resultado? Negócios estagnados por anos, faturando muito abaixo do que poderiam e que não conseguem sair do lugar.
            </p>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

// --- Sessão 4: Selection (Público-Alvo) ---
const Selection: React.FC = () => (
  <section className="py-12 md:py-20 relative bg-[#050505] overflow-hidden border-y border-white/5">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(245,158,11,0.02)_0%,_transparent_70%)] pointer-events-none"></div>
    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <div className="grid lg:grid-cols-2 gap-6 md:gap-8 items-stretch">
        <Reveal className="h-full">
          <div className="relative group h-full">
            <div className="absolute -inset-2 bg-emerald-500/5 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative glass p-8 md:p-12 rounded-[2.5rem] border-emerald-500/10 bg-zinc-950/40 h-full flex flex-col">
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-black heading-font text-white uppercase tracking-tighter leading-none">
                  A IMERSÃO É <br /> <span className="text-emerald-500">PARA VOCÊ SE…</span>
                </h2>
              </div>
              <div className="space-y-8 flex-grow">
                {[
                  "Você já possui uma operação ativa (consultório ou estúdio) e entendeu que o próximo nível exige uma visão de negócios.",
                  "Você busca um modelo de crescimento validado, querendo replicar o caminho de quem já saiu dos R$ 10 mil mensais.",
                  "Você deseja profissionalizar sua gestão, dominando os indicadores e a estrutura financeira de alto faturamento.",
                  "Você está comprometido com a implementação, pronto para sentar por 6 horas e desenhar cada pilar."
                ].map((text, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-6 h-6 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0 mt-1">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    </div>
                    <p className="text-zinc-300 text-lg md:text-xl font-medium leading-snug">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal className="h-full">
          <div className="relative group h-full">
            <div className="absolute -inset-2 bg-rose-500/5 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative glass p-8 md:p-12 rounded-[2.5rem] border-rose-500/10 bg-zinc-950/40 h-full flex flex-col">
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-black heading-font text-white uppercase tracking-tighter leading-none">
                  ESTA IMERSÃO <br /> <span className="text-rose-500">NÃO É PARA:</span>
                </h2>
              </div>
              <div className="space-y-8 flex-grow">
                <div className="flex gap-4 items-start">
                  <div className="w-6 h-6 rounded-lg bg-rose-500/10 border border-rose-500/20 flex items-center justify-center shrink-0 mt-1">
                    <XCircle className="w-4 h-4 text-rose-500" />
                  </div>
                  <p className="text-zinc-400 text-lg md:text-xl font-medium leading-snug">
                    Quem busca "fórmulas mágicas" sem esforço.
                  </p>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-6 h-6 rounded-lg bg-rose-500/10 border border-rose-500/20 flex items-center justify-center shrink-0 mt-1">
                    <XCircle className="w-4 h-4 text-rose-500" />
                  </div>
                  <p className="text-zinc-400 text-lg md:text-xl font-medium leading-snug">
                    Profissionais que não estão dispostos a sair do amadorismo e encarar a fisioterapia como um negócio de verdade.
                  </p>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-white/5">
                 <p className="text-zinc-600 text-[10px] text-center uppercase tracking-widest">
                   Plano do Milhão: Apenas para Comprometidos.
                 </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);

// --- Sessão 5: VisionSection ---
const VisionSection: React.FC = () => (
  <section className="py-16 md:py-28 bg-black relative overflow-hidden">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-amber-500/5 blur-[160px] rounded-full"></div>
    <div className="max-w-6xl mx-auto px-6 relative z-10">
      <Reveal className="relative">
        <Quote className="absolute -top-12 -left-8 md:-left-16 w-24 h-24 md:w-48 md:h-48 text-white/[0.03] rotate-12" />
        <div className="text-center space-y-8 md:space-y-10">
          <h2 className="text-2xl md:text-5xl lg:text-6xl font-black heading-font text-white uppercase tracking-tighter leading-[1.05] max-w-5xl mx-auto drop-shadow-2xl text-balance">
            “O que, exatamente, eu preciso fazer em <span className="text-amber-500">2026</span> para preparar o meu negócio para chegar no <span className="gold-text">Clube do Milhão?</span>”
          </h2>
          <div className="flex flex-col items-center">
            <div className="w-16 h-1 gold-gradient rounded-full mb-6"></div>
            <p className="text-lg md:text-2xl font-bold uppercase tracking-tight text-zinc-400">
              É exatamente isso que eu vou te mostrar, no dia <span className="text-white underline decoration-amber-500 underline-offset-8">28 de fevereiro</span>.
            </p>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

// --- Sessão: Schedule (Cronograma) ---
const Schedule: React.FC = () => {
  const items = [
    { time: "09h", label: "Início" },
    { time: "12h", label: "Intervalo" },
    { time: "14h", label: "Retorno" },
    { time: "17h", label: "Encerramento" }
  ];

  return (
    <section className="py-12 md:py-20 bg-black relative overflow-hidden bg-grid">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <Reveal>
          <div className="flex flex-col items-center mb-8">
            <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-amber-500/20 bg-black/50">
                <Calendar className="w-4 h-4 text-amber-500" />
                <span className="text-[10px] font-bold text-white uppercase tracking-[0.2em]">28 de fevereiro | Ao Vivo</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-amber-500/20 bg-black/50">
                <Monitor className="w-4 h-4 text-amber-500" />
                <span className="text-[10px] font-bold text-white uppercase tracking-[0.2em]">100% ONLINE NO ZOOM</span>
              </div>
            </div>
            <h2 className="text-3xl md:text-5xl font-black heading-font text-white uppercase tracking-tighter mb-1 text-center">
              Cronograma
            </h2>
            <p className="text-zinc-500 uppercase tracking-[0.4em] font-black text-[10px] md:text-sm">Sábado</p>
          </div>

          <div className="max-w-3xl mx-auto mt-8 space-y-0 border-t border-white/10">
            {items.map((item, index) => (
              <div 
                key={index} 
                className="group flex items-center justify-between py-6 md:py-8 border-b border-white/10 relative overflow-hidden transition-all hover:bg-white/[0.01]"
              >
                <div className="flex items-baseline gap-4 relative z-10">
                  <span className="text-2xl md:text-5xl font-black text-white heading-font tracking-tighter leading-none transition-transform group-hover:scale-105 group-hover:text-amber-500 duration-500">
                    {item.time}
                  </span>
                </div>
                <div className="text-right relative z-10">
                  <span className="text-base md:text-2xl font-bold text-zinc-200 heading-font uppercase tracking-tighter opacity-80 group-hover:opacity-100 transition-opacity duration-500">
                    {item.label}
                  </span>
                </div>
                {/* Decoration */}
                <div className="absolute left-0 bottom-0 w-0 h-[1px] gold-gradient transition-all duration-700 group-hover:w-full"></div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

// --- Sessão 6: Pricing ---
const Pricing: React.FC = () => (
  <section id="pricing" className="py-12 md:py-24 bg-[#080808] relative overflow-hidden border-t border-white/5">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-amber-600/5 blur-[150px] rounded-full z-0 pointer-events-none"></div>
    <div className="max-w-4xl mx-auto px-6 relative z-10">
      <Reveal>
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-6xl font-black heading-font text-white uppercase tracking-tighter drop-shadow-lg text-balance">GARANTA SUA VAGA AGORA</h2>
        </div>
        <div className="glass p-8 md:p-16 rounded-[2.5rem] md:rounded-[3.5rem] border-amber-500/30 text-center bg-zinc-950/60 relative overflow-hidden shadow-[0_0_100px_rgba(245,158,11,0.15)]">
          <div className="absolute top-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-red-600 text-white text-xs md:text-base font-black uppercase tracking-[0.2em] rounded-full shadow-lg">
            ÚLTIMAS VAGAS
          </div>
          <div className="mt-8 mb-8">
            <div className="text-sm md:text-lg font-bold text-zinc-500 block mb-4 uppercase tracking-[0.3em]">
              de <span className="line-through">R$ 497,00</span> por apenas:
            </div>
            <div className="flex flex-col items-center justify-center">
               <span className="text-2xl md:text-4xl font-black text-white uppercase tracking-tighter mb-2">12x de</span>
               <div className="flex items-baseline justify-center mb-4">
                 <span className="text-3xl md:text-5xl font-black text-amber-500 mr-2">R$</span>
                 <span className="text-7xl md:text-[11rem] font-black gold-text heading-font leading-none tracking-tighter">9,97</span>
               </div>
               <div className="text-zinc-400 text-lg md:text-2xl font-medium tracking-tight">
                 ou <span className="text-white font-bold underline decoration-amber-500 decoration-2 underline-offset-8">R$ 97,00 à vista</span>
               </div>
            </div>
          </div>
          <a 
            href="https://payfast.greenn.com.br/154044/offer/vZtACP" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full inline-flex cta-green-gradient py-5 md:py-7 rounded-2xl text-black font-black text-lg md:text-2xl animate-cta-pulse uppercase tracking-tighter items-center justify-center gap-3 transition-transform hover:scale-[1.02] shadow-[0_20px_50px_rgba(4,214,57,0.3)]"
          >
            GARANTIR INGRESSO
            <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
          </a>
        </div>
      </Reveal>
    </div>
  </section>
);

// --- Sessão 8: AboutExpert ---
const AboutExpert: React.FC = () => (
  <section className="py-12 md:py-20 bg-[#050505] relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="space-y-6 order-2 lg:order-1 text-left">
          <h2 className="text-3xl md:text-5xl font-black heading-font text-white leading-tight uppercase tracking-tighter text-balance">
            Quem é <span className="gold-text">Luciana Ramos?</span>
          </h2>
          <div className="space-y-4 text-base md:text-lg text-zinc-300 font-medium leading-relaxed">
            <p>Fisioterapeuta, Empresária e Mentora de Profissionais da Saúde.</p>
            <p>Desde 2015 já ensinou mais de <span className="text-white font-bold">10 mil profissionais da saúde</span> a conquistar mais pacientes e multiplicar o faturamento.</p>
            <p className="font-bold text-white">Alguns inclusive ultrapassaram a barreira de 1 milhão, 2 milhões e 3 milhões de reais faturados com seus atendimentos aplicando o Método ensinado por ela.</p>
            <p>Em 2019 foi apontada pela Revista Você S/A como <span className="text-white font-bold">referência no ensino de Gestão de Negócios e Carreira</span> para Profissionais da Saúde no Brasil.</p>
          </div>
        </div>
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[460px]">
            <div className="absolute -inset-8 bg-amber-500/10 blur-[80px] rounded-full -z-10"></div>
            <div className="relative aspect-[520/610] w-full overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-900 shadow-3xl">
              <img 
                src="https://i.postimg.cc/mkqCGNd2/sobre-lu-1.png" 
                alt="Luciana Ramos" 
                className="w-full h-full object-cover grayscale-[10%] hover:grayscale-0 transition-all duration-300"
                loading="eager"
                decoding="sync"
                fetchPriority="high"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// --- Sessão 9: Guarantee (Revised) ---
const Guarantee: React.FC = () => (
  <section className="py-20 md:py-32 bg-black relative overflow-hidden">
    {/* Atmospheric Background elements */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(245,158,11,0.05)_0%,_transparent_70%)] pointer-events-none"></div>
    <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none"></div>
    
    <div className="max-w-6xl mx-auto px-6 relative z-10">
      <Reveal className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        {/* Prestige Seal */}
        <div className="relative shrink-0">
          <div className="absolute -inset-10 bg-amber-500/10 blur-[60px] rounded-full animate-pulse"></div>
          <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-amber-500/40 p-2 bg-zinc-950 flex items-center justify-center shadow-[0_0_50px_rgba(245,158,11,0.2)] animate-shine">
            <div className="absolute inset-0 rounded-full border border-amber-500/10 animate-spin-[20s_linear_infinite]"></div>
            <div className="w-full h-full rounded-full border-2 border-dashed border-amber-500/20 flex flex-col items-center justify-center text-center p-4">
               <ShieldAlert className="w-12 h-12 md:w-16 md:h-16 text-amber-500 mb-2" />
               <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-amber-500">Garantia Blindada</span>
               <div className="mt-2 text-3xl md:text-5xl font-black heading-font text-white leading-none">60<br /><span className="text-sm md:text-xl">MIN</span></div>
            </div>
          </div>
          {/* Medal Decorative elements */}
          <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center border-4 border-black shadow-xl">
             <Award className="text-white w-6 h-6" />
          </div>
        </div>

        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-3xl md:text-5xl font-black heading-font text-white uppercase mb-6 tracking-tighter leading-tight text-balance">
            GARANTIA INCONDICIONAL <br /><span className="gold-text">DA PRIMEIRA HORA</span>
          </h2>
          <div className="space-y-6">
            <p className="text-xl md:text-2xl text-zinc-200 leading-snug font-medium text-balance">
              Participe da imersão e conheça o método. Se durante a primeira hora você achar que não valeu cada centavo investido, é só pedir <span className="text-white font-bold">reembolso total</span>.
            </p>
            <p className="text-lg md:text-xl text-zinc-400 leading-relaxed">
              Sem perguntas, sem burocracia.
            </p>
            <p className="text-sm md:text-base text-zinc-500 leading-relaxed font-medium bg-zinc-950/50 p-4 rounded-xl border border-white/5">
              <span className="text-amber-500/70 font-bold uppercase tracking-widest text-[10px] block mb-2">Termos da Garantia:</span>
              Essa garantia só é válida se você participar desde o início da imersão e solicitar o reembolso em até 60 minutos após o início da imersão.
            </p>
            <div className="pt-6 flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start">
              <div className="flex flex-col">
                <span className="text-xs uppercase tracking-[0.3em] font-black text-zinc-500 mb-1">Assinatura de Compromisso</span>
                <span className="text-2xl md:text-3xl font-medium heading-font text-white opacity-80">Luciana Ramos</span>
              </div>
              <div className="h-10 w-px bg-white/10 hidden sm:block"></div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-emerald-500 w-5 h-5" />
                <span className="text-sm font-bold text-zinc-400 uppercase tracking-widest">Reembolso Simplificado</span>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

// --- Sessão 10: FAQ ---
const FAQ: React.FC = () => {
  const [active, setActive] = useState<number | null>(0);
  const faqs = [
    { q: "Que dia e horário será realizada a Imersão?", a: "Será realizada AO VIVO no dia 28 de Fevereiro, de 9h até 17h, totalmente ONLINE via ZOOM." },
    { q: "Quais as formas de pagamento disponíveis?", a: "PIX à vista ou cartão de crédito parcelado em até 12x." },
    { q: "Caso não possa participar ao vivo, teremos acesso a gravação?", a: "Não. Esta imersão é um evento exclusivo para implementação em tempo real, sem gravação posterior." },
    { q: "Como recebo o link de acesso?", a: "O link exclusivo do ZOOM será enviado para o seu e-mail e WhatsApp cadastrados imediatamente após a confirmação." }
  ];

  return (
    <section className="py-12 md:py-20 bg-black border-t border-white/5">
      <div className="max-w-4xl mx-auto px-6">
        <Reveal>
          <h2 className="text-3xl md:text-6xl font-black heading-font text-center mb-10 uppercase text-white tracking-tighter drop-shadow-lg text-balance">PERGUNTAS FREQUENTES</h2>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <div key={i} className="glass rounded-[1.5rem] md:rounded-[2rem] border-white/5 overflow-hidden group">
                <button onClick={() => setActive(active === i ? null : i)} className="w-full p-6 md:p-8 text-left flex items-center justify-between">
                  <span className="text-base md:text-lg font-bold uppercase tracking-tight text-white group-hover:text-amber-500 transition-colors">{f.q}</span>
                  <ChevronDown className={`transition-transform duration-500 ${active === i ? 'rotate-180' : ''} text-amber-500 w-5 h-5`} />
                </button>
                <div className={`px-6 md:px-8 overflow-hidden transition-all duration-500 ease-in-out ${active === i ? 'max-h-60 pb-8' : 'max-h-0'}`}>
                  <p className="text-zinc-400 text-base md:text-lg leading-relaxed font-medium opacity-80">{f.a}</p>
                </div>
              </div>
            ))}
          </div>

          {/* WhatsApp Call to Action */}
          <div className="mt-20 text-center border-t border-white/5 pt-16">
            <h3 className="text-xl md:text-3xl font-black heading-font text-white uppercase tracking-tighter mb-2 text-balance">Tem alguma outra dúvida?</h3>
            <p className="text-zinc-400 text-lg md:text-xl mb-10 font-medium text-balance">Fale conosco pelo Whatsapp</p>
            <a 
              href="https://api.whatsapp.com/send/?phone=5511982139391&text=Tenho%20d%C3%BAvidas%20sobre%20a%20Imers%C3%A3o" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 px-10 py-5 cta-green-gradient text-black font-black rounded-2xl text-lg md:text-xl animate-cta-pulse transition-all hover:scale-105 shadow-[0_20px_50px_rgba(4,214,57,0.4)] uppercase tracking-tighter"
            >
              <MessageCircle className="w-6 h-6 md:w-8 md:h-8" />
              FALAR NO WHATSAPP
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

const Footer: React.FC = () => (
  <footer className="py-10 border-t border-white/10 bg-black text-center">
    <div className="flex items-center justify-center gap-3 mb-6 opacity-30">
        <div className="w-6 h-6 gold-gradient rounded-lg"></div>
        <span className="font-bold heading-font text-[10px] uppercase tracking-[0.5em]">PLANO DO MILHÃO</span>
    </div>
    <p className="text-zinc-700 text-[9px] uppercase tracking-[0.4em] font-black">ESTRATÉGIA VALIDADA • TODOS OS DIREITOS RESERVADOS © 2025</p>
  </footer>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white antialiased selection:bg-amber-500 selection:text-black">
      <TopBanner />
      <Hero />
      <TransformationSection />
      <ObjectiveSection />
      <PainSection />
      <Reveal><Selection /></Reveal>
      <Reveal><VisionSection /></Reveal>
      <Reveal><Schedule /></Reveal>
      <Reveal><Pricing /></Reveal>
      <AboutExpert />
      <Reveal><Guarantee /></Reveal>
      <Reveal><FAQ /></Reveal>
      <Footer />
      <div className="fixed bottom-6 left-6 right-6 z-40 md:hidden">
        <a 
          href="https://payfast.greenn.com.br/154044/offer/vZtACP" 
          target="_blank" 
          rel="noopener noreferrer"
          className="cta-green-gradient w-full py-5 rounded-2xl text-black font-black text-center flex items-center justify-center gap-2 uppercase text-[12px] shadow-[0_15px_40px_rgba(4,214,57,0.4)] animate-cta-pulse"
        >
          GARANTIR MINHA VAGA <ArrowRight size={16} />
        </a>
      </div>
    </div>
  );
};

export default App;
