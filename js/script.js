let my_choice1 = {exam_id:'',doc_id:'', doc_date:'', doc_time:'', user_name:'', user_age:'', user_number:''}
const headers = new Headers();
headers.append('x-api-key', '4935A160-0E14-40C4-975B-B03A979A7994');

const init = {
  method: 'GET',
  headers
 };
fetch('https://rest.info-medika.ru:45678/GET_pl_exam_grp')
.then(response => response.json())
.then(data => {

  
  const table = document.createElement('table');
  const secondTable = document.createElement('table');
  function findActiveButtons() {
    const activeButtons = [];
    const buttons = document.getElementsByClassName('active');
    
    for (let i = 0; i < buttons.length; i++) {
      if (buttons[i].disabled === false) {
        activeButtons.push(buttons[i].innerText);
      }
    }
    
    return activeButtons;
  }
  document.body.appendChild(secondTable);

  const tbody = document.createElement('tbody');
  data.forEach(item => {
    const row = document.createElement('p');
    row.classList.add('row-table1')

    const idCell = document.createElement('td');
    idCell.style.display = 'none'; 
    idCell.appendChild(document.createTextNode(item.pl_ex_gr_id));

    
    const nameCell = document.createElement('p');

 
    const button = document.createElement('button');
    button.classList.add('button-table1');
    button.classList.add('nav-links');
    button.classList.add('btn');
    button.innerText = item.name; 
    
    if (
      item.name !== 'Консультации специалистов' &&
      item.name !== 'Функциональная диагностика' &&
      item.name !== 'Ультразвуковая диагностика'
    ) {
      button.style.display = 'none';
      button.remove();
      row.style.display = 'none'
    }

    button.addEventListener('click', () => {

      const id = item.pl_ex_gr_id;
      buttonsall = document.querySelectorAll('.button-table1')
      buttonsall.forEach(button => {
        button.classList.remove('active')
      })
      button.classList.add('active')
      
      fetch('https://rest.info-medika.ru:45678/GET_pl_exam/?pl_ex_gr_id='+ id)
      .then(response => response.json())
      .then(secondData => {
        const uniqueData = Array.from(new Set(secondData.map(item => item.name.replace(/первичный|повторный/g, ''))));
        
        const modifiedNames = [];
        const table2 = document.querySelector('.Registr_Table2');
        const table3 = document.querySelector('.Registr_Table3');
        
        table2.innerHTML = '';
        table3.innerHTML = '';
        var excludedNames = ['Прием 15 мин', 'Прием 30 мин', 'Прием 60 мин', 'Эзофагогастродуоденоскопия', 'Диафаноскопия'];

        uniqueData.forEach(name => {
          if (modifiedNames.indexOf(name) === -1 && excludedNames.indexOf(name) === -1) {
            modifiedNames.push(name);
        
            const row = document.createElement('p');
            row.classList.add('row-table2');
        
            const nameCell = document.createElement('p');
        
            const button = document.createElement("button");
            button.classList.add('button-table2');
            button.classList.add('nav-links');
            button.classList.add('nav-lines');
            button.classList.add('btn');
            button.innerText = name;
            

            const storedChoice = JSON.parse(localStorage.getItem('my_choice1'));
            if (storedChoice && storedChoice.user_name === name) {
              button.classList.add('active'); 
            }
        
            nameCell.appendChild(button);
            row.appendChild(nameCell);
            table2.appendChild(row);
          }
          
        });


        table2.addEventListener('click', function(event) {
          const button = event.target;
          const buttons = document.querySelectorAll('.button-table2');
          const activeButtons = findActiveButtons();
          console.log('Active buttons:', activeButtons);
        

          buttons.forEach(btn => {
            btn.classList.remove('active');
          });
          
        

          if (button.tagName === 'BUTTON' && button.classList.contains('button-table2',)) {
            button.classList.add('active');

        
            table3.innerHTML = table2.innerHTML !== '' ? '<button class="button-table3 nav-links nav-lines table__btn btn btn-fix">Первичный</button><button class="button-table3 nav-links nav-lines table__btn btn">Повторный</button>' : '';
            if (table2.innerHTML !== '') {
              table3.innerHTML = '<button class="button-table3 nav-links nav-lines table__btn btn btn-fix">Первичный</button><button class="button-table3 nav-links nav-lines table__btn btn">Повторный</button>';

              const buttons = table3.querySelectorAll('.button-table3');
              const buttons2 = document.querySelectorAll('.button-table3.nav-links.nav-lines.table__btn.btn');
              const activeButton = document.querySelector('.button-table1.nav-links.btn.active');
              const nextButton = document.querySelector('.calendar-next-btn');
              
              if (activeButton && activeButton.innerText === 'Функциональная диагностика') {
                Array.from(buttons2).forEach(button => {
                  const itemName = button.innerText;
                  if (itemName === 'Первичный' || itemName === 'Повторный') {
                    button.style.display = 'none';
                    nextButton.removeAttribute('disabled');
                    nextButton.removeAttribute('onclick');
                  }
                });
              }
              buttons.forEach(button => {
                button.addEventListener('click', () => {
                  
                  buttons.forEach(button => {
                    button.classList.remove('active')
                  });

                  button.classList.toggle('active');

                  const activeButtons = findActiveButtons();
                  const firstname = activeButtons[1]
                  const secondName = activeButtons[1] + (activeButtons[2] ? ' ' + activeButtons[2].toLowerCase() : '');
                  console.log('Second button:', secondName);
                  console.log('Active buttons:', firstname);
                  

                  const nextButton = document.querySelector('.calendar-next-btn');
                  nextButton.removeAttribute('disabled');
                  nextButton.removeAttribute('onclick');
                  

                  const my_choice1 = {
                    exam_id: '', 
                    doc_id: [],
                    doc_name:'',
                    doc_date: '',
                    doc_time: '',
                    user_name: '',
                    user_age: '',
                    user_number: ''
                  };
                  
                  
                  fetch('https://rest.info-medika.ru:45678/GET_pl_exam')
                  .then(response => response.json())
                  .then(data => {

                    data.forEach(item => {
                      if (item.name === firstname || item.name === secondName) {
                        my_choice1.exam_id = item.pl_exam_id; 
                        localStorage.setItem('my_choice1new', JSON.stringify(my_choice1));
                        console.log(`Name: ${item.name}, pl_exam_id: ${item.pl_exam_id}`);
                      }
                    });
                  })
                  .catch(error => {
                    console.error('Error:', error);
                  });
                });
              });
            } else {
              table3.innerHTML = '';
            }

          }
          
        });

    
      
        
      })
      .catch(error => {
        console.error('Error:', error);
      })
    });

    nameCell.appendChild(button);


    row.appendChild(idCell);
    row.appendChild(nameCell);

    tbody.appendChild(row);
  });
  document.querySelector('.Registr_Table1').appendChild(tbody);


  document.body.appendChild(table);



document.querySelector('calendar-next-btn').addEventListener('click', ()=>{
  localStorage.setItem('my_choice1', 'CHOICE')
})

.catch(error => {
  console.error('Error:', error);
});

});

//поисковая строка
