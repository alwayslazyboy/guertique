'use strict'

const { createServer } = require('http')

module.exports = server
/**
 * Server
 *
 * @return {object} HTTP Server Object
 */
function server () {
    return createServer((req, res) => {
        res.writeHead(200, { 'Content-type': 'text/html' })
        res.write('<p>Hello, World</p>')
        res.end()
    })
}
