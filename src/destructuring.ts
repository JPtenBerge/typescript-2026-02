let { fullName, age } = { fullName: 'JP', age: 39 };
let [eerste, tweede, derde, , vijfde]  = [1,3,5,7,9];


let prop = 'product.title';
let [mainProp, subProp] = prop.split('.');
// obj[splits[0]][splits[1]]
// obj[mainProp][subProp]


console.log(fullName, age);
console.log(eerste, tweede, derde, vijfde);

// Playwright:
// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });