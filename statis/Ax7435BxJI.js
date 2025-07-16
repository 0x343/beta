document.addEventListener("DOMContentLoaded", () => {
    const tasks = document.querySelectorAll(".task");

    tasks.forEach(task => {
      const taskId = task.getAttribute("data-task");
      const isCompleted = localStorage.getItem(taskId);

      if (isCompleted === "done") {
        task.querySelector("button:nth-of-type(1)").style.display = "none";
        task.querySelector("button:nth-of-type(2)").style.display = "none";
        task.querySelector("input[type='checkbox']").style.display = "none";
        task.querySelector(".checkmark").style.display = "inline-block";
      }
    });
  });

  function openLinkThenVerify(btn, url) {
    window.open(url, '_blank');
    btn.style.display = 'none';
    const verifyBtn = btn.nextElementSibling;
    verifyBtn.style.display = 'inline-block';
  }

  function showCheckbox(btn) {
    btn.style.display = 'none';
    const checkbox = btn.nextElementSibling;
    checkbox.style.display = 'inline-block';
  }

  function completeTask(checkbox) {
    const taskDiv = checkbox.closest(".task");
    const taskId = taskDiv.getAttribute("data-task");
    const checkmark = checkbox.nextElementSibling;

    if (checkbox.checked) {
      checkbox.style.display = "none";
      checkmark.style.display = "inline-block";
      localStorage.setItem(taskId, "done");
    }
  }
