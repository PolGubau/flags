import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const Pg = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 20" aria-hidden="true" width={props.width ?? 28} height={props.height ?? 20} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<g clipPath="url(#clip0_5_1348)"><rect width={28} height={20} fill="white" rx={2} /><rect width={28} height={20} fill="#4C4C4C" /><path fill="#F63030" fillRule="evenodd" d="M0 0H28V20L0 0Z" clipRule="evenodd" /><path fill="#FFDA27" fillRule="evenodd" d="M18.8613 9.26565C18.7017 9.16988 18.5723 8.94428 18.5723 8.76379L18.5723 7.53507C18.5723 7.35367 18.4418 7.25013 18.2443 7.31596L17.4861 7.56869C17.3049 7.62908 17.0275 7.63452 16.8301 7.56869L16.0718 7.31596C15.8907 7.25557 15.8706 7.13059 16.0329 7.03321L17.8118 5.96582C17.9715 5.87005 18.0574 5.6619 17.9915 5.46441L17.7388 4.7062C17.6784 4.52505 17.76 4.4217 17.9575 4.48753L18.7157 4.74027C18.8968 4.80065 19.1197 4.72288 19.2171 4.56058L20.2845 2.78159C20.3802 2.62198 20.5014 2.62309 20.5672 2.82058L20.82 3.57879C20.8803 3.75994 20.8858 4.0373 20.82 4.23479L20.5672 4.993C20.5068 5.17415 20.6058 5.321 20.7863 5.321H22.0151C22.1965 5.321 22.4195 5.44773 22.5169 5.61002L23.5843 7.38901C23.6801 7.54863 23.6031 7.70896 23.43 7.74357L21.7284 8.08389C21.5474 8.12009 21.3698 8.30408 21.3351 8.47717L20.9948 10.1787C20.9586 10.3597 20.8026 10.4304 20.6403 10.333L18.8613 9.26565Z" clipRule="evenodd" /><path fill="white" d="M7.60523 16.3712L7.68857 16.8837C7.71397 17.0399 7.60794 17.1871 7.45176 17.2125C7.38957 17.2226 7.32578 17.2119 7.27026 17.1821L6.81277 16.9365C6.77897 16.9184 6.7384 16.918 6.70429 16.9356L6.24262 17.1732C6.10193 17.2456 5.92917 17.1903 5.85675 17.0496C5.82792 16.9936 5.81835 16.9296 5.82954 16.8676L5.92175 16.3566C5.92856 16.3188 5.91636 16.2802 5.88912 16.2531L5.52045 15.8875C5.4081 15.7761 5.40735 15.5947 5.51878 15.4823C5.56315 15.4376 5.62103 15.4087 5.68346 15.4002L6.19794 15.33C6.23595 15.3248 6.26897 15.3012 6.28625 15.267L6.52008 14.8034C6.59133 14.6621 6.76363 14.6053 6.90491 14.6766C6.96117 14.7049 7.0065 14.7511 7.0339 14.8078L7.25966 15.2754C7.27634 15.31 7.30895 15.3341 7.34686 15.3399L7.86005 15.4191C8.01643 15.4432 8.12367 15.5895 8.09956 15.7459C8.08996 15.8081 8.0601 15.8655 8.0146 15.9091L7.63964 16.2683C7.61194 16.2948 7.59907 16.3333 7.60523 16.3712Z" /><path fill="white" d="M7.60523 9.07626L7.68857 9.58878C7.71397 9.74496 7.60794 9.89216 7.45176 9.91755C7.38957 9.92767 7.32578 9.917 7.27026 9.88719L6.81277 9.64159C6.77897 9.62345 6.7384 9.6231 6.70429 9.64065L6.24262 9.87829C6.10193 9.95071 5.92917 9.89536 5.85675 9.75467C5.82792 9.69865 5.81835 9.63468 5.82954 9.57267L5.92175 9.06168C5.92856 9.02392 5.91636 8.98524 5.88912 8.95822L5.52045 8.59257C5.4081 8.48115 5.40735 8.29974 5.51878 8.18739C5.56315 8.14266 5.62103 8.11379 5.68346 8.10527L6.19794 8.03506C6.23595 8.02987 6.26897 8.00631 6.28625 7.97206L6.52008 7.50844C6.59133 7.36716 6.76363 7.31039 6.90491 7.38165C6.96117 7.41002 7.0065 7.45615 7.0339 7.51289L7.25966 7.98049C7.27634 8.01504 7.30895 8.03917 7.34686 8.04501L7.86005 8.12413C8.01643 8.14824 8.12367 8.29456 8.09956 8.45094C8.08996 8.51322 8.0601 8.57059 8.0146 8.61418L7.63964 8.97338C7.61194 8.99992 7.59907 9.0384 7.60523 9.07626Z" /><path fill="white" d="M10.2717 11.7479L10.3551 12.2604C10.3805 12.4166 10.2744 12.5638 10.1183 12.5892C10.0561 12.5993 9.99228 12.5886 9.93677 12.5588L9.47927 12.3132C9.44547 12.2951 9.40491 12.2947 9.3708 12.3123L8.90912 12.5499C8.76843 12.6223 8.59567 12.567 8.52326 12.4263C8.49442 12.3703 8.48486 12.3063 8.49604 12.2443L8.58825 11.7333C8.59506 11.6956 8.58286 11.6569 8.55562 11.6299L8.18695 11.2642C8.0746 11.1528 8.07386 10.9714 8.18528 10.859C8.22965 10.8143 8.28753 10.7854 8.34996 10.7769L8.86444 10.7067C8.90245 10.7015 8.93548 10.6779 8.95275 10.6437L9.18658 10.1801C9.25784 10.0388 9.43013 9.98202 9.57141 10.0533C9.62767 10.0817 9.67301 10.1278 9.7004 10.1845L9.92616 10.6521C9.94284 10.6867 9.97545 10.7108 10.0134 10.7166L10.5266 10.7958C10.6829 10.8199 10.7902 10.9662 10.7661 11.1226C10.7565 11.1848 10.7266 11.2422 10.6811 11.2858L10.3061 11.645C10.2784 11.6716 10.2656 11.71 10.2717 11.7479Z" /><path fill="white" d="M4.27173 11.7479L4.35507 12.2604C4.38047 12.4166 4.27445 12.5638 4.11827 12.5892C4.05607 12.5993 3.99228 12.5886 3.93677 12.5588L3.47927 12.3132C3.44547 12.2951 3.40491 12.2947 3.3708 12.3123L2.90912 12.5499C2.76843 12.6223 2.59567 12.567 2.52326 12.4263C2.49442 12.3703 2.48486 12.3063 2.49604 12.2443L2.58825 11.7333C2.59506 11.6956 2.58286 11.6569 2.55562 11.6299L2.18695 11.2642C2.0746 11.1528 2.07386 10.9714 2.18528 10.859C2.22965 10.8143 2.28753 10.7854 2.34996 10.7769L2.86444 10.7067C2.90245 10.7015 2.93548 10.6779 2.95275 10.6437L3.18658 10.1801C3.25784 10.0388 3.43013 9.98202 3.57141 10.0533C3.62767 10.0817 3.67301 10.1278 3.7004 10.1845L3.92616 10.6521C3.94284 10.6867 3.97545 10.7108 4.01337 10.7166L4.52655 10.7958C4.68294 10.8199 4.79017 10.9662 4.76606 11.1226C4.75646 11.1848 4.7266 11.2422 4.6811 11.2858L4.30615 11.645C4.27845 11.6716 4.26558 11.71 4.27173 11.7479Z" /></g><defs><clipPath id="clip0_5_1348"><rect width={28} height={20} fill="white" /></clipPath></defs></svg>;
export default Pg;