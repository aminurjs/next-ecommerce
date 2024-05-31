import { ReactNode } from "react";

const MaxWidthWrapper = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <div className={`px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 ${className}`}>
      {children}
    </div>
  );
};
export default MaxWidthWrapper;
