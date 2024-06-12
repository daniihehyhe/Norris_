
"use client";


import MainSlider from './home/MainSlider';

export default function Page() {

  return (
      <>
          <MainSlider />
          <main className="relative bg-smart-home bg-cover bg-no-repeat min-h-screen">
              <div className="absolute inset-0 bg-black opacity-50"></div>
              <div className="relative flex items-center justify-center min-h-screen">
                  <h1 className="text-3xl font-bold text-white dark:text-red-950">
                      Главная страницasdfа
                  </h1>
              </div>
              <div className="bg-white dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
                  <div>
                      <span className="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg"></span>
                  </div>
                  <h3 className="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">
                      Writes Upside-Down
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
                      The Zero Gravity Pen can be used to write in any
                      orientation, including upside-down. It even works in outer
                      space.
                  </p>
              </div>
          </main>
      </>
  );
}
