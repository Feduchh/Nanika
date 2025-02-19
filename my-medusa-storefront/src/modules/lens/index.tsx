"use client"

import React, { useState, useCallback } from 'react';
import { Search } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram, faDiscord } from "@fortawesome/free-brands-svg-icons"
import App from "@modules/search"

const Lens = () => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);

  const toggleHeader = useCallback(() => {
    setIsHeaderVisible((prev) => !prev);
  }, []);
  
  return (
    <div className='h-full'>
        <div className="relative items-center gap-x-6 h-full relative inline-flex items-center justify-center p-2 rounded-md transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-white after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200 hover:after:text-white">
            <button onClick={toggleHeader} style={{ fontSize: '24px', background: 'transparent', border: 'none' }}>
                <Search className='w-5 h-5 text-white'/>
            </button>
        </div>
        <div className="absolute inset-x-0 z-50 group">
            {isHeaderVisible && (
                <header className="top-full bg-black z-60 h-[8vh] border-t border-stone-700">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[100vh]">
                        <App/>
                    </div>
                    <nav className="content-container txt-xsmall-plus text-ui-fg-subtle flex items-center justify-between w-full h-full text-small-regular">
                        <div className="flex items-center gap-x-8 pt-3 pb-3 pl-2">
                            <a className="hover:text-ui-fg-base flex" href="https://www.instagram.com/nanika.store/?next=%2F">
                                <FontAwesomeIcon icon={faInstagram} className="w-4 h-4 text-white"/>
                            </a>
                            <a className="hover:text-ui-fg-base flex" href="https://discord.gg/5hvzdeK8S9">
                                <FontAwesomeIcon icon={faDiscord} className="w-4 h-4 text-white"/>
                            </a>
                        </div>
                    </nav>
                </header>
            )}
        </div>
    </div>
  );
};

export default Lens