// storefront.webpack.js

const path = require('path')

module.exports = () => ({
  resolve: {
    alias: {
        './js/ShippingLine.js': path.resolve(__dirname, 'template/js/custom-js/js/ShippingLine.js')
    }
  }
})