### [chrome-extension-to-zip-archive-converter](https://github.com/warren-bank/chrome-extension-to-zip-archive-converter)

#### Summary:

Command-line tool to convert a CRX (chrome extension) to a ZIP archive

#### Installation:

```bash
npm install -g @warren-bank/chrome-extension-to-zip-archive-converter
```

#### Usage:

```bash
crx2zip "/path/to/input/file.crx" ["/path/to/output/file.zip"]
```

* input filepath:
  * absolute, or relative to the current working directory
* [optional] output filepath:
  * absolute, or relative to the current working directory
  * default value:
    * same as input filepath, but with the file extension changed from `.crx` to `.zip`

#### Dependencies:

* external:
  * [node.js](https://nodejs.org/en/)

* internal:
  * [CrxReader](https://github.com/jiripospisil/chrome-ext-downloader/blob/8820e159179ed2fbe9cea81ae4b8f46a723fc3b3/index.js) by [Jiri Pospisil](https://github.com/jiripospisil)

#### Legal:

* copyright: [Warren Bank](https://github.com/warren-bank)
* license: [GPLv2](https://www.gnu.org/licenses/old-licenses/gpl-2.0.txt)
