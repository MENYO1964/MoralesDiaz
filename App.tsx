import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import WelcomeScreen from './screens/WelcomeScreen';
import DashboardScreen from './screens/DashboardScreen';
import SleepDetailsScreen from './screens/SleepDetailsScreen';
import DailyLogScreen from './screens/DailyLogScreen';
import SmartAlarmScreen from './screens/SmartAlarmScreen';
import TrendsScreen from './screens/TrendsScreen';
import SettingsScreen from './screens/SettingsScreen';

const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
        <ScrollToTop />
        <div className="min-h-screen w-full bg-black flex justify-center">
            {/* Mobile container wrapper */}
            <div className="w-full max-w-md h-full min-h-screen bg-background-light dark:bg-background-dark shadow-2xl overflow-hidden relative font-display">
                <Routes>
                    <Route path="/" element={<WelcomeScreen />} />
                    <Route path="/dashboard" element={<DashboardScreen />} />
                    <Route path="/details" element={<SleepDetailsScreen />} />
                    <Route path="/log" element={<DailyLogScreen />} />
                    <Route path="/alarm" element={<SmartAlarmScreen />} />
                    <Route path="/trends" element={<TrendsScreen />} />
                    <Route path="/settings" element={<SettingsScreen />} />
                </Routes>
            </div>
        </div>
    </HashRouter>
  );
};

export default App;