import { test } from "@playwright/test";
test(`edit lead`, async ({page}) => {
    
    await page.goto("http://leaftaps.com/opentaps/control/main");
    //enter username
    await page.locator("#username").fill("demosalesmanager");
    //enter password
    await page.locator("//input[@id='password']").fill("crmsfa");
    //click login
    await page.locator("//input[@type='submit']").click();
    //Click CRM/SFA (legacy text)
await page.locator("text=CRM/SFA").click();
await page.locator("//a[text()='Leads']").click();
await page.locator("//a[text()='Find Leads']").click();
await page.locator("(//input[@name='firstName'])[3]").fill("Nithya");

await page.locator("//button[text()='Find Leads']").click();
await page.locator("//a[text()='12310']").click();
await page.locator("//a[text()='Edit']").click();
await page.locator("#updateLeadForm_companyName").clear();
await page.locator("#updateLeadForm_companyName").fill("CTS");
await page.locator("#updateLeadForm_annualRevenue").clear();
await page.locator("#updateLeadForm_annualRevenue").fill("50000");
await page.locator("#updateLeadForm_departmentName").clear();
await page.locator("#updateLeadForm_departmentName").fill("Manual");
await page.locator("#updateLeadForm_description").fill("Test");
await page.locator("//input[@value='Update']").click();

await  page.waitForTimeout(10000);

console.log("Edited Company Name is "+await page.locator("#viewLead_companyName_sp").textContent());
console.log("Edited Revenue is "+ await page.locator("#viewLead_annualRevenue_sp").textContent());
console.log("Edited Department is "+ await page.locator("#viewLead_departmentName_sp").textContent());
console.log("Added Description is "+ await page.locator("#viewLead_description_sp").textContent());
console.log(`The title of the page is ${ await page.title()}`);


})