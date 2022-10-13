// import '../styles/globals.css';

const Login = () => {
  return (
    <>
      <section className="h-screen">
        <div className="container px-6 py-12 h-full">
          <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
            <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
              <div className="mb-6">
                <h2 className="text-4xl font-bold mb-6">Sign up</h2>
                <p className="text">Welcome! please fill in your identity to register account</p>
              </div>
              <form>
                {/* Name input */}
                <div className="mb-6">
                  <p className="text mb-3">Name</p>
                  <input
                    type="text"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-xl transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-[#7D74BE] focus:outline-none"
                    placeholder="Your name"
                  />
                </div>
                {/* Username input */}
                <div className="mb-6">
                  <p className="text mb-3">Username</p>
                  <input
                    type="text"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-xl transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-[#7D74BE] focus:outline-none"
                    placeholder="yourusername"
                  />
                </div>
                {/* Email input */}
                <div className="mb-6">
                  <p className="text mb-3">Email</p>
                  <input
                    type="email"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-xl transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-[#7D74BE] focus:outline-none"
                    placeholder="youremail@address.com"
                  />
                </div>
                {/* Password input */}
                <div className="mb-6">
                  <p className="text mb-3">Password</p>
                  <input
                    type="password"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-xl transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-[#7D74BE] focus:outline-none"
                    placeholder="password"
                  />
                </div>
                {/* Submit button */}
                <button
                  type="submit"
                  className="inline-block px-7 py-3 bg-[#7D74BE] text-white font-medium text-sm leading-snug rounded-xl shadow-md hover:bg- text-white hover:bg-[#393E72] hover:shadow-lg focus:bg- text-white hover:bg-[#393E72] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  Sign up
                </button>
                <div className="flex justify-between items-center mt-6">
                  <p className="text">
                    Already Have Account?
                    <a href="login" className="ml-2 text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 duration-200 transition ease-in-out">
                      Log in
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
