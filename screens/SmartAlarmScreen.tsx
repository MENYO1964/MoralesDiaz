import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon } from '../components/Icon';

const SmartAlarmScreen: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="relative flex h-full min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark text-slate-900 dark:text-white">
            <header className="sticky top-0 z-50 flex items-center justify-between px-4 py-4 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md">
                <button onClick={() => navigate(-1)} className="flex size-10 items-center justify-center rounded-full text-slate-500 hover:bg-black/5 dark:text-slate-400 dark:hover:bg-white/10 transition-colors">
                    <Icon name="close" size={24} />
                </button>
                <h1 className="text-lg font-bold leading-tight tracking-tight">Alarma Inteligente</h1>
                <button onClick={() => navigate('/dashboard')} className="flex h-10 px-4 items-center justify-center rounded-full bg-transparent hover:bg-primary/10 transition-colors">
                    <span className="text-primary text-base font-bold">Guardar</span>
                </button>
            </header>

            <main className="flex-1 flex flex-col px-6 pb-10">
                <div className="mt-4 mb-2 text-center">
                    <h2 className="text-slate-900 dark:text-white text-[28px] font-bold leading-tight">Despertar a más tardar</h2>
                    <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Elige tu hora límite</p>
                </div>

                {/* Wheel Picker Visual */}
                <div className="relative w-full h-64 my-6 select-none">
                    <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 h-14 bg-black/5 dark:bg-primary/10 rounded-xl border border-black/5 dark:border-primary/20 pointer-events-none z-10 flex items-center justify-between px-16">
                        <span className="text-xs font-bold text-slate-400 dark:text-primary/50 tracking-widest uppercase ml-[-20px]">Hora</span>
                        <span className="text-xs font-bold text-slate-400 dark:text-primary/50 tracking-widest uppercase mr-[-20px]">Min</span>
                    </div>
                    <div className="flex h-full w-full justify-center gap-8 relative z-0">
                        {/* Hours */}
                        <div className="w-20 h-full overflow-hidden relative mask-linear-gradient">
                            <div className="absolute inset-0 bg-gradient-to-b from-background-light via-transparent to-background-light dark:from-background-dark dark:via-transparent dark:to-background-dark z-20 pointer-events-none"></div>
                            <div className="flex flex-col items-center py-[100px] gap-3">
                                <span className="text-3xl text-slate-300 dark:text-slate-600 font-semibold opacity-40">06</span>
                                <span className="text-5xl text-slate-900 dark:text-white font-bold scale-110">07</span>
                                <span className="text-3xl text-slate-300 dark:text-slate-600 font-semibold opacity-40">08</span>
                                <span className="text-3xl text-slate-300 dark:text-slate-600 font-semibold opacity-40">09</span>
                                <span className="text-3xl text-slate-300 dark:text-slate-600 font-semibold opacity-40">10</span>
                            </div>
                        </div>
                        {/* Separator */}
                        <div className="flex items-center justify-center h-full pt-1">
                            <span className="text-3xl font-bold text-slate-300 dark:text-slate-600 mb-2">:</span>
                        </div>
                        {/* Minutes */}
                        <div className="w-20 h-full overflow-hidden relative">
                            <div className="absolute inset-0 bg-gradient-to-b from-background-light via-transparent to-background-light dark:from-background-dark dark:via-transparent dark:to-background-dark z-20 pointer-events-none"></div>
                            <div className="flex flex-col items-center py-[100px] gap-3">
                                <span className="text-3xl text-slate-300 dark:text-slate-600 font-semibold opacity-40">15</span>
                                <span className="text-5xl text-primary font-bold scale-110 shadow-glow">30</span>
                                <span className="text-3xl text-slate-300 dark:text-slate-600 font-semibold opacity-40">45</span>
                                <span className="text-3xl text-slate-300 dark:text-slate-600 font-semibold opacity-40">00</span>
                                <span className="text-3xl text-slate-300 dark:text-slate-600 font-semibold opacity-40">15</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Smart Toggle */}
                <div className="bg-white dark:bg-surface-dark rounded-2xl p-4 flex items-center justify-between shadow-sm mb-6 border border-slate-100 dark:border-white/5">
                    <div className="flex items-center gap-4">
                        <div className="flex items-center justify-center rounded-xl bg-primary/10 dark:bg-primary/20 shrink-0 size-12 text-primary">
                            <Icon name="psychology_alt" size={28} />
                        </div>
                        <div className="flex flex-col justify-center">
                            <p className="text-slate-900 dark:text-white text-base font-bold leading-normal">Smart Wake</p>
                            <p className="text-slate-500 dark:text-slate-400 text-sm font-normal leading-normal">Optimizado por IA</p>
                        </div>
                    </div>
                    <div className="shrink-0">
                        <label className="relative flex h-[32px] w-[52px] cursor-pointer items-center rounded-full border border-transparent bg-slate-200 dark:bg-black p-1 transition-colors has-[:checked]:bg-primary has-[:checked]:border-primary">
                            <input defaultChecked className="peer sr-only" type="checkbox"/>
                            <div className="h-6 w-6 rounded-full bg-white shadow-sm transition-all peer-checked:translate-x-5"></div>
                        </label>
                    </div>
                </div>

                {/* Window */}
                <div className="mb-8">
                    <div className="flex justify-between items-end mb-4 px-1">
                        <h3 className="text-slate-900 dark:text-white text-lg font-bold">Ventana de despertar</h3>
                        <span className="text-primary text-sm font-bold bg-primary/10 px-2 py-0.5 rounded-md">30 min</span>
                    </div>
                    <div className="flex justify-between text-xs text-slate-400 mb-2 px-1 font-medium">
                        <span>Inicia: 07:00</span>
                        <span>Suena: 07:30</span>
                    </div>
                    <div className="relative h-2 bg-slate-200 dark:bg-white/10 rounded-full mb-6 overflow-hidden">
                        <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-l from-primary to-primary/40 rounded-full"></div>
                    </div>
                    <div className="grid grid-cols-4 gap-2">
                        <button className="flex h-10 items-center justify-center rounded-lg bg-white dark:bg-surface-dark border border-slate-200 dark:border-white/5 text-slate-500 dark:text-slate-400 text-sm font-bold hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">10m</button>
                        <button className="flex h-10 items-center justify-center rounded-lg bg-white dark:bg-surface-dark border border-slate-200 dark:border-white/5 text-slate-500 dark:text-slate-400 text-sm font-bold hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">20m</button>
                        <button className="flex h-10 items-center justify-center rounded-lg bg-primary text-black text-sm font-bold shadow-glow shadow-primary/50 ring-2 ring-primary ring-offset-2 ring-offset-background-dark">30m</button>
                        <button className="flex h-10 items-center justify-center rounded-lg bg-white dark:bg-surface-dark border border-slate-200 dark:border-white/5 text-slate-500 dark:text-slate-400 text-sm font-bold hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">45m</button>
                    </div>
                </div>

                {/* Info Card */}
                <div className="bg-gradient-to-br from-surface-dark to-black dark:from-[#1F3325] dark:to-surface-dark rounded-2xl p-5 mb-6 relative overflow-hidden group">
                    <div className="absolute -right-10 -top-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl group-hover:bg-primary/30 transition-all duration-500"></div>
                    <div className="relative z-10">
                        <div className="flex items-center gap-2 mb-2 text-primary">
                            <Icon name="science" size={20} />
                            <span className="text-xs font-bold uppercase tracking-wider">Ciencia del sueño</span>
                        </div>
                        <p className="text-slate-100 dark:text-white text-sm leading-relaxed opacity-90">
                            Sueñavit detecta tus micro-movimientos para encontrarte en fase de <span className="text-primary font-bold">sueño ligero</span> dentro de tu ventana de 30 min.
                        </p>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default SmartAlarmScreen;