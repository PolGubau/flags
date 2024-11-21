
import React from "react";
        import { default as ArFlag} from "./ArFlag";
import { default as AtFlag} from "./AtFlag";
import { default as BoFlag} from "./BoFlag";
import { default as BrFlag} from "./BrFlag";
import { default as CaFlag} from "./CaFlag";
import { default as CatFlag} from "./CatFlag";
import { default as ChFlag} from "./ChFlag";
import { default as ClFlag} from "./ClFlag";
import { default as CnFlag} from "./CnFlag";
import { default as CoFlag} from "./CoFlag";
import { default as CuFlag} from "./CuFlag";
import { default as CzFlag} from "./CzFlag";
import { default as DeFlag} from "./DeFlag";
import { default as DkFlag} from "./DkFlag";
import { default as DoFlag} from "./DoFlag";
import { default as EeFlag} from "./EeFlag";
import { default as EsFlag} from "./EsFlag";
import { default as FiFlag} from "./FiFlag";
import { default as FrFlag} from "./FrFlag";
import { default as GbFlag} from "./GbFlag";
import { default as GrFlag} from "./GrFlag";
import { default as HnFlag} from "./HnFlag";
import { default as HuFlag} from "./HuFlag";
import { default as IdFlag} from "./IdFlag";
import { default as InFlag} from "./InFlag";
import { default as IrFlag} from "./IrFlag";
import { default as IsFlag} from "./IsFlag";
import { default as ItFlag} from "./ItFlag";
import { default as JpFlag} from "./JpFlag";
import { default as KrFlag} from "./KrFlag";
import { default as MxFlag} from "./MxFlag";
import { default as NlFlag} from "./NlFlag";
import { default as NoFlag} from "./NoFlag";
import { default as PaFlag} from "./PaFlag";
import { default as PeFlag} from "./PeFlag";
import { default as PhFlag} from "./PhFlag";
import { default as PlFlag} from "./PlFlag";
import { default as PrFlag} from "./PrFlag";
import { default as RoFlag} from "./RoFlag";
import { default as RuFlag} from "./RuFlag";
import { default as SeFlag} from "./SeFlag";
import { default as SvFlag} from "./SvFlag";
import { default as TrFlag} from "./TrFlag";
import { default as UaFlag} from "./UaFlag";
import { default as UsFlag} from "./UsFlag";
import { default as UyFlag} from "./UyFlag";
import { default as VeFlag} from "./VeFlag";
import { default as VnFlag} from "./VnFlag";    

        
export { ArFlag, AtFlag, BoFlag, BrFlag, CaFlag, CatFlag, ChFlag, ClFlag, CnFlag, CoFlag, CuFlag, CzFlag, DeFlag, DkFlag, DoFlag, EeFlag, EsFlag, FiFlag, FrFlag, GbFlag, GrFlag, HnFlag, HuFlag, IdFlag, InFlag, IrFlag, IsFlag, ItFlag, JpFlag, KrFlag, MxFlag, NlFlag, NoFlag, PaFlag, PeFlag, PhFlag, PlFlag, PrFlag, RoFlag, RuFlag, SeFlag, SvFlag, TrFlag, UaFlag, UsFlag, UyFlag, VeFlag, VnFlag };
    
export enum FlagsCodesEnum {
    ArFlag = "ArFlag",
AtFlag = "AtFlag",
BoFlag = "BoFlag",
BrFlag = "BrFlag",
CaFlag = "CaFlag",
CatFlag = "CatFlag",
ChFlag = "ChFlag",
ClFlag = "ClFlag",
CnFlag = "CnFlag",
CoFlag = "CoFlag",
CuFlag = "CuFlag",
CzFlag = "CzFlag",
DeFlag = "DeFlag",
DkFlag = "DkFlag",
DoFlag = "DoFlag",
EeFlag = "EeFlag",
EsFlag = "EsFlag",
FiFlag = "FiFlag",
FrFlag = "FrFlag",
GbFlag = "GbFlag",
GrFlag = "GrFlag",
HnFlag = "HnFlag",
HuFlag = "HuFlag",
IdFlag = "IdFlag",
InFlag = "InFlag",
IrFlag = "IrFlag",
IsFlag = "IsFlag",
ItFlag = "ItFlag",
JpFlag = "JpFlag",
KrFlag = "KrFlag",
MxFlag = "MxFlag",
NlFlag = "NlFlag",
NoFlag = "NoFlag",
PaFlag = "PaFlag",
PeFlag = "PeFlag",
PhFlag = "PhFlag",
PlFlag = "PlFlag",
PrFlag = "PrFlag",
RoFlag = "RoFlag",
RuFlag = "RuFlag",
SeFlag = "SeFlag",
SvFlag = "SvFlag",
TrFlag = "TrFlag",
UaFlag = "UaFlag",
UsFlag = "UsFlag",
UyFlag = "UyFlag",
VeFlag = "VeFlag",
VnFlag = "VnFlag"
}

export type FlagCode = keyof typeof FlagsCodesEnum;
         

export const FlagsCodes: Record<FlagCode, React.FC<React.SVGProps<SVGSVGElement>>> = {
    ArFlag: ArFlag,
AtFlag: AtFlag,
BoFlag: BoFlag,
BrFlag: BrFlag,
CaFlag: CaFlag,
CatFlag: CatFlag,
ChFlag: ChFlag,
ClFlag: ClFlag,
CnFlag: CnFlag,
CoFlag: CoFlag,
CuFlag: CuFlag,
CzFlag: CzFlag,
DeFlag: DeFlag,
DkFlag: DkFlag,
DoFlag: DoFlag,
EeFlag: EeFlag,
EsFlag: EsFlag,
FiFlag: FiFlag,
FrFlag: FrFlag,
GbFlag: GbFlag,
GrFlag: GrFlag,
HnFlag: HnFlag,
HuFlag: HuFlag,
IdFlag: IdFlag,
InFlag: InFlag,
IrFlag: IrFlag,
IsFlag: IsFlag,
ItFlag: ItFlag,
JpFlag: JpFlag,
KrFlag: KrFlag,
MxFlag: MxFlag,
NlFlag: NlFlag,
NoFlag: NoFlag,
PaFlag: PaFlag,
PeFlag: PeFlag,
PhFlag: PhFlag,
PlFlag: PlFlag,
PrFlag: PrFlag,
RoFlag: RoFlag,
RuFlag: RuFlag,
SeFlag: SeFlag,
SvFlag: SvFlag,
TrFlag: TrFlag,
UaFlag: UaFlag,
UsFlag: UsFlag,
UyFlag: UyFlag,
VeFlag: VeFlag,
VnFlag: VnFlag
};
 
export const Flag = ({code, props = {}}: { code: FlagCode, props?: React.SVGProps<SVGSVGElement> }) => {
    const Component = FlagsCodes[code];
    return <Component {...props} />;
};
