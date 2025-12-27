<template>
  <header class="header" :class="{ 'scrolled': isScrolled }">
    <div class="container">
      <div class="header-content">
        <div class="logo">
          <NuxtLink to="/" style="text-decoration: none; color: inherit;">
            <h1>LashNK</h1>
          </NuxtLink>
        </div>
        <nav class="nav" :class="{ active: isMenuOpen }">
          <NuxtLink to="/brows-lamination/" class="nav-link" @click="closeMenu">Брови и ламинирование</NuxtLink>
          <a href="#about" class="nav-link" @click="handleNavClick">О нас</a>
          <a href="#services" class="nav-link" @click="handleNavClick">Услуги</a>
          <a href="#reviews" class="nav-link" @click="handleNavClick">Отзывы</a>
          <a href="#contact" class="nav-link" @click="handleNavClick">Контакты</a>
        </nav>
        <button class="menu-toggle" :class="{ active: isMenuOpen }" @click="toggleMenu" aria-label="Меню">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const isMenuOpen = ref(false)
const isScrolled = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}

const handleNavClick = (e: Event) => {
  closeMenu()
  const target = e.currentTarget as HTMLAnchorElement
  const href = target.getAttribute('href')
  if (href && href.startsWith('#')) {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      const headerOffset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }
}

onMounted(() => {
  const handleScroll = () => {
    isScrolled.value = window.pageYOffset > 100
  }
  window.addEventListener('scroll', handleScroll)
  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })
})
</script>

<style scoped>
.header {
  background: var(--white);
  box-shadow: var(--shadow);
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  transition: all 0.3s ease;
}

.header.scrolled {
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.15);
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
}

.logo h1 {
  font-size: 2rem;
  color: var(--primary-color);
  font-weight: 700;
  letter-spacing: 2px;
}

.nav {
  display: flex;
  gap: 2rem;
}

.nav-link {
  text-decoration: none;
  color: var(--text-color);
  font-weight: 500;
  transition: color 0.3s ease;
  position: relative;
}

.nav-link:hover {
  color: var(--primary-color);
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--primary-color);
  transition: width 0.3s ease;
}

.nav-link:hover::after {
  width: 100%;
}

.menu-toggle {
  display: none;
  flex-direction: column;
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px;
}

.menu-toggle span {
  width: 25px;
  height: 3px;
  background: var(--dark-color);
  margin: 3px 0;
  transition: 0.3s;
}

@media (max-width: 768px) {
  .nav {
    position: fixed;
    top: 70px;
    left: -100%;
    width: 100%;
    height: calc(100vh - 70px);
    background: var(--white);
    flex-direction: column;
    padding: 2rem;
    transition: left 0.3s ease;
    box-shadow: var(--shadow);
  }

  .nav.active {
    left: 0;
  }

  .menu-toggle {
    display: flex;
  }

  .menu-toggle.active span:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
  }

  .menu-toggle.active span:nth-child(2) {
    opacity: 0;
  }

  .menu-toggle.active span:nth-child(3) {
    transform: rotate(-45deg) translate(7px, -6px);
  }
}
</style>

