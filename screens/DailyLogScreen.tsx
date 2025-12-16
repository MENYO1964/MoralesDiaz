import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon } from '../components/Icon';

const DailyLogScreen: React.FC = () => {
    const navigate = useNavigate();
    const [caffeine, setCaffeine] = useState(true);
    const [alcohol, setAlcohol] = useState(false);
    const [stress, setStress] = useState(3);

    return (
        <div className="relative flex h-full min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark text-slate-900 dark:text-white">
            {/* Top App Bar */}
            <div className="sticky top-0 z-50 flex items-center bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md p-4 pb-2 justify-between border-b border-white/5">
                <button onClick={() => navigate(-1)} className="text-white flex size-10 shrink-0 items-center justify-center rounded-full active:bg-white/10 transition-colors">
                    <Icon name="arrow_back_ios_new" size={24} />
                </button>
                <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">Registro Diario</h2>
                <div className="flex w-10 items-center justify-end"></div>
            </div>

            {/* Date Navigator */}
            <div className="flex flex-col pt-4">
                <div className="flex gap-3 px-4 overflow-x-auto no-scrollbar pb-2">
                    <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-primary pl-5 pr-5 shadow-[0_0_15px_rgba(25,230,94,0.3)] transition-transform active:scale-95">
                        <p className="text-background-dark text-sm font-bold leading-normal">Hoy</p>
                    </button>
                    <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-surface-dark border border-white/5 pl-5 pr-5 transition-colors hover:bg-white/5 active:scale-95">
                        <p className="text-white/60 text-sm font-medium leading-normal">Ayer</p>
                    </button>
                    <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-surface-dark border border-white/5 pl-5 pr-5 transition-colors hover:bg-white/5 active:scale-95">
                        <p className="text-white/60 text-sm font-medium leading-normal">Mar 12</p>
                    </button>
                </div>
            </div>

            <div className="flex-1 flex flex-col px-4 pb-28">
                {/* Consumo */}
                <div className="mt-6">
                    <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] mb-4">Consumo</h3>
                    <div className="grid grid-cols-2 gap-3">
                        {/* Caffeine - Toggleable */}
                        <button onClick={() => setCaffeine(!caffeine)} className={`group flex flex-col items-start gap-3 rounded-2xl p-4 transition-all duration-200 active:scale-95 relative overflow-hidden ${caffeine ? 'bg-primary' : 'bg-surface-dark border border-white/5'}`}>
                            {caffeine && <div className="absolute right-[-10px] top-[-10px] size-16 rounded-full bg-white/20 blur-xl"></div>}
                            <div className="flex items-center justify-between w-full">
                                <Icon name="local_cafe" size={24} className={`${caffeine ? 'text-background-dark' : 'text-white/50'}`} />
                                {caffeine ? <Icon name="check_circle" size={20} className="text-background-dark" /> : <div className="size-5 rounded-full border-2 border-white/10"></div>}
                            </div>
                            <div className="text-left">
                                <p className={`${caffeine ? 'text-background-dark' : 'text-white/60'} text-base font-bold leading-tight`}>Cafeína</p>
                                <p className={`${caffeine ? 'text-background-dark/80' : 'text-white/30'} text-xs font-medium mt-0.5`}>{caffeine ? '2 tazas' : 'Ninguna'}</p>
                            </div>
                        </button>
                        
                        {/* Alcohol - Toggleable */}
                        <button onClick={() => setAlcohol(!alcohol)} className={`group flex flex-col items-start gap-3 rounded-2xl p-4 transition-all duration-200 active:scale-95 relative overflow-hidden ${alcohol ? 'bg-primary' : 'bg-surface-dark border border-white/5'}`}>
                            <div className="flex items-center justify-between w-full">
                                <Icon name="wine_bar" size={24} className={`${alcohol ? 'text-background-dark' : 'text-white/50'}`} />
                                {alcohol ? <Icon name="check_circle" size={20} className="text-background-dark" /> : <div className="size-5 rounded-full border-2 border-white/10"></div>}
                            </div>
                            <div className="text-left">
                                <p className={`${alcohol ? 'text-background-dark' : 'text-white/60'} text-base font-medium leading-tight`}>Alcohol</p>
                                <p className={`${alcohol ? 'text-background-dark/80' : 'text-white/30'} text-xs font-medium mt-0.5`}>{alcohol ? '1 copa' : 'Ninguno'}</p>
                            </div>
                        </button>
                    </div>
                </div>

                <div className="h-px bg-white/5 w-full my-6"></div>

                {/* Actividad */}
                <div>
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">Actividad Física</h3>
                        <span className="text-primary text-sm font-bold bg-primary/10 px-2 py-1 rounded-md">Moderada</span>
                    </div>
                    <div className="bg-surface-dark rounded-3xl p-5 border border-white/5">
                        <div className="flex items-center gap-3 mb-2 text-white/50">
                            <Icon name="directions_run" size={20} />
                            <p className="text-xs font-medium uppercase tracking-wider">Intensidad</p>
                        </div>
                        <input className="w-full" max="100" min="0" type="range" defaultValue="45"/>
                        <div className="flex justify-between mt-2 px-1">
                            <span className="text-xs text-white/30">Sedentario</span>
                            <span className="text-xs text-white/30">Atleta</span>
                        </div>
                    </div>
                </div>

                <div className="h-px bg-white/5 w-full my-6"></div>

                {/* Estrés */}
                <div>
                    <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] mb-4">Nivel de Estrés</h3>
                    <div className="flex justify-between items-center bg-surface-dark rounded-full p-2 border border-white/5">
                        {[1,2,3,4,5].map(lvl => (
                            <button 
                                key={lvl}
                                onClick={() => setStress(lvl)}
                                className={`size-10 rounded-full flex items-center justify-center transition-all ${stress === lvl ? 'bg-primary text-background-dark font-bold shadow-lg shadow-primary/20 scale-110' : 'text-white/60 hover:bg-white/10 hover:text-white'}`}
                            >
                                {lvl}
                            </button>
                        ))}
                    </div>
                    <div className="flex justify-between px-4 mt-2">
                        <span className="text-xs text-white/40">Relajado</span>
                        <span className="text-xs text-white/40">Muy Estresado</span>
                    </div>
                </div>

                <div className="h-px bg-white/5 w-full my-6"></div>

                {/* Notas */}
                <div>
                    <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] mb-4">Notas</h3>
                    <div className="relative">
                        <textarea className="w-full bg-surface-dark text-white rounded-2xl border border-white/5 p-4 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent placeholder:text-white/20 resize-none text-sm leading-relaxed" placeholder="¿Algo más que destacar hoy? (Ej. Leí antes de dormir, habitación fría...)" rows={4}></textarea>
                    </div>
                </div>
            </div>

            {/* Footer Action */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background-dark via-background-dark to-transparent w-full">
                <button onClick={() => navigate('/dashboard')} className="w-full h-14 rounded-full bg-primary flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(25,230,94,0.15)] active:scale-[0.98] transition-all hover:bg-[#16cc53]">
                    <Icon name="save" className="text-background-dark font-bold" />
                    <span className="text-background-dark text-lg font-bold">Guardar Registro</span>
                </button>
            </div>
        </div>
    );
};

export default DailyLogScreen;