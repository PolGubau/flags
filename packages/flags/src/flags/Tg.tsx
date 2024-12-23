import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const Tg = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" aria-hidden="true" width={props.width ?? 28} height={props.height ?? 20} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_5_1598)"><rect width={28} height={20} fill="white" rx={2} /><rect width={28} height={20} fill="#FFDA27" /><path fill="#50B500" fillRule="evenodd" d="M12 0H28V4H12V0ZM12 8H28V12H12V8ZM28 16H0V20H28V16Z" clipRule="evenodd" /><rect width={12} height={12} fill="#F63030" /><path fill="white" d="M5.87557 8.31159L4.82144 8.86578C4.5002 9.03466 4.10289 8.91116 3.93401 8.58993C3.86676 8.46201 3.84355 8.31549 3.86798 8.17306L4.0693 6.99926C4.08418 6.91254 4.05542 6.82405 3.99242 6.76263L3.13961 5.93135C2.87972 5.67803 2.87441 5.26199 3.12773 5.00211C3.2286 4.89862 3.36078 4.83128 3.50379 4.8105L4.68235 4.63924C4.76942 4.62659 4.8447 4.5719 4.88364 4.493L5.4107 3.42504C5.57132 3.0996 5.96535 2.96598 6.29079 3.1266C6.42039 3.19056 6.52528 3.29545 6.58924 3.42504L7.11631 4.493C7.15525 4.5719 7.23052 4.62659 7.3176 4.63924L8.49615 4.8105C8.8553 4.86268 9.10414 5.19614 9.05195 5.55528C9.03117 5.6983 8.96382 5.83048 8.86034 5.93135L8.00753 6.76263C7.94452 6.82405 7.91577 6.91254 7.93064 6.99926L8.13196 8.17306C8.19331 8.53075 7.95307 8.87046 7.59538 8.93181C7.45294 8.95624 7.30642 8.93303 7.17851 8.86578L6.12438 8.31159C6.04649 8.27065 5.95345 8.27065 5.87557 8.31159Z" /></g><defs><clipPath id="clip0_5_1598"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default Tg;