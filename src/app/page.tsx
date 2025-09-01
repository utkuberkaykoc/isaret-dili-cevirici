"use client";

import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [text, setText] = useState("");

  const processText = (input: string): string[] => {
    return input
      .toLowerCase()
      .split("")
      .map(char => {
        if (char === " ") {
          return "space";
        }
        if (/[a-zçğıöşü]/i.test(char)) {
          return char;
        }
        return null;
      })
      .filter(char => char !== null) as string[];
  };

  const letters = processText(text);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-900 dark:to-indigo-900 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mb-6 shadow-lg">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
              </svg>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 bg-clip-text text-transparent mb-4 animate-fade-in">
              İşaret Dili Harf Çevirici
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed animate-fade-in animation-delay-200">
              Metninizi anında işaret dili görsellerine çevirin. Türkçe alfabenin tüm harfleri için özel görseller.
            </p>
          </div>

          <div className="mb-12">
            <div className="max-w-4xl mx-auto">
              <label htmlFor="text-input" className="block text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4 text-center">
                Metninizi Yazın
              </label>
              <div className="relative">
                <textarea
                  id="text-input"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  maxLength={1000}
                  placeholder="Örnek: Merhaba dünya! Bu bir test metnidir..."
                  className="w-full h-40 px-6 py-4 text-lg border-2 border-gray-200 dark:border-gray-600 rounded-2xl focus:ring-4 focus:ring-purple-500 focus:border-transparent dark:bg-gray-800 dark:text-white resize-none shadow-lg transition-all duration-300 hover:shadow-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm"
                />
                <div className="absolute bottom-4 right-4 text-sm text-gray-400">
                  {text.length} / 1000
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/20">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
                İşaret Dili Görselleri
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
            </div>
            
            {text.length === 0 ? (
              <div className="text-center py-16">
                <div className="text-gray-500 dark:text-gray-400 text-xl font-medium">
                  Lütfen bir metin girin
                </div>
                <p className="text-gray-400 dark:text-gray-500 mt-2">
                  Yukarıdaki alana istediğiniz metni yazın
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-6">
                {letters.map((letter, index) => (
                  <div 
                    key={index} 
                    className="flex flex-col items-center group animate-fade-in"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {letter === "space" ? (
                      <div className="w-24 h-24 flex items-center justify-center">
                      </div>
                    ) : (
                      <>
                        <div className="relative">
                          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          <div className="relative bg-white dark:bg-gray-700 rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100 dark:border-gray-600">
                            <Image
                              src={`/images/isaret/${letter}.gif`}
                              alt={`İşaret dili - ${letter}`}
                              width={64}
                              height={64}
                              unoptimized
                              className="rounded-xl"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.style.display = 'none';
                                const parent = target.parentElement;
                                if (parent) {
                                  parent.innerHTML = `
                                    <div class="w-16 h-16 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-600 dark:to-gray-700 rounded-xl flex items-center justify-center text-gray-500 dark:text-gray-400 font-bold text-lg">
                                      ${letter.toUpperCase()}
                                    </div>
                                  `;
                                }
                              }}
                            />
                          </div>
                        </div>
                        <span className="text-sm font-semibold text-gray-600 dark:text-gray-300 mt-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                          {letter.toUpperCase()}
                        </span>
                      </>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
          
          <div className="mt-12 text-center">
            <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                Bu uygulama <a href="https://sozluk.gov.tr/" target="_blank" rel="noopener noreferrer" className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-semibold transition-colors duration-300">TDK&apos;nin</a> işaret dili görsellerini kullanmaktadır.
              </p>
              <div className="flex items-center justify-center mt-4 space-x-6 text-sm text-gray-500 dark:text-gray-400">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span>29 Türkçe harf</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span>Gerçek zamanlı</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <span>Responsive</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
