import { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "¿Cuál es el tiempo de implementación?",
      answer: "El tiempo de implementación varía según el plan elegido. Para el plan Básico, la implementación toma entre 1-2 semanas. Para planes Profesional y Empresarial, entre 2-4 semanas, ya que incluyen configuraciones personalizadas y capacitación del equipo."
    },
    {
      question: "¿Ofrecen período de prueba gratuito?",
      answer: "Sí, todos nuestros planes incluyen 14 días de prueba completamente gratis. No se requiere tarjeta de crédito para comenzar. Podrás explorar todas las funcionalidades del plan que elijas sin ningún compromiso."
    },
    {
      question: "¿Puedo cambiar de plan en cualquier momento?",
      answer: "Absolutamente. Puedes actualizar o reducir tu plan en cualquier momento. Los cambios se aplican inmediatamente y ajustamos la facturación de manera proporcional al tiempo restante de tu período de facturación actual."
    },
    {
      question: "¿Qué métodos de pago aceptan?",
      answer: "Aceptamos todas las tarjetas de crédito principales (Visa, Mastercard, American Express), PayPal, y transferencias bancarias para planes Empresariales. También ofrecemos opciones de pago anual con descuentos especiales."
    },
    {
      question: "¿Cómo funciona el soporte técnico?",
      answer: "El soporte varía según tu plan: Plan Básico incluye soporte por email con respuesta en 24-48 horas. Plan Profesional ofrece soporte 24/7 por chat y email. Plan Empresarial incluye soporte premium con manager dedicado y línea telefónica directa."
    },
    {
      question: "¿Mis datos están seguros?",
      answer: "La seguridad es nuestra prioridad. Utilizamos encriptación de nivel bancario (SSL/TLS), realizamos backups diarios automáticos, cumplimos con GDPR y tenemos certificación ISO 27001. Tus datos están almacenados en servidores seguros con redundancia geográfica."
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-20 bg-linear-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 max-w-4xl">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Preguntas Frecuentes
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Encuentra respuestas rápidas a las preguntas más comunes sobre nuestros servicios
          </p>
        </div>

        {/* Acordeón */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              {/* Pregunta - Botón clickeable */}
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <span className="shrink-0 text-blue-600 text-2xl">
                  {activeIndex === index ? (
                    <FiChevronUp className="transition-transform duration-300" />
                  ) : (
                    <FiChevronDown className="transition-transform duration-300" />
                  )}
                </span>
              </button>

              
              <div
                className={`transition-all duration-500 ease-in-out ${
                  activeIndex === index
                    ? 'max-h-96 opacity-100'
                    : 'max-h-0 opacity-0'
                } overflow-hidden`}
              >
                <div className="px-6 pb-5 pt-2">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            ¿No encuentras lo que buscas?
          </p>
          <button className="bg-linear-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
            Contactar Soporte
          </button>
        </div>

      </div>
    </section>
  );
}

export default FAQ;
