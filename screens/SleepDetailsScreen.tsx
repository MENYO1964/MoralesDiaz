import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Icon } from '../components/Icon';

const SleepDetailsScreen: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="relative flex h-full min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark text-slate-900 dark:text-white">
            {/* Top App Bar */}
            <header className="sticky top-0 z-50 flex items-center justify-between px-4 pt-6 pb-2 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
                <button onClick={() => navigate(-1)} className="flex size-10 shrink-0 items-center justify-center rounded-full bg-slate-200 dark:bg-white/10 text-slate-900 dark:text-white hover:bg-slate-300 dark:hover:bg-white/20 transition-colors">
                    <Icon name="arrow_back_ios_new" size={24} />
                </button>
                <h2 className="text-lg font-bold leading-tight tracking-tight flex-1 text-center">Martes, 14 Oct</h2>
                <button className="flex size-10 items-center justify-center rounded-full bg-slate-200 dark:bg-white/10 text-slate-900 dark:text-white hover:bg-slate-300 dark:hover:bg-white/20 transition-colors">
                    <Icon name="ios_share" size={22} />
                </button>
            </header>

            <main className="flex flex-col gap-6 px-4 py-4 pb-20">
                {/* Sleep Score Card */}
                <section className="flex flex-col items-center justify-center rounded-xl bg-white dark:bg-surface-dark p-6 shadow-sm border border-slate-100 dark:border-white/5">
                    <div className="relative flex items-center justify-center size-40">
                        <svg className="size-full -rotate-90 transform" viewBox="0 0 36 36">
                            <path className="text-slate-200 dark:text-white/10" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3"></path>
                            <path className="text-primary drop-shadow-[0_0_4px_rgba(25,230,94,0.5)]" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="85, 100" strokeLinecap="round" strokeWidth="3"></path>
                        </svg>
                        <div className="absolute flex flex-col items-center">
                            <span className="text-5xl font-extrabold tracking-tighter text-slate-900 dark:text-white">85</span>
                            <span className="text-xs font-semibold uppercase tracking-widest text-primary mt-1">Óptimo</span>
                        </div>
                    </div>
                    <div className="mt-4 text-center">
                        <h3 className="text-sm font-medium text-slate-500 dark:text-slate-400">Puntuación del Sueño</h3>
                        <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">Mejor que el 72% de los usuarios</p>
                    </div>
                </section>

                {/* Chart Section */}
                <section className="flex flex-col gap-4">
                    <div className="flex items-end justify-between px-1">
                        <div>
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Fases del Sueño</h3>
                            <p className="text-sm text-slate-500 dark:text-slate-400">Duración total: <span className="text-slate-900 dark:text-white font-semibold">7h 30m</span></p>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="size-2 rounded-full bg-primary"></span>
                            <span className="text-xs font-medium text-slate-500 dark:text-slate-400">Profundo</span>
                        </div>
                    </div>
                    <div className="w-full overflow-hidden rounded-xl bg-white dark:bg-surface-dark p-4 pt-8 shadow-sm border border-slate-100 dark:border-white/5 relative">
                        <div className="absolute left-2 top-8 bottom-12 flex flex-col justify-between text-[10px] font-medium text-slate-400 dark:text-slate-500 h-[160px] pointer-events-none">
                            <span>Despierto</span>
                            <span>REM</span>
                            <span>Ligero</span>
                            <span>Profundo</span>
                        </div>
                        <div className="ml-14 relative h-[160px] flex items-end justify-between gap-1">
                            {/* Simplified grid/bars implementation for chart visual */}
                            <div className="absolute inset-0 flex flex-col justify-between pointer-events-none z-0">
                                {[1,2,3,4].map(i => <div key={i} className="w-full border-t border-dashed border-slate-200 dark:border-white/10"></div>)}
                            </div>
                            <div className="relative w-full rounded-t-sm bg-primary/40 h-[50%] z-10"></div>
                            <div className="relative w-full rounded-t-sm bg-primary h-[25%] z-10"></div>
                            <div className="relative w-full rounded-t-sm bg-primary h-[25%] z-10"></div>
                            <div className="relative w-full rounded-t-sm bg-primary/40 h-[50%] z-10"></div>
                            <div className="relative w-full rounded-t-sm bg-primary/70 h-[75%] z-10"></div>
                            <div className="relative w-full rounded-t-sm bg-primary/70 h-[75%] z-10"></div>
                            <div className="relative w-full rounded-t-sm bg-primary/40 h-[50%] z-10"></div>
                            <div className="relative w-full rounded-t-sm bg-rose-400/80 h-[98%] z-10"></div>
                            <div className="relative w-full rounded-t-sm bg-primary/40 h-[50%] z-10"></div>
                            <div className="relative w-full rounded-t-sm bg-primary h-[25%] z-10"></div>
                            <div className="relative w-full rounded-t-sm bg-primary h-[25%] z-10"></div>
                            <div className="relative w-full rounded-t-sm bg-primary/70 h-[75%] z-10"></div>
                            <div className="relative w-full rounded-t-sm bg-primary/40 h-[50%] z-10"></div>
                            <div className="relative w-full rounded-t-sm bg-primary/40 h-[50%] z-10"></div>
                            <div className="relative w-full rounded-t-sm bg-rose-400/80 h-[98%] z-10"></div>
                        </div>
                        <div className="ml-14 mt-3 flex justify-between text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wide">
                            <span>22:00</span><span>01:00</span><span>04:00</span><span>07:00</span>
                        </div>
                    </div>
                </section>

                {/* Breakdown */}
                <section className="flex flex-col rounded-xl bg-white dark:bg-surface-dark overflow-hidden border border-slate-100 dark:border-white/5">
                    <div className="p-4 border-b border-slate-100 dark:border-white/5 bg-slate-50/50 dark:bg-white/5">
                        <h3 className="font-bold text-slate-900 dark:text-white">Desglose Detallado</h3>
                    </div>
                    <div className="divide-y divide-slate-100 dark:divide-white/5">
                        <div className="flex items-center justify-between p-4 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors cursor-pointer group">
                            <div className="flex items-center gap-3">
                                <div className="w-1.5 h-10 rounded-full bg-primary"></div>
                                <div>
                                    <p className="text-sm font-bold text-slate-900 dark:text-white">Sueño Profundo</p>
                                    <p className="text-xs text-slate-500 dark:text-slate-400">Restauración física</p>
                                </div>
                            </div>
                            <div className="text-right">
                                <p className="text-sm font-bold text-slate-900 dark:text-white">1h 15m</p>
                                <p className="text-xs font-medium text-slate-400">18%</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-between p-4 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors cursor-pointer group">
                            <div className="flex items-center gap-3">
                                <div className="w-1.5 h-10 rounded-full bg-primary/70"></div>
                                <div>
                                    <p className="text-sm font-bold text-slate-900 dark:text-white">Sueño REM</p>
                                    <p className="text-xs text-slate-500 dark:text-slate-400">Procesamiento mental</p>
                                </div>
                            </div>
                            <div className="text-right">
                                <p className="text-sm font-bold text-slate-900 dark:text-white">1h 45m</p>
                                <p className="text-xs font-medium text-slate-400">25%</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* Nav Bar */}
            <nav className="fixed bottom-0 w-full max-w-md bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-lg border-t border-slate-200 dark:border-white/10 px-6 py-4 flex justify-between items-center z-50">
                <Link to="/dashboard" className="flex flex-col items-center gap-1 text-slate-400 hover:text-primary transition-colors">
                    <Icon name="home" />
                </Link>
                <button className="flex flex-col items-center gap-1 text-primary">
                    <Icon name="bedtime" filled />
                </button>
                <button className="flex flex-col items-center gap-1 text-slate-400 hover:text-primary transition-colors">
                    <Icon name="analytics" />
                </button>
                <button className="flex flex-col items-center gap-1 text-slate-400 hover:text-primary transition-colors">
                    <Icon name="person" />
                </button>
            </nav>
        </div>
    );
};

export default SleepDetailsScreen;