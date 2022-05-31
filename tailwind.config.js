module.exports = {
  purge: {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    // safeList: [
    //   /^bg-/,
    //   /^to-/,
    //   /^from-/
    // ]
  },
  theme: {
    extend: {},
    colors: {
      darkBlue: 'hsl(219, 48%, 8%)',
      gray: '#FFFFFF8c',
      white: '#FFF',
      marine: '#151c28',
      transparent: 'transparent',
      danger: '#dc2626',
      black: '#121217'
    }
  },
  plugins: [],
}