import Image from 'next/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'

const faqs = [
  [
    {
      question: 'Does Work Arena handle VAT-related matters?',
      answer:
        'While Work Arena primarily focuses on job placement services, we can provide guidance on tax-related concerns, especially for international placements.',
    },
    {
      question:
        "What are the accepted payment methods for Work Arena's services?",
      answer:
        "Work Arena gladly accepts various payment methods to ensure convenience for our clients. Whether it's credit card payments, bank transfers, or purchase orders, we're here to accommodate your preferences.",
    },
    {
      question:
        'Can we anticipate additional features related to job inventory at Work Arena?',
      answer:
        "While we continuously aim to enhance our services, it's wise not to set specific expectations in life. We encourage you to stay updated with our offerings and explore the evolving opportunities we provide.",
    },
  ],
  [
    {
      question: 'How can I apply for a job through Work Arena?',
      answer:
        "To explore job opportunities with Work Arena, simply browse our listings. There's no need to be an existing customer. Feel free to apply for positions that align with your career goals.",
    },
    {
      question: 'Can you clarify the testimonial about tax fraud?',
      answer:
        'Work Arena exclusively specializes in job placement services and does not provide tax-related software. Therefore, any tax-related issues are unrelated to our services.',
    },
    {
      question:
        "Why does Work Arena's appeal remain strong despite sounding unattractive?",
      answer:
        "Work Arena's appeal is a testament to the power of exceptional visual design. We prioritize providing top-notch job placement services, and our website's design reflects our commitment to quality.",
    },
  ],
  [
    {
      question: 'Are there other companies named Work Arena?',
      answer:
        'We acknowledge that other companies may share a similar name. Please note that our use of the name "Work Arena" is not tied to formal incorporation but rather reflects our mission to create a dynamic and inclusive job placement agency.',
    },
    {
      question: 'How are reports generated at Work Arena?',
      answer:
        'At Work Arena, our dedicated team generates reports based on your specific data requirements. We utilize industry-standard tools and methodologies to ensure the accuracy and quality of our reports.',
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faqs"
      aria-labelledby="faqs"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
    >
      <Image
        className="absolute left-1/2 top-1/3 max-w-none -translate-y-1/4 translate-x-[-30%] opacity-70"
        src={backgroundImage}
        alt=""
        width={1558}
        height={946}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            If you can’t find what you’re looking for, email our support team
            and if you’re lucky someone will get back to you.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="font-display text-lg leading-7 text-slate-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-slate-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
