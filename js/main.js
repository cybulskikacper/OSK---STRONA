const navMobile = document.querySelector('.nav-mobile')
const navBtn = document.querySelector('.hamburger')
const navItems = document.querySelectorAll('.nav__item')
const scrollSpySections = document.querySelectorAll('.section')
const form = document.querySelector('.contact__form')
const successMessage = document.querySelector('.contact__form-success')
const body = document.body
const footerYear = document.querySelector('.footer__year')

const faq = document.querySelector('.faq')
const accordionBtns = document.querySelectorAll('.accordion__box-btn')

const handleNav = () => {
	navBtn.classList.toggle('is-active')
	navMobile.classList.toggle('nav-mobile--active')
	if (navMobile.classList.contains('nav-mobile--active')) {
		body.style.overflow = 'hidden'
	} else {
		body.style.overflow = 'auto'
	}
}
const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}

handleCurrentYear()

navItems.forEach(item => {
	item.addEventListener('click', () => {
		if (navMobile.classList.contains('nav-mobile--active')) {
			handleNav()
		}
	})
})

const handleScrollSpy = () => {
	if (document.body.classList.contains('offer-page') || document.body.classList.contains('contact-page')) {
		return
	}

	scrollSpySections.forEach(section => {
		const sectionTop = section.offsetTop
		const sectionHeight = section.offsetHeight
		const scrollPos = window.scrollY + 1

		if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight - 50.5) {
			const activeSection = document.querySelector(`[href*="${section.id}"]`)
			navItems.forEach(item => item.classList.remove('is-active'))
			activeSection.classList.add('is-active')
		}
	})

	if (window.scrollY <= 20) {
		const firstSection = document.querySelector('a:first-of-type')
		navItems.forEach(item => item.classList.remove('is-active'))
		firstSection.classList.add('is-active')
	}
}

function openAccordionItems() {
	if (this.nextElementSibling.classList.contains('active')) {
		this.nextElementSibling.classList.remove('active')
	} else {
		closeAccordionItems()
		this.nextElementSibling.classList.toggle('active')
	}
}

const closeAccordionItems = () => {
	const allActiveItems = document.querySelectorAll('.accordion__box-info')
	allActiveItems.forEach(item => item.classList.remove('active'))
}

const clickOutsideAccordion = e => {
	if (
		
		e.target.classList.contains('accordion__box-btn') 	||
		e.target.classList.contains('accordion__box-info') ||
		e.target.classList.contains('accordion__box-text')
	
	) 
	return
	closeAccordionItems()
}

navBtn.addEventListener('click', handleNav)
window.addEventListener('scroll', handleScrollSpy)
accordionBtns.forEach(btn => {
	btn.addEventListener('click', openAccordionItems)
})
window.addEventListener('click', clickOutsideAccordion)
