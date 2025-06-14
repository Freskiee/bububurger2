import React from 'react';
import { Beef } from 'lucide-react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = 'h-10 w-auto' }) => {
  return (
    <div className="flex items-center">
      <img src="/path/to/bububurger-logo.png" alt="Bububurger Logo" className="h-6 w-6" />
      <span className="ml-2 font-fredoka text-2xl font-bold text-white hidden sm:block">
        Bububurger
      </span>
    </div>
  );
};

export default Logo;


// import React from 'react';
// import { Flame, Beef } from 'lucide-react';
// import LogoBubu from '../../assets/images/izettle.png';

// interface LogoProps {
//   className?: string;
// }

// const Logo: React.FC<LogoProps> = ({ className = 'h-10 w-auto' }) => {
//   return (
//     <div className={`relative ${className}`}>
//       <div className="absolute inset-0 flex items-center justify-center ">
//         <img src={LogoBubu} alt="Logo" className="h-10 w-auto" />
//       </div>
//       <div className="absolute -top-2 -right-12 w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center">
//         <img src={LogoBubu} alt="" />
//       </div>
//     </div>
//   );
// };

// export default Logo;