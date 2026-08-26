// 스크롤 위치에 따른 플로팅 내비게이션 활성화
document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section, .hero');
  const navDots = document.querySelectorAll('.floating-nav a');

  window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      if (window.scrollY >= sectionTop - 150) {
        current = section.getAttribute('id') || 'hero';
      }
    });

    navDots.forEach(dot => {
      dot.classList.remove('active');
      if (dot.getAttribute('href').includes(current)) {
        dot.classList.add('active');
      }
    });
  });
});