import { useState } from "react";



interface PropType {
      setIsModal: React.Dispatch<React.SetStateAction<boolean>>;
}

function CreateKey({setIsModal}: PropType ) {
    const [isSuccess, setIsSucessFull] = useState<boolean>(false);




    const handleSubmit = ()=> {
         setIsSucessFull(true);
         alert('hello')
    }



    if (isSuccess) {
    //   return  <SuccessModal setIsModal={setIsModal}/> 
    }
    return (
        <section className='bg-white max-w-[550px] w-full rounded-xl'>
            <div className='flex justify-between items-center p-6 border-b'>
                <h1 className='text-xl font-semibold text-[#3C3F44]'>Create API</h1>

                <button
                 onClick={()=> setIsModal(false) }
                >
                    <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.5" y="0.5" width="27.3696" height="27.3696" rx="13.6848" fill="white" />
                        <rect x="0.5" y="0.5" width="27.3696" height="27.3696" rx="13.6848" stroke="#EEEEF2" />
                        <path d="M19 9L9 19M9 9L19 19" stroke="#3C3F44" strokeWidth="1.4604" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>

                </button>
            </div>

            <form >
                <div className='flex flex-col px-6 py-5 '>
                   <label className='text-[#181D27] text-sm mb-1 font-semibold' >Client Name</label>
                 <input type="text"  placeholder='Enter Client Name'  className='h-[50px] w-full  border rounded-md  px-3 outline-none'/>
                </div>

                <div className='flex flex-col mt-10 md:flex-row w-full items-center gap-3 border-t px-6 py-6'>
                    <button 
                    onClick={()=> setIsModal(false)}
                    className=" md:w-1/2 h-[40px] flex justify-center items-center border text-[#414651] rounded-lg">Cancel</button>
                    <button 
                    onClick={handleSubmit}
                    type="button"
                    className=" md:w-1/2 h-[40px] flex justify-center items-center  rounded-lg bg-[#1570EF] text-white">Continue</button>
                </div>
                 
            </form>
        </section>
    );
}

export default CreateKey;