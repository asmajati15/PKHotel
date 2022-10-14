// import '../styles/globals.css';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/auth.module.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useRouter } from 'next/router';
import nookies from 'nookies';
import { parseCookies, setCookie } from 'nookies';
import Link from 'next/link';
import { apiUrl } from '../config/config';

const Login = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const router = useRouter();

  const submitHandler = async (event: any) => {
    event.preventDefault();
    var res = await axios
      .post(apiUrl + '/api/login', {
        email: email,
        password: password,
      })
      .then(function (res) {
        if (res.status === 200) {
          Swal.fire({
            icon: 'success',
            title: 'Success',
            text: 'Login Successfully !',
            showConfirmButton: false,
            timer: 1500,
          });

          // localStorage.setItem("user", JSON.stringify(res.data));
          setCookie(null, 'user', JSON.stringify(res.data), {
            maxAge: 3600,
          });

          router.push({ pathname: '/' });
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch(function (error) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };
  return (
    <>
      <section className="h-screen">
        <div className="container px-6 py-12 h-full">
          <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
            <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
              <div className="mb-6">
                <h2 className="text-4xl font-bold mb-6">Log in</h2>
                <p className="text">Welcome! please fill in your credentials to continue</p>
              </div>
              <form onSubmit={submitHandler}>
                {/* Email input */}
                <div className="mb-6">
                  <p className="text mb-3">Email</p>
                  <input
                    type="text"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-xl transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-[#7D74BE] focus:outline-none"
                    placeholder="youremail@address.com"
                    onChange={(event) => setEmail(event.target.value)}
                  />
                </div>
                {/* Password input */}
                <div className="mb-6">
                  <p className="text mb-3">Password</p>
                  <input
                    type="password"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-xl transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-[#7D74BE] focus:outline-none"
                    placeholder="password"
                    onChange={(event) => setPassword(event.target.value)}
                  />
                </div>
                {/* Submit button */}
                <button
                  type="submit"
                  className="inline-block px-7 py-3 bg-[#7D74BE] text-white font-medium text-sm leading-snug rounded-xl shadow-md hover:bg- text-white hover:bg-[#393E72] hover:shadow-lg focus:bg- text-white hover:bg-[#393E72] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  Log in
                </button>
                <div className="flex justify-between items-center mt-6">
                  <p className="text">
                    Don't Have Account?
                    <a href="signup" className="ml-2 text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 duration-200 transition ease-in-out">
                      Sign Up
                    </a>
                  </p>
                </div>
              </form>
            </div>
            <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" className="w-full" alt="Phone image" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
