const CheckedIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="10"
      height="8"
      viewBox="0 0 10 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1.5 4L4.125 6.625L8.5 1.375"
        stroke="#222326"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export { CheckedIcon };
