export default function addRowElement() {
  const newRowCount = document.querySelector('.main-content').children.length;
  const rowElement = `
    <div class="row-element d-flex flex-column gap-3 p-3 rounded-3 mb-3" id="row${newRowCount}">
      <div class="row-element-header">
        <div class="d-flex flex-row justify-content-between align-items-center">
          <h5>Row ${newRowCount}</h5>
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
}