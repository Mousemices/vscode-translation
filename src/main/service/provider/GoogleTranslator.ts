import Translatable from '@provider/interface/Translatable';

export default class GoogleTranslator implements Translatable{
    translate(): Promise<string> {
        throw new Error("Method not implemented.");
    }
    
}