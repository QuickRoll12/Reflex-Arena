
// ================================================================
//  GRUVBOX HARD - warm, muted, terminal-inspired.
//  Based on the Gruvbox Hard dark palette.
// ================================================================
export default {
  id: 'my-theme',

  gameTitle: 'Campus Chaos',
  tagline: 'Do it only when Prof says. Proxy attendance will not save you.',
  logoEmoji: '🎓',
  commander: 'Prof says',
  verbs: { click: 'tap', double: 'double-tap', hold: 'hold' },
  madeBy: 'Your Name',

  pads: {
    red: {
      label: 'ASSIGNMENT',
      emoji: '📝',
      color: '#fb4934',
      tone: 329.63,
    },
    blue: {
      label: 'LAPTOP',
      emoji: '💻',
      color: '#83a598',
      tone: 261.63,
    },
    green: {
      label: 'CANTEEN',
      emoji: '🍵',
      color: '#b8bb26',
      tone: 392.0,
    },
    yellow: {
      label: 'BELL',
      emoji: '🔔',
      color: '#fabd2f',
      tone: 523.25,
    },
  },

  colors: {
    // Gruvbox Hard
    background: '#1d2021',
    backgroundAccent: '#282828',
    surface: 'rgba(60, 56, 54, 0.65)',

    // Foreground
    text: '#ebdbb2',
    muted: '#a89984',

    // Accents
    primary: '#fabd2f',
    primaryText: '#1d2021',
    good: '#b8bb26',
    bad: '#fb4934',
  },

  fontsUrl:
    'https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap',

  fonts: {
    display: "'IBM Plex Mono', monospace",
    body: "'IBM Plex Mono', monospace",
  },

  lifeIcon: '📗',
  lostLifeIcon: '📕',

  ranks: {
    Rookie: { name: 'Backbencher', emoji: '😴' },
    Sharp: { name: 'Class Rep', emoji: '🙋' },
    Lightning: { name: 'Topper', emoji: '🤓' },
    'Reflex God': { name: 'Gold Medalist', emoji: '🥇' },
  },

  messages: {
    ok: [
      'Full marks! 💯',
      'Present, sir! 🙋',
      'A+ reflexes!',
    ],
    trapDodged: [
      'Smart! Prof never said 😏',
      'Not falling for that!',
    ],
    trap: [
      'Prof did NOT say! Detention! 📛',
      'Caught in the act! 👀',
    ],
    wrong_color: [
      'Wrong answer sheet! 📄',
    ],
    wrong_action: [
      'Read the question properly! 📖',
    ],
    timeout: [
      'Late submission! ⏰',
      'Attendance marked absent 😬',
    ],
    invalid_timing: [
      'Copying from someone? 🤨',
    ],
  },

  celebrationEmoji: ['🎓', '💯', '📚', '🎉'],
};
