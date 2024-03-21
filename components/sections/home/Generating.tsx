import loading  from "@/public/images/loading.png";
import Image from "next/image";

const Generating = ({ className }: { className: string }) => {
  return (
    <div
      className={`flex items-center h-[3.5rem] px-6 bg-n-8/80 rounded-[1.7rem] font-code ${
        className || ""
      } text-base`}
    >
      <Image className="w-5 h-5 mr-4" src={loading} alt="Loading" />
      Compiling...
    </div>
  );
};

export default Generating;
