import Footer from './Footer';
import asd3 from "../assets/asd3.jpg";
import asd1 from "../assets/asd1.png";
import asd5 from "../assets/5.jpg";
import asd4 from "../assets/asd.4.avif";
import "../styles/about.css";

const AboutASD = () => (
  <div>
    <div className="about_container">
      <section className="about-section">
        <div className="about_content">
          <h2 className="introh2" style={{ textAlign: 'left', color: 'black' }}>Introduction to ASD:</h2>
          <p className="intropara">
            Autism Spectrum Disorder (ASD) is a complex neurodevelopmental
            condition that manifests in early childhood and persists throughout
            one's lifetime. It is characterized by difficulties in social
            interaction, communication challenges, and restricted, repetitive
            patterns of behavior, interests, or activities. Individuals with ASD
            may exhibit a wide range of symptoms and abilities, which is why it is
            referred to as a "spectrum" disorder. While some individuals with ASD
            may require significant support in their daily lives, others may
            function relatively independently. ASD affects people of all ethnic,
            racial, and socioeconomic backgrounds, with prevalence rates
            continuing to rise globally. Early detection and intervention are
            crucial for optimizing outcomes and improving quality of life for
            individuals with ASD and their families.
          </p>
        </div>
        <div className="about-image">
          <img src={asd3} alt="Autistic Child" />
        </div>
      </section>
      <section className="about-section">
        <div className="about-image" style={{ marginRight: '120px' }}>
          <img src={asd1} alt="Autistic Child" />
        </div>
        <div className="about_content">
          <h2 style={{ textAlign: 'left', marginLeft: '50px', color: 'black' }}>Symptoms and Challenges:</h2>
          <p style={{ marginLeft: '50px' }}>
            The symptoms of ASD vary widely among individuals but typically
            include difficulties in understanding and interpreting social cues,
            such as facial expressions, tone of voice, and gestures. Many
            individuals with ASD struggle with nonverbal communication and may
            find it challenging to initiate or maintain conversations.
            Additionally, they may engage in repetitive behaviors, such as
            hand-flapping, rocking, or repeating phrases (echolalia). Sensory
            sensitivities are also common among individuals with ASD, with certain
            sounds, textures, or lights causing distress or discomfort. These
            challenges can significantly impact daily functioning,
            academic achievement, and social relationships, leading to increased
            stress for individuals with ASD and their families.
          </p>
        </div>
      </section>
      <section className="about-section">
        <div className="about_content">
          <h2 style={{ textAlign: 'left', color: 'black' }}>Causes and Risk Factors:</h2>
          <p style={{ marginRight:'140px'}}>
            The exact cause of ASD remains unknown, but research suggests that a
            combination of genetic and environmental factors likely contributes to
            its development. Genetic studies have identified numerous genes
            associated with ASD, although no single gene accounts for the majority
            of cases. Environmental factors, such as prenatal exposure to certain
            medications or toxins, maternal illness during pregnancy, and
            complications during childbirth, may also increase the risk of ASD.
            Additionally, advanced parental age at the time of conception has been
            linked to an increased likelihood of having a child with ASD. However,
            it is essential to note that not all individuals with known risk
            factors will develop ASD, and not all individuals with ASD will have
            identifiable risk factors.
          </p>
        </div>
        <div >
          <img src={asd5} alt="Autistic Child" />
        </div>
      </section>
      <section className="about-section">
        <div style={{ width:'70%',height:'auto',marginRight:'140px' }}>
          <img src={asd4} alt="Autistic Child" />
        </div>
        <div className="about_content">
          <h2 style={{ textAlign: 'left', color: 'black' }}>Interventions and Support:</h2>
          <p style={{ }}>
            While there is currently no cure for ASD, early intervention and
            appropriate support services can significantly improve outcomes for
            individuals with the disorder. Behavioral therapies, such as applied
            behavior analysis (ABA), speech therapy, occupational therapy, and
            social skills training, are commonly used to address core deficits and
            enhance communication, social interaction, and adaptive skills.
            Individualized education plans (IEPs) and special education services
            are essential for addressing academic challenges and providing
            accommodations and modifications tailored to each individual's
            needs. Additionally, access to supportive services, such as
            counseling, parent training, and community resources, can help
            individuals with ASD and their families navigate the challenges
            associated with the disorder and achieve their full potential. Continued
            research and advocacy efforts are essential for advancing our
            understanding of ASD and improving access to quality care and support
            for individuals affected by the disorder.
          </p>
        </div>
      </section>
    </div>
    <Footer />
  </div>
);

export default AboutASD;
