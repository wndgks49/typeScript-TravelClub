import ClubMembership from "./ClubMembership";
import Entity from "./Entity";

class CommunityMember implements Entity{

    email:string ='';
    name:string ='';
    nickName:string ='';
    phoneNumber : string ='';
    birthDay:string ='';

    membershipList : ClubMembership[] = [];

    constructor(email:string, name:string, phoneNumber:string) {
        this.email = email;
        this.name = name;
        this.phoneNumber = phoneNumber;
    }

     getId():string {
        return this.email;
    }
}
export default CommunityMember;