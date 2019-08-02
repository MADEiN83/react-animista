import * as React from "react";

interface IProps {
  id: string;
  children: React.ReactNode;
  onViewportVisible: Function;
  enabled?: boolean;
}

const ViewportListener: React.FC<IProps> = (props: IProps) => {
  const { id, children, onViewportVisible, enabled = false } = props;

  React.useEffect(() => {
    if (!enabled) return;

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  });

  const onScroll = () => {
    if (!enabled) return;

    const animatedElements = document.getElementById(id);
    const isActive = isInViewport(animatedElements);

    if (isActive) {
      window.removeEventListener("scroll", onScroll);
      onViewportVisible();
    }
  };

  return <>{children}</>;
};

const isInViewport = (element: any, offset = 0) => {
  if (!element) return false;
  const top = element.getBoundingClientRect().top;
  return top + offset >= 0 && top - offset <= window.innerHeight;
};

export default ViewportListener;
