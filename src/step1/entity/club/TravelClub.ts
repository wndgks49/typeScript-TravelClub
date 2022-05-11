import DateUtil from "../../../Util/DateUtil";
import ClubMembership from "./ClubMembership";

class TravelClub implements AutoIdEntity{

    private readonly MIN_NAME_LENGTH : number = 3;
    private readonly  MIN_INTRO_LENGTH: number = 10;

    usid:string ='';
    name:string = '';
    intro:string ='';
    foundDate:string ='';

    boardId:string = '';
    MembershipList:ClubMembership[] =[];

    constructor(name:string, intro:string) {
        //
        this.setName(name);
        this.setIntro(intro);
        this.foundDate = DateUtil.today();
    }

    getId(): string {
        return this.usid;
    }

    setAutoId(autoId:string):void {
        this.usid = autoId;
    }

    setName(name:string):void {
        if(name.length < this.MIN_NAME_LENGTH){
            throw new Error('\n Name should be longer than ' + this.MIN_NAME_LENGTH);
        }
        this.name = name;
    }
    setIntro(intro:string):void {
        if(intro.length < this.MIN_INTRO_LENGTH ){
            throw new Error('\n intro should be longer than ' + this.MIN_INTRO_LENGTH);
        }
        this.intro = intro;
    }

}
export default TravelClub;