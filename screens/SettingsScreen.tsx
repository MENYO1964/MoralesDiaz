import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '../components/Icon';

const SettingsScreen: React.FC = () => {
    const [name, setName] = useState('');
    const [notifications, setNotifications] = useState(true);
    const [saved, setSaved] = useState(false);

    useEffect(() => {
        const storedName = localStorage.getItem('suenavit_username');
        setName(storedName || 'Alex');
    }, []);

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
        setSaved(false);
    };

    const saveSettings = () => {
        localStorage.setItem('suenavit_username', name);
        setSaved(true);
        setTimeout(() => setSaved(false), 2000);
    };

    return (
        <div className="relative flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark text-gray-900 dark:text-white antialiased overflow-x-hidden pb-24">
            <header className="flex px-6 pt-8 pb-4 items-center justify-between">
                <h1 className="text-2xl font-bold text-white">Ajustes</h1>
                {saved && <span className="text-xs font-bold text-primary animate-pulse">Guardado</span>}
            </header>

            <main className="px-6 flex flex-col gap-6">
                
                {/* Profile Section */}
                <section className="flex flex-col items-center gap-4 py-4">
                     <div 
                        className="bg-center bg-no-repeat bg-cover rounded-full h-24 w-24 border-4 border-surface-dark shadow-2xl relative" 
                        style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDZOO5DzCtZ5SKkWCV59aWUKUHmKlSBdY_CX9owCnkafByA82PQqVEqx_18LZjzPWsuh3MIDESzQkR-MlX3WVBIywxELZjbmCqu2FO5-qbe0hzXACWSeITcD8SAuchPK_hDq6OLb41miVlZBg7jCxKPYBUSmcSnk78vYd46M2VfZAoFhVm7EUBYamhxoGLvCuVpxZFQEOZPb7GXF-W4M4VARPXIjIuvPdmR6Np2KOCQYNhkNW2d5T4_A1WNUUwC_nnwZXm9wSW2Yrcy")'}}
                    >
                        <button className="absolute bottom-0 right-0 bg-primary p-1.5 rounded-full text-black shadow-lg">
                            <Icon name="edit" size={16} />
                        </button>
                    </div>
                </section>

                {/* Form */}
                <section className="flex flex-col gap-4">
                    <div>
                        <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1 mb-1 block">Nombre de Usuario</label>
                        <div className="flex gap-2">
                            <div className="relative flex-1">
                                <Icon name="person" className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
                                <input 
                                    type="text" 
                                    value={name}
                                    onChange={handleNameChange}
                                    className="w-full bg-surface-dark border border-white/5 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-primary/50 transition-colors"
                                />
                            </div>
                            <button 
                                onClick={saveSettings}
                                className="bg-primary text-black font-bold px-4 rounded-xl hover:bg-primary-dim transition-colors"
                            >
                                <Icon name="save" />
                            </button>
                        </div>
                    </div>
                </section>

                <div className="h-px bg-white/5 w-full"></div>

                {/* Preferences */}
                <section className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1 mb-2 block">Preferencias</label>
                    
                    <div className="flex justify-between items-center bg-surface-dark p-4 rounded-xl border border-white/5">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-blue-500/10 text-blue-400 rounded-lg">
                                <Icon name="notifications" size={20} />
                            </div>
                            <span className="font-medium text-white">Notificaciones</span>
                        </div>
                        <label className="relative flex h-6 w-10 cursor-pointer items-center rounded-full bg-slate-700 transition-colors has-[:checked]:bg-primary">
                            <input 
                                type="checkbox" 
                                className="peer sr-only" 
                                checked={notifications} 
                                onChange={() => setNotifications(!notifications)} 
                            />
                            <div className="absolute left-1 h-4 w-4 rounded-full bg-white transition-all peer-checked:translate-x-4"></div>
                        </label>
                    </div>

                    <div className="flex justify-between items-center bg-surface-dark p-4 rounded-xl border border-white/5">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-purple-500/10 text-purple-400 rounded-lg">
                                <Icon name="dark_mode" size={20} />
                            </div>
                            <span className="font-medium text-white">Modo Oscuro</span>
                        </div>
                        <span className="text-xs text-gray-500 font-bold uppercase">Auto</span>
                    </div>

                    <div className="flex justify-between items-center bg-surface-dark p-4 rounded-xl border border-white/5">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-orange-500/10 text-orange-400 rounded-lg">
                                <Icon name="scale" size={20} />
                            </div>
                            <span className="font-medium text-white">Unidades</span>
                        </div>
                        <span className="text-xs text-gray-500 font-bold uppercase">Métrico</span>
                    </div>
                </section>

                <div className="h-px bg-white/5 w-full"></div>

                 <section>
                    <button className="w-full py-3 text-red-400 font-medium text-sm hover:bg-red-500/10 rounded-xl transition-colors">
                        Cerrar Sesión
                    </button>
                    <div className="mt-4 text-center">
                        <p className="text-[10px] text-gray-600">Sueñavit v1.2.0 (Build 450)</p>
                    </div>
                 </section>

            </main>

            {/* Fixed Bottom Navigation */}
            <nav className="absolute bottom-0 left-0 w-full bg-surface-dark/90 backdrop-blur-md border-t border-white/5 pb-6 pt-2 z-50">
                <div className="flex justify-around items-center">
                    <Link to="/dashboard" className="flex flex-col items-center gap-1 p-2 text-gray-500 hover:text-white transition-colors">
                        <Icon name="today" size={28} />
                        <span className="text-[10px] font-medium">Hoy</span>
                    </Link>
                    <Link to="/trends" className="flex flex-col items-center gap-1 p-2 text-gray-500 hover:text-white transition-colors">
                        <Icon name="insights" size={28} />
                        <span className="text-[10px] font-medium">Tendencias</span>
                    </Link>
                    <Link to="/settings" className="flex flex-col items-center gap-1 p-2 text-primary">
                        <Icon name="settings" filled size={28} className="fill-current" />
                        <span className="text-[10px] font-bold">Ajustes</span>
                    </Link>
                </div>
            </nav>
        </div>
    );
};

export default SettingsScreen;