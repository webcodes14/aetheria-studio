import { RouterProvider } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { router } from "./routes";
import { useEffect, useState } from "react";

import { siteConfig } from "./data/siteConfig";
import { useApp } from "./context/AppContext";

import LogoB from "./assets/Logo-b.svg";
import LogoW from "./assets/Logo-w.svg";

const App = () => {
  const { lang, theme } = useApp();
  const [ isLoading, setIsLoading ] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timeout);
  }, [ isLoading ]);

  const themeColor = theme === 'light' ? '#1a1a1a' : 'white';

  return <RouterProvider router={router} />

  /* Loading animace */
  /* return (
    <>
      <AnimatePresence>
        {isLoading &&
          <div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
            className={`fixed flex-col left-0 right-0 bottom-0 top-0 flex items-center justify-center`}
          >
            <div className={`max-w-full w-60 border border-${themeColor} drop-shadow-[0px_0px_4px_#1a1a1a]`}>
              <img 
                className={`max-w-full opacity-20 w-60 p-4 drop-shadow-[0px_0px_4px_#1a1a1a]`}
                src={theme === 'light' ? LogoB : LogoW} 
                alt={siteConfig[lang].title} 
              />
              <motion.img 
                className={`max-w-full w-0 p-4 drop-shadow-[0px_0px_4px_#1a1a1a] absolute top-0 left-0 h-full object-cover object-left opacity-60`}
                src={theme === 'light' ? LogoB : LogoW} 
                alt={siteConfig[lang].title} 
                layout
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{
                  duration: 1
                }}
              />
            </div>
          </div>
        }
      </AnimatePresence>
      
      {!isLoading && <RouterProvider router={router} />}
    </>
  ) */
}

export default App;