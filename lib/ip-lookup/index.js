'use strict';

module.exports = () => {
  return require('./ip-lookup-controller')(
    require('./ip-lookup-service')(),
  );
}