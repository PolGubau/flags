import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const Je = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" aria-hidden="true" width={props.width ?? 28} height={props.height ?? 20} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_5_2473)"><rect width={27.5} height={19.5} x={0.25} y={0.25} fill="white" stroke="white" strokeWidth={0.5} rx={1.75} /><rect width={3.46453} height={49.3333} x={-6.76904} y={-1.9292} fill="#F63030" transform="rotate(-55 -6.76904 -1.9292)" /><rect width={3.52106} height={49.3333} fill="#F63030" transform="matrix(-0.573576 -0.819152 -0.819152 0.573576 36.1196 -1.88281)" /><path fill="#FFDA27" fillRule="evenodd" d="M15.7409 2.66659H13.5926L13.6799 2.61538L12.6931 2.04555L13.969 2.18801L13.7896 1.33325L14.6667 2.04555L15.5439 1.33325L15.3645 2.18801L16.6404 2.04555L15.6535 2.61538L15.7409 2.66659Z" clipRule="evenodd" /><path fill="#F63030" fillRule="evenodd" d="M12.6667 5.1665C12.6667 4.7957 12.6667 4.38212 12.6667 3.99978C12.6667 3.2634 13.2637 2.6665 14.0001 2.6665H15.3334C16.0698 2.6665 16.6667 3.2634 16.6667 3.99978C16.6667 4.38212 16.6667 4.7957 16.6667 5.1665C16.6667 6.95222 14.6667 7.6665 14.6667 7.6665C14.6667 7.6665 12.6667 6.95222 12.6667 5.1665Z" clipRule="evenodd" /><mask id="mask0_5_2473" width={5} height={6} x={12} y={2} maskUnits="userSpaceOnUse" style={{
      maskType: "luminance"
    }}><path fill="white" fillRule="evenodd" d="M12.6667 5.1665C12.6667 4.7957 12.6667 4.38212 12.6667 3.99978C12.6667 3.2634 13.2637 2.6665 14.0001 2.6665H15.3334C16.0698 2.6665 16.6667 3.2634 16.6667 3.99978C16.6667 4.38212 16.6667 4.7957 16.6667 5.1665C16.6667 6.95222 14.6667 7.6665 14.6667 7.6665C14.6667 7.6665 12.6667 6.95222 12.6667 5.1665Z" clipRule="evenodd" /></mask><g mask="url(#mask0_5_2473)"><rect width={0.666667} height={0.666667} x={14.3335} y={6.6665} fill="#FFDA27" rx={0.333333} /><rect width={2.66667} height={0.666667} x={13.3335} y={5.33325} fill="#FFDA27" rx={0.333333} /><rect width={2.66667} height={0.666667} x={13.3335} y={4} fill="#FFDA27" rx={0.333333} /></g></g><defs><clipPath id="clip0_5_2473"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default Je;