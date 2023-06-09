const roomSelect = document.querySelector('.room-select');
const floorSelect = document.querySelector('.floor-select');
const formObj = document.querySelector('.reserve-form');
  
// слушатель резета формы      
document.querySelector('.reset-button').addEventListener('click', () => {
    formObj.reset();
})
      
// функция заполнения списка переговорных     
function updateRoomSelect() {
  const options = Array.from({ length: 10 }, (_, i) => i + 1)
        .map(n => `<option value="${n}">Переговорная ${n}</option>`);
        roomSelect.innerHTML = options.join('');
    }

//функция заполнения списка этажей
function updateFloorSelect() {
    const options = Array.from({ length: 25 }, (_, i) => i + 3)
        .map(n => `<option value="${n}">Этаж ${n}</option>`);
    floorSelect.innerHTML = options.join('');
    }
      
updateFloorSelect(); // заполнить список этажей по умолчанию
updateRoomSelect(); // заполнить список переговорных по умолчанию

// слушатель сабмита формы и вывода данных формы в формате json в консоль 
formObj.addEventListener('submit', e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {};
    for (let [key, value] of formData.entries()) {
        data[key] = value;
    }
    console.log(JSON.stringify(data)); 
    formObj.reset();
      });