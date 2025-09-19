const PieIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M30 3C15.0883 3 3 15.0883 3 30C3 44.9117 15.0883 57 30 57C44.9117 57 57 44.9117 57 30M30 3C44.9117 3 57 15.0883 57 30M30 3V30M57 30H30M48 49.5L30 30"
        stroke="#0079F2"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export { PieIcon };
