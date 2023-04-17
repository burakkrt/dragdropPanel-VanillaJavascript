// Import components
import getFormHtmlElement from './components/formElements.js';
// DOM element
const draggables = document.querySelectorAll('.draggable');
const elements = document.querySelectorAll('.row-element');

// Local veriables
let dragtype;

window.editInput = editInput;
window.editElement = editElement;
window.deleteElement = deleteElement;
window.clearRow = clearRow;
window.addFormElement = addFormElement;

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
      `<div class="row-content d-flex flex-column gap-3 gap-md-2 mb-3"> ${getFormHtmlElement(
        rowid,
        formElementType,
      )} </div>`,
    );
    dropzone.querySelector('.drag-info span').style.animation = '';
    dropzone.querySelector('.drag-info').classList.replace('flex-column', 'flex-row');
    dropzone.classList.remove('null');
    if (document.getElementById(`${rowid}-clearRowBtn`).classList.contains('disabled')) {
      document.getElementById(`${rowid}-clearRowBtn`).classList.remove('disabled');
    }
  } else {
    dropzone
      .querySelector('.row-content')
      .insertAdjacentHTML('beforeend', getFormHtmlElement(rowid, formElementType));
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
          <button class="btn btn-sm btn-danger d-flex flex-row align-items-center justify-content-center gap-1 disabled" onclick="clearRow(${newId})" id="${newId}-clearRowBtn"><span class="material-symbols-outlined">delete_sweep</span>All row delete</button>
        </div>
      </div>
      <div class="dropzone null flex-grow-1 w-75 p-4 rounded-4 mx-auto">
        <div
          class="drag-info d-flex flex-column align-items-center justify-content-center row-gap-3 column-gap-1 pe-none"
        >
          <span
            class="drop-icon material-symbols-outlined"
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

function editElement(id, type) {
  function closeModal() {
    document.getElementById('closeModalButton').click();
  }
  if (type === 'checkbox') {
    const newValue = document.getElementById('newValue');
    if (newValue.value !== '') {
      document.getElementById(id).value = newValue.value;
      closeModal();
    } else if (!newValue.classList.contains('is-invalid')) {
      newValue.classList.add('is-invalid');
    }
  }
  if (type === 'selectlist') {
    if (document.getElementById(`${id}-newListname`).value !== '') {
      document.getElementById(`${id}-listname`).textContent = document.getElementById(
        `${id}-newListname`,
      ).value;
    }
    if (document.getElementById(`${id}-newSelect1`).value !== '') {
      document.getElementById(`${id}-select1`).textContent = document.getElementById(
        `${id}-newSelect1`,
      ).value;
      document.getElementById(`${id}-select1`).value = document.getElementById(
        `${id}-newSelect1`,
      ).value;
    }
    if (document.getElementById(`${id}-newSelect2`).value !== '') {
      document.getElementById(`${id}-select2`).textContent = document.getElementById(
        `${id}-newSelect2`,
      ).value;
      document.getElementById(`${id}-select2`).value = document.getElementById(
        `${id}-newSelect2`,
      ).value;
    }
    if (document.getElementById(`${id}-newSelect3`).value !== '') {
      document.getElementById(`${id}-select3`).textContent = document.getElementById(
        `${id}-newSelect3`,
      ).value;
      document.getElementById(`${id}-select3`).value = document.getElementById(
        `${id}-newSelect3`,
      ).value;
    }
    closeModal();
  }
  if (type === 'textarea') {
    if (document.getElementById(`${id}-newTextareaLabel`).value !== '') {
      document.getElementById(`${id}-textareaLabel`).textContent = document.getElementById(
        `${id}-newTextareaLabel`,
      ).value;
      closeModal();
    } else if (
      !document.getElementById(`${id}-newTextareaLabel`).classList.contains('is-invalid')
    ) {
      document.getElementById(`${id}-newTextareaLabel`).classList.add('is-invalid');
    }
  }
  if (type === 'input') {
    if (document.getElementById(`${id}-newInputLabel`).value !== '') {
      document.getElementById(`${id}-inputLabel`).textContent = document.getElementById(
        `${id}-newInputLabel`,
      ).value;
      closeModal();
    } else if (!document.getElementById(`${id}-newInputLabel`).classList.contains('is-invalid')) {
      document.getElementById(`${id}-newInputLabel`).classList.add('is-invalid');
    }
  }
}

export function editInput(id, rowid, type) {
  const modalFormElement = document.getElementById('modalFormElements');
  const chanceButton = document.getElementById('chanceButton');
  const modalTitle = document.getElementById('modalTitle');
  function modalOpen() {
    document.getElementById('modalOpenButton').click();
  }

  if (type === 'checkbox') {
    const modalElements = `
    <div class="mb-3">
      <label for="newValue" class="col-form-label">Checkbox value :</label>
      <input type="text" class="form-control" id="newValue">
    </div>
    `;
    modalFormElement.innerHTML = modalElements;

    chanceButton.setAttribute('onclick', `editElement(${id},"${type}")`);
    modalTitle.textContent = `${
      rowid.querySelector('.row-element-header h5').textContent
    } > Edit Checkbox Value`;
    modalOpen();
  }
  if (type === 'selectlist') {
    const modalElements = `
    <div class="mb-3">
      <label for="${id}-newListname" class="col-form-label">Selectlist Name :</label>
      <input type="text" class="form-control" id="${id}-newListname">
    </div>
    <div class="mb-3">
      <label for="${id}-newSelect1" class="col-form-label">- Select Item 1 :</label>
      <input type="text" class="form-control" id="${id}-newSelect1">
    </div>
    <div class="mb-3">
      <label for="${id}-newSelect2" class="col-form-label">- Select Item 2 :</label>
      <input type="text" class="form-control" id="${id}-newSelect2">
    </div>
    <div class="mb-3">
      <label for="${id}-newSelect3" class="col-form-label">- Select Item 3 :</label>
      <input type="text" class="form-control" id="${id}-newSelect3">
    </div>
    `;
    modalFormElement.innerHTML = modalElements;
    chanceButton.setAttribute('onclick', `editElement(${id},"${type}")`);
    modalTitle.textContent = `${
      rowid.querySelector('.row-element-header h5').textContent
    } > Edit Selectlist Values`;
    modalOpen();
  }
  if (type === 'textarea') {
    const modalElements = `
    <div class="mb-3">
      <label for="${id}-newTextareaLabel" class="col-form-label">Textarea Label :</label>
      <input type="text" class="form-control" id="${id}-newTextareaLabel">
    </div>
    `;
    modalFormElement.innerHTML = modalElements;
    chanceButton.setAttribute('onclick', `editElement(${id},"${type}")`);
    modalTitle.textContent = `${
      rowid.querySelector('.row-element-header h5').textContent
    } > Edit Textarea Label`;
    modalOpen();
  }
  if (type === 'input') {
    const modalElements = `
    <div class="mb-3">
      <label for="${id}-newInputLabel" class="col-form-label">Input Label :</label>
      <input type="text" class="form-control" id="${id}-newInputLabel">
    </div>
    `;
    modalFormElement.innerHTML = modalElements;
    chanceButton.setAttribute('onclick', `editElement(${id},"${type}")`);
    modalTitle.textContent = `${
      rowid.querySelector('.row-element-header h5').textContent
    } > Edit Input Label`;
    modalOpen();
  }
}

export function deleteElement(thisElement, rowId) {
  thisElement.parentElement.remove();
  if (rowId.querySelector('.dropzone .row-content').children.length === 0) {
    if (rowId.getAttribute('id') === 'row1') {
      rowId.querySelector('.dropzone .row-content').remove();
      rowId.querySelector('.dropzone').classList.add('null');
      rowId.querySelector('.dropzone .drag-info').classList.replace('flex-row', 'flex-column');
      rowId.querySelector('.dropzone .drag-info .drop-icon').style.animation =
        'dropzoneIconAnimated 2s infinite ease-in-out';
      if (
        !document
          .getElementById(`${rowId.getAttribute('id')}-clearRowBtn`)
          .classList.contains('disabled')
      ) {
        document
          .getElementById(`${rowId.getAttribute('id')}-clearRowBtn`)
          .classList.add('disabled');
      }
    } else rowId.remove();
  }
}

function clearRow(rowId) {
  if (rowId.getAttribute('id') === 'row1') {
    if (rowId.querySelector('.dropzone .row-content')) {
      if (rowId.querySelector('.dropzone .row-content').children.length > 0) {
        rowId.querySelector('.dropzone .row-content').remove();
        rowId.querySelector('.dropzone').classList.add('null');
        rowId.querySelector('.dropzone .drag-info').classList.replace('flex-row', 'flex-column');
        rowId.querySelector('.dropzone .drag-info .drop-icon').style.animation =
          'dropzoneIconAnimated 2s infinite ease-in-out';
        if (
          !document
            .getElementById(`${rowId.getAttribute('id')}-clearRowBtn`)
            .classList.contains('disabled')
        ) {
          document
            .getElementById(`${rowId.getAttribute('id')}-clearRowBtn`)
            .classList.add('disabled');
        }
      }
    }
  } else rowId.remove();
}

function addFormElement(type) {
  if (document.querySelector('.main-content').children.length <= 2) {
    addRowContent('row1', type);
    jquerySortable('row1');
    if (document.getElementById('menu-burger')) {
      document.getElementById('menu-burger').click();
    }
  }
  if (document.querySelector('.main-content').children.length > 2) {
    const row =
      document.querySelector('.main-content').children[
        document.querySelector('.main-content').children.length - 2
      ];
    const rowId = row.getAttribute('id');
    addRowContent(rowId, type);
    jquerySortable(rowId);
    if (document.getElementById('menu-burger')) {
      document.getElementById('menu-burger').click();
    }
  }
}

document.getElementById('menu-burger').addEventListener('click', () => {
  document.querySelector('.panel-body').classList.toggle('d-none');
  if (document.getElementById('menu-burger').textContent === 'menu') {
    document.getElementById('menu-burger').textContent = 'close';
  } else document.getElementById('menu-burger').textContent = 'menu';
});

// OPTIMIZE:Bazen form elementlerinin sortable ile yerini
//  değiştirdiğinde takılamlar oluşuyor ona çözüm bul.

// TODO: formElement lerdeki id leri ayarla.

// TODO: html 'deki modal 'ın içeriği temizlenecek (idler ve bootsttrapdan kalanlar)