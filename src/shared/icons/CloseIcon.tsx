const CloseIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        x="8.29395"
        y="6.88"
        width="9"
        height="2"
        rx="1"
        transform="rotate(45 8.29395 6.88)"
        fill="#2D3240"
      />
      <rect
        x="4.75391"
        y="3.33997"
        width="9"
        height="2"
        rx="1"
        transform="rotate(45 4.75391 3.33997)"
        fill="#2D3240"
      />
      <rect
        x="3.34314"
        y="13.2427"
        width="14"
        height="2"
        rx="1"
        transform="rotate(-45 3.34314 13.2427)"
        fill="#2D3240"
      />
    </svg>
  );
};

export { CloseIcon };
