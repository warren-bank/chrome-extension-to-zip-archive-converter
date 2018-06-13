#!/usr/bin/env bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

fpath_js="${DIR}/../../bin/chrome-extension-to-zip-archive-converter.js"
fpath_crx="../.common_assets/Tutorialzine_extension.crx"
fpath_zip="Tutorialzine_extension.zip"
fpath_log="${DIR}/run.log"

node "$fpath_js" "$fpath_crx" "$fpath_zip" >"$fpath_log" 2>&1
