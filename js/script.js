
'use strict'

const table2A = document.querySelector('.table--2A');
const table2B = document.querySelector('.table--2B');
const table3D = document.querySelector('.table--3D');
const table2children = document.querySelector('.table--2children');
const tablecompTamTab = document.querySelector('.table--compTamTab');
const tablelab = document.querySelector('.table--lab');
const tablemam = document.querySelector('.table--mam');
const tablestom = document.querySelector('.table--stom');
const tableuzi = document.querySelector('.table--uzi');



const btnA = document.querySelector('.btn--A');
const btnchildren = document.querySelector('.btn--children');
const btnB = document.querySelector('.btn--B');
const btnD = document.querySelector('.btn--D');
const btnE = document.querySelector('.btn--E');
const btnF = document.querySelector('.btn--F');
const btnG = document.querySelector('.btn--G');
const btnK = document.querySelector('.btn--K');
const btngast = document.querySelector('.btn--gast');
const btngemo = document.querySelector('.btn--gemo');
const btnderm = document.querySelector('.btn--derm');
const btninfect = document.querySelector('.btn--infect');
const btncardiolog = document.querySelector('.btn--cardiolog');
const btnginec = document.querySelector('.btn--ginec');
const btnchildGastr = document.querySelector('.btn--childGastr');
const btnchildGema = document.querySelector('.btn--childGema');
const btnchildGinec = document.querySelector('.btn--childGinec');
const btnchildDerm = document.querySelector('.btn--childDerm');
const btnchildCardiolog = document.querySelector('.btn--childCardiolog');
const btnchildKinez = document.querySelector('.btn--childKinez');
const btnchildLogoped = document.querySelector('.btn--childLogoped');
const btncompTam = document.querySelector('.btn--compTam');
const btncompTamtabs = document.querySelector('.btn--compTamtabs');
const btnlabs = document.querySelector('.btn--labs');
const btnlabtabs = document.querySelector('.btn--labtabs');
const btnmams = document.querySelector('.btn--mams');
const btnmamtabs = document.querySelector('.btn--mamtabs');
const btnstoms = document.querySelector('.btn--stoms');
const btnstomtabs = document.querySelector('.btn--stomtabs');

const btnuzis = document.querySelector('.btn--uzis');
const btnuzitabs = document.querySelector('.btn--uzitabs');




const firstTableBtns = [btnA, btnB, btnchildren, btncompTam, btnlabs, btnmams, btnstoms, btnuzis];
const secondTableBtns = [btnD, btnE, btnF, btngast, btngemo, btnderm, btninfect, btncardiolog, btnginec, btnchildGastr, btnchildGema, btnchildGinec, btnchildDerm, btnchildCardiolog, btnchildKinez, btnchildLogoped, btncompTamtabs, btnlabtabs, btnmamtabs, btnstomtabs, btnuzitabs];
const thirdTableBtns = [btnG, btnK];

let isSecondTableVisible = false;

const resChange = (first, second, third) => {
  curRes = res.innerHTML.split('-');
  if (first) {
    res.innerHTML = first;
  };
  if (second) {
    res.innerHTML = curRes[0] + `-${second}`;
  };
  if (third) {
    res.innerHTML = curRes[0] + '-' + curRes[1] + `-${third}`;
  };
};

const showSecondTable = (e) => {
  let firstTableBtnIndex = e.target.classList[2].split('--').pop();
  switch (firstTableBtnIndex) {
    case 'A':
      table2A.style.display = 'flex';
      table2B.style.display = 'none';
      table3D.style.display = 'none';
      table2children.style.display = 'none';
      tablecompTamTab.style.display = 'none';
      tablelab.style.display = 'none';
      tablemam.style.display = 'none';
      tablestom.style.display = 'none';
      tableuzi.style.display = 'none';
      break;
    case 'B':
      table2A.style.display = 'none';
      table2B.style.display = 'flex';
      table3D.style.display = 'none';
      table2children.style.display = 'none';
      tablecompTamTab.style.display = 'none';
      tablelab.style.display = 'none';
      tablemam.style.display = 'none';
      tablestom.style.display = 'none';
      tableuzi.style.display = 'none';
      break;
      case 'children':
      table2A.style.display = 'none';
      table2B.style.display = 'none';
      table3D.style.display = 'none';
      table2children.style.display = 'flex';
      tablecompTamTab.style.display = 'none';
      tablelab.style.display = 'none';
      tablemam.style.display = 'none';
      tablestom.style.display = 'none';
      tableuzi.style.display = 'none';
      break;
      case 'compTam':
      table2A.style.display = 'none';
      table2B.style.display = 'none';
      table3D.style.display = 'none';
      table2children.style.display = 'none';
      tablecompTamTab.style.display = 'flex';
      tablelab.style.display = 'none';
      tablemam.style.display = 'none';
      tablestom.style.display = 'none';
      tableuzi.style.display = 'none';
      break;
      case 'labs':
      table2A.style.display = 'none';
      table2B.style.display = 'none';
      table3D.style.display = 'none';
      table2children.style.display = 'none';
      tablecompTamTab.style.display = 'none';
      tablelab.style.display = 'flex';
      tablemam.style.display = 'none';
      tablestom.style.display = 'none';
      tableuzi.style.display = 'none';
      break;
      case 'mams':
      table2A.style.display = 'none';
      table2B.style.display = 'none';
      table3D.style.display = 'none';
      table2children.style.display = 'none';
      tablecompTamTab.style.display = 'none';
      tablelab.style.display = 'none';
      tablemam.style.display = 'flex';
      tablestom.style.display = 'none';
      tableuzi.style.display = 'none';
      break;
      case 'stoms':
      table2A.style.display = 'none';
      table2B.style.display = 'none';
      table3D.style.display = 'none';
      table2children.style.display = 'none';
      tablecompTamTab.style.display = 'none';
      tablelab.style.display = 'none';
      tablemam.style.display = 'none';
      tablestom.style.display = 'flex';
      tableuzi.style.display = 'none';
      break;
      case 'uzis':
      table2A.style.display = 'none';
      table2B.style.display = 'none';
      table3D.style.display = 'none';
      table2children.style.display = 'none';
      tablecompTamTab.style.display = 'none';
      tablelab.style.display = 'none';
      tablemam.style.display = 'none';
      tablestom.style.display = 'none';
      tableuzi.style.display = 'flex';
      break;
    default:
      console.log('Error');
  }
  resChange(firstTableBtnIndex, false, false);
};

const showThirdTable = (e) => {
  let secondTableBtnIndex = e.target.classList[2].split('--').pop();
  switch (secondTableBtnIndex) {
    case 'D':
      table3D.style.display = 'flex';
      break;
    case 'E':
      table3D.style.display = 'flex';
      break;
    case 'F':
      table3D.style.display = 'flex';
      break;
      case 'gast':
      table3D.style.display = 'flex';
      break;
      case 'gemo':
      table3D.style.display = 'flex';
      break;
      case 'derm':
      table3D.style.display = 'flex';
      break;
      case 'infect':
      table3D.style.display = 'flex';
      break;
      case 'cardiolog':
      table3D.style.display = 'flex';
      break;
      case 'ginec':
      table3D.style.display = 'flex';
      break;
      case 'childGastr':
      table3D.style.display = 'flex';
      break;
      case 'childGema':
      table3D.style.display = 'flex';
      break;
      case 'childGinec':
      table3D.style.display = 'flex';
      break;
      case 'childDerm':
      table3D.style.display = 'flex';
      break;
      case 'childCardiolog':
      table3D.style.display = 'flex';
      break;
      case 'childKinez':
      table3D.style.display = 'flex';
      break;
      case 'childLogoped':
      table3D.style.display = 'flex';
      break;
    default:
      console.log('Error');
  }
  resChange(false, secondTableBtnIndex, false);
};

const thirdTableClick = (e) => {
  let thirdTableBtnIndex = e.target.classList[2].split('--').pop();
  resChange(false, false, thirdTableBtnIndex);
}

firstTableBtns.map(btn => {
  btn.addEventListener('click', (e) => showSecondTable(e))
});
secondTableBtns.map(btn => {
  btn.addEventListener('click', (e) => showThirdTable(e))
});
thirdTableBtns.map(btn => {
  btn.addEventListener('click', (e) => thirdTableClick(e))
});

/////////////////////


