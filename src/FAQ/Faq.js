import React, { useState } from 'react'
import { faqsData } from './FaqData'
import Singlefaq from './Singlefaq'

const Faq = () => {
 const [faqs,setfaqs]=useState( faqsData)
  return (
      <main>
          <section>
              <h1 className='text-center my-3'>FAQs</h1>
              {faqs.map(faq => (
                    <Singlefaq key={faq.id} {...faq} />
                ))}
          </section>
    </main>
  )
}

export default Faq