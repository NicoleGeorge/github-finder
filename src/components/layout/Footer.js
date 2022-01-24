import { FcLikePlaceholder } from 'react-icons/fc';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className='footer p-10 bg-gray-700 text-primary-content footer-center'>
      <FcLikePlaceholder className='mb-0'/>
      <p> Cppyright &copy; {year} All rights reserved.</p>
    </footer>
  );
};

export default Footer;
