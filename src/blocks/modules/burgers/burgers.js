const burgers = document.querySelectorAll('.burger')

burgers.forEach(burger => {
	burger.addEventListener('click', function (e) {
		let elClicked = this.parentNode.parentNode
		let burgersCards = elClicked.querySelectorAll('.burger')
		burgersCards.forEach(el => {
			el.classList.toggle('active')
		})
	})
})