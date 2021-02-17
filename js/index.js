 new Vue({
	 el: '#app',
	 data: {
		 title:'',
		 boxShow:false
	 },
	 methods: {
		onBtnClick(){
			this.boxShow=!this.boxShow; 
		}
	 }
 });