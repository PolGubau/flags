import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const Tw = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" aria-hidden="true" width={props.width ?? 28} height={props.height ?? 20} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_5_1567)"><rect width={28} height={20} fill="white" rx={2} /><path fill="#F63030" fillRule="evenodd" d="M-1.33325 21.3334H29.3334V-1.33325H-1.33325V21.3334Z" clipRule="evenodd" /><path fill="#0EA6FB" fillRule="evenodd" d="M-1.33325 10.6667H14.6667V-1.33325H-1.33325V10.6667Z" clipRule="evenodd" /><path fill="white" d="M7.14432 7.71612L6.01802 8.30825C5.6748 8.48869 5.25029 8.35673 5.06985 8.01351C4.99799 7.87683 4.9732 7.72029 4.9993 7.5681L5.2144 6.31395C5.23029 6.22129 5.19957 6.12674 5.13225 6.06112L4.22106 5.17293C3.94339 4.90227 3.93771 4.45775 4.20837 4.18008C4.31615 4.06951 4.45738 3.99755 4.61018 3.97535L5.86942 3.79237C5.96245 3.77885 6.04288 3.72042 6.08449 3.63611L6.64763 2.49505C6.81924 2.14733 7.24025 2.00456 7.58797 2.17617C7.72643 2.24451 7.83851 2.35659 7.90685 2.49505L8.46999 3.63611C8.5116 3.72042 8.59203 3.77885 8.68506 3.79237L9.9443 3.97535C10.328 4.03111 10.5939 4.38739 10.5381 4.77112C10.5159 4.92393 10.444 5.06515 10.3334 5.17293L9.42222 6.06112C9.3549 6.12674 9.32418 6.22129 9.34008 6.31395L9.55518 7.5681C9.62073 7.95028 9.36405 8.31324 8.98186 8.37879C8.82967 8.40489 8.67313 8.3801 8.53645 8.30825L7.41016 7.71612C7.32694 7.67237 7.22753 7.67237 7.14432 7.71612Z" /></g><defs><clipPath id="clip0_5_1567"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default Tw;