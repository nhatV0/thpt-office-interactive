import confetti from 'canvas-confetti';

// Visual celebration & audio simulation for milestones
export const triggerConfetti = (type: 'subtle' | 'burst' | 'grand' = 'burst') => {
  try {
    if (type === 'subtle') {
      confetti({
        particleCount: 35,
        spread: 45,
        origin: { y: 0.7 },
        colors: ['#0284c7', '#06b6d4', '#10b981']
      });
    } else if (type === 'burst') {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#38bdf8', '#34d399', '#f43f5e', '#fbbf24']
      });
    } else if (type === 'grand') {
      // 3 waves of confetti
      confetti({
        particleCount: 120,
        spread: 100,
        origin: { y: 0.5 },
        colors: ['#38bdf8', '#34d399', '#f43f5e', '#a855f7', '#fbbf24']
      });
      setTimeout(() => {
        confetti({
          particleCount: 60,
          angle: 60,
          spread: 55,
          origin: { x: 0 }
        });
        confetti({
          particleCount: 60,
          angle: 120,
          spread: 55,
          origin: { x: 1 }
        });
      }, 250);
    }
  } catch {
    // Fail silently in environments without canvas
  }
};

// Web Audio synthesizer for pleasant reward chimes (no external mp3 files needed)
export const playRewardChime = (toneType: 'checkpoint' | 'task' | 'lesson-complete' = 'task') => {
  try {
    const windowWithAudio = window as unknown as Record<string, unknown>;
    const AudioCtor = typeof window.AudioContext !== 'undefined'
      ? window.AudioContext
      : typeof windowWithAudio.webkitAudioContext === 'function'
      ? (windowWithAudio.webkitAudioContext as typeof AudioContext)
      : null;
    if (!AudioCtor) return;
    const ctx = new AudioCtor();

    if (toneType === 'checkpoint') {
      // Pleasant double ding (e.g. C6 -> G6)
      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(523.25, now); // C5
      osc.frequency.exponentialRampToValueAtTime(783.99, now + 0.15); // G5
      gain.gain.setValueAtTime(0.15, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.36);
    } else if (toneType === 'task') {
      // Rising arpeggio for task done (C5 -> E5 -> G5)
      const notes = [523.25, 659.25, 783.99];
      notes.forEach((freq, idx) => {
        const now = ctx.currentTime + idx * 0.08;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now);
        gain.gain.setValueAtTime(0.2, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.26);
      });
    } else if (toneType === 'lesson-complete') {
      // Grand victory chord
      const chords = [523.25, 659.25, 783.99, 1046.50];
      chords.forEach((freq, idx) => {
        const now = ctx.currentTime + idx * 0.06;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now);
        gain.gain.setValueAtTime(0.25, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.6);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.62);
      });
    }
  } catch {
    // AudioContext might be blocked until user gesture, ignore error
  }
};
