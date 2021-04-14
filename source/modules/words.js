'use strict'

const fs       = require('fs')
    , path     = require('path')
    , readline = require('readline')

exports.get = get
/**
 * Get
 * 
 * @returns <Promise>
 */
async function get (theme) {
    if (typeof theme !== 'string')
        throw 'Please, give me a string'

    const list       = []
        , fileStream = fs.createReadStream(
            path.join(__dirname, '..', `data/${theme}.txt`))

    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    })

    for await (const line of rl)
        list.push(line)

    return list
}
