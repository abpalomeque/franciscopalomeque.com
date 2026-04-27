// Filtros de categorías
const filterBtns = document.querySelectorAll('.filter-btn');
const posts = document.querySelectorAll('.post-card, .post-featured');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // Botón activo
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;

    posts.forEach(post => {
      if (filter === 'all' || post.dataset.category === filter) {
        post.classList.remove('hidden');
      } else {
        post.classList.add('hidden');
      }
    });
  });
});
