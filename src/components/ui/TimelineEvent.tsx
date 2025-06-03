import React from 'react';
import { motion } from 'framer-motion';

interface TimelineEventProps {
  year: string;
  title: string;
  description: string;
  isRight?: boolean;
  index: number;
}

const TimelineEvent: React.FC<TimelineEventProps> = ({
  year,
  title,
  description,
  isRight = false,
  index,
}) => {
  const variants = {
    hidden: { opacity: 0, x: isRight ? 50 : -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.5, 
        delay: index * 0.2 
      } 
    }
  };

  return (
    <div className={`flex items-center ${isRight ? 'justify-start' : 'justify-end'} relative mb-16 last:mb-0`}>
      {/* Line */}
      <div className="absolute h-full w-0.5 bg-primary-500 left-1/2 transform -translate-x-1/2 top-0"></div>
      
      {/* Dot */}
      <div className="absolute w-6 h-6 bg-primary-500 rounded-full left-1/2 transform -translate-x-1/2 z-10"></div>
      
      {/* Year */}
      <div className={`absolute left-1/2 transform ${isRight ? 'translate-x-10' : '-translate-x-10 text-right'} font-fredoka font-bold text-2xl text-primary-500`}>
        {year}
      </div>
      
      {/* Content */}
      <motion.div 
        className={`bg-white rounded-lg shadow-lg p-6 max-w-md ${isRight ? 'ml-20' : 'mr-20'}`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={variants}
      >
        <h3 className="text-xl font-bold text-secondary-800 mb-2">{title}</h3>
        <p className="text-secondary-600">{description}</p>
      </motion.div>
    </div>
  );
};

export default TimelineEvent;