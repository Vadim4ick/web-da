const BurgerMenuIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect x="7" y="13" width="9" height="2" rx="1" fill="#2D3240" />
      <rect x="2" y="3" width="9" height="2" rx="1" fill="#2D3240" />
      <rect x="2" y="8" width="14" height="2" rx="1" fill="#2D3240" />
    </svg>
  );
};

export { BurgerMenuIcon };
