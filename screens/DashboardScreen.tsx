import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Icon } from '../components/Icon';

const DashboardScreen: React.FC = () => {
    const [userName, setUserName] = useState('Alex');
    const location = useLocation();

    useEffect(() => {
        const storedName = localStorage.getItem('suenavit_username');
        if (storedName) {
            setUserName(storedName);
        }
    }, []);

    return (
        <div className="relative flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark text-gray-900 dark:text-white antialiased overflow-x-hidden pb-24">
            {/* Header Section */}
            <header className="flex p-6 items-center justify-between">
                <div className="flex gap-4 items-center">
                    <div 
                        className="bg-center bg-no-repeat bg-cover rounded-full h-12 w-12 border-2 border-primary/30" 
                        style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDZOO5DzCtZ5SKkWCV59aWUKUHmKlSBdY_CX9owCnkafByA82PQqVEqx_18LZjzPWsuh3MIDESzQkR-MlX3WVBIywxELZjbmCqu2FO5-qbe0hzXACWSeITcD8SAuchPK_hDq6OLb41miVlZBg7jCxKPYBUSmcSnk78vYd46M2VfZAoFhVm7EUBYamhxoGLvCuVpxZFQEOZPb7GXF-W4M4VARPXIjIuvPdmR6Np2KOCQYNhkNW2d5T4_A1WNUUwC_nnwZXm9wSW2Yrcy")'}}
                    >
                    </div>
                    <div className="flex flex-col justify-center">
                        <p className="text-white text-lg font-bold leading-tight">Buenos días, {userName}</p>
                        <p className="text-primary/70 text-sm font-medium">Martes, 24 Octubre</p>
                    </div>
                </div>
                <Link to="/alarm" className="flex items-center justify-center h-10 w-10 rounded-full bg-surface-dark text-white hover:bg-surface-highlight transition-colors">
                    <Icon name="notifications" />
                </Link>
            </header>

            {/* Readiness Score Card */}
            <div className="px-6 mb-2">
                <div className="bg-surface-dark rounded-lg p-6 border border-white/5 relative overflow-hidden shadow-lg">
                    <div className="absolute top-0 right-0 -mt-8 -mr-8 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
                    <div className="flex justify-between items-end relative z-10">
                        <div className="flex flex-col gap-1">
                            <span className="text-gray-400 text-sm font-medium tracking-wide uppercase">Preparación Diaria</span>
                            <div className="flex items-baseline gap-2">
                                <h1 className="text-6xl font-bold text-white tracking-tighter">85</h1>
                                <span className="text-primary text-xl font-bold mb-1">Óptima</span>
                            </div>
                        </div>
                        <div className="flex flex-col items-end gap-1">
                            <Icon name="ecg_heart" className="text-primary text-4xl" />
                            <span className="text-xs text-gray-400">Listo para entrenar</span>
                        </div>
                    </div>
                    <div className="mt-4 w-full bg-black/20 rounded-full h-1.5 overflow-hidden">
                        <div className="bg-primary h-full rounded-full w-[85%] shadow-[0_0_10px_rgba(25,230,94,0.5)]"></div>
                    </div>
                </div>
            </div>

            {/* Sleep Rings Visualization (Linked to Details) */}
            <div className="p-6">
                <Link to="/details" className="flex flex-col items-center justify-center bg-surface-dark rounded-lg p-8 border border-white/5 shadow-md active:scale-95 transition-transform">
                    <div className="relative w-64 h-64 flex items-center justify-center">
                        {/* Rings simulated with conic gradients */}
                        <div className="absolute inset-0 rounded-full bg-[conic-gradient(var(--tw-shadow-color)_0deg_288deg,transparent_288deg_360deg)] shadow-primary" style={{'--tw-shadow-color': '#19e65e'} as React.CSSProperties}></div>
                        <div className="absolute inset-2 rounded-full bg-surface-dark"></div>
                        
                        <div className="absolute inset-4 rounded-full bg-[conic-gradient(var(--tw-shadow-color)_0deg_234deg,transparent_234deg_360deg)] shadow-primary/60" style={{'--tw-shadow-color': '#34d399', transform: 'rotate(-90deg)'} as React.CSSProperties}></div>
                        <div className="absolute inset-6 rounded-full bg-surface-dark"></div>
                        
                        <div className="absolute inset-8 rounded-full bg-[conic-gradient(var(--tw-shadow-color)_0deg_162deg,transparent_162deg_360deg)] shadow-primary/30" style={{'--tw-shadow-color': '#6ee7b7', transform: 'rotate(-180deg)'} as React.CSSProperties}></div>
                        <div className="absolute inset-10 rounded-full bg-surface-dark flex flex-col items-center justify-center z-10">
                            <Icon name="bedtime" className="text-white text-3xl mb-1" />
                            <span className="text-white text-2xl font-bold">7h 24m</span>
                            <span className="text-gray-400 text-xs uppercase tracking-widest">Total</span>
                        </div>
                    </div>
                    {/* Legend */}
                    <div className="flex w-full justify-between mt-8 px-2">
                        <div className="flex flex-col items-center gap-1">
                            <div className="w-3 h-3 rounded-full bg-primary box-shadow-[0_0_8px_#19e65e]"></div>
                            <span className="text-xs font-medium text-white">Duración</span>
                            <span className="text-xs text-gray-400">80%</span>
                        </div>
                        <div className="flex flex-col items-center gap-1">
                            <div className="w-3 h-3 rounded-full bg-[#34d399]"></div>
                            <span className="text-xs font-medium text-white">Profundo</span>
                            <span className="text-xs text-gray-400">65%</span>
                        </div>
                        <div className="flex flex-col items-center gap-1">
                            <div className="w-3 h-3 rounded-full bg-[#6ee7b7]"></div>
                            <span className="text-xs font-medium text-white">REM</span>
                            <span className="text-xs text-gray-400">45%</span>
                        </div>
                    </div>
                </Link>
            </div>

            {/* Biometric Grid */}
            <div className="px-6 grid grid-cols-2 gap-3 mb-6">
                <div className="bg-surface-dark rounded-xl p-5 border border-white/5 flex flex-col justify-between aspect-[4/3]">
                    <div className="flex justify-between items-start">
                        <div className="p-2 bg-background-dark rounded-full">
                            <Icon name="monitor_heart" className="text-primary text-xl" />
                        </div>
                        <span className="flex items-center text-primary text-xs font-bold bg-primary/10 px-2 py-1 rounded-full">
                            <Icon name="trending_up" size={14} className="mr-0.5" /> +5%
                        </span>
                    </div>
                    <div>
                        <p className="text-gray-400 text-xs font-medium uppercase tracking-wide">HRV</p>
                        <p className="text-white text-2xl font-bold">45 <span className="text-sm font-normal text-gray-500">ms</span></p>
                    </div>
                </div>
                <div className="bg-surface-dark rounded-xl p-5 border border-white/5 flex flex-col justify-between aspect-[4/3]">
                    <div className="flex justify-between items-start">
                        <div className="p-2 bg-background-dark rounded-full">
                            <Icon name="favorite" className="text-[#fa5538] text-xl" />
                        </div>
                        <div className="flex items-end h-6 gap-0.5 opacity-60">
                            <div className="w-1 bg-[#fa5538] h-2 rounded-t-sm"></div>
                            <div className="w-1 bg-[#fa5538] h-4 rounded-t-sm"></div>
                            <div className="w-1 bg-[#fa5538] h-3 rounded-t-sm"></div>
                            <div className="w-1 bg-[#fa5538] h-5 rounded-t-sm"></div>
                        </div>
                    </div>
                    <div>
                        <p className="text-gray-400 text-xs font-medium uppercase tracking-wide">RHR</p>
                        <p className="text-white text-2xl font-bold">58 <span className="text-sm font-normal text-gray-500">lpm</span></p>
                    </div>
                </div>
                <div className="bg-surface-dark rounded-xl p-5 border border-white/5 flex flex-col justify-between aspect-[4/3]">
                    <div className="flex justify-between items-start">
                        <div className="p-2 bg-background-dark rounded-full">
                            <Icon name="percent" className="text-blue-400 text-xl" />
                        </div>
                    </div>
                    <div>
                        <p className="text-gray-400 text-xs font-medium uppercase tracking-wide">Eficiencia</p>
                        <p className="text-white text-2xl font-bold">92%</p>
                    </div>
                </div>
                <div className="bg-surface-dark rounded-xl p-5 border border-white/5 flex flex-col justify-between aspect-[4/3]">
                    <div className="flex justify-between items-start">
                        <div className="p-2 bg-background-dark rounded-full">
                            <Icon name="air" className="text-purple-400 text-xl" />
                        </div>
                    </div>
                    <div>
                        <p className="text-gray-400 text-xs font-medium uppercase tracking-wide">Frec. Resp</p>
                        <p className="text-white text-2xl font-bold">14 <span className="text-sm font-normal text-gray-500">rpm</span></p>
                    </div>
                </div>
            </div>

            {/* Action Panel (Link to Log) */}
            <div className="px-6 mb-6">
                <div className="flex flex-col sm:flex-row items-start justify-between gap-4 rounded-lg border border-primary/30 bg-primary/5 p-5">
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                            <Icon name="lightbulb" className="text-primary text-xl" />
                            <p className="text-white text-base font-bold leading-tight">Insight Diario</p>
                        </div>
                        <p className="text-gray-300 text-sm font-normal leading-relaxed">Tu HRV es alto hoy. Tu sistema nervioso está recuperado y listo para un entrenamiento intenso.</p>
                    </div>
                    <Link to="/log" className="mt-2 sm:mt-0 px-4 py-2 bg-primary text-background-dark text-sm font-bold rounded-full flex items-center gap-1 hover:bg-white transition-colors">
                        Registrar día
                        <Icon name="arrow_forward" size={18} />
                    </Link>
                </div>
            </div>

            {/* Fixed Bottom Navigation */}
            <nav className="absolute bottom-0 left-0 w-full bg-surface-dark/90 backdrop-blur-md border-t border-white/5 pb-6 pt-2 z-50">
                <div className="flex justify-around items-center">
                    <Link to="/dashboard" className="flex flex-col items-center gap-1 p-2 text-primary">
                        <Icon name="today" filled size={28} className="fill-current" />
                        <span className="text-[10px] font-bold">Hoy</span>
                    </Link>
                    <Link to="/trends" className="flex flex-col items-center gap-1 p-2 text-gray-500 hover:text-white transition-colors">
                        <Icon name="insights" size={28} />
                        <span className="text-[10px] font-medium">Tendencias</span>
                    </Link>
                    <Link to="/settings" className="flex flex-col items-center gap-1 p-2 text-gray-500 hover:text-white transition-colors">
                        <Icon name="settings" size={28} />
                        <span className="text-[10px] font-medium">Ajustes</span>
                    </Link>
                </div>
            </nav>
        </div>
    );
};

export default DashboardScreen;