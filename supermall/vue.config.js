var path = require('path')

function resolve (dir) {
	console.log(__dirname)
 	return path.join(__dirname, dir)
}

module.exports = {
  lintOnSave: false,
  chainWebpack: config => {
  	config.resolve.alias
  	 // key,value自行定义，比如.set('@@', resolve('src/components'))
  	.set("@",resolve("src"))
  	.set("css", resolve("src/assets/css"))
  	.set("img", resolve("src/assets/img"))
  	.set("common", resolve("src/common"))
  	.set("components", resolve("src/components"))
  	.set("network", resolve("src/network"))
  	.set("router", resolve("src/router"))
  	.set("store", resolve("src/store"))
  	.set("views", resolve("src/views"))
 	}
}

