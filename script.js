document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("dynamicModal");
    const openModalBtn = document.getElementById("openModalBtn");
    const closeBtn = document.getElementById("closeBtn");
    const modalBody = document.getElementById("modalBody");

    const loginFormContent = `
        <h2 class="modal__title">Войти в систему</h2>
        <form>
            <input type="text" id="mail" placeholder="Email/Телефон" required>
            <input type="password" id="password" placeholder="Пароль" required>
            <div class="checkbox-container">
                <input type="checkbox" id="rememberMe">
                <label for="rememberMe">Запомнить пароль</label>
            </div>
            <a href="#" class="restore">Восстановить</a>
            <button type="submit">Войти</button>
            <button type="button" class="register">Зарегистрироваться</button>
        </form>
    `;

    openModalBtn.onclick = function () {
        modalBody.innerHTML = loginFormContent;
        modal.style.display = "flex";
    };

    closeBtn.onclick = function () {
        modal.style.display = "none";
    };

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };

    modalBody.addEventListener("submit", function (event) {
        event.preventDefault();

        const emailOrPhone = document.getElementById('mail').value;
        const password = document.getElementById('password').value;

        console.log("Войти:");
        console.log("Email/Телефон:", emailOrPhone);
        console.log("Пароль:", password);

        document.getElementById('mail').value = '';
        document.getElementById('password').value = '';

        modal.style.display = "none";
    });

    modalBody.addEventListener("click", function (event) {
        if (event.target.classList.contains('register')) {
            const emailOrPhone = document.getElementById('mail').value;
            const password = document.getElementById('password').value;

            console.log("Зарегистрироваться:");
            console.log("Email/Телефон:", emailOrPhone);
            console.log("Пароль:", password);

            document.getElementById('mail').value = '';
            document.getElementById('password').value = '';

            modal.style.display = "none";
        }
    });
});
