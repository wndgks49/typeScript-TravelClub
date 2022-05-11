import RoleInClub from "./RoleInClub";
import DateUtil from "../../../Util/DateUtil";

class ClubMembership {

    clubId:string ='';
    memberEmail:string ='';
    role :RoleInClub = RoleInClub.Member;
    joinDate:string ='';

    constructor(clubId:string,memberEmail:string) {
        this.clubId = clubId;
        this.memberEmail = memberEmail;
        this.joinDate = DateUtil.today();
    }
}
export default ClubMembership;