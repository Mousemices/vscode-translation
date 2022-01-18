import Translatable from '@provider/interface/Translatable';

export default class YouDaoTranslator implements Translatable{
    translate(): Promise<string> {
        throw new Error("Method not implemented.");
    }  
}