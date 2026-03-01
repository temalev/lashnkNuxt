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
  color: rgba(255,255,255,0.7);
  padding: 3rem 0 1rem;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.footer-info h3 {
  color: var(--white);
  margin-bottom: 1rem;
  font-size: 1.3rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  font-weight: 700;
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
  color: rgba(255,255,255,0.5);
  text-decoration: none;
  font-size: 0.8rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  transition: color 0.3s ease;
}

.social-link:hover {
  color: var(--white);
}

.footer-bottom {
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid rgba(255,255,255,0.08);
  color: rgba(255,255,255,0.3);
  font-size: 0.8rem;
  letter-spacing: 0.05em;
}

.sign-up {
  position: fixed;
  bottom: 40px;
  right: 40px;
  border-radius: 4px;
  background-color: var(--dark-color);
  color: var(--white);
  font-size: 0.65rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  text-decoration: none;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 14px 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 20px rgba(26, 24, 22, 0.25);
}

.sign-up:hover {
  background-color: var(--secondary-color);
  transform: translateY(-2px);
  box-shadow: 0 8px 28px rgba(26, 24, 22, 0.3);
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
    right: 16px;
    font-size: 0.6rem;
    padding: 12px 18px;
  }
}
</style>

