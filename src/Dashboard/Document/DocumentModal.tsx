import { useRef, useState } from "react";
import SuccessModal from "./successModal";


interface PropType {
    setIsModal: React.Dispatch<React.SetStateAction<boolean>>;
}
function DocumentModal({ setIsModal }: PropType) {
    const [isSuccess, setIsSucessFull] = useState<boolean>(false);
    const [fileName, setFileName] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement | null>(null);


    const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) setFileName(file.name);
    };

    const openFilePicker = () => fileInputRef.current?.click();




    const handleSubmit = () => {
        setIsSucessFull(true);
        alert('hello')
    }



    if (isSuccess) {
        return <SuccessModal setIsModal={setIsModal} />
    }
    return (
        <section className='bg-white max-w-[550px] w-full rounded-xl'>
            <div className='flex justify-between items-center p-6 border-b'>
                <h1 className='text-xl text-[#3C3F44] font-semibold'>New Document</h1>

                <button
                    onClick={() => setIsModal(false)}
                >
                    <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.5" y="0.5" width="27.3696" height="27.3696" rx="13.6848" fill="white" />
                        <rect x="0.5" y="0.5" width="27.3696" height="27.3696" rx="13.6848" stroke="#EEEEF2" />
                        <path d="M19 9L9 19M9 9L19 19" stroke="#3C3F44" strokeWidth="1.4604" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>

                </button>
            </div>

            <form className='px-6 py-5 space-y-6'>
                <div className='flex flex-col'>
                    <label className='text-[#181D27] text-sm mb-1' >Document Name</label>
                    <input type="text" placeholder='Enter Document Name' className='h-[50px] w-full  border rounded-md  px-3 outline-none' />
                </div>

                <div className='flex flex-col'>
                    <label className='text-[#181D27] mb-1'  >Description</label>
                    <input type="text" placeholder='Enter Description' className='h-[50px] w-full  border rounded-md  px-3 outline-none' />
                </div>

                <div className='flex flex-col'>
                    <label className='text-[#181D27] mb-1' >Upload Document</label>
                    <div className="flex flex-col w-full">
                        <label className="text-[#181D27] mb-1 font-medium">Upload Document</label>

                        <div
                            onClick={openFilePicker}
                            className="border-2 border-dashed border-gray-300 flex flex-col justify-center items-center h-[140px] rounded cursor-pointer hover:bg-gray-50 transition"
                        >
                        
                            <input
                                type="file"
                                ref={fileInputRef}
                                onChange={handleFileSelect}
                                className="hidden"
                            />

                            {fileName ? (
                                <p className="text-sm text-gray-700 font-medium">{fileName}</p>
                            ) : (
                                <div className="flex flex-col items-center text-gray-500">
                                   <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="3" y="3" width="40" height="40" rx="20" fill="#F5F5F5"/>
<rect x="3" y="3" width="40" height="40" rx="20" stroke="#FAFAFA" stroke-width="6"/>
<g clip-path="url(#clip0_2895_120948)">
<path d="M26.3335 26.3332L23.0002 22.9999M23.0002 22.9999L19.6669 26.3332M23.0002 22.9999V30.4999M29.9919 28.3249C30.8047 27.8818 31.4467 27.1806 31.8168 26.3321C32.1868 25.4835 32.2637 24.5359 32.0354 23.6388C31.807 22.7417 31.2865 21.9462 30.5558 21.3778C29.8251 20.8094 28.9259 20.5005 28.0002 20.4999H26.9502C26.698 19.5243 26.2278 18.6185 25.5752 17.8507C24.9225 17.0829 24.1042 16.4731 23.182 16.0671C22.2597 15.661 21.2573 15.4694 20.2503 15.5065C19.2433 15.5436 18.2578 15.8085 17.3679 16.2813C16.4779 16.7541 15.7068 17.4225 15.1124 18.2362C14.518 19.05 14.1158 19.9879 13.936 20.9794C13.7563 21.9709 13.8036 22.9903 14.0746 23.961C14.3455 24.9316 14.8329 25.8281 15.5002 26.5832" stroke="#535862" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_2895_120948">
<rect width="20" height="20" fill="white" transform="translate(13 13)"/>
</clipPath>
</defs>
                                    </svg>

                                    <p className="text-sm"> <span className="text-[#1570EF] font-semibold">Click to upload</span> or drag & drop</p>
                                    <p>SVG, PNG, JPG or GIF (max. 800x400px)</p>
                                </div>
                            )}
                        </div>

                        {fileName && (
                            <p className="text-xs text-gray-500 mt-2">
                                Selected file: <b>{fileName}</b>
                            </p>
                        )}
                    </div>

                </div>

                <div className='flex flex-col md:flex-row w-full items-center gap-3 py-6'>
                    <button
                        onClick={() => setIsModal(false)}
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

export default DocumentModal;