// Import components
import getFormHtmlElement from './components/formElements.js';
// DOM element
const draggables = document.querySelectorAll('.draggable');
const elements = document.querySelectorAll('.row-element');

// Local veriables
let dragtype;

export function jquerySortable(rowid) {
  $(`#${rowid} .row-content`).sortable({
    placeholder: 'ui-state-highlight',
  });
  $(`#${rowid} .row-content`).disableSelection();
}

export function addRowContent(rowid, formElementType) {
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

  element.addEventListener('drop', e => {
    const rowid = e.target.parentNode.getAttribute('id');
    addRowContent(rowid, dragtype);
    jquerySortable(rowid);
  });
});

document.getElementById('addRow').addEventListener('click', () => {
  const rowCount = document.querySelector('.main-content').children.length;
  const newId = `row${rowCount}`;
  const rowElement = `
    <div class="row-element d-flex flex-column gap-3 p-3 rounded-3 mb-3" id="${newId}">
      <div class="row-element-header">
        <div class="d-flex flex-row justify-content-between align-items-center">
          <h5>Row ${rowCount}</h5>
          <h5>Buttons</h5>
        </div>
      </div>
      <div class="dropzone null flex-grow-1 w-75 p-4 rounded-4 mx-auto">
        <div
          class="drag-info d-flex flex-column align-items-center justify-content-center row-gap-3 column-gap-1 pe-none"
        >
          <span
            class="dropicon material-symbols-outlined"
            style="font-size: 32px; animation: dropzoneIconAnimated 2s infinite ease-in-out"
          >
            pin_drop
          </span>
          <span>Drag and drop the element you want to add.</span>
        </div>
      </div>
    </div>
  `;
  document
    .querySelector('.main-content')
    .lastElementChild.insertAdjacentHTML('beforebegin', rowElement);

  document.querySelector(`#${newId}`).addEventListener('dragover', e => {
    if (e.target.classList.contains('dropzone')) {
      e.preventDefault();
    }
  });

  document.querySelector(`#${newId}`).addEventListener('drop', () => {
    addRowContent(`${newId}`, dragtype);
    jquerySortable(`${newId}`);
  });
});

// OPTIMIZE:Bazen form elementlerinin sortable ile yerini
//  değiştirdiğinde takılamlar oluşuyor ona çözüm bul.