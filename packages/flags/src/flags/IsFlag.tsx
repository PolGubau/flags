import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
  desc?: string;
  descId?: string;
}
const IsFlag = ({
  title,
  titleId,
  desc,
  descId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 63 50" stroke="currentColor" aria-hidden="true" width={props.width ?? 60} height={props.height ?? 50} aria-labelledby={titleId} aria-describedby={descId} {...props}>{desc ? <desc id={descId}>{desc}</desc> : null}{title ? <title id={titleId}>{title}</title> : null}<path fill="white" strokeWidth={3.0303} d="M48.0593 3.03516H14.0639C10.3253 3.03516 8.99096 3.47797 7.62993 4.20586C6.15211 4.99621 4.9923 6.15601 4.20195 7.63384C3.47406 8.99487 3.03125 10.3292 3.03125 14.0678V35.9419C3.03125 39.6805 3.47406 41.0148 4.20195 42.3759C4.9923 43.8537 6.15211 45.0135 7.62993 45.8039C8.99096 46.5317 10.3253 46.9746 14.0639 46.9746H48.0593C51.7978 46.9746 53.1321 46.5317 54.4932 45.8039C55.971 45.0135 57.1308 43.8537 57.9212 42.3759C58.649 41.0148 59.0919 39.6805 59.0919 35.9419V14.0678C59.0919 10.3292 58.649 8.99487 57.9212 7.63384C57.1308 6.15601 55.971 4.99621 54.4932 4.20586C53.1321 3.47797 51.7978 3.03516 48.0593 3.03516Z" /><path fill="#1D80AE" d="M57.577 36.3672C57.548 39.3561 57.2059 40.5036 56.5874 41.66C56.4436 41.929 56.2848 42.185 56.1116 42.4278H6.01627C5.843 42.185 5.68423 41.929 5.5404 41.66C4.92194 40.5036 4.57981 39.3561 4.55078 36.3672H57.577Z" /><path fill="#1D80AE" d="M56.1116 7.58203C56.2848 7.82478 56.4436 8.08086 56.5874 8.3498C57.2059 9.50621 57.548 10.6537 57.577 13.6426H4.55078C4.57981 10.6537 4.92194 9.50621 5.5404 8.3498C5.68423 8.08086 5.843 7.82478 6.01627 7.58203H56.1116Z" /><path fill="#1D80AE" d="M31.4657 17.4389C31.4637 17.4356 31.4609 17.4329 31.4576 17.4308C31.4457 17.4234 31.4302 17.427 31.4228 17.4389L24.4618 28.6418C24.4593 28.6458 24.458 28.6504 24.458 28.6552C24.458 28.6691 24.4693 28.6804 24.4832 28.6804H38.4053C38.41 28.6804 38.4146 28.6791 38.4186 28.6766C38.4305 28.6692 38.4341 28.6537 38.4267 28.6418L31.4657 17.4389ZM33.1387 16.3994L40.0998 27.6023C40.6813 28.5381 40.394 29.7681 39.4582 30.3496C39.1421 30.546 38.7774 30.6501 38.4053 30.6501H24.4832C23.3815 30.6501 22.4883 29.7569 22.4883 28.6552C22.4883 28.283 22.5924 27.9183 22.7887 27.6023L29.7498 16.3994C30.3313 15.4635 31.5613 15.1763 32.4971 15.7578C32.7574 15.9195 32.977 16.1391 33.1387 16.3994Z" /><path fill="#1D80AE" d="M31.4231 32.344C31.4251 32.3473 31.4279 32.3501 31.4312 32.3521C31.443 32.3595 31.4586 32.3559 31.466 32.344L38.427 21.1411C38.4295 21.1371 38.4308 21.1325 38.4308 21.1278C38.4308 21.1138 38.4195 21.1025 38.4056 21.1025H24.4835C24.4788 21.1025 24.4742 21.1038 24.4702 21.1063C24.4582 21.1137 24.4547 21.1292 24.4621 21.1411L31.4231 32.344ZM29.75 33.3835L22.789 22.1806C22.2075 21.2448 22.4948 20.0148 23.4306 19.4333C23.7467 19.2369 24.1114 19.1328 24.4835 19.1328H38.4056C39.5073 19.1328 40.4005 20.026 40.4005 21.1278C40.4005 21.4999 40.2964 21.8646 40.1 22.1806L33.139 33.3835C32.5575 34.3194 31.3275 34.6066 30.3916 34.0251C30.1313 33.8634 29.9118 33.6439 29.75 33.3835Z" /></svg>;
export default IsFlag;