const firstPart = document.querySelectorAll('.first-part');

window.addEventListener('scroll', checkfirstPart);

checkfirstPart();

function checkfirstPart() {
	const triggerBottom = window.innerHeight / 5 * 4;
	firstPart.forEach((firstPart, idx) => {
		const firstPartTop = firstPart.getBoundingClientRect().top;
		
		if(firstPartTop < triggerBottom) {
            firstPart.classList.add('animate__animated');
            firstPart.classList.add('animate__fadeInLeft');
            firstPart.removeAttribute('style');
		} else {
            firstPart.classList.remove('animate__animated');
            firstPart.classList.remove('animate__fadeInLeft');
            firstPart.setAttribute('style', 'visibility:hidden');
		}
	});
}


const programim = document.querySelectorAll('.programim');

window.addEventListener('scroll', checkProgramim);

checkProgramim();

function checkProgramim() {
	const triggerBottom = window.innerHeight / 5 * 4;
	programim.forEach((programim, idx) => {
		const programimTop = programim.getBoundingClientRect().top;
		
		if(programimTop < triggerBottom) {
            programim.classList.add('animate__animated');
            programim.classList.add('animate__fadeInRight');
            programim.removeAttribute('style');
		} else {
            programim.classList.remove('animate__animated');
            programim.classList.remove('animate__fadeInRight');
            programim.setAttribute('style', 'visibility:hidden');
		}
	});
}


const english = document.querySelectorAll('.english');

window.addEventListener('scroll', checkEnglish);

checkEnglish();

function checkEnglish() {
	const triggerBottom = window.innerHeight / 5 * 4;
	english.forEach((english, idx) => {
		const englishTop = english.getBoundingClientRect().top;
		
		if(englishTop < triggerBottom) {
            english.classList.add('animate__animated');
            english.classList.add('animate__fadeInRight');
            english.removeAttribute('style');
		} else {
            english.classList.remove('animate__animated');
            english.classList.remove('animate__fadeInRight');
            english.setAttribute('style', 'visibility:hidden');
		}
	});
}


const socialMedia = document.querySelectorAll('.social-media');

window.addEventListener('scroll', checksocialMedia);

checksocialMedia();

function checksocialMedia() {
	const triggerBottom = window.innerHeight / 5 * 4;
	socialMedia.forEach((socialMedia, idx) => {
		const socialMediaTop = socialMedia.getBoundingClientRect().top;
		
		if(socialMediaTop < triggerBottom) {
            socialMedia.classList.add('animate__animated');
            socialMedia.classList.add('animate__fadeInRight');
            socialMedia.removeAttribute('style');
		} else {
            socialMedia.classList.remove('animate__animated');
            socialMedia.classList.remove('animate__fadeInRight');
            socialMedia.setAttribute('style', 'visibility:hidden');
		}
	});
}


const prices = document.querySelectorAll('.prices');

window.addEventListener('scroll', checkprices);

checkprices();

function checkprices() {
	const triggerBottom = window.innerHeight / 5 * 4;
	prices.forEach((prices, idx) => {
		const pricesTop = prices.getBoundingClientRect().top;
		
		if(pricesTop < triggerBottom) {
            prices.classList.add('animate__animated');
            prices.classList.add('animate__fadeInRight');
            prices.removeAttribute('style');
		} else {
            prices.classList.remove('animate__animated');
            prices.classList.remove('animate__fadeInRight');
            prices.setAttribute('style', 'visibility:hidden');
		}
	});
}


const school = document.querySelectorAll('.school');

window.addEventListener('scroll', checkschool);

checkschool();

function checkschool() {
	const triggerBottom = window.innerHeight / 5 * 4;
	school.forEach((school, idx) => {
		const schoolTop = school.getBoundingClientRect().top;
		
		if(schoolTop < triggerBottom) {
            school.classList.add('animate__animated');
            school.classList.add('animate__fadeInRight');
            school.removeAttribute('style');
		} else {
            school.classList.remove('animate__animated');
            school.classList.remove('animate__fadeInRight');
            school.setAttribute('style', 'visibility:hidden');
		}
	});
}


const technology = document.querySelectorAll('.technology');

window.addEventListener('scroll', checktechnology);

checktechnology();

function checktechnology() {
	const triggerBottom = window.innerHeight / 5 * 4;
	technology.forEach((technology, idx) => {
		const technologyTop = technology.getBoundingClientRect().top;
		
		if(technologyTop < triggerBottom) {
            technology.classList.add('animate__animated');
            technology.classList.add('animate__fadeInRight');
            technology.removeAttribute('style');
		} else {
            technology.classList.remove('animate__animated');
            technology.classList.remove('animate__fadeInRight');
            technology.setAttribute('style', 'visibility:hidden');
		}
	});
}


const who_we_are = document.querySelectorAll('.who-we-are');

window.addEventListener('scroll', checkwho_we_are);

checkwho_we_are();

function checkwho_we_are() {
	const triggerBottom = window.innerHeight / 5 * 4;
	who_we_are.forEach((who_we_are, idx) => {
		const who_we_areTop = who_we_are.getBoundingClientRect().top;
		
		if(who_we_areTop < triggerBottom) {
			who_we_are.classList.add('animate__animated');
			who_we_are.classList.add('animate__fadeInRight');
			who_we_are.removeAttribute('style');
		} else {
            who_we_are.classList.remove('animate__animated');
            who_we_are.classList.remove('animate__fadeInRight');
            who_we_are.setAttribute('style', 'visibility:hidden');
		}
	});
}


const firstMember = document.querySelectorAll('.first-member');

window.addEventListener('scroll', checkfirstMember);

checkfirstMember();

function checkfirstMember() {
	const triggerBottom = window.innerHeight / 5 * 4;
	firstMember.forEach((firstMember, idx) => {
		const firstMemberTop = firstMember.getBoundingClientRect().top;
		
		if(firstMemberTop < triggerBottom) {
			if(window.innerWidth > 1160) {
				firstMember.classList.add('animate__animated');
				firstMember.classList.add('animate__fadeInRight');
				firstMember.removeAttribute('style');
			}
			else {
				firstMember.classList.add('animate__animated');
				firstMember.classList.add('animate__fadeInRight');
				firstMember.removeAttribute('style');
			}
			
		} else {
			if(window.innerWidth < 1160) {
				firstMember.classList.remove('animate__animated');
				firstMember.classList.remove('animate__fadeInRight');
				firstMember.setAttribute('style', 'visibility:hidden');
			}
			else {
				firstMember.classList.remove('animate__animated');
				firstMember.classList.remove('animate__fadeInRight');
				firstMember.setAttribute('style', 'visibility:hidden');
			}
		}
	});
}


const secondMember = document.querySelectorAll('.second-member');

window.addEventListener('scroll', checksecondMember);

checksecondMember();

function checksecondMember() {
	const triggerBottom = window.innerHeight / 5 * 4;
	secondMember.forEach((secondMember, idx) => {
		const secondMemberTop = secondMember.getBoundingClientRect().top;
		
		if(secondMemberTop < triggerBottom) {
			if(window.innerWidth > 1160) {
				secondMember.classList.add('animate__animated');
				secondMember.classList.add('animate__fadeInRight');
				secondMember.classList.add('animate__delay-1s');
				secondMember.removeAttribute('style');
			}
			else {
				secondMember.classList.add('animate__animated');
				secondMember.classList.add('animate__fadeInRight');
				secondMember.classList.remove('animate__delay-1s');
				secondMember.removeAttribute('style');
			}
			
		} else {
			if(window.innerWidth < 1160) {
				secondMember.classList.remove('animate__animated');
				secondMember.classList.remove('animate__fadeInRight');
				secondMember.setAttribute('style', 'visibility:hidden');
			}
			else {
				secondMember.classList.remove('animate__animated');
				secondMember.classList.remove('animate__fadeInRight');
				secondMember.setAttribute('style', 'visibility:hidden');
			}
		}
	});
}


const thirdMember = document.querySelectorAll('.third-member');

window.addEventListener('scroll', checkthirdMember);

checkthirdMember();

function checkthirdMember() {
	const triggerBottom = window.innerHeight / 5 * 4;
	thirdMember.forEach((thirdMember, idx) => {
		const thirdMemberTop = thirdMember.getBoundingClientRect().top;
		
		if(thirdMemberTop < triggerBottom) {
			if(window.innerWidth > 1160) {
				thirdMember.classList.add('animate__animated');
				thirdMember.classList.add('animate__fadeInRight');
				thirdMember.classList.add('animate__delay-2s');
				thirdMember.removeAttribute('style');
			}
			else {
				thirdMember.classList.add('animate__animated');
				thirdMember.classList.add('animate__fadeInRight');
				thirdMember.classList.remove('animate__delay-2s');
				thirdMember.removeAttribute('style');
			}
			
		} else {
			if(window.innerWidth < 1160) {
				thirdMember.classList.remove('animate__animated');
				thirdMember.classList.remove('animate__fadeInRight');
				thirdMember.setAttribute('style', 'visibility:hidden');
			}
			else {
				thirdMember.classList.remove('animate__animated');
				thirdMember.classList.remove('animate__fadeInRight');
				thirdMember.setAttribute('style', 'visibility:hidden');
			}
		}
	});
}