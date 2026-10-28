import Navbareffect from "../Navbareffect/NavbarEffect";
import Skills from "../sections/Skills";
import Resume from "../sections/Resume";
import Contact from "../sections/Contact";
import Work from "../sections/Work";
import Testimonials from "../sections/Testimonials";
import Services from "../sections/Services";

const RouterLayout = () => {
  return (
    <>
      <Navbareffect />

      <main className="pt-16">
        <section id="services" className="min-h-screen scroll-mt-16">
          <Services />
        </section>
        <section id="work" className="min-h-screen scroll-mt-16">
          <Work />
        </section>
        <section id="resume" className="scroll-mt-16">
          <Resume />
        </section>
        <section id="skills" className="min-h-screen scroll-mt-16">
          <Skills />
        </section>
        <section id="testimonials" className="min-h-screen scroll-mt-16">
          <Testimonials />
        </section>

        <section id="contact" className="scroll-mt-16">
          <Contact />
        </section>
      </main>
    </>
  );
};

export default RouterLayout;
