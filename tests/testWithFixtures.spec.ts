import { test } from '../test-options'
import { faker } from '@faker-js/faker'

test('parameterized methods', async ({ pageManager }) => {
    const randomFullName = faker.person.fullName()
    const randomEmail = `${randomFullName.replace(' ', '')}${faker.number.int(10000)}@test.com`

    await pageManager.onFormLayoutsPage().submitUsingTheGridFormWithCredentailsAndSelectOptions(process.env.USERNAME, process.env.PASSWORD, 'Option 1')
    await pageManager.onFormLayoutsPage().submitInlineFormWithNameEmailAndCheckbox(randomFullName, randomEmail, false)
})