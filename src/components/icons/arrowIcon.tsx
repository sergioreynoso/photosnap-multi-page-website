const ArrowIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={42}
      height={14}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M40.221 7.5H0v-1h40.221l-5.146-5.146.707-.708L41.635 6.5h.229v.229l.271.271-.271.271V7.5h-.229l-5.853 5.854-.707-.707L40.22 7.5z"
      />
    </svg>
  );
};

export default ArrowIcon;
