@echo off

set fpath_js="%~dp0..\..\bin\chrome-extension-to-zip-archive-converter.js"
set fpath_crx="..\.common_assets\Tutorialzine_extension.crx"
set fpath_zip="Tutorialzine_extension.zip"
set fpath_log="%~dpn0.log"

node %fpath_js% %fpath_crx% %fpath_zip% >%fpath_log% 2>&1
