const TableContain = document.querySelector('.table__contain'),
  TableSubtitle = document.querySelector('.table__subtitle'),
  requestURL = "../asource/table.json",
  table = [
    {
      "first": {
        "name": null,
        "kind": null,
        "time": null,
        "room": null,
        "teacher": null
      },
      "second": {
        "name": "МО (методы оптимизации)",
        "kind": "Практика",
        "time": "10:40 - 11:20, 11:25 - 12:05",
        "room": "Корпус 3, 105",
        "teacher": "Бышик Татьяна Петровна"
      },
      "third": {
        "name": "Введение в ТМО",
        "kind": "Лекция",
        "time": "12:25 - 13:05, 13:10 - 13:50",
        "room": "Корпус 3, 237",
        "teacher": "Малинковский Юрий Владимирович"
      },
      "fourth": {
        "name": null,
        "kind": null,
        "time": null,
        "room": null,
        "teacher": null
      }
    },
    {
      "first": {
        "name": "МО (методы оптимизации)",
        "kind": "Лекция",
        "time": "9:00 - 9:40, 9:45 - 10:25",
        "room": "3-1",
        "teacher": "Жогаль Светлана Ивановна"
      },
      "second": {
        "name": "Физкультура",
        "kind": "Практика",
        "time": "10:40 - 11:20, 11:25 - 12:05",
        "room": "Стадион",
        "teacher": "Марина Юрьевна, Наталья Александровна"
      },
      "third": {
        "name": "МЧА (методы численного анализа)",
        "kind": "Практика",
        "time": "12:25 - 13:05, 13:10 - 13:50",
        "room": "2-3",
        "teacher": "Киргинцева Светлана Викторовна"
      },
      "fourth": {
        "name": "ММСА (методы многомерного статистического анализа)",
        "kind": "Лекция",
        "time": "14:20 - 15:00, 15:05 - 15:45",
        "room": "4-6",
        "teacher": "Марченко Лариса Николаевна"
      }
    },
    {
      "first": {
        "name": "ММСА (методы многомерного статистического анализа)",
        "kind": "Практика",
        "time": "9:00 - 9:40, 9:45 - 10:25",
        "room": "2-5",
        "teacher": "Марченко Лариса Николаевна"
      },
      "second": {
        "name": "ТВиМС (теория вероятности и мат. статистика)",
        "kind": "Лекция",
        "time": "10:40 - 11:20, 11:25 - 12:05",
        "room": "3-1",
        "teacher": "Якубович Оксана Владимировна"
      },
      "third": {
        "name": "АХД (анализ хозяйственной деятельности)",
        "kind": "Практика",
        "time": "12:25 - 13:05, 13:10 - 13:50",
        "room": "Корпус 3, 205",
        "teacher": "Алексеенко Наталья Анатольевна"
      },
      "fourth": {
        "name": "АХД (анализ хозяйственной деятельности)",
        "kind": "Лекция",
        "time": "14:20 - 15:00, 15:05 - 15:45",
        "room": "Корпус 3, 205",
        "teacher": "Алексеенко Наталья Анатольевна"
      }
    },
    {
      "first": {
        "name": "МО (методы оптимизации)",
        "kind": "Лекция",
        "time": "9:00 - 9:40, 9:45 - 10:25",
        "room": "3-1",
        "teacher": "Жогаль Светлана Ивановна"
      },
      "second": {
        "name": "Физкультура",
        "kind": "Практика",
        "time": "10:40 - 11:20, 11:25 - 12:05",
        "room": "Стадион",
        "teacher": "Марина Юрьевна, Наталья Александровна"
      },
      "third": {
        "name": "ТВиМС (теория вероятности и мат. статистика)",
        "kind": "Практика",
        "time": "12:25 - 13:05, 13:10 - 13:50",
        "room": "3-1",
        "teacher": "Якубович Оксана Владимировна"
      },
      "fourth": {
        "name": null,
        "kind": null,
        "time": null,
        "room": null,
        "teacher": null
      }
    },
    {
      "first": {
        "name": "МЧА (методы численного анализа)",
        "kind": "Лекция",
        "time": "9:00 - 9:40, 9:45 - 10:25",
        "room": "3-1",
        "teacher": "Березовская Елена Михайловна"
      },
      "second": {
        "name": "ИГИ (избранные главы инворматики)",
        "kind": "Лекция",
        "time": "10:40 - 11:20, 11:25 - 12:05",
        "room": "2-1а",
        "teacher": "Близнец Игорь Васильевич"
      },
      "third": {
        "name": "БЖЧ (безопасность жизнедеятельности человека)",
        "kind": "Лекция",
        "time": "12:25 - 13:05, 13:10 - 13:50",
        "room": "4-5",
        "teacher": "Осипенко Галина Леонидовна"
      },
      "fourth": {
        "name": "БЖЧ (безопасность жизнедеятельности человека)",
        "kind": "Практика",
        "time": "14:20 - 15:00, 15:05 - 15:45",
        "room": "3-14",
        "teacher": "Осипенко Галина Леонидовна"
      }
    },
    {
      "first": {
        "name": null,
        "kind": null,
        "time": null,
        "room": null,
        "teacher": null
      },
      "second": {
        "name": null,
        "kind": null,
        "time": null,
        "room": null,
        "teacher": null
      },
      "third": {
        "name": null,
        "kind": null,
        "time": null,
        "room": null,
        "teacher": null
      },
      "fourth": {
        "name": null,
        "kind": null,
        "time": null,
        "room": null,
        "teacher": null
      }
    },
    {
      "first": {
        "name": null,
        "kind": null,
        "time": null,
        "room": null,
        "teacher": null
      },
      "second": {
        "name": null,
        "kind": null,
        "time": null,
        "room": null,
        "teacher": null
      },
      "third": {
        "name": null,
        "kind": null,
        "time": null,
        "room": null,
        "teacher": null
      },
      "fourth": {
        "name": null,
        "kind": null,
        "time": null,
        "room": null,
        "teacher": null
      }
    }
  ];

const createTemplate = (item, number) => {
  console.log(item);
  if (item.name !== null) {
    return `
      <div class="class">
        <div class="class__info">
          <h2 class="class__name"><span class="number">${number}.</span>${item.name}</h2>
          <p class="class__time">${item.time}</p>
          <div class="class__kind-wrap">
            <p class="class__kind">${item.kind}</p>
            <p class="class__room">${item.room}</p>
            </div>
          <p class="class__teacher">${item.teacher}</p>
        </div>
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
  var today = date.getDay() - 1,
    todayText = "";
  if (today == 0) {
    todayText = "Понедельник"
  }
  else if (today == 1) {
    todayText = "Вторник"
  }
  else if (today == 2) {
    todayText = "Среда"
  }
  else if (today == 3) {
    todayText = "Четверг"
  }
  else if (today == 4) {
    todayText = "Пятница"
  }
  else if (today == 5) {
    todayText = "Суббота"
  }
  else if (today == 6) {
    todayText = "Воскресенье"
  }
  TableSubtitle.textContent = todayText;
  // fetch(requestURL)
  //   .then(response => response.json())
  //   .then(data => {
  //     if (data) {
  //       data.forEach(element => {
  //         var a = 1;
  //         for (number in element) {
  //           console.log(number);
  //           TableContain.innerHTML += createTemplate(element[number], a);
  //           a++;
  //         }
  //       });
  //     }
  //   });

  // console.log(table[today]);
  // var a = 1;
  // for (number in table[today]) {
  //   console.log(number);
  //   TableContain.innerHTML += createTemplate(number, a);
  //   a++;
  // }

  table.forEach(element => {
    console.log(table.indexOf(element));
    if (table.indexOf(element) == today) {
      var a = 1;
      for (number in element) {
        // console.log(number);
        TableContain.innerHTML += createTemplate(element[number], a);
        a++;
      }
    }
  })
});