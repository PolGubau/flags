import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const Kn = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" aria-hidden="true" width={props.width ?? 28} height={props.height ?? 20} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_5_948)"><rect width={28} height={20} fill="white" rx={2} /><path fill="#50B500" fillRule="evenodd" d="M0 13.3333L28 0H0V13.3333Z" clipRule="evenodd" /><path fill="#F63030" fillRule="evenodd" d="M0 20.0001H28V6.66675L0 20.0001Z" clipRule="evenodd" /><path fill="#FFDA27" fillRule="evenodd" d="M0.783836 25.3333L33.575 4.84308L27.216 -5.3335L-5.5752 15.1567L0.783836 25.3333Z" clipRule="evenodd" /><path fill="#4C4C4C" fillRule="evenodd" d="M-0.629314 23.0718L32.1619 2.58163L28.6291 -3.07202L-4.16211 17.4182L-0.629314 23.0718Z" clipRule="evenodd" /><path fill="white" d="M8.82044 14.6885L8.09647 15.0827C7.85432 15.2145 7.55175 15.1239 7.42066 14.8803C7.36828 14.783 7.34937 14.6709 7.36689 14.5617L7.50061 13.7276C7.51924 13.6114 7.48021 13.4934 7.39608 13.4115L6.79728 12.8291C6.59769 12.6349 6.59233 12.3148 6.78531 12.1141C6.86147 12.0348 6.96128 11.9828 7.06956 11.9659L7.88245 11.839C7.9991 11.8208 8.09931 11.7459 8.15028 11.6388L8.50852 10.886C8.6273 10.6364 8.92476 10.5309 9.1729 10.6504C9.2728 10.6986 9.35391 10.7788 9.40342 10.8784L9.77432 11.6251C9.82709 11.7313 9.92855 11.8045 10.0455 11.8208L10.8604 11.9339C11.1354 11.9721 11.3276 12.2273 11.2897 12.504C11.2747 12.6131 11.2247 12.7144 11.1472 12.7924L10.5583 13.3848C10.4756 13.4681 10.4386 13.5868 10.4592 13.7026L10.6069 14.5343C10.6554 14.807 10.4749 15.0675 10.2039 15.1162C10.0956 15.1357 9.9839 15.1186 9.88627 15.0675L9.15575 14.6857C9.05043 14.6306 8.92482 14.6317 8.82044 14.6885Z" /><path fill="white" d="M19.5822 8.40089L18.8582 8.79506C18.616 8.9269 18.3135 8.8363 18.1824 8.5927C18.13 8.49537 18.1111 8.38334 18.1286 8.27408L18.2623 7.44002C18.281 7.32381 18.2419 7.20578 18.1578 7.12395L17.559 6.54148C17.3594 6.34734 17.3541 6.02722 17.547 5.82647C17.6232 5.74725 17.723 5.69522 17.8313 5.67832L18.6442 5.55142C18.7608 5.53321 18.861 5.45829 18.912 5.35119L19.2702 4.5984C19.389 4.3488 19.6865 4.24334 19.9346 4.36285C20.0345 4.41096 20.1156 4.49119 20.1651 4.59085L20.536 5.33747C20.5888 5.4437 20.6903 5.51692 20.8072 5.53315L21.6221 5.64631C21.8971 5.6845 22.0893 5.93972 22.0514 6.21637C22.0364 6.32555 21.9864 6.42682 21.9089 6.50476L21.3201 7.09725C21.2373 7.18049 21.2003 7.29916 21.2209 7.41504L21.3687 8.24672C21.4171 8.5194 21.2367 8.77993 20.9656 8.82864C20.8573 8.8481 20.7456 8.83098 20.648 8.77994L19.9175 8.39805C19.8121 8.34299 19.6865 8.34405 19.5822 8.40089Z" /></g><defs><clipPath id="clip0_5_948"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default Kn;