const tabButton = document.querySelectorAll('.price__button');
const tab = document.querySelectorAll('.price__list');

function switchTab() {
  tabButton.forEach((item) => {
    item.addEventListener('click', () => {
      const tabId = item.getAttribute('data-tab');
      const currentTab = document.querySelector(tabId);
      if (!item.classList.contains('price__button--active')) {
        tabButton.forEach((unit) => {
          unit.classList.remove('price__button--active');
        });
        tab.forEach((unit) => {
          unit.classList.remove('price__list--active');
        });
        item.classList.add('price__button--active');
        currentTab.classList.add('price__list--active');

      }
    });
  });
}

export {switchTab};
