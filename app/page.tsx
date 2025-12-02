// app/page.tsx  (or pages/index.tsx)
"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [emojis, setEmojis] = useState<string[]>([]);
  const [alerts, setAlerts] = useState<number[]>([]);
  const [started, setStarted] = useState(false);

  const VIDEO_ID = "P8KmRdWbs8M";  // from your Shorts URL

  const handleStart = () => {
    setStarted(true);
  };

  useEffect(() => {
    if (!started) return;
    const interval = setInterval(() => {
      setEmojis((prev) => [
        ...prev,
        String.fromCodePoint(0x1f63a + Math.floor(Math.random() * 5)),
      ]);
      if (emojis.length > 30) setEmojis([]);
    }, 300);
    return () => clearInterval(interval);
  }, [emojis, started]);

  useEffect(() => {
    if (!started) return;
    const interval = setInterval(() => {
      setAlerts((prev) => [...prev, Date.now()]);
      if (alerts.length > 6) setAlerts([]);
    }, 2500);
    return () => clearInterval(interval);
  }, [alerts, started]);

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-zinc-50 to-zinc-200 dark:from-black dark:to-zinc-900 font-sans overflow-hidden">

      {!started && (
        <button
          onClick={handleStart}
          className="px-6 py-3 bg-red-600 text-white rounded-full text-xl font-bold hover:scale-105 transition"
        >
          Click to Start "Aaaaw jaaa e   Trinnnnnnnnnouuuuuuuuuuuuuuuuuuu" 🔊
        </button>
      )}

      {started && (
        <>
          {/* Embed YouTube Shorts via iframe */}
          <iframe
            className="hidden"
            src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&loop=1&controls=0&playlist=${VIDEO_ID}`}
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
          />

          {emojis.map((emoji, idx) => (
            <span
              key={idx}
              className="absolute text-2xl animate-bounce"
              style={{
                left: `${Math.random() * 90}vw`,
                top: `${Math.random() * 90}vh`,
                animationDuration: `${1 + Math.random() * 2}s`,
              }}
            >
              {emoji}
            </span>
          ))}

          <div className="absolute top-6 right-6 rounded-xl bg-red-600 px-6 py-3 text-white font-bold shadow-[0_0_15px_rgba(255,0,0,0.7)] animate-pulse border-2 border-red-400">
            ⚠️ ALERT: MIPOUN DETECTED ⚠️
          </div>

          {alerts.map((alert) => (
            <div
              key={alert}
              className="absolute bg-black text-white px-4 py-2 rounded shadow-lg animate-pulse"
              style={{
                top: `${Math.random() * 80}vh`,
                left: `${Math.random() * 80}vw`,
                zIndex: 1000,
              }}
            >
              SYSTEM ERROR! 😹
            </div>
          ))}

          <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-center py-32 px-8 sm:items-center relative text-center">
            <h1 className="text-5xl sm:text-6xl font-extrabold mb-6 bg-clip-text text-transparent animate-[flash_1s_infinite] bg-gradient-to-r from-red-500 via-yellow-400 to-green-400">
              Montaaa YA MIPOUN 😹🔥
            </h1>

            <p className="max-w-md text-lg sm:text-xl text-zinc-700 dark:text-zinc-300 mb-8 animate-[shake_0.8s_infinite]">
              Ta3ref te7seb ======= i7seb ro7k <strong>Monttta ya Mipoun</strong>
            </p>

            <button className="relative overflow-hidden rounded-full bg-black text-white dark:bg-white dark:text-black py-3 px-8 font-bold text-lg hover:scale-110 transition-transform shadow-lg hover:shadow-[0_0_20px_rgba(255,255,255,0.7)]">
              Declaration d'amour
              <span className="absolute top-0 left-0 w-full h-full bg-white/10 rounded-full opacity-0 hover:opacity-30 transition-opacity"></span>
            </button>
          </main>

          <style jsx global>{`
            @keyframes flash {
              0% { opacity: 0.8; }
              50% { opacity: 1; }
              100% { opacity: 0.8; }
            }
            @keyframes shake {
              0% { transform: translate(1px, 1px) rotate(0deg); }
              10% { transform: translate(-1px, -2px) rotate(-1deg); }
              20% { transform: translate(-3px, 0px) rotate(1deg); }
              30% { transform: translate(3px, 2px) rotate(0deg); }
              40% { transform: translate(1px, -1px) rotate(1deg); }
              50% { transform: translate(-1px, 2px) rotate(-1deg); }
              60% { transform: translate(-3px, 1px) rotate(0deg); }
              70% { transform: translate(3px, 1px) rotate(-1deg); }
              80% { transform: translate(-1px, -1px) rotate(1deg); }
              90% { transform: translate(1px, 2px) rotate(0deg); }
              100% { transform: translate(1px, -2px) rotate(-1deg); }
            }
            .animate-[flash_1s_infinite] { animation: flash 1s infinite; }
            .animate-[shake_0.8s_infinite] { animation: shake 0.8s infinite; }
          `}</style>
        </>
      )}

    </div>
  );
}
