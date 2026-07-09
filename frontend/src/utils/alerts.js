import Swal from "sweetalert2";

const DELETE_TASK_TEMPLATE_ID = "delete-task-template";

function ensureDeleteTaskTemplate() {
  if (document.getElementById(DELETE_TASK_TEMPLATE_ID)) {
    return;
  }

  const template = document.createElement("template");
  template.id = DELETE_TASK_TEMPLATE_ID;
  template.innerHTML = `
    <swal-title>¿Deseas eliminar esta tarea?</swal-title>
    <swal-html>Esta accion no se puede deshacer.</swal-html>
    <swal-icon type="warning" color="red"></swal-icon>
    <swal-button type="confirm">Eliminar</swal-button>
    <swal-button type="cancel">Cancelar</swal-button>
    <swal-param name="allowEscapeKey" value="false" />
    <swal-param name="customClass" value='{ "popup": "my-popup" }' />
  `;

  document.body.appendChild(template);
}

export async function confirmDeleteTask(taskTitle) {
  ensureDeleteTaskTemplate();

  const template = document.getElementById(DELETE_TASK_TEMPLATE_ID);
  const titleEl = template.content.querySelector("swal-title");

  if (titleEl) {
    titleEl.textContent = `¿Deseas eliminar "${taskTitle}"?`;
  }

  const result = await Swal.fire({ template: `#${DELETE_TASK_TEMPLATE_ID}` });
  return result.isConfirmed;
}

export async function confirmDeleteUser(account) {
  ensureDeleteTaskTemplate();

  const template = document.getElementById(DELETE_TASK_TEMPLATE_ID);
  const titleEl = template.content.querySelector("swal-title");

  if (titleEl) {
    titleEl.textContent = `¿Deseas eliminar ${account}?`;
  }

  const result = await Swal.fire({ template: `#${DELETE_TASK_TEMPLATE_ID}` });
  return result.isConfirmed;
}

export function success(message) {
  Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  }).fire({
    icon: "success",
    title: message,
  });
}

export function showError(message) {
  Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  }).fire({
    icon: "error",
    title: message,
  });
}