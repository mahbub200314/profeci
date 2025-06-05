import './faq.css'
import Button from '../../components/button/Button'
import { useState } from 'react'




const faqs = [
  {
    question: "How long does AI implementation take?",
    answer:
      "Here’s a sample pricing plans section content for a web design agency, broken down into three common tiers. Tailored for established businesses.",
  },
  {
    question: "What is artificial intelligence (AI)?",
    answer:
      "Here’s a sample pricing plans section content for a web design agency, broken down into three common tiers. Tailored for established businesses.",
  },
  {
    question: "How do I start with AI solutions?",
    answer:
      "Here’s a sample pricing plans section content for a web design agency, broken down into three common tiers. Tailored for established businesses.",
  },
  {
    question: "How does AI improve business efficiency?",
    answer:
      "Here’s a sample pricing plans section content for a web design agency, broken down into three common tiers. Tailored for established businesses.",
  },
  {
    question: "What industries can benefit from AI?",
    answer:
      "Here’s a sample pricing plans section content for a web design agency, broken down into three common tiers. Tailored for established businesses.",
  },
];


const Faq = () => {
   const [activeIndex, setActiveIndex] = useState(0);

  const toggleIndex = (index) => {
    setActiveIndex(index);
  };
  return (
    <div className='faq min-h-[80vh] bg-white-bg px-10 max-sm:px-2 py-20 max-md:py-5'>
    <div className='flex justify-around flex-wrap  bg-white rounded-[10px] px-10 max-sm:px-1 py-15 '>

         <header className='flex flex-col gap-6  mt-15'>
            <p><span>[</span> FAQ & ANS <span>]</span></p>
            <b className='text-[48px]'>Get every answer <br/>from here quickly and <br/>confidently.</b>
            <Button className='w-[250px] h-[60px] mt-8'>+ ASK MORE QUESTION</Button>
         </header>
        
     <main >
      {faqs.map((faq, index) => (
        <div key={index} className="box ">
          <h2 onClick={() => toggleIndex(index)}>

            <span >{activeIndex === index ? "-" : "+"}</span>
            {faq.question}
          </h2>
          {activeIndex === index && (
            <p >{faq.answer}</p>
          )}
        </div>
      ))}
    </main>

    </div>
    </div>
  )
}

export default Faq
