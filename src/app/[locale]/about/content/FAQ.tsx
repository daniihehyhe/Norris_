import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';
import { MdHome, MdDevices, MdSecurity, MdAttachMoney, MdCalendarToday, MdEnergySavingsLeaf, MdHub, MdQuestionAnswer, MdOutlineHouse } from 'react-icons/md';
import { useTranslations } from 'next-intl';

interface FAQItemProps {
  question: string;
  answer: string;
  icon: JSX.Element;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, icon }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <motion.div layout className="bg-green-100 p-5 rounded-lg shadow-md mb-4">
        <motion.div 
          layout 
          className="flex justify-between items-center cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="flex items-center">
            {icon}
            <h3 className="text-lg font-semibold text-orange-800 ml-2">{question}</h3>
          </div>
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <FaChevronDown className="text-orange-800" />
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <p className="mt-3 text-orange-700">{answer}</p>
        </motion.div>
      </motion.div>
    );
  };

const FAQ: React.FC = () => {
  const t = useTranslations('faq');

  const faqData = [
    {
      question: t('questions.0.question'),
      answer: t('questions.0.answer'),
      icon: <MdHome className="text-orange-800 h-6 w-6" />
    },
    {
      question: t('questions.1.question'),
      answer: t('questions.1.answer'),
      icon: <MdDevices className="text-orange-800 h-6 w-6" />
    },
    {
      question: t('questions.2.question'),
      answer: t('questions.2.answer'),
      icon: <MdAttachMoney className="text-orange-800 h-6 w-6" />
    },
    {
      question: t('questions.3.question'),
      answer: t('questions.3.answer'),
      icon: <MdOutlineHouse className="text-orange-800 h-6 w-6" />
    },
    {
      question: t('questions.4.question'),
      answer: t('questions.4.answer'),
      icon: <MdCalendarToday className="text-orange-800 h-6 w-6" />
    },
    {
      question: t('questions.5.question'),
      answer: t('questions.5.answer'),
      icon: <MdEnergySavingsLeaf className="text-orange-800 h-6 w-6" />
    },
    {
      question: t('questions.6.question'),
      answer: t('questions.6.answer'),
      icon: <MdHub className="text-orange-800 h-6 w-6" />
    },
    {
      question: t('questions.7.question'),
      answer: t('questions.7.answer'),
      icon: <MdQuestionAnswer className="text-orange-800 h-6 w-6" />
    },
    {
      question: t('questions.8.question'),
      answer: t('questions.8.answer'),
      icon: <MdOutlineHouse className="text-orange-800 h-6 w-6" />
    },
    {
      question: t('questions.9.question'),
      answer: t('questions.9.answer'),
      icon: <MdSecurity className="text-orange-800 h-6 w-6" />
    },
    {
      question: t('questions.10.question'),
      answer: t('questions.10.answer'),
      icon: <MdDevices className="text-orange-800 h-6 w-6" />
    },
    {
      question: t('questions.11.question'),
      answer: t('questions.11.answer'),
      icon: <MdSecurity className="text-orange-800 h-6 w-6" />
    },
    {
      question: t('questions.12.question'),
      answer: t('questions.12.answer'),
      icon: <MdDevices className="text-orange-800 h-6 w-6" />
    },
    {
      question: t('questions.13.question'),
      answer: t('questions.13.answer'),
      icon: <MdOutlineHouse className="text-orange-800 h-6 w-6" />
    },
    {
      question: t('questions.14.question'),
      answer: t('questions.14.answer'),
      icon: <MdQuestionAnswer className="text-orange-800 h-6 w-6" />
    },
  ];

  return (
    <div className="container mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center text-orange-900 mb-8">{t('title')}</h2>
      <motion.div 
        layout 
        initial={{ borderRadius: 25 }} 
        className="space-y-4"
      >
        {faqData.map((item, index) => (
          <FAQItem 
            key={index} 
            question={item.question} 
            answer={item.answer} 
            icon={item.icon} 
          />
        ))}
      </motion.div>
    </div>
  );
};

export default FAQ;
