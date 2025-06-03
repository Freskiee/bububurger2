import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface GalleryImageProps {
  src: string;
  alt: string;
  caption?: string;
}

const GalleryImage: React.FC<GalleryImageProps> = ({ src, alt, caption }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="h-full overflow-hidden rounded-lg shadow-md relative cursor-pointer"
      whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
      transition={{ duration: 0.3 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <img 
        src={src} 
        alt={alt} 
        className="w-full h-full object-cover transition-transform duration-500"
        style={{ transform: isHovered ? 'scale(1.1)' : 'scale(1)' }}
      />
      
      {caption && (
        <motion.div 
          className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <p className="text-white p-4 font-medium">{caption}</p>
        </motion.div>
      )}
    </motion.div>
  );
};

export default GalleryImage;