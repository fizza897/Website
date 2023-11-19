import React, { FC } from 'react';

const Button: FC<{ text: string }> = ({ text }) => {
  return (
    <button className='bg-[#00616C] text-lg font-medium text-white px-8 py-4 rounded-full hover:shadow-lg hover:scale-105 duration-300'>{text}</button>
  );
};

export default Button;
