import { test, expect } from '@playwright/test'

test('Add and View Meals', async ({ page }) => {
  await page.goto('/meals')

  await expect(page).toHaveTitle(/Fitness Tracker/)
  await expect(page.getByRole('heading', { name: 'Add Meal' })).toBeVisible()
  await expect(
    page.getByRole('heading', { name: 'Meal Logs' }),
  ).not.toBeVisible()

  await page.getByLabel('Name').fill('Lunch')
  await page.getByLabel('Calories').fill('330')
  await page.getByRole('button', { name: 'Cancel' }).click()
  await expect(
    page.getByRole('heading', { name: 'Meal Logs' }),
  ).not.toBeVisible()
  await expect(page.getByRole('cell', { name: 'Lunch' })).not.toBeVisible()
  await expect(page.getByRole('cell', { name: '330' })).not.toBeVisible()

  await page.getByLabel('Name').fill('Breakfast')
  await page.getByLabel('Calories').fill('250')
  await page.getByRole('button', { name: 'Save' }).click()
  await expect(page.getByRole('heading', { name: 'Meal Logs' })).toBeVisible()
  await expect(page.getByRole('cell', { name: 'Breakfast' })).toBeVisible()
  await expect(page.getByRole('cell', { name: '250' })).toBeVisible()

  await page.getByLabel('Name').fill('Dinner')
  await page.getByLabel('Calories').fill('350')
  await page.getByRole('button', { name: 'Save' }).click()
  await expect(page.getByRole('cell', { name: 'Dinner' })).toBeVisible()
  await expect(page.getByRole('cell', { name: '350' })).toBeVisible()

  await page.getByRole('link', { name: 'Dashboard' }).click()
  await expect(page.getByRole('cell', { name: 'Breakfast' })).toBeVisible()
  await expect(page.getByRole('cell', { name: '250' })).toBeVisible()
  await expect(page.getByRole('cell', { name: 'Lunch' })).not.toBeVisible()
})

test('Add and View Activities', async ({ page }) => {
  await page.goto('/activity')

  await expect(page).toHaveTitle(/Fitness Tracker/)
  await expect(
    page.getByRole('heading', { name: 'Add Activity' }),
  ).toBeVisible()
  await expect(
    page.getByRole('heading', { name: 'Activity Logs' }),
  ).not.toBeVisible()

  const runningDuration = 30
  await page.getByLabel('Activity Type').selectOption('Running')
  await page.getByLabel('Time (min)').fill(runningDuration.toString())
  await page.getByRole('button', { name: 'Cancel' }).click()
  await expect(
    page.getByRole('heading', { name: 'Activity Logs' }),
  ).not.toBeVisible()

  await expect(page.getByRole('cell', { name: 'Name' })).not.toBeVisible()
  await expect(
    page.getByRole('cell', { name: (runningDuration * -10).toString() }),
  ).not.toBeVisible()

  const walkingDuration = 40
  await page.getByLabel('Activity Type').selectOption('Walking')
  await page.getByLabel('Time (min)').fill(walkingDuration.toString())
  await page.getByRole('button', { name: 'Save' }).click()

  await expect(
    page.getByRole('heading', { name: 'Activity Logs' }),
  ).toBeVisible()
  await expect(page.getByRole('cell', { name: 'Walking' })).toBeVisible()
  await expect(
    page.getByRole('cell', { name: (walkingDuration * -10).toString() }),
  ).toBeVisible()

  const swimmingDuration = 15
  await page.getByLabel('Activity Type').selectOption('Swimming')
  await page.getByLabel('Time (min)').fill(swimmingDuration.toString())
  await page.getByRole('button', { name: 'Save' }).click()
  await expect(page.getByRole('cell', { name: 'Swimming' })).toBeVisible()
  await expect(
    page.getByRole('cell', { name: (swimmingDuration * -10).toString() }),
  ).toBeVisible()

  await page.getByRole('link', { name: 'Dashboard' }).click()
  await expect(page.getByRole('cell', { name: 'Walking' })).toBeVisible()
  await expect(
    page.getByRole('cell', { name: (walkingDuration * -10).toString() }),
  ).toBeVisible()
  await expect(page.getByRole('cell', { name: 'Running' })).not.toBeVisible()
})

test('Add New Information', async ({ page }) => {
  await page.goto('/my-information')

  await expect(page).toHaveTitle(/Fitness Tracker/)
  await expect(
    page.getByRole('heading', { name: 'My Information' }),
  ).toBeVisible()
  await expect(page.getByText('Your daily calorie')).not.toBeVisible()

  await page.getByLabel('Height (cm)').fill('170')
  await page.getByLabel('Weight (kg)').fill('75')
  await page.getByLabel('Age').fill('30')
  await page.getByLabel('Gender').selectOption('female')
  await page.getByLabel('Activity Level').selectOption('light')
  await page.getByRole('button', { name: 'Save' }).click()
  await expect(page.getByText('Your daily calorie')).toBeVisible()

  await page.getByRole('link', { name: 'Dashboard' }).click()
  const count = await page.getByRole('cell', { name: '2550' }).count()
  expect(count).toBe(2)
  await expect(
    page.getByRole('cell', { name: 'Daily Calories Required' }),
  ).toBeVisible()
})

test('track my calories journey', async ({ page }) => {
  await page.goto('/my-information')

  await page.getByLabel('Height (cm)').fill('170')
  await page.getByLabel('Weight (kg)').fill('75')
  await page.getByLabel('Age').fill('50')
  await page.getByLabel('Gender').selectOption('female')
  await page.getByLabel('Activity Level').selectOption('moderate')
  await page.getByRole('button', { name: 'Save' }).click()

  await page.getByRole('link', { name: 'Dashboard' }).click()
  const count = await page.getByRole('cell', { name: '2550' }).count()
  expect(count).toBe(2)

  await page.getByRole('link', { name: 'Meals' }).click()
  await page.getByLabel('Name').fill('Breakfast')
  await page.getByLabel('Calories').fill('230')
  await page.getByRole('button', { name: 'Save' }).click()

  await page.getByLabel('Name').fill('Lunch')
  await page.getByLabel('Calories').fill('450')
  await page.getByRole('button', { name: 'Save' }).click()

  await page.getByRole('link', { name: 'Activity' }).click()
  await page.getByLabel('Activity Type').selectOption('Swimming')
  await page.getByLabel('Time (min)').fill('30')
  await page.getByRole('button', { name: 'Save' }).click()

  await page.getByLabel('Activity Type').selectOption('Running')
  await page.getByLabel('Time (min)').fill('60')
  await page.getByRole('button', { name: 'Save' }).click()

  await page.getByRole('link', { name: 'Dashboard' }).click()
  await expect(page.getByRole('cell', { name: '2770' })).toBeVisible()

  await expect(page.getByRole('cell', { name: '220' })).toBeVisible()
  await page.getByRole('button', { name: 'Clear Data' }).click()

  await page.getByRole('link', { name: 'Dashboard' }).click()
  const numberOfZeros = await page
    .getByRole('cell', { name: '0', exact: true })
    .count()
  expect(numberOfZeros).toBe(3)
})
