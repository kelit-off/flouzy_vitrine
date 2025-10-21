module.exports = {
  apps: [
    {
      name: "flouzy_vitrine",
      script: "node_modules/next/dist/bin/next",
      args: "start -p 5000",
      cwd: "./",
      instances: 1, // ou 1 si tu veux juste un process
      exec_mode: "fork",
      env: {
        NODE_ENV: "production",
        PORT: 5000
      }
    }
  ]
};
