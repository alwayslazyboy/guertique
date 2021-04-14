'use strict'

const server = require('./server.js')

exports.build = build
/**
 * Build
 * 
 * @returns {object}
 */
function build (args) {
    if (args.length < 1) { help(); return }
    const theme = args[0]
    console.log(theme)
    return args
}

exports.demo = demo
/**
 * Demo
 *
 * Open demo server
 * 
 * @todo show params error
 *
 * @returns void
 */
function demo (args) {
    const theme = args[0]
    const serverParams = args[1].split(':')
    const [host, port] = serverParams
    server().listen(port, host, () => {
        console.log(`Demo ${theme} at ${host}:${port}`)
    })
}

exports.help = help
/**
 * Help
 * 
 * Show help text
 * 
 * @returns void
 */
function help () {
    console.log(`
Guertique
An autocomplete for Gartic

-----------------------------------------------------------
Usage examples

guertique build objects
guertique demo 127.0.0.1:4000
guertique demo --port=4000

-----------------------------------------------------------
General commands

build  : Generate production code with a theme's words
         Usage: build <theme>

demo   : Open demo server 
         Usage : demo <host>:<port>
         Default Params: host=127.0.0.1
                         port=4000
      
help   : Instructions for cli usage
version: Show the current version

-----------------------------------------------------------
Credits

Coded by @alwayslazyboy
    `)
}

exports.version = version
/**
 * Version
 *
 * @returns void
 */
function version () {
    console.log('guertique v0.0.1')
}
