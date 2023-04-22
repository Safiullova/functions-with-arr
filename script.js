const prodArr = [
    {
    name: 'Стивен Спилберг',
    career: 'Продюсер, Режиссёр, Актёр, Сценарист, Монтажёр',
    films: 'https://ru.wikipedia.org/wiki/%D0%A4%D0%B8%D0%BB%D1%8C%D0%BC%D0%BE%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D1%8F_%D0%A1%D1%82%D0%B8%D0%B2%D0%B5%D0%BD%D0%B0_%D0%A1%D0%BF%D0%B8%D0%BB%D0%B1%D0%B5%D1%80%D0%B3%D0%B0',
    top_rated_film: 'Список Шиндлера'
    },
    {
    name: 'Кристофер Нолан',
    career: 'Сценарист, Продюсер, Режиссёр, Оператор, Монтажёр, Актёр, Композитор',
    films: 'https://www.film.ru/compilation/vse-filmy-kristofera-nolana-ot-luchshego-k-horoshemu',
    top_rated_film: 'Начало'
    },
    {
    name: 'Мартин МакДона',
    career: 'Сценарист, Режиссёр, Продюсер',
    films: 'https://www.film.ru/person/martin-makdonah',
    top_rated_film: 'Три билборда на границе Эббинга, Миссури'
    },
    {
    name: 'Алексей Балабанов',
    career: 'Режиссёр, Сценарист, Актёр, Продюсер',
    films: 'https://www.film.ru/person/aleksey-balabanov',
    top_rated_film: 'Брат'
    },
    {
    name: 'Питер Фаррелли',
    career: 'Продюсер, Режиссёр, Сценарист, Актёр',
    films: 'https://www.film.ru/person/piter-farrelli',
    top_rated_film: 'Зелёная книга'
    },
    {
    name: 'Юрий Быков',
    career: 'Актёр, Режиссёр, Сценарист, Композитор, Монтажёр, Продюсер',
    films: 'https://www.film.ru/person/yuriy-bykov',
    top_rated_film: 'Дурак'
    },
    {
    name: 'Жан-Марк Валле',
    career: 'Режиссер, Продюсер, Монтажёр, Актёр, Сценарист',
    films: 'https://www.film.ru/person/zhan-mark-valle',
    top_rated_film: 'Далласский клуб покупателей'
    },
];

let block = document.querySelector('.block');//создаю переменную для работы с конкретным элементом разметки 

prodArr.forEach((item) => {  // перебираю массив из объектов
    const line = document.createElement('div'); //Добавляю элемент разметки, это просто линия
    line.className = "line"; // Присваиваю класс для тега <div>
    block.append(line);//удочеряю разметку с текстом в родитель ".block"

    const person = document.createElement('li');//Добавляю элемент разметки, записываю его в переменную 
    person.className = "person"; // Присваиваю класс для тега <li>
    person.textContent = item.name; //вставляю значение из каждого элемента объекта в массиве в разметку
    block.append(person); //удочеряю разметку с текстом в родитель ".block"
    
    const career = document.createElement('p');
    career.className = "career";
    career.textContent = item.career; 
    block.append(career); 
    
    const films = document.createElement('a');
    films.className = "films";
    films.href = item.films; 
    films.target="_blank";
    films.textContent = "фильмография";
    block.append(films);  
    
});

const topList = document.querySelector(".list"); //создаю переменную для работы с конкретным элементом разметки 

const topFilmsList = prodArr.map(function(item){ // сздаю новый массив из элементов уже имеющегося
    listTop = document.createElement("p");
    listTop.className = "list-item";
    listTop.textContent = `${item.top_rated_film}, `;
    return topList.append(listTop); 
});
