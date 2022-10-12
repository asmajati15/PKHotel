// import '../styles/globals.css';

const Footer = () => {
    return (
      <>
        <footer className="bg-[#2A2149] dark:bg-gray-900">
            <div className="grid grid-cols-3 gap-4 py-8 px-6 max-w-4/5 justify-items-center">
              <div>
                <h2 className="mb-6 text-xl font-bold text-white uppercase dark:text-gray-400">Contact</h2>
                <ul className="text-white dark:text-gray-400">
                  <li className="mb-4">
                    <a href="#" className=" hover:underline">
                      About
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Careers
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Brand Center
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Blog
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-xl font-bold text-white uppercase dark:text-gray-400">Help center</h2>
                <ul className="text-white dark:text-gray-400">
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Discord Server
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Twitter
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Facebook
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <iframe className="w-full h-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3098615.0123395035!2d-76.48456188145713!3d40.674162342535496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2598fbe3b0cc9%3A0x794cb07664de81de!2sRockstar%20Games!5e0!3m2!1sid!2sid!4v1665615637696!5m2!1sid!2sid" style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"/>
              </div>
            </div>
        </footer>
      </>
    );
};
  
export default Footer;