 const menuIcon = document.querySelector("#menu-icon");
      const navBar = document.querySelector(".navbar");

      menuIcon?.addEventListener("click", () => {
        navBar?.classList.toggle("active");
      });

      document.querySelectorAll(".navbar a").forEach((navLink) => {
        navLink.addEventListener("click", () => navBar?.classList.remove("active"));
      });

      const multipleTexts = document.querySelectorAll(".multiple-text");
      const textArray = ["Web Developer", "Frontend Developer", "UI/UX Designer", "Creative Coder"];
      let textIndex = 0;
      let charIndex = 0;
      let deleting = false;

      function typeWriter() {
        if (multipleTexts.length === 0) return;

        const currentText = textArray[textIndex];

        if (deleting) {
          charIndex--;
        } else {
          charIndex++;
        }

        const textToShow = currentText.slice(0, charIndex);
        multipleTexts.forEach((element) => {
          element.textContent = textToShow;
        });

        if (!deleting && charIndex === currentText.length) {
          deleting = true;
          setTimeout(typeWriter, 1500);
          return;
        }

        if (deleting && charIndex === 0) {
          deleting = false;
          textIndex = (textIndex + 1) % textArray.length;
        }

        setTimeout(typeWriter, deleting ? 100 : 150);
      }

      typeWriter();