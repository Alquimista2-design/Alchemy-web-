/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';

interface CountdownTimerProps {
  colorHex: string;
}

export function CountdownTimer({ colorHex }: CountdownTimerProps) {
  // Set default countdown to 2 days, 14 hours, 24 minutes, 29 seconds from now
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 14,
    minutes: 24,
    seconds: 29
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        } else {
          // Reset to 3 days to keep the page lively
          return { days: 3, hours: 0, minutes: 0, seconds: 0 };
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => num.toString().padStart(2, '0');

  return (
    <div className="flex items-center justify-center gap-3 md:gap-4 select-none">
      {[
        { label: 'Días', value: timeLeft.days },
        { label: 'Horas', value: timeLeft.hours },
        { label: 'Min', value: timeLeft.minutes },
        { label: 'Seg', value: timeLeft.seconds }
      ].map((item, index) => (
        <div key={index} className="flex flex-col items-center">
          <div 
            className="w-14 h-14 md:w-16 md:h-16 rounded-xl flex items-center justify-center border text-2xl md:text-3xl font-mono font-bold transition-all duration-300 bg-[#141414]"
            style={{ 
              borderColor: 'rgba(255,255,255,0.08)',
              boxShadow: `0 4px 20px rgba(0,0,0,0.4)`
            }}
          >
            <span style={{ color: colorHex }}>{formatNumber(item.value)}</span>
          </div>
          <span className="text-[10px] uppercase tracking-widest text-neutral-500 mt-2 font-mono font-medium">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
}
