export default interface Translatable {
    translate() : Promise<string>;
}