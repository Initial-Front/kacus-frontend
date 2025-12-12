import  { useState } from "react";
import  ListingsSpot from "@/components/listingSpot";
import  { ListingsFutures } from "@/components/listingFuture";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import ListingSpotModal from "@/components/ui/ListingModal/listSpot";
import ListingFuturesModal from "@/components/ui/ListingModal/listingFutures";






export default function ListingsPage() {
  const [tab, setTab] = useState<"spot" | "futures">("spot");
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div >
      <div className="max-w-7xl mx-auto ">

            <div className="flex flex-col px-6 py-1 md:flex-row md:items-center md:justify-between gap-4 ">
                <div>
                  <h2 className="text-2xl my-4 font-semibold">Listings</h2>
                  <p className="text-sm text-gray-500">Manage all pairs listing on the platform</p>
                </div>
        
                <div className="flex items-center gap-3">
                  <Button 
                   onClick={()=> setIsModalOpen(!isModalOpen)}
                  className="bg-[#1570EF] text-white  rounded-md px-4 py-2 flex items-center gap-2 hover:bg-blue-700">
                    <Plus className="w-4 h-4" /> Add Listing
                  </Button>
                </div>
              </div>

        <div className="mb-6 py-2">
          <div className="flex items-center border-b-2 w-full gap-4 px-6">
            <button onClick={() => setTab("spot")} className={`px-4 py-2  ${tab === "spot" ? " border-b-2 border-blue-600 " : "border-0"}`}>Spot</button>
            <button onClick={() => setTab("futures")} className={`px-4 py-2  ${tab === "futures" ? " border-b-2 border-blue-600 " : "border-0"}`}>Futures</button>
          </div>
        </div>

        <div className="p-6">
          {tab === "spot" ?  <ListingsSpot/> : <ListingsFutures/>}
        </div>
      </div>


      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            {tab === "spot" ? (
              <ListingSpotModal
                onClose={() => setIsModalOpen(false)}/>
            ) : (
              <ListingFuturesModal
                onClose={() => setIsModalOpen(false)}/>
            )
        }
           </div> 
        )}
    </div>
  );
}
