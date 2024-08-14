import { buildNuxt, loadNuxt } from "@nuxt/kit";

async function buildNuxtApp() {
  const nuxt = await loadNuxt({
    cwd: process.cwd(),
    configFile: "./nuxt.config.ts",
  });

  await buildNuxt(nuxt);

  await nuxt.ready();
  console.log('Nuxt is ready to be served');
}

buildNuxtApp().catch((error) => {
  console.error('Failed to build Nuxt app:', error);
});