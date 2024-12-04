module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backdropBlur: {
        140: "140px",
      },
      keyframes: {
        moveInCircle: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "50%": {
            transform: "rotate(180deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        moveVertical: {
          "0%": {
            transform:
              "translateY(-50%)",
          },
          "50%": {
            transform:
              "translateY(50%)",
          },
          "100%": {
            transform:
              "translateY(-50%)",
          },
        },
        moveHorizontal: {
          "0%": {
            transform:
              "translateX(-50%),translateY(-10%)",
          },
          "50%": {
            transform:
              "translateX(50%),translateY(10%)",
          },
          "100%": {
            transform:
              "translateX(-50%),translateY(-10%)",
          },
        },
      },
    },
  },
  plugins: [],
};
