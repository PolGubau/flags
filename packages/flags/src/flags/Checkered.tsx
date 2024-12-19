import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const Checkered = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" aria-hidden="true" width={props.width ?? 28} height={props.height ?? 20} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_26_294)"><rect width={28} height={20} fill="white" /><rect width={28} height={20} fill="white" /><rect width={3.49921} height={3.49921} x={0.00317383} fill="#4C4C4C" /><rect width={3.49921} height={3.49921} x={3.50244} fill="white" /><rect width={3.49921} height={3.49921} x={7.00159} fill="#4C4C4C" /><rect width={3.49921} height={3.49921} x={10.5009} fill="white" /><rect width={3.49921} height={3.49921} x={14} fill="#4C4C4C" /><rect width={3.49921} height={3.49921} x={17.4993} fill="white" /><rect width={3.49921} height={3.49921} x={20.9984} fill="#4C4C4C" /><rect width={3.49921} height={3.49921} x={24.4977} fill="white" /><rect width={3.49921} height={3.49921} fill="#4C4C4C" transform="matrix(-1 0 0 1 27.9968 3.30017)" /><rect width={3.49921} height={3.49921} fill="white" transform="matrix(-1 0 0 1 24.4976 3.30017)" /><rect width={3.49921} height={3.49921} fill="#4C4C4C" transform="matrix(-1 0 0 1 20.9984 3.30017)" /><rect width={3.49921} height={3.49921} fill="white" transform="matrix(-1 0 0 1 17.4991 3.30017)" /><rect width={3.49921} height={3.49921} fill="#4C4C4C" transform="matrix(-1 0 0 1 14 3.30017)" /><rect width={3.49921} height={3.49921} fill="white" transform="matrix(-1 0 0 1 10.5007 3.30017)" /><rect width={3.49921} height={3.49921} fill="#4C4C4C" transform="matrix(-1 0 0 1 7.00159 3.30017)" /><rect width={3.49921} height={3.49921} fill="white" transform="matrix(-1 0 0 1 3.50232 3.30017)" /><rect width={3.49921} height={3.49921} x={0.00317383} y={6.60034} fill="#4C4C4C" /><rect width={3.49921} height={3.49921} x={3.50244} y={6.60034} fill="white" /><rect width={3.49921} height={3.49921} x={7.00159} y={6.60034} fill="#4C4C4C" /><rect width={3.49921} height={3.49921} x={10.5009} y={6.60034} fill="white" /><rect width={3.49921} height={3.49921} x={14} y={6.60034} fill="#4C4C4C" /><rect width={3.49921} height={3.49921} x={17.4993} y={6.60034} fill="white" /><rect width={3.49921} height={3.49921} x={20.9984} y={6.60034} fill="#4C4C4C" /><rect width={3.49921} height={3.49921} x={24.4977} y={6.60034} fill="white" /><rect width={3.49921} height={3.49921} fill="#4C4C4C" transform="matrix(-1 0 0 1 27.9968 9.90051)" /><rect width={3.49921} height={3.49921} fill="white" transform="matrix(-1 0 0 1 24.4976 9.90051)" /><rect width={3.49921} height={3.49921} fill="#4C4C4C" transform="matrix(-1 0 0 1 20.9984 9.90051)" /><rect width={3.49921} height={3.49921} fill="white" transform="matrix(-1 0 0 1 17.4991 9.90051)" /><rect width={3.49921} height={3.49921} fill="#4C4C4C" transform="matrix(-1 0 0 1 14 9.90051)" /><rect width={3.49921} height={3.49921} fill="white" transform="matrix(-1 0 0 1 10.5007 9.90051)" /><rect width={3.49921} height={3.49921} fill="#4C4C4C" transform="matrix(-1 0 0 1 7.00159 9.90051)" /><rect width={3.49921} height={3.49921} fill="white" transform="matrix(-1 0 0 1 3.50232 9.90051)" /><rect width={3.49921} height={3.49921} x={0.00317383} y={13.2007} fill="#4C4C4C" /><rect width={3.49921} height={3.49921} x={3.50244} y={13.2007} fill="white" /><rect width={3.49921} height={3.49921} x={7.00159} y={13.2007} fill="#4C4C4C" /><rect width={3.49921} height={3.49921} x={10.5009} y={13.2007} fill="white" /><rect width={3.49921} height={3.49921} x={14} y={13.2007} fill="#4C4C4C" /><rect width={3.49921} height={3.49921} x={17.4993} y={13.2007} fill="white" /><rect width={3.49921} height={3.49921} x={20.9984} y={13.2007} fill="#4C4C4C" /><rect width={3.49921} height={3.49921} x={24.4977} y={13.2007} fill="white" /><rect width={3.49921} height={3.49921} fill="#4C4C4C" transform="matrix(-1 0 0 1 27.9968 16.5007)" /><rect width={3.49921} height={3.49921} fill="white" transform="matrix(-1 0 0 1 24.4976 16.5007)" /><rect width={3.49921} height={3.49921} fill="#4C4C4C" transform="matrix(-1 0 0 1 20.9984 16.5007)" /><rect width={3.49921} height={3.49921} fill="white" transform="matrix(-1 0 0 1 17.4991 16.5007)" /><rect width={3.49921} height={3.49921} fill="#4C4C4C" transform="matrix(-1 0 0 1 14 16.5007)" /><rect width={3.49921} height={3.49921} fill="white" transform="matrix(-1 0 0 1 10.5007 16.5007)" /><rect width={3.49921} height={3.49921} fill="#4C4C4C" transform="matrix(-1 0 0 1 7.00159 16.5007)" /><rect width={3.49921} height={3.49921} fill="white" transform="matrix(-1 0 0 1 3.50232 16.5007)" /></g><defs><clipPath id="clip0_26_294"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default Checkered;