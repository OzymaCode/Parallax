const parallax1 = document.getElementById('parallax1')

window.addEventListener('scroll', () => {
  let offset = window.pageYOffset
  parallax1.style.backgroundPositionY = -100 + offset * 0.05 + 'px'
})
