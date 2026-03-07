export default function WarningHeader() {
  const currentTime = new Date().getHours();

  return (
    <>
      {currentTime <= 19 && currentTime >= 1 && (
        <div className="w-full h-8 bg-[#DC3545] font-semibold text-xs md:text-sm flex items-center justify-center">
          <p>Sorry, we are closed right now and will re-open at 7:00 PM.</p>
        </div>
      )}
    </>
  );
}
