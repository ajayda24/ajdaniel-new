import profileLink from '../profileLink'
import { useIsInViewport } from '../helpers/useIsInViewPort'
import { useState } from 'react'
import Error from './Utils/Error'

export default function Contact() {
  useIsInViewport('.profile-icons')
  const [contactData, setContactData] = useState({
    firstName: '',
    email: '',
    message: '',
  })
  const [showError, setShowError] = useState(false)
  const [errorState, setErrorState] = useState({
    text: 'Something went wrong!',
    error: 'alert-error',
  })
  const [submitButtonText,setSubmitButtonText] = useState('Submit')

  const submitContactHandler = async (e) => {
    e.preventDefault()
    if (
      contactData.firstName.trim() != '' &&
      contactData.email.trim() != '' &&
      contactData.message.trim() != ''
    ) {
      setSubmitButtonText('Sending...')
      const request = await fetch('api/postSubmitContact', {
        method: 'POST',
        body: JSON.stringify({
          firstName: contactData.firstName,
          email: contactData.email,
          message: contactData.message,
        }),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
      const requestOutput = await request.json()
      if (requestOutput) {
        setSubmitButtonText('Submit')
        setShowError(true)
        setErrorState({
          text: requestOutput.status,
          error: requestOutput.error,
        })
        setContactData({
          firstName: '',
          email: '',
          message: '',
        })
      }
      setTimeout(() => {
        setShowError(false)
        setErrorState(null)
      }, 3000)
    }
  }
  return (
    <div
      id='contact'
      className='h_mobile-100 sm:min-h-screen bg-no-repeat bg-cover sm:bg-bottom overflow-hidden flex flex-col justify-between relative'
      // style={{ backgroundImage: `url(../background/1.svg)` }}
    >
      <h1
        id='contact-heading'
        className='text-center font-black text-4xl p-2 sm:text-7xl mt-5 text-light'
        data-aos='fade-down'
      >
        Contact Me
      </h1>
      <p
        className={`text-light text-center font-black text-xl p-2 sm:text-2xl mt-3 ${
          showError ? 'invisible' : ''
        }`}
      >
        Want to get in touch?
      </p>
      <form onSubmit={submitContactHandler}>
        <div className='form-control text-light max-w-screen-sm m-5 mx-auto  px-5'>
          <input
            placeholder='Name'
            className='input input-primary input-bordered focus:ring-2 focus:ring-offset-1 focus:ring-indigo-500'
            type='text'
            required
            autoComplete='hello'
            value={contactData.firstName}
            onChange={(e) =>
              setContactData((p) => ({ ...p, firstName: e.target.value }))
            }
          />
        </div>
        <div className='form-control text-light max-w-screen-sm m-5 mx-auto  px-5'>
          <input
            placeholder='Email'
            className='input input-primary input-bordered focus:ring-2 focus:ring-offset-1 focus:ring-indigo-500'
            type='email'
            required
            autoComplete='off'
            value={contactData.email}
            onChange={(e) =>
              setContactData((p) => ({ ...p, email: e.target.value }))
            }
          />
        </div>
        <div className='form-control text-light max-w-screen-sm m-5 mx-auto  px-5'>
          <textarea
            className='textarea h-24 textarea-bordered textarea-primary focus:ring-2 focus:ring-offset-1 focus:ring-indigo-500'
            placeholder='Message'
            required
            autoComplete='off'
            value={contactData.message}
            onChange={(e) =>
              setContactData((p) => ({ ...p, message: e.target.value }))
            }
          ></textarea>
        </div>
        <center>
          <button
            type='submit'
            className='btn md:btn-wide btn-primary mx-auto'
          >
            {submitButtonText}
          </button>
        </center>
      </form>
      <div className='flex justify-center mt-10 gap-5 profile-icons'>
        <h1 className='text-light text-2xl sm:text-5xl'>
          <a
            href={profileLink.linkedin}
            target='_blank'
            rel='noopener noreferrer'
          >
            <i className='bx bxl-linkedin-square '></i>
          </a>
        </h1>
        <h1 className='text-light text-2xl sm:text-5xl'>
          <a
            href={profileLink.facebook}
            target='_blank'
            rel='noopener noreferrer'
          >
            <i className='bx bxl-facebook-square'></i>
          </a>
        </h1>
        <h1 className='text-light text-2xl sm:text-5xl'>
          <a
            href={profileLink.github}
            target='_blank'
            rel='noopener noreferrer'
          >
            <i className='bx bxl-github'></i>
          </a>
        </h1>
        <h1 className='text-light text-2xl sm:text-5xl'>
          <a
            href={profileLink.twitter}
            target='_blank'
            rel='noopener noreferrer'
          >
            <i className='bx bxl-twitter'></i>
          </a>
        </h1>

        <h1 className='text-light text-2xl sm:text-5xl'>
          <a
            href={profileLink.instagram}
            target='_blank'
            rel='noopener noreferrer'
          >
            <i className='bx bxl-instagram'></i>
          </a>
        </h1>
      </div>
      <img src='../background/3-crop1.png' alt='' width='100%' />
      {showError && (
        <Error text={errorState.text} errorState={errorState.error} />
      )}
    </div>
  )
}
