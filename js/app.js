const menuIcon = document.getElementById('menu-icon')
const navigation = document.getElementById('navigation')

navigation.style.maxHeight = '0px'
navigation.style.padding = '0px'

menuIcon.addEventListener('click', () => {
  if (navigation.style.maxHeight === '0px') {
    navigation.style.maxHeight = '123.75px'
    navigation.style.padding = '0.3em 1em'
  } else {
    navigation.style.maxHeight = '0px'
    navigation.style.padding = '0px'
  }
})
