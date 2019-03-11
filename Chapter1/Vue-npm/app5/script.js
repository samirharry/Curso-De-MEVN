let app = new Vue({
	el: "#app",
	data:{
		message: "Hola como esras aca ps mascota"
	},
	methods: {
		reverseText: function(){
			this.message =  this.message.split("").reverse().join("");
		}
	}
})