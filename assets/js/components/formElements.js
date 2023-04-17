import { deleteElement, editInput } from '../scripts.js';

export default function getFormHtmlElement(rowid, formElementType) {
  const randomId = Math.floor(Math.random() * 1000000);
  if (formElementType === 'input') {
    return `
      <div class="input-group" >
        <div class="form-floating">
          <input type="text" class="form-control" id="${randomId}" placeholder="${randomId}">
          <label for="floatingInputGroup1" id="${randomId}-inputLabel">Input</label>
        </div>
        <span class="input-group-text cursor-pointer" onclick="editInput(${randomId},${rowid},'input')">
          <span class="material-symbols-outlined">edit_note</span>
        </span>
        <span class="input-group-text cursor-pointer" onclick="deleteElement(this,${rowid})">
          <span class="material-symbols-outlined">delete</span>
        </span>
        <span class="input-group-text cursor-move" draggable="true">
          <span class="material-symbols-outlined" >drag_indicator</span>
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
          <span class="material-symbols-outlined">edit_note</span>
        </span>
        <span class="input-group-text cursor-pointer" onclick="deleteElement(this,${rowid})">
          <span class="material-symbols-outlined">delete</span>
        </span>
        <span class="input-group-text cursor-move" draggable="true">
          <span class="material-symbols-outlined">drag_indicator</span>
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
          <span class="material-symbols-outlined">edit_note</span>
        </span>
        <span class="input-group-text cursor-pointer" onclick="deleteElement(this,${rowid})">
          <span class="material-symbols-outlined">delete</span>
        </span>
        <span class="input-group-text cursor-move" draggable="true">
          <span class="material-symbols-outlined">drag_indicator</span>
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
          <span class="material-symbols-outlined">edit_note</span>
      </span>
      <span class="input-group-text cursor-pointer" onclick="deleteElement(this,${rowid})">
          <span class="material-symbols-outlined">delete</span>
      </span>
      <span class="input-group-text cursor-move" draggable="true">
          <span class="material-symbols-outlined">drag_indicator</span>
      </span>
    </div>
    `;
  }
  return '';
}