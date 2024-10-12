import { test } from "@playwright/test";
test('Create Lead', async ({page}) => {

   await  page.goto("http://leaftaps.com/opentaps/control/main");

    //enter username
    await page.locator("#username").fill("demosalesmanager");
    //enter password
    await page.locator("//input[@id='password']").fill("crmsfa");
    //click login
    await page.locator("//input[@type='submit']").click();
    //Click CRM/SFA (legacy text)
await page.locator("text=CRM/SFA").click();
//Click Create lead
await page.locator("//a[text()='Leads']").click();
await page.locator("//a[text()='Create Lead']").click();
await page.locator("#createLeadForm_companyName").fill("TestLeaf");

await page.locator("#createLeadForm_firstName").fill("Nithya");
await page.locator("#createLeadForm_lastName").fill("Devi");
await page.locator("#createLeadForm_personalTitle").fill("Mrs.");
await page.locator("#createLeadForm_generalProfTitle").fill("Lead Title");
await page.locator("//input[@name='annualRevenue']").fill("25000");
await page.locator("#createLeadForm_companyName").fill("Automation");
await page.locator("#createLeadForm_primaryPhoneNumber").fill("9899789908");
await page.locator("//input[@value='Create Lead']").click();

   await  page.waitForTimeout(10000);

   console.log("Given Company Name is "+await page.locator('#viewLead_companyName_sp').textContent());
   console.log("Given First name is "+ await page.locator("#viewLead_firstName_sp").textContent());
   console.log("Given Last name is "+ await page.locator("#viewLead_lastName_sp").textContent());
   console.log("The Status of the profile is "+ await page.locator("#viewLead_statusId_sp").textContent());
   console.log(`The title of the page is ${ await page.title()}`);
   
})