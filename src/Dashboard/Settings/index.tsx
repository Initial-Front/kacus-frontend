import SettingsPage from "./SettingBody";


export default function Setting() {

    return (
        <section>
            <div className="flex items-center justify-between mb-6  p-2 md:p-6">
                 <div className="flex items-center justify-between mb-6">
                <div>
                    <h1 className=" text-base md:text-[24px] flex items-center gap-1 font-bold text-gray-800">
                       Settings
                    </h1>
                    <p className="text-sm text-gray-500 mt-2">
                        Manage your team and preferences here.                    
                   </p>
                </div>      
            </div>

          
            </div>

            <section>
                <SettingsPage/>
            </section>
        </section>
    )
}