import GoogleTranslator from "@provider/GoogleTranslator";
import Translatable from "@provider/interface/Translatable";

export default class Translator implements Translatable{

    private translator: Translatable;
    
    constructor(){
        this.translator = new GoogleTranslator();
    }

    translate(): Promise<string> {
        throw new Error("Method not implemented.");
    }

    // Text-based fake response
    public _translate(): string {
        return "Zzz_wWw_xxX";
    }
}