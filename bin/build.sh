#!/usr/bin/env bash
DIR=$( cd $(dirname $0) && pwd )
ROOT="${DIR%/bin}"

remove_distributions () {
    rm -Rf "${ROOT}/dist" "${ROOT}/docs"
}

move_dist_to_docs () {
    mv "${ROOT}/dist" "${ROOT}/docs"
}

build_react_static () {
    local OPTIONS="build ${@}"

    bash -c "${ROOT}/node_modules/react-static/bin/react-static ${OPTIONS}"
}

copy_assets () {
    cp -R "${ROOT}/src/assets" "${ROOT}/docs/assets"
}

remove_distributions
build_react_static ${@}
move_dist_to_docs
copy_assets
