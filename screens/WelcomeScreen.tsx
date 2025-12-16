import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '../components/Icon';

const WelcomeScreen: React.FC = () => {
    return (
        <div className="relative flex flex-col w-full h-full min-h-screen overflow-hidden bg-background-light dark:bg-background-dark text-slate-900 dark:text-white pb-6">
            {/* Status Bar Spacer */}
            <div className="h-12 w-full flex items-center justify-between px-6 pt-2 z-10">
                <span className="text-sm font-bold dark:text-white">9:41</span>
                <div className="flex gap-2 text-sm dark:text-white">
                    <Icon name="signal_cellular_alt" size={18} />
                    <Icon name="wifi" size={18} />
                    <Icon name="battery_full" size={18} />
                </div>
            </div>

            {/* Logo Area */}
            <div className="flex justify-center items-center py-4 z-10">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                        <Icon name="bedtime" className="text-background-dark font-bold" />
                    </div>
                    <span className="text-xl font-extrabold tracking-tight dark:text-white">Sueñavit</span>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col relative">
                {/* Hero Image / Graphic */}
                <div className="@container px-4 py-2 flex-1 flex flex-col justify-center items-center relative">
                    {/* Decorative Glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/20 rounded-full blur-[80px]"></div>
                    
                    <div className="w-full relative z-10 aspect-[4/5] max-h-[400px] rounded-xl overflow-hidden shadow-2xl shadow-primary/10 border border-white/5 bg-surface-dark/50 backdrop-blur-sm">
                        <div 
                            className="w-full h-full bg-cover bg-center opacity-90 mix-blend-lighten" 
                            style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBu3xoWvWorcVRJQsTwSnbZJfTaOqUx6JC8CMKAoMP55-q10fSj8CKtXS3otglCEKmAtwAlR7v5nMAjmFjXnv0IBt0LAVBVXyObZKKYFkqWsHRlfJCElQuydZF5iexRRXyuTE68wuSbLqAV2-KIG8xSxDVptANSNwfFvqFhj-1kesgrsl9rTvWJEr5EO0P_zjh9_8DhVrSC15Jsuweq7RWYCVF6lCeM-1Bn8CaP509D3q5F54Rcr2--ZYXgv9-MjI1x_Ofoh09b1m_6")'}}
                        ></div>
                        
                        {/* Overlay Stats */}
                        <div className="absolute bottom-6 left-6 right-6 bg-background-dark/80 backdrop-blur-md border border-white/10 p-4 rounded-xl flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                                <Icon name="ecg_heart" />
                            </div>
                            <div>
                                <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Calidad de Sueño</p>
                                <p className="text-lg font-bold text-white">94% <span className="text-primary text-sm font-normal ml-1">Óptimo</span></p>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Text Content */}
                <div className="px-6 pt-6 pb-2 text-center relative z-10">
                    <h1 className="text-white tracking-tight text-[32px] font-bold leading-tight pb-3">
                        Recuperación basada <br/> <span className="text-primary">en ciencia</span>
                    </h1>
                    <p className="text-gray-400 text-base font-normal leading-relaxed max-w-[320px] mx-auto">
                        Monitoriza tu sueño con precisión clínica. Sin trucos, solo datos transparentes para tu descanso.
                    </p>
                </div>
            </div>

            {/* Actions Footer */}
            <div className="px-6 py-6 pb-10 flex flex-col gap-3 relative z-10">
                <Link to="/dashboard" className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-full h-14 bg-primary text-background-dark text-lg font-bold leading-normal tracking-[0.015em] transition-transform active:scale-[0.98] shadow-[0_0_20px_rgba(25,230,94,0.3)] hover:shadow-[0_0_30px_rgba(25,230,94,0.5)]">
                    <span className="truncate">Comenzar Ahora</span>
                </Link>
                <Link to="/dashboard" className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 bg-transparent text-white/70 hover:text-white text-sm font-bold leading-normal tracking-[0.015em] transition-colors">
                    <span className="truncate">Ya tengo una cuenta. <span className="text-primary underline decoration-primary/50 underline-offset-4">Iniciar Sesión</span></span>
                </Link>
                <div className="mt-4 flex justify-center items-center gap-2 opacity-50">
                    <Icon name="lock" size={16} className="text-white" />
                    <span className="text-[10px] text-white tracking-widest uppercase">Datos Encriptados & Seguros</span>
                </div>
            </div>
        </div>
    );
};

export default WelcomeScreen;