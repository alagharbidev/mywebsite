import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-center py-32 px-16 bg-white dark:bg-black sm:items-start relative">
        
        {/* Fake Warning Box */}
        <div className="absolute top-6 right-6 bg-red-600 text-white p-4 rounded-lg shadow-xl animate-pulse">
          ⚠️ ALERT: MIPOUN DETECTED
        </div>

        {/* Funny Title */}
        <h1
          className="text-5xl font-extrabold tracking-tight mt-10 text-center animate-[flash_1s_infinite]"
          style={{ animation: "flash 1s infinite" }}
        >
          Montaaa YA MIPOUN 😹🔥  ta3ref te7seb   ======= i7seb ro7k mipoun
        </h1>

        <p
          className="mt-10 text-lg text-zinc-700 dark:text-zinc-300 text-center max-w-md"
          style={{ animation: "shake 0.8s infinite" }}
        >
          Your system has been taken over by <strong>Monttta ya Mipoun</strong>.
        </p>

        <button
          className="mt-10 bg-black text-white dark:bg-white dark:text-black py-3 px-6 rounded-full font-bold hover:scale-110 transition-all"
        >
          Fix Your PC (Fake Button 😂)
        </button>

      </main>
    </div>
  );
}
