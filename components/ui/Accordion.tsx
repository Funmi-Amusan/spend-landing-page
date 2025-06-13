"use client";

import { FaPlus, FaMinus } from "react-icons/fa6"; 
import React from 'react';
import { motion, AnimatePresence } from "framer-motion";

type AccordionProps = {
  question: string;
  answer: string;
  id: number;
  isOpen: boolean;
  onToggle: (id: number) => void;
}

const Accordion = ({ question, answer, id, isOpen, onToggle }: AccordionProps) => {

  return (
    <div onClick={() => onToggle(id)} className={`flex-center-col max-w-2xl gap-2 w-full py-4 mx-4 cursor-pointer border-b border-white/30 dark:border-white/30 `}>
        <div className='flex justify-between items-center  w-full text-start'> 
            <h5 className="font-black text-white/40 text-xl">{question}</h5>
            {isOpen ? <FaMinus className="text-white/40" size={36} /> : <FaPlus className="text-white/40" size={36} />}
        </div>

        <AnimatePresence> 
            {isOpen && (
                <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className='text-base font-semibold text-white/70 text-left w-full overflow-hidden' 
                >
                    {answer}
                </motion.p>
            )}
        </AnimatePresence>
    </div>
  );
}

export default Accordion;