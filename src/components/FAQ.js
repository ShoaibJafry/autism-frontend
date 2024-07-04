import { useState } from "react";
import Footer from "./Footer";
import "../styles/FAQ.css";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What is Autism Spectrum Disorder (ASD)?",
      answer:
        "Autism Spectrum Disorder (ASD) is a complex neurodevelopmental condition that affects social interaction, communication, and behavior. It is characterized by a wide range of symptoms and abilities, often referred to as a 'spectrum.'",
    },
    {
      question: "What are the signs and symptoms of ASD?",
      answer:
        "The signs and symptoms of ASD vary widely among individuals but may include difficulties with social interaction, communication challenges, repetitive behaviors, sensory sensitivities, and intense interests or fixations.",
    },
    {
      question: "At what age is ASD typically diagnosed?",
      answer:
        "ASD is typically diagnosed in early childhood, usually around age two or three. However, some children may be diagnosed as early as 18 months or as late as adolescence or adulthood, depending on the severity of their symptoms and when they first come to the attention of healthcare professionals.",
    },
    {
      question: "What causes ASD?",
      answer:
        "The exact cause of ASD is not known, but it is believed to involve a combination of genetic and environmental factors. There is ongoing research to better understand the underlying causes of ASD.",
    },
    {
      question: "Is there a cure for ASD?",
      answer:
        "Currently, there is no cure for ASD. However, early intervention and appropriate support services can significantly improve outcomes for individuals with the disorder, helping them to lead fulfilling and independent lives.",
    },
    {
      question: "What treatments and interventions are available for ASD?",
      answer:
        "Treatment for ASD often involves a combination of behavioral therapies, speech therapy, occupational therapy, and social skills training. Individualized education plans (IEPs) and special education services are also essential for addressing academic challenges and providing support tailored to each individual's needs.",
    },
    {
      question:
        "Can individuals with ASD lead successful and independent lives?",
      answer:
        "Yes, many individuals with ASD can lead successful and independent lives with the right support and interventions. With early detection, appropriate therapies, and access to supportive services, individuals with ASD can achieve their full potential and participate fully in society.",
    },
    {
      question: "How can I support someone with ASD?",
      answer:
        "Supporting someone with ASD involves understanding and acceptance, providing patience and encouragement, and advocating for their needs. Educating yourself about ASD, being respectful of their differences, and creating a supportive and inclusive environment can make a significant difference in their lives.",
    },
  ];

  return (
    <div>
      <div className="faq-container">
        <h2>Frequently Asked Questions</h2>
        <div className="faq">
          {faqData.map((item, index) => (
            <div className="faq-item" key={index}>
              <button
                className={`faq-question ${
                  activeIndex === index ? "active" : ""
                }`}
                onClick={() => handleToggle(index)}
              >
                {item.question}
              </button>
              <div
                className={`faq-dropdown ${
                  activeIndex === index ? "active" : ""
                }`}
              >
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FAQ;
