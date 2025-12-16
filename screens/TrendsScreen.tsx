import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '../components/Icon';

const TrendsScreen: React.FC = () => {
    // Mock data for weekly chart
    const weekData = [
        { day: 'L', val: 7.2, h: '60%' },
        { day: 'M', val: 6.5, h: '45%' },
        { day: 'X', val: 8.0, h: '80%' },
        { day: 'J', val: 7.5, h: '70%' },
        { day: 'V', val: 6.0, h: '40%' },
        { day: 'S', val: 8.5, h: '90%' },
        { day: 'D', val: 7.8, h: '75%' },
    ];

    return (
        <div className="relative flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark text-gray-900 dark:text-white antialiased overflow-x-hidden pb-24">
            <header className="flex px-6 pt-8 pb-4 items-center justify-between">
                <h1 className="text-2xl font-bold text-white">Tendencias</h1>
                <div className="px-3 py-1 bg-surface-dark border border-white/10 rounded-full">
                    <span className="text-xs font-bold text-gray-300">Semana</span>
                </div>
            </header>

            {/* Weekly Chart */}
            <div className="px-6 mb-6">
                <div className="bg-surface-dark rounded-2xl p-6 border border-white/5">
                    <div className="flex justify-between items-center mb-6">
                        <div>
                            <p className="text-gray-400 text-xs font-bold uppercase tracking-wider">Promedio Semanal</p>
                            <p className="text-3xl font-bold text-white mt-1">7h 23m <span className="text-sm font-normal text-primary ml-1">+12m</span></p>
                        </div>
                        <div className="bg-primary/10 p-2 rounded-full">
                            <Icon name="bar_chart" className="text-primary" />
                        </div>
                    </div>

                    <div className="h-40 flex items-end justify-between gap-3 relative">
                         {/* Grid Lines */}
                        <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-20 z-0">
                            <div className="border-t border-dashed border-gray-400 w-full"></div>
                            <div className="border-t border-dashed border-gray-400 w-full"></div>
                            <div className="border-t border-dashed border-gray-400 w-full"></div>
                        </div>

                        {weekData.map((d, i) => (
                            <div key={i} className="flex flex-col items-center gap-2 flex-1 z-10 group">
                                <div className="w-full bg-surface-highlight rounded-t-sm relative flex items-end transition-all hover:bg-surface-highlight/80 h-full">
                                    <div 
                                        className={`w-full rounded-t-sm ${d.val >= 7.5 ? 'bg-primary' : 'bg-primary/50'} transition-all duration-500 group-hover:brightness-110`} 
                                        style={{ height: d.h }}
                                    ></div>
                                </div>
                                <span className="text-[10px] font-bold text-gray-400">{d.day}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Stats Breakdown */}
            <div className="px-6 grid grid-cols-2 gap-4 mb-6">
                 <div className="bg-surface-dark rounded-xl p-5 border border-white/5">
                    <div className="flex items-center gap-2 mb-2 text-blue-400">
                        <Icon name="bedtime" size={20} />
                        <span className="text-xs font-bold uppercase">Deuda</span>
                    </div>
                    <p className="text-2xl font-bold text-white">-45m</p>
                    <p className="text-xs text-gray-500 mt-1">vs. Objetivo</p>
                 </div>
                 <div className="bg-surface-dark rounded-xl p-5 border border-white/5">
                    <div className="flex items-center gap-2 mb-2 text-purple-400">
                        <Icon name="alarm" size={20} />
                        <span className="text-xs font-bold uppercase">Regul.</span>
                    </div>
                    <p className="text-2xl font-bold text-white">94%</p>
                    <p className="text-xs text-gray-500 mt-1">Hora dormir</p>
                 </div>
            </div>

            {/* Consistency Card */}
            <div className="px-6">
                <div className="bg-gradient-to-r from-surface-dark to-surface-highlight rounded-2xl p-5 border border-white/5 flex justify-between items-center">
                    <div>
                        <h3 className="text-white font-bold text-lg mb-1">Consistencia</h3>
                        <p className="text-gray-400 text-sm max-w-[180px]">Te has acostado a la misma hora 5 días seguidos.</p>
                    </div>
                    <div className="size-14 rounded-full border-4 border-primary/20 flex items-center justify-center relative">
                         <div className="absolute inset-0 rounded-full border-4 border-primary border-t-transparent -rotate-45"></div>
                         <Icon name="verified" className="text-primary" />
                    </div>
                </div>
            </div>

            {/* Fixed Bottom Navigation */}
            <nav className="absolute bottom-0 left-0 w-full bg-surface-dark/90 backdrop-blur-md border-t border-white/5 pb-6 pt-2 z-50">
                <div className="flex justify-around items-center">
                    <Link to="/dashboard" className="flex flex-col items-center gap-1 p-2 text-gray-500 hover:text-white transition-colors">
                        <Icon name="today" size={28} />
                        <span className="text-[10px] font-medium">Hoy</span>
                    </Link>
                    <Link to="/trends" className="flex flex-col items-center gap-1 p-2 text-primary">
                        <Icon name="insights" filled size={28} className="fill-current" />
                        <span className="text-[10px] font-bold">Tendencias</span>
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

export default TrendsScreen;