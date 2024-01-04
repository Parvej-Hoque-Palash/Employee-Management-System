import React from 'react'
import { useForm, ValidationError } from '@formspree/react';

const ContactForm = () => {
    const [state, handleSubmit] = useForm("xwkzdzlp");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
<form onSubmit={handleSubmit} className='flex flex-col px-5 py-5 rounded-md bg-slate-200 w-full mt-6'>
      <div className='flex flex-1 justify-between gap-x-4 mt-2'>
      <label htmlFor="email">
        Email Address
      </label>
      <input
        id="email"
        type="email" 
        name="email"
        placeholder='xyz@gmail.com'
      />
      </div>
      <div className='mt-2'>
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <textarea
      className='w-full'
        id="message"
        name="message"
        placeholder='Your text here...'
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      </div>
      <div className='mt-2'>
      <button className='bg-cyan-600 text-white px-3 py-1 rounded-md' type="submit" disabled={state.submitting}>
        Submit
      </button>
      </div>
    </form>
  )
}

export default ContactForm