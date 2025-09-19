const CaseImagesBlock = () => {
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-center rounded-t-[40px] bg-white py-[80px]">
        <p className="text-primary-black text-[48px] leading-[125%] font-semibold">
          Главная страница
        </p>
      </div>

      <img className="w-full" src="/case/1.png" alt="1.png" />
    </div>
  );
};

export { CaseImagesBlock };
