#!/usr/bin/env bash

DIR=$(cd "$(dirname "${0}")" && pwd)
ROOT="${DIR%/bin}"
TYPE="${1}" # js or css

function minify() {
    local INPUT="$(cat "${1}")"
    local OUTPUT="${2}"
    local ADDRESS="${3}"

    wget -q \
      --post-data="input=${INPUT}" \
      --output-document="${OUTPUT}" \
    "https://${ADDRESS}.com/raw"

    # add new line at the end of file
    echo '' >> "${OUTPUT}"
}

case "${TYPE}" in
  js)
    echo "Compressing app.js to app.min.js"
    minify "${ROOT}/assets/js/app.js" "${ROOT}/assets/js/app.min.js" "javascript-minifier"
  ;;

  css)
    echo "Compressing app.css to app.min.css"
    minify "${ROOT}/assets/css/app.css" "${ROOT}/assets/css/app.min.css" "cssminifier"
  ;;
esac
