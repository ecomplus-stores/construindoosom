// Add your custom JavaScript for storefront pages here.
if (window.innerWidth < 991) {
  const menuList = document.querySelectorAll('.menu__list a')
  const position = menuList.length
  const newList = '<a href="https://loja.construindoosom.com.br/pages/sobre-nos" class="menu__item"><span>Sobre nós</span></a>'
  menuList[position - 1].after(newList)
}
