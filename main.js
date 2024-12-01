
const items = [
    { id: 1, category: "electronics", title: "Смартфон", image: "https://scdn.comfy.ua/89fc351a-22e7-41ee-8321-f8a9356ca351/https://cdn.comfy.ua/media/catalog/product/i/p/iphone_16_pro_desert_titanium_pdp_image_position_1__ce-ww_1_2.jpg/w_600", description: "Станеш найкрутішим на районі, тільки мівіной закупись)." },
    { id: 2, category: "clothing", title: "Куртка", image: "https://images.prom.ua/5155930715_zimova-zhinocha-puhova.jpg", description: "Ну просто куртка, не думаю что сильно тепла, але куртка." },
    { id: 3, category: "toys", title: "Конструктор", image: "https://bi.ua/uploaded-images/products/size_650/550322_1.jpg", description: "Розвиваючий конструктор. Розвивайся з 16 вже пора." },
    { id: 4, category: "electronics", title: "ПК", image: "https://scdn.comfy.ua/89fc351a-22e7-41ee-8321-f8a9356ca351/https://cdn.comfy.ua/media/catalog/product/i/m/imac_m3_4-ports_green_pdp_image_position_1__en-us.jpg/w_600", description: "Ну тут без слів всім треба навіщо не знаем." },
    { id: 5, category: "clothing", title: "Сумка", image: "https://dream-watch.com.ua/assets/cache/images/assets/galleries/4591/k28-715x743-7bc.jpg", description: "По суті інвестиція в майбутнє." },
];

const filters = document.querySelectorAll('.filters button');
const gallery = document.getElementById('gallery');

function renderItems(category = "all") {
    gallery.innerHTML = "";
    const filteredItems = category === "all" ? items : items.filter(item => item.category === category);
    filteredItems.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <img src="${item.image}" alt="${item.title}">
            <div class="card-description">
                <h3>${item.title}</h3>
                <p>${item.description}</p>
            </div>
        `;
        gallery.appendChild(card);
    });
}

filters.forEach(button => {
    button.addEventListener('click', () => renderItems(button.dataset.category));
});

document.addEventListener('DOMContentLoaded', () => renderItems());

const subscribePopup = document.getElementById('subscribe-popup');
const subscribeAccept = document.getElementById('subscribe-accept');
const subscribeDecline = document.getElementById('subscribe-decline');

setTimeout(() => {
    if (!localStorage.getItem('subscribed')) {
        subscribePopup.classList.remove('hidden');
    }
}, 3000);

subscribeAccept.addEventListener('click', () => {
    localStorage.setItem('subscribed', 'true');
    subscribePopup.classList.add('hidden');
    alert('Спасибо за подписку!');
});

subscribeDecline.addEventListener('click', () => {
    subscribePopup.classList.add('hidden');
});

const adModal = document.getElementById('ad-modal');
const closeModal = document.getElementById('close-modal');
const timerSpan = document.getElementById('timer');

setTimeout(() => {
    adModal.classList.remove('hidden');
    let timer = 5;
    const interval = setInterval(() => {
        timer--;
        timerSpan.textContent = timer;
        if (timer === 0) {
            clearInterval(interval);
            closeModal.disabled = false;
        }
    }, 1000);
}, 5000);

closeModal.addEventListener('click', () => {
    adModal.classList.add('hidden');
});