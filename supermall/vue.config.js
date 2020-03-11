var path = require('path')

function resolve (dir) {
	console.log(__dirname)
 	return path.join(__dirname, dir)
}

module.exports = {
  lintOnSave: false,
  configureWebpack:{
    resolve:{
      alias:{
         "src":resolve("@"),
         "css": resolve("src/assets/css"),
         "img": resolve("src/assets/img"),
         "common": resolve("src/common"),
         "components": resolve("src/components"),
         "network": resolve("src/network"),
         "views": resolve("src/views")
      }
    }
  }
}

