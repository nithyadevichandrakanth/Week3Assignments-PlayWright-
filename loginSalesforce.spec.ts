import { chromium, test } from "@playwright/test";

test('TO launch Salesforce', async () => {
const browserInstance=await chromium.launch();
const browserContext=await browserInstance.newContext();
const page=await browserContext.newPage();
await page.goto("https://login.salesforce.com/");
const url =page.url();

await page.getByLabel("Username").fill("nithyadevichandrakanth@gmail.com");

await page.getByLabel("Password").fill("Chan@8421");
await page.locator("#Login").click();

await page.locator(".slds-icon-waffle").click();
await page.getByText("View All").click();
await page.getByPlaceholder("Search apps or items...").fill("Service");
await page.locator("(//mark[text()='Service'])[1]").click();
await page.locator("[title='Accounts']").click();
await page.getByRole(`button`,{name:`new`}).click();
await page.locator("[name='Name']").fill("Nithya");
await page.locator("//button[@name='SaveEdit']").click();
const toastMessage=await page.locator(" //span[contains(@class,'toastMessage')]").textContent();
console.log(toastMessage);
const title=await page.title();
console.log(title);
console.log(url);

await page.waitForTimeout(5000);



})