// features/step_definitions/login.steps.ts
import { Given, When, Then, Before, After } from '@cucumber/cucumber';
import { chromium, Browser, Page } from 'playwright';
import assert from 'assert';

let browser: Browser;
let page: Page;

// Antes de cada teste, abre o navegador
Before(async () => {
  browser = await chromium.launch({ headless: false }); // headless: false para você VER ele digitando
  page = await browser.newPage();
});

// Depois de cada teste, fecha o navegador
After(async () => {
  await browser.close();
});

Given('que eu estou na página de login', async function () {
  await page.goto('http://localhost:3000/login');
});

When('eu preencho o e-mail com {string} e a senha com {string}', async function (email, senha) {
  // Procura os inputs pelo tipo
  await page.locator('input[type="email"]').fill(email);
  await page.locator('input[type="password"]').fill(senha);
});

When('clico no botão {string}', async function (textoBotao) {
  // Clica no botão que tem o texto exato
  await page.getByRole('button', { name: textoBotao }).click();
});

Then('eu devo ser redirecionado para a página inicial', async function () {
  // Espera a página carregar e verifica se a URL mudou para "/"
  await page.waitForURL('http://localhost:3000/');
  assert.strictEqual(page.url(), 'http://localhost:3000/');
});