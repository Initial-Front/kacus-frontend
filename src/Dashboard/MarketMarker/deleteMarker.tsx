import { useState } from "react";




type DeleteClientApiProps = {
   setDelete: React.Dispatch<React.SetStateAction<number | null>>;
    id: number;
    tab: string;
};


function DeleteMarketMaker({ setDelete, id, tab }: DeleteClientApiProps) {
    const [isSuccess, setIsSucessFull] = useState<boolean>(false);


    console.log(id)


    const handleSubmit = () => {
        setIsSucessFull(true);
         setDelete(null)
    }



    if (isSuccess) {
        //   return  <SuccessModal setIsModal={setIsModal}/> 
    }
    return (
        <section className='bg-white max-w-[450px] py-[30px] w-full rounded-xl'>


            <section  className="flex flex-col items-center justify-center">
                <div>
                    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="4" y="4" width="48" height="48" rx="24" fill="#FEE4E2" />
                        <rect x="4" y="4" width="48" height="48" rx="24" stroke="#FEF3F2" strokeWidth="8" />
                        <path d="M28 24V28M28 32H28.01M38 28C38 33.5228 33.5228 38 28 38C22.4772 38 18 33.5228 18 28C18 22.4772 22.4772 18 28 18C33.5228 18 38 22.4772 38 28Z" stroke="#D92D20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
                <h1 className="mt-[20px] text-lg text-[#181D27] font-medium">{tab === "Market Maker" ? 'Delete Market Maker' : 'Delete Market Maker' }</h1>
                <p>
                    {tab === "Market Maker" ? ' Are you sure you want to delete QuantumTrader API?' : 'Are you sure you want to delete GreenVault Custody API? ' }
                </p>
                <div className='flex flex-col mt-10  w-full items-center gap-3 px-6 py-2'>
                    <button
                        onClick={() => setDelete(null)}
                        className="  h-[60px] w-full flex justify-center items-center border text-[#414651] rounded-lg">Cancel</button>
                    <button
                        onClick={handleSubmit}
                        type="button"
                        className="  h-[60px] w-full flex justify-center items-center  rounded-lg bg-[#D92D20] text-white">Continue</button>
                </div>

            </section>
        </section>
    );
}

export default DeleteMarketMaker;