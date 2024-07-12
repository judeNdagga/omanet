import ContactForm from '../components/contact-form'

export default function Contact() {
  return (
    <section className='py-24 bg-white'>
      <div className='container'>
        <h1 className='mb-10 text-gray-500 text-center text-3xl font-medium'>
          CONTACT US
        </h1>
        <ContactForm />
      </div>
    </section>
  )
}