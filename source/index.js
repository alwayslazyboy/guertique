'use strict'

const args                           = process.argv.slice(2)
    , { build, demo, help, version } = require('./modules/cli.js') 

/**
 * Options
 */
switch ( args[0] ) {
    case 'build':
        build(args.slice(1))
        break
    case 'demo':
        demo(args.slice(1))
        break
    case 'version':
        version()
        break
    default:
        help()
        break
}
