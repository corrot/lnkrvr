import { ReactNode } from 'react';

type IVideoBackgroundProps = {
  children: ReactNode;
  overlay: string;
  source: string;
};

const VideoBackground = (props: IVideoBackgroundProps) => (
  <>
    <video loop muted>
      <source src={props.source} />
    </video>
    <div className={props.overlay}>{props.children}</div>
  </>
);

export { VideoBackground };
