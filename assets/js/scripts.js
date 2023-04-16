// Import components
import getFormHtmlElement from './components/formElements.js';
import addRowElement from './components/addRowElement.js';
// DOM element
const draggables = document.querySelectorAll('.draggable');
const elements = document.querySelectorAll('.row-element');
// Local veriables
let dragtype;

document.getElementById('addRow').addEventListener('click', addRowElement);

function jquerySortable(rowid) {
  $(`#${rowid} .row-content`).sortable({
    placeholder: 'ui-state-highlight',
  });
  $(`#${rowid} .row-content`).disableSelection();
}

function addRowContent(rowid, formElementType) {
  const dropzone = document.querySelector(`#${rowid} .dropzone`);
  if (dropzone.classList.contains('null')) {
    dropzone.insertAdjacentHTML(
      'afterbegin',
      `<div class="row-content d-flex flex-column gap-2 mb-3"> ${getFormHtmlElement(
        formElementType,
      )} </div>`,
    );
    dropzone.querySelector('.drag-info span').style.animation = '';
    dropzone.querySelector('.drag-info').classList.replace('flex-column', 'flex-row');
    dropzone.classList.remove('null');
  } else {
    dropzone
      .querySelector('.row-content')
      .insertAdjacentHTML('beforeend', getFormHtmlElement(formElementType));
  }
}

draggables.forEach(draggable => {
  draggable.addEventListener('dragstart', () => {
    dragtype = draggable.getAttribute('id');
  });

  draggable.addEventListener('dragend', () => {});
});

elements.forEach(element => {
  element.addEventListener('dragover', e => {
    if (e.target.classList.contains('dropzone')) {
      e.preventDefault();
    }
  });

  // element.addEventListener('dragleave', e => {
  //   if (e.target.classList.contains('dropzone')) {
  //   }
  // });

  element.addEventListener('drop', e => {
    // console.log(dragtype);
    // console.log(e.target);
    const rowid = e.target.parentNode.getAttribute('id');
    addRowContent(rowid, dragtype);
    jquerySortable(rowid);
  });
});

// OPTIMIZE:Bazen form elementlerinin sortable ile yerini
//  değiştirdiğinde takılamlar oluşuyor ona çözüm bul.