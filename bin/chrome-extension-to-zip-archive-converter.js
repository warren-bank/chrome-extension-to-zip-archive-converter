#! /usr/bin/env node

const CrxReader = require('../lib/CrxReader')

const assert = require('assert')
const fs     = require('fs')
const path   = require('path')

let input_crx  = process.argv[2]
let output_zip = process.argv[3]

const process_path_option = function(dirty){
  if (typeof dirty !== 'string') {
    return ''
  }
  else {
    dirty = dirty.trim()

    if (dirty == '') {
      return ''
    }
  }

  let clean
  if (path.isAbsolute(dirty)) {
    clean = dirty
  }
  else {
    clean = process.cwd() + path.sep + dirty
    clean = path.normalize(clean)
  }
  return clean
}

input_crx  = process_path_option(input_crx)
output_zip = process_path_option(output_zip)

assert((input_crx !== ''), 'filepath to input CRX is required')

try {
  fs.accessSync(input_crx, fs.constants.F_OK | fs.constants.R_OK)
} catch (error) {
  assert(false, 'filepath to input CRX must exist and be readable')
}

if (output_zip == '') {
  output_zip = input_crx.replace(/\.crx$/, '') + '.zip'
}

const crxBuffer = fs.readFileSync(input_crx, {encoding: null})
const crxReader = new CrxReader(crxBuffer)
const zipBuffer = crxReader.getZipContents()

fs.writeFileSync(output_zip, zipBuffer)
