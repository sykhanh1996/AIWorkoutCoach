const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  corePlugins: {
    container: false
  },
  theme: {
    extend: {}
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class' // only generate classes
    }),
    plugin(function ({ addComponents, theme }) {
      const screens = theme('screens')
      const containerStyles = {
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingLeft: theme('spacing.4'),
        paddingRight: theme('spacing.4')
      }

      Object.keys(screens).forEach((screen) => {
        const mediaQuery = `@media (min-width: ${screens[screen]})`
        switch (screen) {
          case 'sm':
            containerStyles[mediaQuery] = {
              maxWidth: theme(`columns.2xl`)
            }
            break
          case 'md':
            containerStyles[mediaQuery] = {
              maxWidth: theme(`columns.3xl`)
            }
            break
          case 'lg':
            containerStyles[mediaQuery] = {
              maxWidth: theme(`columns.5xl`)
            }
            break
          case 'xl':
            containerStyles[mediaQuery] = {
              maxWidth: theme(`columns.7xl`)
            }
            break
          default:
            break
        }
      })
      addComponents({
        '.container': containerStyles
      })
    })
  ]
}
