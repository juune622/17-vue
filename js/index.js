 new Vue({
	 el: '#app',
	 data: {
		 title:'',
		 boxShow:false,
		 imgArr:[
			'../img/iu1.jpg',
			'../img/iu2.jpg',
			'../img/iu3.jpg'
		 ],
		 imgSrc: '../img/iu1.jpg',
		 imgIdx: 0,
	 },
	 methods: {
		onBtnClick(){
			this.boxShow=!this.boxShow; 
		},
		onImgClick(){
			this.imgIdx = (this.imgArr.length - 1 == this.imgIdx) ? 0 : this.imgIdx + 1;
			this.imgSrc = this.imgArr[this.imgIdx];
		}
	 }
 });