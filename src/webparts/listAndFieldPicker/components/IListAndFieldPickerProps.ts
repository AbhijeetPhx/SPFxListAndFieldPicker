import { WebPartContext } from "@microsoft/sp-webpart-base";
export interface IListAndFieldPickerProps {
  description: string;
  context:WebPartContext;
  lists: string ;
  multiColumn:string;   
  ListItemId? : number;
}