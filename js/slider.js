const slides = [
	'./img/01.jpg',
	'./img/02.jpg',
	'./img/03.jpg',
	'./img/04.jpg',
	'./img/05.jpg',
]

const app = new Vue({
	el: '#root',
	data: {
		slides,
		active: 0,

	},
	methods: {
		nextSlide(){
			if (this.active >= this.slides.length -1){
				this.active = 0;
			} 
			else {
				this.active++;
			}
			
		},
		prevSlide(){
			if (this.active < this.slides.length){
				this.active = 4;
			} 
			else {
				this.active--;
			}
		}
	},
	
})