import React from 'react';
import { FiMapPin, FiMail, FiPhone } from 'react-icons/fi';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import { BsGlobe } from 'react-icons/bs';
import Accordion from '../Accordion';

const FooterMobile = () => {
  return (
    <>
      <div className="flex flex-col gap-4">
        <Accordion header = {
          <div className="mb-4 font-semibold uppercase">
            روابط هامة
          </div>
        }
          details = {
            <ul className="mb-4 text-start">
              <li className='mb-4'>
                <a
                  href="/about"
                  className="tracking-wider"
                >
                  حولنا
                </a>
              </li>
              <li className='mb-4'>
                <a
                  href="/mission"
                  className="tracking-wider"
                >
                  رسالتنا
                </a>
              </li>
              <li className='mb-4'>
                <a
                  href="/advantages"
                  className="tracking-wider"
                >
                  ما يميزنا
                </a>
              </li>
              <li className='mb-4'>
                <a
                  href="/contact"
                  className="tracking-wider"
                >
                  تواصل معنا
                </a>
              </li>
            </ul>
          }
        />
        <Accordion header = {
          <div className="mb-[20px] font-semibold uppercase">
            تواصل معنا
          </div>
        }
          details = {
            <ul className='text-start'>
              <li className="flex items-center justify-start gap-2 mb-[20px]">
                <FiMapPin className="h-5 w-5" />
                فلسطين - قطاع غزة - خانيونس
              </li>
              <li className="flex items-center justify-start gap-2 mb-[20px]">
                <FiMail className="h-5 w-5" />
                mohajren7258888@gmail.com
              </li>
              <li className="flex items-center justify-start gap-2 mb-[20px]">
                <FiPhone className="h-5 w-5" />
                972597318888 +
              </li>
            </ul>
          }
        />
      </div>
      <div>
        <div className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
          تابعنا على الشبكات الإجتماعية
        </div>
        <div className="flex justify-center items-center mt-[20px] gap-[20px]">
          <a href="https://www.facebook.com/MohajreenSchool">
            <FaFacebook size={24} />
            <span className="sr-only">Facebook page</span>
          </a>
          <a href="#">
            <FaInstagram size={24} />
            <span className="sr-only">Instagram page</span>
          </a>
          <a href="#">
            <FaYoutube size={24} />
            <span className="sr-only">Youtube page</span>
          </a>
          <a href="#">
            <BsGlobe size={24} />
            <span className="sr-only">Website</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default FooterMobile;
