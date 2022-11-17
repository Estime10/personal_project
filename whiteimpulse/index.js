var nav = document.getElementById('nav');
var navlinks = nav.getElementsByTagName('a');
function toggleNav() {
(nav.classList.contains('active')) ? nav.classList.remove('active') : nav.classList.add('active');
}
document.getElementById('nav-icon').addEventListener('click', function(e) {
    e.preventDefault();
    toggleNav();
});