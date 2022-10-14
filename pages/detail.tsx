import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Router, { useRouter } from 'next/router';

// import '../styles/globals.css';

const Footer = () => {
  const router = useRouter();
  const { id } = router.query;
  const [room, setRoom] = useState<any>({});
  const apiEndPoint = 'http://127.0.0.1:8000/api/room/';

  useEffect(() => {
    const getRoom = async (id: any) => {
      const { data: res } = await axios.get(apiEndPoint + id);
      setRoom(res.data);
    };
    if (!router.isReady) return;
    getRoom(id);
  }, [router.isReady, id]);
  return (
    <>
      <div className="mx-auto max-w-7xl pb-6 sm:px-6 lg:px-8 w-1-full" style={{ height: '500px' }}>
        <img className="rounded-2xl" style={{ height: '100%', width: '100%', objectFit: 'cover' }} src="room.jpg" />
      </div>

      <div className="grid grid-cols-2 gap-2 mx-auto w-4/5 my-5 text-left">
        <div>
          <section className="mb-4">
            <h1 className="font-bold text-4xl">{room.type}</h1>
          </section>
          <section className="mb-4">
            <h2 className="font-bold text-4xl text-[#393E72]">{room.price}</h2>
          </section>
        </div>
        <div className="flex justify-end">
          <section className="">
            <div className="rounded-2xl">
              <button className="bg-violet-500">Book</button>
            </div>
          </section>
        </div>
      </div>
      <section></section>
      <section className="mb-4">
        <h3>{room.description}</h3>
      </section>
    </>
  );
};
export default Footer;
