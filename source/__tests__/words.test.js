'use strict'

const { get } = require('../modules/words.js')

test('Have "ovo" in the list', async () => {
    const foodList = await get('food')
    expect(foodList).toContain('ovo')
})
