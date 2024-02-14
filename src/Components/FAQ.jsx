import React from "react";
import Accordion from "./Accordion";

const FAQ = () => {
  return (
    <div className="max-w-[900px] w-full mx-auto text-center flex flex-col md:flex-col justify-center m-5 pb-32">

        <h1 className="md:text-7xl md:py-3 sm:text-6xl sm:py-2 text-4xl font-bold my-20 font-round">FAQ</h1>
    
      <Accordion
        title="Will this work for brand/new businesses?"
        answer="Absolutely! Whether you’re a well-established business in your area or just starting out, we’re here to support your business growth, regardless of your starting point"
      />
      <Accordion
        title="How quickly can I get started?"
        answer="Once we agree to work together, we kick off our onboarding process right away. Our team will create and launch your system within 5-7 days"
      />
      <Accordion 
      title="Do social media ads work?" 
      answer="With the proper expertise and technology, social media advertising can be highly effective. In the past, you had to take a chance on ads, figuring it out with your hard earned money. Instead, collaborate with a team experienced in running successful social media ad campaigns." 
      />
      <Accordion 
      title="Does this work with my current CRM?" 
      answer="Our CRM plays a crucial role in our system, facilitating lead nurturing, follow-ups, and appointment scheduling by our team. As a customer, it’s low maintenance, and you’re not obligated to exclusively use our CRM if you prefer otherwise." 
      />
      <Accordion 
      title="Will this work for me?" 
      answer="We offer a performance guarantee, a dedicated customer success manager to guide you, and exclusive access to leads we generate for you. Our commitment ensures concrete and guaranteed results." 
      />
    </div>
  );
};

export default FAQ;