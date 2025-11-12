interface ISkeleton {
  className?: string;
}

const Skeleton = ({ className }: ISkeleton) => {
  return <div className={`animate-pulse bg-gray-200 rounded ${className}`} />;
};

export default Skeleton;
