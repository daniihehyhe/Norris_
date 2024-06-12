// i18n-config.js
const { locales, defaultLocale } = require('./path-to-locales-config');

module.exports = {
	locales,
	defaultLocale,
	localeDetection: true, // Опционально, если хотите автоматическое определение локали
};
