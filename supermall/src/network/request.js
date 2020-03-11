import axios from 'axios'

export function request(config){
	//1、创建axios的实例
	const instance = axios.create({
		baseURL:'http://123.207.32.32:8000/api/wh',
		timeout:5000
	})
	//2、axios的拦截器
	instance.interceptors.request.use(config =>{
		//1.比如config中的一些信息不符合服务器要求
		//2.比如每次网络请求时，都希望在界面中显示一个请求图标
		//3.某些网络请求必须携带token

		return config;
	},err =>{
		return err;
	})

	instance.interceptors.response.use(res =>{
		return res.data
	},err =>{
		return err;
	})
	return instance(config)
}