document.addEventListener('DOMContentLoaded', () => {
    
    /* ==========================================================================
       1. LÓGICA DO CARROSSEL (HERO BANNER)
       ========================================================================== */
    const slides = document.querySelectorAll('.carousel-slide');
    
    // Verifica se existem slides na página antes de iniciar o carrossel
    if (slides.length > 0) {
        let currentSlide = 0;

        function nextSlide() {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        }

        // Troca de imagem a cada 4 segundos (4000ms)
        setInterval(nextSlide, 4000);
    }


    /* ==========================================================================
       2. LÓGICA DO MENU HAMBÚRGUER
       ========================================================================== */
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    // Verifica se os elementos do menu existem na página atual
    if (menuToggle && navMenu) {
        
        // Abre/Fecha o menu ao clicar no botão hambúrguer
        menuToggle.addEventListener('click', (event) => {
            event.stopPropagation(); // Impede que o clique propague para o document
            menuToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Fecha o menu automaticamente se o usuário clicar em algum link interno
        const menuLinks = document.querySelectorAll('.nav-menu a');
        menuLinks.forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });

        // MELHORIA DE UX: Fecha o menu automaticamente se clicar em qualquer lugar fora dele
        document.addEventListener('click', (event) => {
            const clicouDentroDoMenu = navMenu.contains(event.target);
            const clicouNoBotaoToggle = menuToggle.contains(event.target);
            
            // Se o menu estiver ativo e o clique foi fora do menu e fora do botão, ele fecha
            if (navMenu.classList.contains('active') && !clicouDentroDoMenu && !clicouNoBotaoToggle) {
                menuToggle.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }
});