'use strict';

module.exports = () => {
    const geoip = require('geoip-lite');
    const appCodes = require('../app-codes');
    const AppError = require('../app-error').AppError;

    return {
        async fetch(ip) {
            try {
                const geo = geoip.lookup(ip);
                
                if(geo === null)
                {
                    return [];
                }

                const result = {
                    country: geo.country,
                    city: geo.city
                };
                
                return result;
            } catch (e) {
                
                throw new AppError(appCodes.INTERNAL_SERVER_ERROR);
            }
            
        }
    }
}