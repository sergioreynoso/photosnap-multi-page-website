function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={18}
      height={15}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path d="M1 8.124L5.623 13 17 1" stroke="#000" strokeWidth={2} />
    </svg>
  );
}

export default CheckIcon;
