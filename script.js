const catalogItems = [
    {
        title: 'Передвижные мастерские',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIdVtRpkxSookDLwjLeKIZdwgBXfbFUgr5l21j6ctXLAA9ievBhWvPxCc7opTmlQhzLUY&usqp=CAU'
    },
    {
        title: 'Передвижные лаборатории',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIdVtRpkxSookDLwjLeKIZdwgBXfbFUgr5l21j6ctXLAA9ievBhWvPxCc7opTmlQhzLUY&usqp=CAU'
    },
    {
        title: 'Автоцистерны вакуумные',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIdVtRpkxSookDLwjLeKIZdwgBXfbFUgr5l21j6ctXLAA9ievBhWvPxCc7opTmlQhzLUY&usqp=CAU'
    },
    {
        title: 'Вахтовые автобусы',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIdVtRpkxSookDLwjLeKIZdwgBXfbFUgr5l21j6ctXLAA9ievBhWvPxCc7opTmlQhzLUY&usqp=CAU'
    },
    {
        title: 'Автокраны и автогидроподъемники',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIdVtRpkxSookDLwjLeKIZdwgBXfbFUgr5l21j6ctXLAA9ievBhWvPxCc7opTmlQhzLUY&usqp=CAU'
    },
    {
        title: 'Эскаваторы планировщики',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIdVtRpkxSookDLwjLeKIZdwgBXfbFUgr5l21j6ctXLAA9ievBhWvPxCc7opTmlQhzLUY&usqp=CAU'
    },
    {
        title: 'Бортовые и самосвалы',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIdVtRpkxSookDLwjLeKIZdwgBXfbFUgr5l21j6ctXLAA9ievBhWvPxCc7opTmlQhzLUY&usqp=CAU'
    },
    {
        title: 'Передвижные установки и агрегаты',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIdVtRpkxSookDLwjLeKIZdwgBXfbFUgr5l21j6ctXLAA9ievBhWvPxCc7opTmlQhzLUY&usqp=CAU'
    },
    {
        title: 'Прицепная техника',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIdVtRpkxSookDLwjLeKIZdwgBXfbFUgr5l21j6ctXLAA9ievBhWvPxCc7opTmlQhzLUY&usqp=CAU'
    }
]


const catalog = document.querySelector('.catalog-wrap')

catalogItems.forEach(el => {
    catalog.innerHTML += `
    <div class="col-4">
        <div class="catalog">
            <div class="catalog__img">
            <img src="${el.image}"
                alt="catalog item">
            </div>
            <div class="catalog__bottom">
                ${el.title}
            </div>
        </div>
    </div>
    `
})

let swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
  });