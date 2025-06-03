import React from 'react';
import { motion } from 'framer-motion';
import chef from '../../assets/images/chef only.png';

interface ChefCharacterProps {
  action?: 'cooking' | 'greeting' | 'dancing';
  className?: string;
}

const ChefCharacter: React.FC<ChefCharacterProps> = ({ 
  action = 'greeting',
  className = '' 
}) => {
  const getActionStyles = () => {
    switch (action) {
      case 'cooking':
        return {
          animate: {
            rotate: [-5, 5, -5],
            y: [0, -5, 0],
            transition: { 
              repeat: Infinity, 
              duration: 2, 
              ease: "easeInOut" 
            }
          }
        };
      case 'dancing':
        return {
          animate: {
            rotate: [-10, 10, -10],
            y: [0, -10, 0],
            x: [-5, 5, -5],
            transition: { 
              repeat: Infinity, 
              duration: 1.5, 
              ease: "easeInOut" 
            }
          }
        };
      case 'greeting':
      default:
        return {
          animate: {
            y: [0, -10, 0],
            transition: { 
              repeat: Infinity, 
              duration: 2.5, 
              ease: "easeInOut" 
            }
          }
        };
    }
  };

  const chefBubu = chef ? (
    <img src={chef} alt="Chef Bubu" className="w-full h-full object-cover" />
  ) : null;

  const { animate } = getActionStyles();

  return (
    <motion.div 
      className={`relative ${className}`}
      animate={animate}
      whileHover={{ scale: 1.1 }}
    >
      {chefBubu}
    </motion.div>
  );
};

export default ChefCharacter;