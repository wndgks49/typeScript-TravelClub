import CommunityMember from "../../step1/entity/club/CommunityMember";
import MemoryMap from "./io/MemoryMap";
import MemberStore from "../../Store/MemberStore";

class MemberMapStore implements MemberStore{

    memberMap: Map<string, CommunityMember>;
    // 객체는 키를 문자형으로 돌려주지만
    //map은 키값을 변형없이 가지고 있는 그대로 돌려준다 우리는 키값은 string 으로 지정되어있다.

    constructor() {
        //
        this.memberMap = MemoryMap.getInstance().memberMap;
    }

    create(member: CommunityMember): string {
        const targetMember = this.memberMap.get(member.getId());
        // 멤버를 생성할때는 member의 이메일을 받아서 생성할것이다.

        if(targetMember){
            throw new Error('Member already exists with email'+ targetMember.getId());
        }
        this.memberMap.set(member.getId(), member);

        return member.getId(); //이메일을 반환해준다.
    }

    delete(memberId: string): void {
        this.memberMap.delete(memberId);
    }

    retrieve(email: string): CommunityMember | null {

        return this.memberMap.get(email) || null;

    }

    retrieveByName(name: string): CommunityMember[] {

        const members = Array.from(this.memberMap.values());

        return members.filter(member => member.name === name);
    }

    update(member: CommunityMember): void {

        this.memberMap.set(member.getId(), member);
                        // key  와  value 인데 member 는 객체의 value를 가르키는것인가?

        console.log(member);
    }

    exists(memberId: string): boolean {

        return this.memberMap.has(memberId) !== undefined; // 맵 에서 undefined 가 아닌것만 가져온다. 항상 true인것만
    }




}