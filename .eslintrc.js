module.exports = {
  root: true,
  extends: ['next', 'next/core-web-vitals'],
  plugins: ['react', 'react-hooks'],
  rules: {
    // Ваши правила ESLint здесь
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
