// script.js

document.addEventListener("DOMContentLoaded", () => {
    const projects = document.querySelectorAll(".project");
  
    projects.forEach((project, index) => {
      project.style.transition = `transform 0.5s ease ${index * 0.2}s`;
      project.addEventListener("mouseover", () => {
        project.style.transform = "scale(1.05)";
      });
      project.addEventListener("mouseout", () => {
        project.style.transform = "scale(1)";
      });
    });
  });document.addEventListener('DOMContentLoaded', function () {
    // Cibler la section de projet qui contient la vidéo
    const project = document.querySelector('.project');
    const projectVideo = project.querySelector('.project-video');

    // Événement pour arrêter la vidéo lorsque la souris quitte la section du projet
    project.addEventListener('mouseleave', function () {
        // Vérifie si la vidéo est en lecture et l'arrête
        if (projectVideo && !projectVideo.paused) {
            projectVideo.pause();
        }
    });

    // Événement pour reprendre la vidéo lorsqu'on entre dans la section
    project.addEventListener('mouseenter', function () {
        // Vérifie si la vidéo est en pause et la lance
        if (projectVideo && projectVideo.paused) {
            projectVideo.play();
        }
    });
});

  