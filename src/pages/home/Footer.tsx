import React from "react";

const Footer = () => {
  return (
    <section className="w-full max-w-6xl py-8 text-sm flex justify-between items-center flex-col md:flex-row text-primary/50">
      <p>Mikołaj Chlasta © 2026</p>
      <div className="flex gap-5">
        <a href="">Tiktok</a>
        <a href="">Youtube</a>
        <a href="">Github</a>
        <a href="">Linkedin</a>
        <a href="">Email</a>
      </div>
    </section>
  );
};

export default Footer;
