import React from 'react';
import { motion } from 'framer-motion';

interface MenuCardProps {
  title: string;
  description: string;
  price: string;
  imageUrl: string;
  category?: string;
}

const MenuCard: React.FC<MenuCardProps> = ({
  title,
  description,
  price,
  imageUrl,
  category,
}) => {
  return (
    <motion.div 
      className="bg-white rounded-xl overflow-hidden shadow-lg h-full"
      whileHover={{ 
        y: -10,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
      }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        {category && (
          <div className="absolute top-4 right-4 bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-medium">
            {category}
          </div>
        )}
      </div>
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-fredoka font-bold text-secondary-800">{title}</h3>
          <span className="text-lg font-bold text-primary-600">{price}</span>
        </div>
        <p className="text-secondary-600 text-sm">{description}</p>
      </div>
    </motion.div>
  );
};

export default MenuCard;