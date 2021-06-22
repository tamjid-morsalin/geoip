'use strict';

module.exports = (ipLookupService) => {
    return {
        async fetch(ip) {
            try {
                return ipLookupService.fetch(ip);
            } catch (e) {
                throw e;
            }
        }
    };
}