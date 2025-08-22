function ContactPage() {
  return (
    <main>
      <section className="contact-page">
        <h2>📬 Me Contacter</h2>
        <p>N’hésitez pas à me joindre via les plateformes suivantes :</p>

        <div className="contact-grid">
          <div className="contact-card">
            <h3>Email</h3>
            <a href="mailto:esteban.barbosa.2001@gmail.com">
              esteban.barbosa.2001@gmail.com
            </a>
          </div>

          <div className="contact-card">
            <h3>LinkedIn</h3>
            <a
              href="https://linkedin.com/in/ton-profil"
              target="_blank"
              rel="noreferrer"
            >
              Voir mon LinkedIn
            </a>
          </div>

          <div className="contact-card">
            <h3>GitHub</h3>
            <a
              href="https://github.com/Esteban-Pixel02"
              target="_blank"
              rel="noreferrer"
            >
              Voir mes projets
            </a>
          </div>
        </div>
      </section>

      
      <div className="contact-cta">
        <h3>🚀 Prêt à collaborer ?</h3>
        <p>Envoyez-moi un message, je serai ravi d’échanger avec vous !</p>
      </div>
    </main>
  );
}

export default ContactPage;
