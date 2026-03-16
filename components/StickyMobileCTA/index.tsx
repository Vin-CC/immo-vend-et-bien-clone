export default function StickyMobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-1000 bg-white shadow-[0_-4px_20px_rgba(0,0,0,0.15)] px-4 py-3 hidden max-md:block">
      <p className="font-[effra,Roboto,sans-serif] text-[14px] text-(--color-dark) text-center mb-2 font-bold">Vérifiez votre éligibilité, vous avez :</p>
      <div className="flex gap-3">
        <a href="#header-form" className="flex-1 bg-(--color-orange) text-white border-none py-3 px-2 font-[effra,Roboto,sans-serif] text-[15px] font-bold cursor-pointer rounded-sm no-underline text-center block transition-opacity duration-200 ease-in-out hover:opacity-90 hover:text-white hover:no-underline">Une maison</a>
        <a href="#header-form" className="flex-1 bg-(--color-orange) text-white border-none py-3 px-2 font-[effra,Roboto,sans-serif] text-[15px] font-bold cursor-pointer rounded-sm no-underline text-center block transition-opacity duration-200 ease-in-out hover:opacity-90 hover:text-white hover:no-underline">Un appartement</a>
      </div>
    </div>
  );
}
