import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const Sr = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" aria-hidden="true" width={props.width ?? 28} height={props.height ?? 20} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_5_1451)"><rect width={27.5} height={19.5} x={0.25} y={0.25} fill="white" stroke="white" strokeWidth={0.5} rx={1.75} /><path fill="#50B500" fillRule="evenodd" d="M0 4H28V0H0V4Z" clipRule="evenodd" /><path fill="#50B500" fillRule="evenodd" d="M0 20H28V16H0V20Z" clipRule="evenodd" /><path fill="#F63030" fillRule="evenodd" d="M0 13.3334H28V6.66675H0V13.3334Z" clipRule="evenodd" /><path fill="#FFDA27" d="M13.892 12.006L12.9773 12.4869C12.6986 12.6335 12.3538 12.5263 12.2072 12.2476C12.1489 12.1366 12.1288 12.0094 12.1499 11.8858L12.3246 10.8673C12.3376 10.792 12.3126 10.7152 12.2579 10.6619L11.5179 9.94058C11.2924 9.72076 11.2878 9.35975 11.5076 9.13424C11.5951 9.04444 11.7098 8.986 11.8339 8.96797L12.8566 8.81936C12.9322 8.80838 12.9975 8.76092 13.0313 8.69245L13.4886 7.76574C13.628 7.48334 13.9699 7.36739 14.2523 7.50676C14.3648 7.56226 14.4558 7.65329 14.5113 7.76574L14.9687 8.69245C15.0025 8.76092 15.0678 8.80838 15.1433 8.81936L16.166 8.96797C16.4777 9.01325 16.6936 9.3026 16.6483 9.61425C16.6303 9.73836 16.5719 9.85305 16.4821 9.94058L15.742 10.6619C15.6874 10.7152 15.6624 10.792 15.6753 10.8673L15.85 11.8858C15.9032 12.1962 15.6948 12.491 15.3844 12.5442C15.2608 12.5654 15.1337 12.5453 15.0227 12.4869L14.1079 12.006C14.0404 11.9705 13.9596 11.9705 13.892 12.006Z" /></g><defs><clipPath id="clip0_5_1451"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default Sr;