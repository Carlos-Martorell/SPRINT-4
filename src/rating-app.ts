

let selectedScore: number | null = null;

// Función para inicializar los escuchadores de eventos en los iconos de valoración
export function setupRatingLogic(): void {
    const ratingContainer = document.getElementById('rating-container');
    const ratingIcons = ratingContainer?.querySelectorAll('.rating-icon');

    ratingIcons?.forEach(icon => {
        icon.addEventListener('click', (event) => {

            const target = event.currentTarget as HTMLElement;
            const score = target.dataset.score;

            if (score) {
                selectedScore = parseInt(score);

                // Lógica visual: remueve la clase 'selected' de todos y la añade al clicado
                ratingIcons.forEach(i => i.classList.remove('selected'));
                target.classList.add('selected');
            }
        });
    });
}

// Función para obtener la puntuación seleccionada
export function getSelectedScore(): number | null {
    return selectedScore;
}