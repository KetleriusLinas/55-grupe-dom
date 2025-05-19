const listDOM = document.querySelector('.list');

// const exampleHTML = `
//             <div class="card">
//                 <img class="card-img" src="#" alt="">
//                 <h2 class="card-title">Pavadinimas</h2>
//                 <p class="card-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni veritatis corporis cupiditate aspernatur animi aliquid voluptate, rerum minus id facere facilis autem iste obcaecati. Repellat numquam veniam odio quos asperiores.</p>
//                 <a class="card-link" href="#">Read more</a>
//             </div>`;

const data = [
    {
        imgSrc: 'car_1.jpg',
        imgAlt: 'car 1',
        title: 'Car 1 title',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni veritatis corporis cupiditate aspernatur animi aliquid voluptate, rerum minus id facere facilis autem iste obcaecati. Repellat numquam veniam odio quos asperiores',
        link: '#',
    },
    {
        imgSrc: 'car_2.jpg',
        imgAlt: 'car 2',
        title: 'Car 2 title',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni veritatis corporis cupiditate aspernatur animi aliquid voluptate, rerum minus id facere facilis autem iste obcaecati. Repellat numquam veniam odio quos asperiores',
        link: '#',
    },
    {
        imgSrc: 'car_3.jpg',
        imgAlt: 'car 3',
        title: 'Car 3 title',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni veritatis corporis cupiditate aspernatur animi aliquid voluptate, rerum minus id facere facilis autem iste obcaecati. Repellat numquam veniam odio quos asperiores',
        link: '#',
    },
];

let HTML = '';

// for (let i = 0; i < 10; i++)
for (const item of data) {
    // listDOM.innerHTML +=
    HTML += `
            <div class="card">
                <img class="card-img" src="../img/${item.imgSrc}" alt="${item.imgAlt}">
                <h2 class="card-title">${item.title}</h2>
                <p class="card-desc">${item.desc}</p>
                <a class="card-link" href="${item.link}">Read more</a>
            </div>`;
}

listDOM.innerHTML = HTML;