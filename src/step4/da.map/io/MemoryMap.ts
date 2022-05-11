import TravelClub from "../../../step1/entity/club/TravelClub";
import CommunityMember from "../../../step1/entity/club/CommunityMember";

class MemoryMap {
    //
    private static uniqueInstance: MemoryMap;

    clubMap:Map<string, TravelClub>;
    memberMap:Map<string, CommunityMember>;
    autoIdMap:Map<string, number>;

    private constructor() {

        this.clubMap = new Map<string, TravelClub>();
        this.memberMap = new Map<string, CommunityMember>();
        this.autoIdMap = new Map<string, number>();
    }

    static getInstance(): MemoryMap {
        //
        if(! this.uniqueInstance){
            this.uniqueInstance = new MemoryMap();
        }
        return this.uniqueInstance;
    }

}
export default MemoryMap;