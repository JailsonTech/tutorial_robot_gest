
    function adjustVideoSize() {
        if (window.innerHeight < window.innerWidth) {
            document.querySelector('.wistia_responsive_wrapper').style.width = '100vw';
            document.querySelector('.wistia_responsive_wrapper').style.height = '100vh';
        } else {
            document.querySelector('.wistia_responsive_wrapper').style.width = '';
            document.querySelector('.wistia_responsive_wrapper').style.height = '';
        }
    }

    // Adiciona um listener para detectar mudanças de orientação
    window.addEventListener('resize', adjustVideoSize);
    window.addEventListener('orientationchange', adjustVideoSize);

    // Chama a função ao carregar a página
    window.addEventListener('load', adjustVideoSize);
