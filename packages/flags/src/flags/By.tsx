import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const By = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" aria-hidden="true" width={props.width ?? 28} height={props.height ?? 20} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_5_190)"><rect width={28} height={20} fill="white" rx={2} /><path fill="#F63030" fillRule="evenodd" d="M0 13.3333H28V0H0V13.3333Z" clipRule="evenodd" /><path fill="#50B500" fillRule="evenodd" d="M0 19.9999H28V13.3333H0V19.9999Z" clipRule="evenodd" /><path fill="white" fillRule="evenodd" d="M0 0H4V3L3.33333 4L4 5V7L3.33333 8L4 9V11L3.33333 12L4 13V15L3.33333 16L4 17V20H0V0Z" clipRule="evenodd" /><path fill="#F63030" fillRule="evenodd" d="M-0.666667 2L-2 4L-0.666667 6L-2 8L-0.666667 10L-2 12L-0.666667 14L-2 16L-0.666667 18L0.666667 16L-0.666667 14L0.666667 12L-0.666667 10L0.666667 8L-0.666667 6L0.666667 4L-0.666667 2Z" clipRule="evenodd" /><path fill="#F63030" fillRule="evenodd" d="M0.666626 2L1.99996 0L3.33329 2L1.99996 4L0.666626 2ZM1.99996 8L0.666626 6L1.99996 4L3.33329 6L1.99996 8ZM1.99996 12L0.666626 10L1.99996 8L3.33329 10L1.99996 12ZM1.99996 16L3.33329 14L1.99996 12L0.666626 14L1.99996 16ZM1.99996 16L3.33329 18L1.99996 20L0.666626 18L1.99996 16Z" clipRule="evenodd" /></g><defs><clipPath id="clip0_5_190"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default By;