<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-info">
          <h3>LashNK</h3>
          <p>Профессиональное наращивание ресниц</p>
        </div>
        <div class="footer-social">
          <p>Мы в соцсетях:</p>
          <div class="social-links">
            <a href="https://www.instagram.com/lashnk.rzn?igsh=MW0yMnU0OGtzNGs3cQ==" target="_blank" class="social-link">Instagram</a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; {{ new Date().getFullYear() }} LashNK. Все права защищены.</p>
      </div>
    </div>
  </footer>
  <a href="https://dikidi.net/1538714" target="_blank" class="sign-up">Записаться</a>
</template>

<style scoped>
.footer {
  background: var(--dark-color);
  color: var(--white);
  padding: 3rem 0 1rem;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.footer-info h3 {
  color: var(--primary-color);
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

.footer-contact a {
  color: var(--primary-color);
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-contact a:hover {
  color: var(--white);
}

.social-links {
  display: flex;
  gap: 1rem;
  margin-top: 0.5rem;
}

.social-link {
  color: var(--primary-color);
  text-decoration: none;
  transition: color 0.3s ease;
}

.social-link:hover {
  color: var(--white);
}

.footer-bottom {
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid #444;
  color: #aaa;
}

.sign-up {
  position: fixed;
  bottom: 50px;
  right: 50px;
  border-radius: 50%;
  background-color: var(--primary-color);
  color: var(--white);
  font-size: .8rem;
  font-weight: 600;
  text-decoration: none;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  height: 100px;
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.sign-up:hover {
  transform: scale(1.1);
  box-shadow: var(--shadow-hover);
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .social-links {
    justify-content: center;
  }
  
  .sign-up {
    bottom: 20px;
    right: 20px;
    height: 80px;
    width: 80px;
    font-size: .6rem;
  }
}
</style>

