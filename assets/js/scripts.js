// DOM element
const draggables = document.querySelectorAll('.draggable');
const elements = document.querySelectorAll('.row-element');
// Local veriables
let dragtype;
// We move form elements with jQuery Sortable.
function jquerySortable(rowid) {
  const t = `#${rowid}`;
  // eslint-disable-next-line no-undef
  $(t).find('.row-content').sortable({
    placeholder: 'ui-state-highlight',
  });
  // eslint-disable-next-line no-undef
  $(t).find('.row-content').disableSelection();
}
// To drag form blocks in the sidebar
draggables.forEach(draggable => {
  draggable.addEventListener('dragstart', () => {
    dragtype = draggable.getAttribute('id');
  });

  draggable.addEventListener('dragend', () => {});
});
function getFormHtmlElement(rowid, formElementType) {
  const randomId = Math.floor(Math.random() * 1000000);
  if (formElementType === 'input') {
    return `
      <div class="input-group" >
        <div class="form-floating">
          <input type="text" class="form-control" id="${randomId}" placeholder="${randomId}">
          <label for="floatingInputGroup1" id="${randomId}-inputLabel">Input</label>
        </div>
        <span class="input-group-text cursor-pointer" onclick="editInput(${randomId},${rowid},'input')">
          <span class="material-symbols-outlined edit-icon">edit_note</span>
        </span>
        <span class="input-group-text cursor-pointer" onclick="deleteElement(this,${rowid})">
          <span class="material-symbols-outlined delete-icon">delete</span>
        </span>
        <span class="input-group-text move-span cursor-move" draggable="true">
          <span class="material-symbols-outlined move-icon">drag_indicator</span>
        </span>
      </div>
    `;
  }
  if (formElementType === 'textarea') {
    return `
      <div class="input-group" >
        <div class="form-floating">
          <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea" style="min-height: 120px"></textarea>
          <label for="floatingTextarea" id="${randomId}-textareaLabel">Textarea</label>
        </div>
        <span class="input-group-text cursor-pointer" onclick="editInput(${randomId},${rowid},'textarea')">
          <span class="material-symbols-outlined edit-icon">edit_note</span>
        </span>
        <span class="input-group-text cursor-pointer" onclick="deleteElement(this,${rowid})">
          <span class="material-symbols-outlined delete-icon">delete</span>
        </span>
        <span class="input-group-text move-span cursor-move" draggable="true">
          <span class="material-symbols-outlined move-icon">drag_indicator</span>
        </span>
      </div>
    `;
  }
  if (formElementType === 'selectlist') {
    return `
      <div class="input-group" >
        <div class="form-floating" id="${randomId}">
          <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
            <option value="" selected disabled hidden>Open this select menu</option>
            <option value="1" id="${randomId}-select1">Test</option>
            <option value="2" id="${randomId}-select2">Build</option>
            <option value="3" id="${randomId}-select3">Debug</option>
          </select>
          <label for="floatingSelect" id="${randomId}-listname">Select List Name</label>
        </div>
        <span class="input-group-text cursor-pointer" onclick="editInput(${randomId},${rowid},'selectlist')">
          <span class="material-symbols-outlined edit-icon">edit_note</span>
        </span>
        <span class="input-group-text cursor-pointer" onclick="deleteElement(this,${rowid})">
          <span class="material-symbols-outlined delete-icon">delete</span>
        </span>
        <span class="input-group-text move-span cursor-move" draggable="true">
          <span class="material-symbols-outlined move-icon">drag_indicator</span>
        </span>
      </div>
    `;
  }
  if (formElementType === 'checkbox') {
    return `
    <div class="input-group" >
      <div class="input-group-text">
        <input class="form-check-input mt-0" type="checkbox" aria-label="Checkbox for following text input">
      </div>
      <input type="text" class="form-control bg-white" aria-label="Did you drink water?" value="Did you drink water?" disabled id="${randomId}">
      <span class="input-group-text cursor-pointer" onclick="editInput(${randomId},${rowid},'checkbox')">
          <span class="material-symbols-outlined edit-icon">edit_note</span>
      </span>
      <span class="input-group-text cursor-pointer" onclick="deleteElement(this,${rowid})">
          <span class="material-symbols-outlined delete-icon">delete</span>
      </span>
      <span class="input-group-text move-span cursor-move" draggable="true">
          <span class="material-symbols-outlined move-icon">drag_indicator</span>
      </span>
    </div>
    `;
  }
  if (formElementType === 'boxgroup1') {
    return `
    <div class="input-group" >
      <div class="input-group-text">
        <input class="form-check-input mt-0" type="checkbox" aria-label="Checkbox for following text input">
      </div>
      <input type="text" class="form-control bg-white" aria-label="Did you drink water?" value="Did you drink water?" disabled id="${randomId}">
      <span class="input-group-text cursor-pointer" onclick="editInput(${randomId},${rowid},'checkbox')">
          <span class="material-symbols-outlined edit-icon">edit_note</span>
      </span>
      <span class="input-group-text cursor-pointer" onclick="deleteElement(this,${rowid})">
          <span class="material-symbols-outlined delete-icon">delete</span>
      </span>
      <span class="input-group-text move-span cursor-move" draggable="true">
          <span class="material-symbols-outlined move-icon">drag_indicator</span>
      </span>
    </div>
    <div class="input-group" >
        <div class="form-floating" id="${randomId}">
          <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
            <option value="" selected disabled hidden>Open this select menu</option>
            <option value="1" id="${randomId}-select1">Test</option>
            <option value="2" id="${randomId}-select2">Build</option>
            <option value="3" id="${randomId}-select3">Debug</option>
          </select>
          <label for="floatingSelect" id="${randomId}-listname">Select List Name</label>
        </div>
        <span class="input-group-text cursor-pointer" onclick="editInput(${randomId},${rowid},'selectlist')">
          <span class="material-symbols-outlined edit-icon">edit_note</span>
        </span>
        <span class="input-group-text cursor-pointer" onclick="deleteElement(this,${rowid})">
          <span class="material-symbols-outlined delete-icon">delete</span>
        </span>
        <span class="input-group-text move-span cursor-move" draggable="true">
          <span class="material-symbols-outlined move-icon">drag_indicator</span>
        </span>
      </div>
    `;
  }
  if (formElementType === 'boxgroup2') {
    return `
      <div class="input-group" >
        <div class="form-floating">
          <input type="text" class="form-control" id="${randomId}" placeholder="${randomId}">
          <label for="floatingInputGroup1" id="${randomId}-inputLabel">Input</label>
        </div>
        <span class="input-group-text cursor-pointer" onclick="editInput(${randomId},${rowid},'input')">
          <span class="material-symbols-outlined edit-icon">edit_note</span>
        </span>
        <span class="input-group-text cursor-pointer" onclick="deleteElement(this,${rowid})">
          <span class="material-symbols-outlined delete-icon">delete</span>
        </span>
        <span class="input-group-text move-span cursor-move" draggable="true">
          <span class="material-symbols-outlined move-icon" >drag_indicator</span>
        </span>
      </div>
      <div class="input-group" >
        <div class="form-floating">
          <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea" style="min-height: 120px"></textarea>
          <label for="floatingTextarea" id="${randomId}-textareaLabel">Textarea</label>
        </div>
        <span class="input-group-text cursor-pointer" onclick="editInput(${randomId},${rowid},'textarea')">
          <span class="material-symbols-outlined edit-icon">edit_note</span>
        </span>
        <span class="input-group-text cursor-pointer" onclick="deleteElement(this,${rowid})">
          <span class="material-symbols-outlined delete-icon">delete</span>
        </span>
        <span class="input-group-text move-span cursor-move" draggable="true">
          <span class="material-symbols-outlined move-icon">drag_indicator</span>
        </span>
      </div>
      <div class="input-group" >
        <div class="form-floating" id="${randomId}">
          <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
            <option value="" selected disabled hidden>Open this select menu</option>
            <option value="1" id="${randomId}-select1">Test</option>
            <option value="2" id="${randomId}-select2">Build</option>
            <option value="3" id="${randomId}-select3">Debug</option>
          </select>
          <label for="floatingSelect" id="${randomId}-listname">Select List Name</label>
        </div>
        <span class="input-group-text cursor-pointer" onclick="editInput(${randomId},${rowid},'selectlist')">
          <span class="material-symbols-outlined edit-icon">edit_note</span>
        </span>
        <span class="input-group-text cursor-pointer" onclick="deleteElement(this,${rowid})">
          <span class="material-symbols-outlined delete-icon">delete</span>
        </span>
        <span class="input-group-text move-span cursor-move" draggable="true">
          <span class="material-symbols-outlined move-icon">drag_indicator</span>
        </span>
      </div>
    `;
  }
  return '';
}
// Create a new line item for dragged form elements
function addRowContent(rowid, formElementType) {
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
// To place dragged form blocks into rows.
elements.forEach(element => {
  element.addEventListener('dragover', e => {
    if (e.target.classList.contains('dropzone')) {
      e.preventDefault();
      e.target.style.backgroundColor = '#98D8AA';
      e.target.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.3)';
    }
  });

  element.addEventListener('dragleave', e => {
    if (e.target.classList.contains('dropzone')) {
      e.preventDefault();
      e.target.style.backgroundColor = '';
      e.target.style.boxShadow = '';
    }
  });

  element.addEventListener('drop', e => {
    const rowid = e.target.parentNode.getAttribute('id');
    addRowContent(rowid, dragtype);
    jquerySortable(rowid);
    if (e.target.classList.contains('dropzone')) {
      e.target.style.backgroundColor = '';
      e.target.style.boxShadow = '';
    }
  });
});
// Clicking the Add Row button creates a new row.
document.getElementById('addRow').addEventListener('click', () => {
  const rowCount = document.querySelector('.main-content').children.length;
  const newId = `row${rowCount}`;
  const rowElement = `
    <div class="row-element d-flex flex-column gap-3 p-3 pb-5 rounded-3 mb-3" id="${newId}">
      <div class="row-element-header">
        <div class="d-flex flex-row justify-content-between align-items-center text-secondary">
          <h5>Row ${rowCount}</h5>
          <button class="btn btn-sm btn-danger d-flex flex-row align-items-center justify-content-center gap-1 disabled" onclick="clearRow(${newId})" id="${newId}-clearRowBtn"><span class="material-symbols-outlined">delete_sweep</span>All row delete</button>
        </div>
      </div>
      <div class="dropzone null flex-grow-1 w-100 p-0 p-md-2 p-xl-4 rounded-4 mx-auto">
        <div
          class="drag-info d-flex flex-column align-items-center justify-content-center row-gap-3 column-gap-1 pe-none text-secondary"
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
  // Assign event monitors to the newly added row. Step 1
  document.querySelector(`#${newId}`).addEventListener('dragover', e => {
    if (e.target.classList.contains('dropzone')) {
      e.preventDefault();
      e.target.style.backgroundColor = '#98D8AA';
      e.target.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.3)';
    }
  });
  // Assign event monitors to the newly added row. Step 2
  document.querySelector(`#${newId}`).addEventListener('dragleave', e => {
    if (e.target.classList.contains('dropzone')) {
      e.preventDefault();
      e.target.style.backgroundColor = '';
      e.target.style.boxShadow = '';
    }
  });
  // Assign event monitors to the newly added row. Step 3
  document.querySelector(`#${newId}`).addEventListener('drop', e => {
    const rowid = e.target.parentNode.getAttribute('id');
    addRowContent(rowid, dragtype);
    jquerySortable(rowid);
    if (e.target.classList.contains('dropzone')) {
      e.target.style.backgroundColor = '';
      e.target.style.boxShadow = '';
    }
  });
});
// Click the edit icon next to the form element and recreate the properties of the current element.
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
// Click on the edit icon next to the form element and
// open the modal window to edit the current element.
function editInput(id, rowid, type) {
  const modalFormElement = document.getElementById('modalFormElements');
  const chanceButton = document.getElementById('chanceButton');
  const modalTitle = document.getElementById('modalTitle');
  function modalOpen() {
    document.getElementById('modalOpenButton').click();
  }

  if (type === 'checkbox') {
    modalFormElement.innerHTML = `
    <div class="mb-3">
      <label for="newValue" class="col-form-label">Checkbox value :</label>
      <input type="text" class="form-control" id="newValue">
    </div>
    `;

    chanceButton.setAttribute('onclick', `editElement(${id},"${type}")`);
    modalTitle.textContent = `${
      rowid.querySelector('.row-element-header h5').textContent
    } > Edit Checkbox Value`;
    modalOpen();
  }
  if (type === 'selectlist') {
    modalFormElement.innerHTML = `
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
    chanceButton.setAttribute('onclick', `editElement(${id},"${type}")`);
    modalTitle.textContent = `${
      rowid.querySelector('.row-element-header h5').textContent
    } > Edit Selectlist Values`;
    modalOpen();
  }
  if (type === 'textarea') {
    modalFormElement.innerHTML = `
    <div class="mb-3">
      <label for="${id}-newTextareaLabel" class="col-form-label">Textarea Label :</label>
      <input type="text" class="form-control" id="${id}-newTextareaLabel">
    </div>
    `;
    chanceButton.setAttribute('onclick', `editElement(${id},"${type}")`);
    modalTitle.textContent = `${
      rowid.querySelector('.row-element-header h5').textContent
    } > Edit Textarea Label`;
    modalOpen();
  }
  if (type === 'input') {
    modalFormElement.innerHTML = `
    <div class="mb-3">
      <label for="${id}-newInputLabel" class="col-form-label">Input Label :</label>
      <input type="text" class="form-control" id="${id}-newInputLabel">
    </div>
    `;
    chanceButton.setAttribute('onclick', `editElement(${id},"${type}")`);
    modalTitle.textContent = `${
      rowid.querySelector('.row-element-header h5').textContent
    } > Edit Input Label`;
    modalOpen();
  }
}
// Delete the existing form element by clicking the delete icon next to the form element.
function deleteElement(thisElement, rowId) {
  const currentRowElement = rowId;
  thisElement.parentElement.remove();
  if (currentRowElement.querySelector('.dropzone .row-content').children.length === 0) {
    if (currentRowElement.getAttribute('id') === 'row1') {
      currentRowElement.querySelector('.dropzone .row-content').remove();
      currentRowElement.querySelector('.dropzone').classList.add('null');
      currentRowElement
        .querySelector('.dropzone .drag-info')
        .classList.replace('flex-row', 'flex-column');
      currentRowElement.querySelector('.dropzone .drag-info .drop-icon').style.animation =
        'dropzoneIconAnimated 2s infinite ease-in-out';
      if (
        !document
          .getElementById(`${currentRowElement.getAttribute('id')}-clearRowBtn`)
          .classList.contains('disabled')
      ) {
        document
          .getElementById(`${currentRowElement.getAttribute('id')}-clearRowBtn`)
          .classList.add('disabled');
      }
    } else currentRowElement.remove();
  }
}
// Click the delete all row button to clear the entire current row.
// Note: If the line number is not 1, it will completely remove the line.
function clearRow(rowId) {
  const currentRowElement = rowId;
  if (currentRowElement.getAttribute('id') === 'row1') {
    if (currentRowElement.querySelector('.dropzone .row-content')) {
      if (currentRowElement.querySelector('.dropzone .row-content').children.length > 0) {
        currentRowElement.querySelector('.dropzone .row-content').remove();
        currentRowElement.querySelector('.dropzone').classList.add('null');
        currentRowElement
          .querySelector('.dropzone .drag-info')
          .classList.replace('flex-row', 'flex-column');
        currentRowElement.querySelector('.dropzone .drag-info .drop-icon').style.animation =
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
// You can add form elements by clicking the + signs in the sidebar instead of drag and drop.
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
// You can open or close the menu by clicking the menu icon that appears in mobile and tablet view.
document.getElementById('menu-burger').addEventListener('click', () => {
  document.querySelector('.panel-body').classList.toggle('d-none');
  if (document.getElementById('menu-burger').textContent === 'menu') {
    document.getElementById('menu-burger').textContent = 'close';
  } else document.getElementById('menu-burger').textContent = 'menu';
});
// Since the scritp file type is module, it is necessary to define the functions in the window.
window.editInput = editInput;
window.editElement = editElement;
window.deleteElement = deleteElement;
window.clearRow = clearRow;
window.addFormElement = addFormElement;