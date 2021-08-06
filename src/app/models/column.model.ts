// export class Column {
//     constructor(public name:string, public tasks: string[]) {}
// }
// Use interfaces isntead of classes:
export interface Column {
    name: string;
    tasks: string[];
}