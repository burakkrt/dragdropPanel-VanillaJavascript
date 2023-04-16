export default function getFormHtmlElement(formElementType) {
  if (formElementType === 'input') {
    return `
      <div class="input-group" draggable="true">
        <div class="form-floating">
          <input type="text" class="form-control" id="floatingInputGroup1" placeholder="Username">
          <label for="floatingInputGroup1">Input</label>
        </div>
        <span class="input-group-text cursor-move" id="basic-addon1">
          <span class="material-symbols-outlined">drag_indicator</span>
        </span>
      </div>
    `;
  }
  if (formElementType === 'textarea') {
    return `
      <div class="input-group" draggable="true">
        <div class="form-floating">
          <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea" style="min-height: 120px"></textarea>
          <label for="floatingTextarea">Textarea</label>
        </div>
        <span class="input-group-text cursor-move" id="basic-addon1">
          <span class="material-symbols-outlined">drag_indicator</span>
        </span>
      </div>
    `;
  }
  if (formElementType === 'selectlist') {
    return `
      <div class="input-group" draggable="true">
        <div class="form-floating">
          <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
            <option value="" selected disabled hidden>Open this select menu</option>
            <option value="1">Test</option>
            <option value="2">Build</option>
            <option value="3">Debug</option>
          </select>
          <label for="floatingSelect">Select List Name</label>
        </div>
        <span class="input-group-text cursor-move" id="basic-addon1">
          <span class="material-symbols-outlined">drag_indicator</span>
        </span>
      </div>
    `;
  }
  return '';
}