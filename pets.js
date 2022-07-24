function dd(a){
	if(a == 25){
		const buyBtns = document.querySelectorAll('.js-buy-ticket-'+a);
		for(const buyBtn of buyBtns){
			buyBtn.addEventListener('click', showBuyTicket);
		}
	}else{
		const buyBtns = document.querySelector('.js-buy-ticket-'+a);
		buyBtns.addEventListener('click', showBuyTicket);
	}
	const modal = document.querySelector('.js-modal-'+a);
	const modalClose = document.querySelector('.js-modal-close-'+a);
	const modalContainer = document.querySelector('.js-modal-container-'+a);
	
	function showBuyTicket(){
		modal.classList.add('open');
	}
	function hidenBuyTicket() {
		modal.classList.remove('open');
	}
	modalClose.addEventListener('click', hidenBuyTicket);
	modal.addEventListener('click', hidenBuyTicket);
	modalContainer.addEventListener('click',function(event){
		event.stopPropagation();
	})
}



