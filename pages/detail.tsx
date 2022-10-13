import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

// import '../styles/globals.css';

const Footer = () => {
  return (

    <>
      <div className="mx-auto max-w-7xl pb-6 sm:px-6 lg:px-8 w-1-full" style={{ height: '500px' }}>
        <img className="rounded-2xl" style={{ height: '100%', width: '100%', objectFit: 'cover' }} src="room.jpg" />
      </div>

      <div className="grid grid-cols-2 gap-2 mx-auto w-4/5 my-5 text-left">
        <div>
          <section className='mb-4'>
            <h1 className="font-bold text-4xl">Reguler Room</h1>
          </section>
          <section className='mb-4'>
            <h2 className="font-bold text-4xl text-[#393E72]">$ 30</h2>
          </section>
        </div>
        <div className='flex justify-end'>
          <section className="">
            <div className="rounded-2xl">
              <button className="bg-violet-500">
                Book
              </button>
            </div>
          </section>
        </div>
      </div>
      <section>
      </section>
      <section className="mb-4">
        <h3>Vestibulum viverra nisi nec nulla bibendum, a malesuada urna hendrerit. Proin eros magna, facilisis fringilla maximus ac, accumsan vitae tortor. Ut a mi id diam luctus convallis. Integer nec lobortis nulla, in sollicitudin nunc. Morbi dolor metus, pharetra sit amet nibh ac, dignissim faucibus sem. Nam pellentesque ultrices dolor, vel ullamcorper dolor ornare ut. Cras ornare tortor vel nulla tempor dictum. Donec vel elementum leo, in sagittis turpis. Suspendisse et consectetur velit. Praesent rutrum metus id lacus vehicula, et ultricies elit lobortis. Suspendisse id mattis augue.</h3>
      </section>




    </>
  )
}
export default Footer;
