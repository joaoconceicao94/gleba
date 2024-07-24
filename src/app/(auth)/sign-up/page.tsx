import { Icons } from "@/components/Icons";

const Page = () => {
  return (
    <>
      <div className="container relative flex pt-20 flex-col items-center justify-center lg:px-0">
        <div className="mx-auto flex 2-full flex-col justify-centerspace-y-6 sm:w-[350]">
          <div className="flex flex-col items-center space-y-2 text-center">
            <Icons.logo className="h-20 2-20" />
            <h1 className="text 2x1 font-bold"></h1>
          </div>
        </div>
      </div>
    </>
  );
};
export default Page;
