import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const Va = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" aria-hidden="true" width={props.width ?? 28} height={props.height ?? 20} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_15_137)"><rect width={28} height={20} fill="white" /><path fill="#9B5F38" d="M21.5961 11.9987L21.6934 14.7233C21.6988 14.8744 21.5777 14.9999 21.4265 14.9999C21.2789 14.9999 21.1593 14.9999 21.1593 14.9999V5C21.1593 5 21.2766 5.50094 21.315 5.68087C21.3228 5.71717 21.3365 5.75212 21.3566 5.78331L21.5905 6.14571C21.6528 6.22876 21.7706 6.24559 21.8537 6.1833C21.9917 6.07977 22.1847 6.20135 22.1508 6.37055L22.1189 6.53001C22.1139 6.55524 22.1128 6.5811 22.1156 6.60668L22.2042 7.40437C22.2251 7.59246 22.4269 7.70225 22.5962 7.61761L22.82 7.50571C22.9544 7.43853 23.1178 7.49299 23.1849 7.62735L23.2262 7.7099C23.2872 7.83195 23.4335 7.88442 23.5582 7.829L23.7438 7.74651C23.9449 7.65713 24.1289 7.90057 23.988 8.06963C23.9247 8.14553 23.9236 8.25548 23.9853 8.33263L24.259 8.67473C24.3506 8.78923 24.335 8.95573 24.2236 9.05116L23.6849 9.51292C23.5681 9.61303 23.3916 9.59644 23.2955 9.47632L23.1074 9.24114C23.0097 9.11899 22.8293 9.10424 22.713 9.20888L21.7804 10.0482C21.6646 10.1525 21.6598 10.3325 21.77 10.4427L22.5563 11.229C22.6184 11.2911 22.7067 11.3194 22.7934 11.305L23.346 11.2129C23.4254 11.1996 23.5066 11.2223 23.5677 11.2747L24.2146 11.8292C24.3295 11.9276 24.342 12.1009 24.2423 12.2148L23.621 12.9249C23.5343 13.0239 23.3892 13.0467 23.2763 12.979L22.8319 12.7123C22.805 12.6962 22.7812 12.6756 22.7613 12.6513L22.0785 11.8167C21.9135 11.6151 21.5868 11.7384 21.5961 11.9987Z" /><path fill="#9B5F38" d="M20.7225 11.9987L20.6252 14.7233C20.6198 14.8745 20.7409 15 20.8922 15C21.0397 15 21.1593 14.9999 21.1593 14.9999V5C21.1593 5 21.0411 5.50146 21.0025 5.68115C20.9947 5.71727 20.9811 5.75205 20.9611 5.78313L20.7281 6.14577C20.6658 6.22883 20.548 6.24566 20.4649 6.18337C20.3269 6.07984 20.134 6.20142 20.1678 6.37062L20.1997 6.53007C20.2047 6.55531 20.2059 6.58117 20.203 6.60674L20.1144 7.40444C20.0935 7.59252 19.8917 7.70231 19.7224 7.61768L19.4986 7.50578C19.3643 7.4386 19.2009 7.49306 19.1337 7.62742L19.0924 7.70996C19.0314 7.83202 18.8851 7.88449 18.7604 7.82906L18.5748 7.74657C18.3737 7.65719 18.1898 7.90063 18.3307 8.06969C18.3939 8.1456 18.395 8.25554 18.3333 8.3327L18.0596 8.6748C17.968 8.7893 17.9837 8.9558 18.095 9.05122L18.6337 9.51298C18.7505 9.61309 18.927 9.5965 19.0231 9.47638L19.2113 9.24121C19.309 9.11906 19.4893 9.10431 19.6056 9.20895L20.5382 10.0483C20.654 10.1525 20.6588 10.3326 20.5486 10.4428L19.7623 11.2291C19.7002 11.2912 19.6119 11.3195 19.5253 11.3051L18.9726 11.2129C18.8932 11.1997 18.812 11.2223 18.7509 11.2747L18.104 11.8292C17.9891 11.9277 17.9767 12.101 18.0763 12.2148L18.6976 12.9249C18.7843 13.024 18.9294 13.0468 19.0423 12.9791L19.4867 12.7124C19.5136 12.6963 19.5375 12.6756 19.5573 12.6514L20.2402 11.8168C20.4051 11.6152 20.7318 11.7384 20.7225 11.9987Z" /><rect width={14} height={20} fill="#FFDA27" /></g><defs><clipPath id="clip0_15_137"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default Va;