export default function Error({errorState='alert-error',text}){
  return (
    <div
      className={`alert ${errorState} min-w-[90%] sm:min-w-[30%] top-[9rem] md:top[10rem] absolute-center  text-center`}
    >
      <div className='flex-1 justify-center'>
        <label>{text}</label>
      </div>
    </div>
  )
}