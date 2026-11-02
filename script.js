const themeToggle = document.getElementById('themeToggle');

themeToggle.addEventListener('click', function () {
	const isDark = document.body.classList.toggle('dark-mode');
	themeToggle.setAttribute('aria-pressed', String(isDark));
	themeToggle.textContent = isDark ? 'Light mode' : 'Dark mode';
});

const tabs = Array.from(document.querySelectorAll('[role="tab"]'));
const tabPanels = Array.from(document.querySelectorAll('[role="tabpanel"]'));

tabs.forEach(function (tab, index) {
	tab.addEventListener('click', function () {
		selectTab(index);
	});
	tab.addEventListener('keydown', function (event) {
		if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
			event.preventDefault();
			const direction = event.key === 'ArrowRight' ? 1 : -1;
			const nextIndex = (index + direction + tabs.length) % tabs.length;
			selectTab(nextIndex);
			tabs[nextIndex].focus();
		}
	});
});

function selectTab(selectedIndex) {
	tabs.forEach(function (tab, index) {
		const isSelected = index === selectedIndex;
		tab.setAttribute('aria-selected', String(isSelected));
		tab.tabIndex = isSelected ? 0 : -1;
		tabPanels[index].hidden = !isSelected;
	});
}

function showTime() {
	document.getElementById('currentTime').innerHTML = new Date().toUTCString();
}
showTime();
setInterval(function () {
	showTime();
}, 1000);