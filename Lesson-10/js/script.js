let tabNavItem = document.querySelectorAll('.tab__item');
let tabContentItem = document.querySelectorAll('.tabs-content__item');

tabNavItem.forEach(function (elem) { //вроде функция которая переберет табы
    elem.addEventListener('click', activeTab);//обработчик событий добавляем
})

function activeTab() { //функция для прошлой функции для вызова события
    tabNavItem.forEach(function (elem) { //опять вроде перебираем табы для обработчика событий
        elem.classList.remove('active');//удаляем у элемента указанный клас в скобочках
    })
    this.classList.add('active');//выше удалили, теперь добавляем клас актив
    let tabName = this.getAttribute('data-tab');//присвоил переменной атрибут data-tab

    activeTabContent(tabName);
    
}

function activeTabContent(tabName) {
    tabContentItem.forEach(function (item) {
        
        if (item.classList.contains(tabName)) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    })
}
