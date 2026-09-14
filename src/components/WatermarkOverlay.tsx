import React from 'react';
import { Scale, Award, Shield } from 'lucide-react';

export const WatermarkOverlay: React.FC = () => {
  return (
    <>
      {/* 1. SCREEN-WIDE INFINITE REPEATING VECTOR WATERMARK PATTERN */}
      <div 
        id="website-vector-watermark" 
        className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none"
        aria-hidden="true"
      >
        <svg 
          className="absolute inset-0 w-full h-full" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern 
              id="gs-watermark-pattern" 
              width="460" 
              height="280" 
              patternUnits="userSpaceOnUse" 
              patternTransform="rotate(-26)"
            >
              {/* Primary Author Watermark Line 1 */}
              <text 
                x="230" 
                y="65" 
                textAnchor="middle" 
                fill="#f59e0b" 
                fillOpacity="0.055" 
                fontFamily="Cinzel, serif" 
                fontSize="18" 
                fontWeight="800" 
                letterSpacing="3"
              >
                GS BY DURGESH PANDEY SIR
              </text>
              
              {/* Sub-credibility Line 1 */}
              <text 
                x="230" 
                y="95" 
                textAnchor="middle" 
                fill="#94a3b8" 
                fillOpacity="0.035" 
                fontFamily="Outfit, sans-serif" 
                fontSize="9.5" 
                fontWeight="700" 
                letterSpacing="4"
              >
                ★ INDIAN POLITY MASTER COMPENDIUM ★
              </text>

              {/* Staggered Secondary Watermark Line 2 */}
              <text 
                x="230" 
                y="205" 
                textAnchor="middle" 
                fill="#f59e0b" 
                fillOpacity="0.055" 
                fontFamily="Cinzel, serif" 
                fontSize="18" 
                fontWeight="800" 
                letterSpacing="3"
              >
                GS BY DURGESH PANDEY SIR
              </text>

              {/* Sub-credibility Line 2 */}
              <text 
                x="230" 
                y="235" 
                textAnchor="middle" 
                fill="#94a3b8" 
                fillOpacity="0.035" 
                fontFamily="Outfit, sans-serif" 
                fontSize="9.5" 
                fontWeight="700" 
                letterSpacing="4"
              >
                ★ UPSC • UPPSC • UPSI PREPARATION ★
              </text>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#gs-watermark-pattern)" />
        </svg>
      </div>

      {/* 2. CENTRAL CONSTITUTIONAL EMBLEM & WATERMARK SEAL (Fixed Center) */}
      <div 
        id="central-watermark-seal" 
        className="fixed inset-0 pointer-events-none z-0 flex items-center justify-center overflow-hidden select-none opacity-[0.038]"
        aria-hidden="true"
      >
        <div className="relative flex flex-col items-center justify-center w-[90vw] max-w-[580px] h-[90vw] max-h-[580px] rounded-full border-4 border-dashed border-amber-400 p-8 text-center">
          {/* Inner Circle Ring */}
          <div className="absolute inset-4 rounded-full border-2 border-amber-300/80" />
          
          <Scale strokeWidth={0.8} className="w-24 h-24 sm:w-32 sm:h-32 text-amber-400 mb-2" />
          
          <div className="font-cinzel text-xl sm:text-2xl font-black text-amber-400 tracking-[0.25em] uppercase text-center px-4">
            GS By Durgesh Pandey Sir
          </div>
          
          <div className="text-xs sm:text-sm font-semibold text-slate-300 tracking-[0.3em] uppercase mt-2">
            The Constitution of India
          </div>
          
          <div className="text-[10px] sm:text-xs font-mono text-amber-400/90 tracking-widest uppercase mt-1">
            Official Bilingual Classroom Compendium
          </div>
        </div>
      </div>

      {/* 3. DISCREET CORNER WATERMARK BADGE (Screen Only) */}
      <div 
        id="corner-authority-watermark" 
        className="fixed bottom-3 left-3 sm:bottom-4 sm:left-4 z-40 pointer-events-none select-none no-print hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0a1224]/85 border border-amber-500/30 backdrop-blur-md text-slate-300 shadow-xl"
        aria-hidden="true"
      >
        <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
        <span className="text-[11px] font-bold font-cinzel text-amber-400 tracking-wider">
          GS By Durgesh Pandey Sir
        </span>
        <span className="text-[10px] text-slate-400 font-mono pl-1 border-l border-slate-700">
          Official Study Portal
        </span>
      </div>

      {/* 4. PROFESSIONAL PRINT & PDF VECTOR WATERMARK (Repeats on every printed/PDF page) */}
      <div className="print-watermark" aria-hidden="true">
        <div className="print-watermark-content">
          <div className="print-watermark-title">
            GS By Durgesh Pandey Sir
          </div>
          <div className="print-watermark-sub">
            Indian Polity & Constitution Master Compendium
          </div>
        </div>
      </div>
    </>
  );
};
