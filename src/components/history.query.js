'use strict';

export default function (location) {
    if (!location.search) {
        return false;
    }

    const query = {};

    location.slice(1).split('&').forEach(v => {
        let a = v.split('=');
        query[a[0]] = a.slice(1).join('=').replace(/~and~/g, '&');
    });

    if (undefined !== query.p) {
        window.history.replaceState(null, null,
            location.pathname.slice(0, -1) + (query.p || '') +
            (query.q ? `?${query.q}` : '') +
            location.hash);
    }
}