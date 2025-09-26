import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:5173",
  },

  env: {
    valid_email: "cliente@youdrive.com",
    valid_password: "password",
    invalid_email: "invalido@teste.com",
    invalid_password: "senhaerrada",
  },
  video: true,
  screenshotOnRunFailure: true,
  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },
});
