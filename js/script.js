const TableContain = document.querySelector('.table__contain'),
  TableSubtitle = document.querySelector('.table__subtitle'),
  requestURL = "../asource/table.json";

const createTemplate = (item, number) => {
  if (item.name !== null) {
    return `
      <div class="class">
        <h2 class="class__name"><span class="number">${number}.</span>${item.name}</h2>
        <p class="class__time">${item.time}</p>
        <p class="class__kind">${item.kind}</p>
        <p class="class__room">${item.room}</p>
        <p class="class__teacher">${item.teacher}</p>
      </div>
    `
  } else return `
    <div class="noclass">
      <h1 class="noclass__title"><span class="number">${number}.</span>Пары нет</h1>
    </div>
  `

}

window.addEventListener('load', () => {
  var date = new Date();
  var today = date.getDay(),
    todayText = "Понедельник";
  if (today == 2) todayText = "Вторник"
  else if (today == 3) todayText = "Среда"
  else if (today == 4) todayText = "Четверг"
  else if (today == 5) todayText = "Пятница"
  else if (today == 6) todayText = "Суббота"
  else if (today == 7) todayText = "Воскресенье"
  TableSubtitle.textContent = todayText;
  fetch(requestURL)
    .then(response => response.json())
    .then(data => {
      if (data) {
        data.forEach(element => {
          var a = 1;
          for (number in element) {
            console.log(number);
            TableContain.innerHTML += createTemplate(element[number], a);
            a++;
          }
          // element.forEach(number => {
          // TableContain.innerHTML += createTemplate(element)
          // })

        });
      }
    })
})