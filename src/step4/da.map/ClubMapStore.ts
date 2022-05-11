import TravelClub from "../../step1/entity/club/TravelClub";
import MemoryMap from "./io/MemoryMap";

class ClubMapStore {

    clubMap: Map<string, TravelClub>;
    autoIdMap: Map<string, number>;

    constructor() {
        this.clubMap = MemoryMap.getInstance().clubMap;
        this.autoIdMap = MemoryMap.getInstance().autoIdMap; // 아이디 생성시 1씩 증감 하는 코드가 필요함.
    }

    create(club:TravelClub):string{

        const targetClub = this.clubMap.get(club.getId());

        if(targetClub){
            throw new Error('this club already exists with id' + targetClub.getId());
        }

        const className = TravelClub.name;

        if('getId' in club || 'setAutoId' in club){
            if(this.autoIdMap.get(className) === undefined){
                this.autoIdMap.set(className,Number(club.getId()));
            }
            let keySequence = this.autoIdMap.get(className)

            if(keySequence !== undefined){
                const autoId = keySequence.toString();
                club.setAutoId(autoId);
                this.autoIdMap.set(className, ++keySequence);
            }
        }
        this.clubMap.set(club.getId(), club);
        return club.getId();
    }

    retrieve(clubId:string):TravelClub | null {

        return this.clubMap.get(clubId) || null;
    }

    retrieveByName(name:string): TravelClub | null {
        const clubs = Array.from(this.clubMap.values());

        if(!clubs.length){
            return null;
        }

        return clubs.find(club => club.name === name) || null;
    }
    update(club:TravelClub): void {
        this.clubMap.set(club.getId(), club); // Map 에서 <string, TravelClub> 이였잖아 정신차리자.

    }

    delete(clubId:string): void { // 왜 delete 할땐 string 이지?
        this.clubMap.delete(clubId);
    }

    exists(clubId:string): boolean {
        return this.clubMap.has(clubId) !== undefined;
    }
}