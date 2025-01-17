import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const Ma = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" aria-hidden="true" width={props.width ?? 28} height={props.height ?? 20} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_5_1097)"><rect width={28} height={20} fill="white" rx={2} /><rect width={28} height={20} fill="#F63030" /><path fill="#50B500" d="M13.7623 14.4158L11.7486 15.4745C11.135 15.7971 10.376 15.5612 10.0534 14.9475C9.92489 14.7032 9.88056 14.4233 9.92723 14.1512L10.3118 11.9089C10.3402 11.7433 10.2853 11.5742 10.1649 11.4569L8.53582 9.8689C8.03937 9.38498 8.02922 8.59023 8.51314 8.09378C8.70583 7.89609 8.95833 7.76744 9.23153 7.72774L11.4829 7.4006C11.6492 7.37643 11.793 7.27195 11.8674 7.12123L12.8743 5.08113C13.1811 4.45944 13.9338 4.20419 14.5555 4.51101C14.8031 4.63319 15.0034 4.83357 15.1256 5.08113L16.1325 7.12123C16.2069 7.27195 16.3506 7.37643 16.517 7.4006L18.7684 7.72774C19.4544 7.82744 19.9298 8.46443 19.8301 9.1505C19.7904 9.4237 19.6618 9.6762 19.4641 9.8689L17.835 11.4569C17.7146 11.5742 17.6597 11.7433 17.6881 11.9089L18.0727 14.1512C18.1899 14.8345 17.7309 15.4834 17.0476 15.6006C16.7755 15.6473 16.4956 15.603 16.2513 15.4745L14.2376 14.4158C14.0888 14.3376 13.9111 14.3376 13.7623 14.4158Z" /></g><defs><clipPath id="clip0_5_1097"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default Ma;