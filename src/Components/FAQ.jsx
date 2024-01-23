import React from "react";
import Accordion from "./Accordion";

const FAQ = () => {
  return (
    <div className="max-w-[900px] w-full mx-auto text-center flex flex-col md:flex-col justify-center m-5 pb-32">

        <h1 className="md:text-7xl md:py-3 sm:text-6xl sm:py-2 text-4xl font-bold my-20 font-round">FAQ</h1>
    
      <Accordion
        title="Will this work for brand/new businesses?"
        answer="Yes! Whether you are an established business in your area, or your just getting started, we are here to help you grow your business no matter where your starting from."
      />
      <Accordion
        title="How quickly can I get started?"
        answer="Following our agreement to work together, we immediately begin our onboarding process. Our team will build and launch your system within 5-7 days."
      />
      <Accordion 
      title="Do social media ads work?" 
      answer="With the right experience and technology social media advertising is extremely effective. Before, you had to gamble on ads yourself trying to figure it out on your hard earned dollar. Instead, wrk with a team that has experience on running social media ads successfully." 
      />
      <Accordion 
      title="Does this work with my current CRM?" 
      answer="Our CRM is a pivotal piece to our system and it is what our team uses in order to nurture, follow up, and book appointments with your leads. As a customer, it is very low maintenance and we do not require you to exclusively use our CRM if you dont't want to." 
      />
      <Accordion 
      title="Will this work for me?" 
      answer="A performance guarantee, customer success manager to hold your hand throughout the whole process, and full exclusivity to your generated leads. We generate cold hard results, guarantee." 
      />
    </div>
  );
};

export default FAQ;