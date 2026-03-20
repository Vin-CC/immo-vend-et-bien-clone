import CTAButton from '@/components/CTAButton';

export default function StickyMobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-1000 bg-white shadow-[0_-4px_20px_rgba(0,0,0,0.15)] px-4 py-3 hidden max-md:block">
      <p className="font-[effra,Roboto,sans-serif] text-[14px] text-(--color-dark) text-center mb-2 font-bold">Vérifiez votre éligibilité, vous avez :</p>
      <div className="flex gap-3">
        <CTAButton size="small" className="flex-1 text-center py-3 px-2">Une maison</CTAButton>
        <CTAButton size="small" className="flex-1 text-center py-3 px-2">Un appartement</CTAButton>
      </div>
    </div>
  );
}
